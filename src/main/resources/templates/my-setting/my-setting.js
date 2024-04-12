var baseUrl = "http://localhost:8080";
var message = []; //用户信息
var myAccount = ""; //账户
var bankCardNow = ""; //当前充值账户默认银行卡
var bankID = "";//当前银行卡ID（删除银行卡用）
var ParameterBank = 1; // 当前参数控制默认银行卡是否支付  1支付  0不支付
var saveMoneyQuantity = 0; //当前充值账户数量
var name = "";
var id = 0;
var personImg = ""; //本人头像地址
$(function () {
    name = $.cookie("name");
    id = $.cookie("id");
    $("#myName").text(name);
    $("a[name='jumpShoes']").attr("href","../shop/Shop.html");
    selectUserMessage();
    selectBankParameter();
});

/**
 * 查询用户信息
 */
function selectUserMessage() {
    var url = baseUrl + "/selectPersonalInformation";
    var obj = {};
    obj.name = name;
    $.ajax({
        url:url,
        data:obj,
        type:"POST",
        dataType:"json",
        success:function (msg) {
            message = msg;
            myAccount = message[0].account;
            $.cookie("myAccount",myAccount,{expires:7,path:"/"});
            password = message[0].password;
            personImg = message[0].path;
            $.cookie("country",message[0].country,{expires:7,path:"/"});
            // console.log(JSON.stringify(msg))
            $.cookie("personImg","http://localhost:8080/getImgHead?personImg="+personImg,{expires:7,path:"/"});
            $.cookie("personImgPath",personImg,{expires:7,path:"/"});
            bankCardHtml();
            assignment();
            payStyle();
            bindClick1();
        }
    })
}

/**
 * 赋值
 */
function assignment() {
    $("#netName").val(message[0].netName);
    $("#email").val(message[0].email);
    $("#country").val(message[0].country);
    $("#phone").val(message[0].phone);
    $("#signature").val(message[0].signature);
    $("#account").val(message[0].account);
    $("#bankName").val(message[0].bankName);
    $("#bankCard").val(message[0].bankCard);
    if (personImg != null && personImg != "" && personImg != "undefined"){
        $("#personImg").attr("src","http://localhost:8080/getImgHead?personImg="+personImg);
    }else{
        $("#personImg").attr("src","../img/logo/person2.jpg");
    }
}

/**
 * 修改信息
 */
function updateUser() {
    debugger;
    var url = baseUrl + "/updateUserMessage";
    var netName = $("#netName").val();
    var email = $("#email").val();
    var country = $("#country").val();
    var phone = $("#phone").val();
    var signature = $("#signature").val();
    var info = {};
    info.netName = netName;
    info.email = email;
    info.country = country;
    info.phone = phone;
    info.signature = signature;
    info.id = id;
    var obj = {};
    obj.info = JSON.stringify(info);
    $.ajax({
        url:url,
        data:obj,
        type:"POST",
        success:function (msg) {
            alert(msg);
        },
        error:function (e) {
            alert("操作失败!");
        }
    })

}
/**
 * 上传头像
 */
function loadWord(){
    $("#upload").click();
}

/**
 * 确定上传
 */
function uploadSure() {
    var url = baseUrl + "/uploadSure";
    var filePath = $("#upload").val();
    var imgObj = $("#upload")[0].files[0];
    var formData = new FormData();
    console.log(filePath);
    //上传朋友圈数据可append
    formData.append("file",imgObj);
    formData.append("name",name);
    formData.append("personImg",personImg);
    $.ajax({
        url:url,
        data:formData,
        type:"POST",
        async : false,
        contentType: false,// 告诉jQuery不要去设置Content-Type请求头
        cache: false, //缓存
        processData: false, // 告诉jQuery不要去处理发送的数据
        success:function (msg) {
            alert("头像修改成功！");
            window.history.go(0);
        }
    })

}
/**
 * 账户充值界面
 */
function saveMoney() {
    layer.open({
        type: 1,
        content: $("#accountHtml"),
        area: ['40%','25%'],
    })
}

/**
 * 账户充值
 */
function pay() {
    $('input[name="box"]:checked').each(function () {
        debugger;
        var value = $(this).val();
        var saveMoneyNum = $("#saveMoneyNum").val();
        saveMoneyQuantity = saveMoneyNum;
        var vx = message[0].vx;
        var zfb = message[0].zfb;
            if (value == 0){
                vxPay(vx); //微信在线支付
            }else if (value == 1){
                zfbPay(zfb);//支付宝在线支付
            }else if (value == 2){
                selectCardMoney();//当前走银行卡充值
            }
    })
}

/**
 * 提现界面
 */
function takeMoneyHtml() {
    layer.open({
        type: 1,
        content: $("#takeMoneyHtml"),
        area: ['28%','22%'],
    })
}
/**
 * 账户提现
 */
