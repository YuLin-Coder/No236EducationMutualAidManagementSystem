var time = new Date();
var userID = "";
$(function () {
    userID = $.cookie("id");
    $("a[name='jumpShoes']").attr("href","../shop/Shop.html");
    nowTime();
});
/**
 * 用户发送建议
 */
function sendMessage() {
    if (formatSendMessage()){
        var url = baseUrl + "/sendMessage";
        var sendName = $("#name").val();
        var phone = $("#phone").val();
        var email = $("#email").val();
        var time = $("#time").val();
        var message = $("#message").val();
        var obj = {};
        obj.sendName = sendName;
        obj.phone = phone;
        obj.email = email;
        obj.time = time;
        obj.message = message;
        obj.name = name;
        $.ajax({
            url:url,
            data:obj,
            type:"POST",
            success:function (msg) {
                alert(msg);
            },
            error:function () {
                alert("发送意见失败请重新发送！");
            }
        })
    }
}

/**
 * 获取当前时间
 */
function NowTime() {
    var year = time.getFullYear();
    var month = time.getMonth()+1;
    var day = time.getDate();
    var hour = time.getHours();
    var m = time.getMinutes();
    var s = time.getSeconds();
    var dayTime = year+"-"+month+"-"+day+" "+hour+":"+m+":"+s;
    return dayTime;
}

/**
 * 发送意见格式
 */
function formatSendMessage() {
    var sendName = $("#name").val();
    var phone = $("#phone").val();
    var email = $("#email").val();
    var time = $("#time").val();
    var message = $("#message").val();
    if (sendName == "" ||phone == "" ||email == "" ||time == "" ||message == ""){
        alert("所有信息不可为空！");
        return false;
    }
    return true;
}

function nowTime() {
    var dat=new Date();
    var year = dat.getFullYear();
    var month = dat.getMonth()+1;
    var day = dat.getDate();
    var hours = dat.getHours();
    var minutes = dat.getMinutes();
    var seconds = dat.getSeconds();
    if(minutes<10){
        minutes="0"+minutes;
    }
    if(seconds<10){
        seconds="0"+seconds;
    }
    var str = year+"-"+month+"-"+day+" "+hours+":"+minutes+":"+seconds;
    $("#time").val(str);
}