function takeMoney() {
    var takeMoneyNum = $("#takeMoneyNum").val();
    if (takeMoneyNum<=myAccount && takeMoneyNum!=""){
        var url = baseUrl + "/takeMoney";
        var obj = {};
        obj.takeMoneyNum = takeMoneyNum;
        obj.bankCardNow = bankCardNow;
        obj.myAccount = myAccount;
        obj.name = name;
        $.ajax({
            url:url,
            data:obj,
            type:"POST",
            success:function (msg) {
                alert("提现成功！")
                history.go(0);
            },error:function () {
                alert("提现系统繁忙！");
            }
        })
    }else {
        alert("输入有误或提现不可超过账户余额！")
    }
}

/**
 * 微信支付
 */
function vxPay(vx) {
    var url = baseUrl + "/vxPay";
    var obj = {};
    obj.name = name;
    obj.vx = vx;
    obj.saveMoneyQuantity = saveMoneyQuantity;
    obj.myAccount = myAccount;
    $.ajax({
        url:url,
        data:obj,
        type:"POST",
        success:function (msg) {
            alert(msg);
            history.go(0);
        },
        error:function () {
            alert("微信支付失败！");
        }
    })
}

/**
 * 支付宝支付
 */
function zfbPay(zfb) {
    var url = baseUrl + "/zfbPay";
    var obj = {};
    obj.name = name;
    obj.zfb = zfb;
    obj.saveMoneyQuantity = saveMoneyQuantity;
    obj.myAccount = myAccount;
    $.ajax({
        url:url,
        data:obj,
        type:"POST",
        success:function (msg) {
            alert(msg);
            history.go(0);
        },
        error:function () {
            alert("支付宝支付失败！");
        }
    })
}

/**
 * 根据当前卡号操作银行卡
 */
function selectCardMoney(money) {
    var url = baseUrl + "/selectCardMoney";
    var obj = {};
    obj.name = name;
    obj.bankCardNow = bankCardNow;
    obj.saveMoneyQuantity = saveMoneyQuantity;
    obj.myAccount = myAccount;
    $.ajax({
        url:url,
        data:obj,
        type:"POST",
        success:function (msg) {
            alert(msg);
            history.go(0);
        },
        error:function () {
            alert("充值失败或者余额不足！");
        }
    })
}

/**
 * 银行卡界面
 */
function addCardHtml() {
    layer.open({
        type: 1,
        content: $("#addCardHtml"),
        area: ['45%','28%'],
    })
}

/**
 * 动态银行卡列表
 */
function bankCardHtml() {
        var html = "";
        for(var i=0; i<message.length; i++){
            if (message[i].bankCard == null){
                html += "我的银行卡：<input type='text' style='border: none;width: 120px' value='无'>";
                html += "银行名称：<input type='text' style='border: none;width: 90px' value='无'>";
            }else {
                html += "我的银行卡：<input type='text' id='bankCard' style='border: none;width: 120px' value='"+message[i].bankCard+"'>";
                html += "银行名称：<input type='text' id='bankName' style='border: none;width: 90px' value='"+message[i].bankName+"'>";
                html += "<a href='#'><img src='../img/logo/delete.jpg' class='btn1' onclick='deleteCardHtml("+message[i].bankID+")'></a>";//取当时点击的ID
            }
            if (i != message.length-1){
                html += "<input type='text' style='width: 130px;border: none'>"
                html +="<br>"
            }
        }
        html += "<button class='btn btn-sqr' onclick='addCardHtml()'>添加银行卡</button>"
        $("#bankCardHtml").html(html);
}

/**
 * 判断添加银行卡前卡号是否重复
 */
function beforeInsertCardRepeat() {
    var url = baseUrl + "/beforeInsertCardRepeat";
    var card = $("#addCard").val();
    var obj = {};
    obj.card = card;
    $.ajax({
        url:url,
        data:obj,
        type:"POST",
        success:function (msg) {
            if (msg == "n"){
                addCardMessage();
            }else {
                alert("当前卡号重复请重新输入!");
            }

        }
    })
}

/**
 * 添加银行卡
 */
function addCardMessage() {
    debugger;
    if (formatBankCard()){
        var url = baseUrl + "/addCardMessage";
        var name = $("#addName").val();
        var card = $("#addCard").val();
        var obj = {};
        obj.name = name;
        obj.card = card;
        obj.id = id;
        $.ajax({
            url:url,
            data:obj,
            type:"POST",
            success:function (msg) {
                alert(msg);
                history.go(0);
            },
            error:function () {
                alert("添加失败！");

            }
        })
    }
}

/**
 * 删除银行卡界面
 * @param ID
 */
function deleteCardHtml(ID) {
    bankID = ID;
    layer.open({
        type: 1,
        content: $("#deleteCardHtml"),
        area: ['28%','22%'],
    })
}
/**
 * 删除银行卡(确定界面)
 */
function deleteCard() {
    var url = baseUrl + "/deleteCard";
    var obj = {};
    obj.id = bankID;
    $.ajax({
        url:url,
        data:obj,
        type:"POST",
        success:function (msg) {
            history.go(0);
        },
        error:function () {
            alert("删除失败！");
        }
    })
}

/**
 * 删除银行卡取消界面
 * @constructor
 */
function CancelHtml() {
    $(".layui-layer-close").click();
}

/**
 * 将复选框设置成单选
 */
function bindClick1() {
    $("input[name=box]").click(function () {
        $("input[name=box]").not(this).prop("checked",false);
    });
    $("input[name=bankBox]").click(function () {
        $("input[name=bankBox]").not(this).prop("checked",false);
    });
}

/**
 * 修改密码
 */
function updatePassword() {
    if (formatPassWord()){
        var newPassWord = $("#newpasswd1").val();
        var url = baseUrl + "/updatePassword";
        var obj = {};
        obj.newPassWord = md5(newPassWord);
        obj.id = id;
        $.ajax({
            url:url,
            data:obj,
            type:"POST",
            success:function (msg) {
                alert(msg);
            },
            error:function () {
                alert("密码修改失败！")
            }
        })
    }
}

/**
 * 银行卡号名称格式
 */
function formatBankCard() {
    var addName = $("#addName").val();
    var addCard = $("#addCard").val();
    if (addName == "" || addCard == ""){
        alert("银行名称和卡号信息不可为空！");
        return false;
    }
    if (addCard.length<6 || addCard.length>12){
        alert("注意银行卡卡号长度6~12位！")
        return false;
    }
    var regExp = new RegExp("[\u4E00-\u9FA5\uFE30-\uFFA0]");
    if (!regExp.test(addName)) {
        alert("银行名称必须为中文！");
        return false;
    }
    var regExp2 = new RegExp("^[0-9]*$")
    if (!regExp2.test(addCard)){
        alert("卡号必须是数字！");
        return false;
    }
    return true;
}
/**
 * 判断用户输入密码格式
 */
function formatPassWord() {
    debugger;
    var passwd = $("#passwd").val();
    var p1 = $("#newpasswd1").val();
    var p2 = $("#newpasswd2").val();
    if (passwd=="" || passwd==null){
        alert("原密码不能为空！");
        return false;
    }
    if (p1=="" || p2==""){
        alert("新密码不能为空！");
        return false;
    }
    if (password != md5(passwd)){
        alert("原密码输入错误！");
        return false;
    }
    if (p1 != p2){
        alert("两次密码不一致！");
        return false;
    }
    if (md5(p1) == password){
        alert("新密码不能与原密码相同！");
        return false;
    }
    return true;
}

/**
 * 支付宝 微信 银行卡列表
 */
function payStyle() {
    var html = "";
        //支付宝
        html += "<span style='margin-left: 12px'>支付宝余额：</span>" +
            "<input type='text' style='border: none;width: 50px' value='"+message[0].zfb+"'>元";
        //微信
        html += "<span style='margin-left: 60px'>微信余额：</span>" +
            "<input type='text' style='border: none;width: 50px' value='"+message[0].vx+"'>元<br>";

    //银行卡
    for(var i=0; i<message.length; i++){
        if (message[i].bankName != null){
            html += "<input type='checkbox' id='"+i+"' name='bankBox' card='"+message[i].bankCard+"' value='"+i+"'>";
            html += "<label  for='"+i+"' style='cursor: pointer'>银行卡卡号：</label><input type='text' id='card' style='border: none;width: 130px' value='"+message[i].bankCard+"'>";
            html += "银行名称：<input type='text' style='border: none;width: 130px' value='"+message[i].bankName+"'>";
            html += "余额：<input type='text' style='border: none;width: 100px' value='"+message[i].bankBalance+"'>";
            if (i != message.length-1){
                html += "<input type='text' style='width: 130px;border: none'>"
                html +="<br>"
            }
        }else {
            html += "<span style='margin-left: 10px;margin-right: 500px'>无</span>";
        }
    }
    html += "<button class='btn btn-sqr' onclick='updatePayStyle()'>修改支付方式</button>";
    $("#payStyle").html(html);
}
/**
 * 修改支付方式(银行卡)
 */
function updatePayStyle() {
    $('input[name="bankBox"]:checked').each(function () {
        var val = $(this).val();
        var bankCardAfter = message[val].bankCard;
        // alert("当前卡号："+bankCardNow+"---"+"修改之后卡号："+bankCardAfter);
        // 修改之前的银行卡参数为0，操作之后的银行卡参数为1
        var url = baseUrl + "/updateBankParameter";
        var obj = {};
        obj.bankCardNow = bankCardNow; // 之前卡的 ID
        obj.bankCardAfter = bankCardAfter; // 修改之后的 ID
        obj.userID = id; //当前用户
        $.ajax({
            url:url,
            data:obj,
            type:"POST",
            success:function (msg) {
                alert(msg);
                history.go(0);
            }
        });
    })
}

