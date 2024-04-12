var baseUrl = "http://localhost:8080";
/**
 * 注册 格式规范
 */
function formatRegistered() {
    debugger;
    var username = $("#username").val();
    var password1 = $("#password1").val();
    var password2 = $("#password2").val();
    var phone = $("#phone").val();
    var email = $("#email").val();
    var country = $("#country").val();
    if (username == "" ||password1 == "" ||password2 == "" ||phone == "" ||email == "" ||country == ""){
        alert("所有信息不可为空！");
        return false;
    }
    if (username.length>8){
        alert("用户名长度不符！");
        return false;
    }
    if (password1.length<6 || password1.length>12){
        alert("密码长度必须在6-12位之间！");
        return false;
    }
    if (password1 != password2){
        alert("两次输入的密码不一致！");
        return false;
    }
    if (phone.length!=11){
        alert("手机号不正确或不存在！");
        return false;
    }
    if (email.indexOf("@") == -1){
        alert("邮箱输入有误！");
        return false;
    }
    var regExp = new RegExp("[\u4E00-\u9FA5\uFE30-\uFFA0]");
    if (!regExp.test(country)){
        alert("国家称必须为中文！");
        return false;
    }
    return true;
}

/**
 * 注册
 */
function registered() {
    if (formatRegistered()){
        var url = baseUrl + "/registered";
        var username = $("#username").val();
        var password = $("#password1").val();
        var phone = $("#phone").val();
        var email = $("#email").val();
        var country = $("#country").val();
        var info = {};
        info.name = username;
        info.password = md5(password);
        info.phone = phone;
        info.email = email;
        info.country = country;
        var obj = {};
        obj.info = JSON.stringify(info);
        $.ajax({
            url:url,
            data:obj,
            type:"POST",
            success:function (msg) {
                alert(msg);
                window.location.href = baseUrl + "/login.html";
            }
        })
    }
}

/**
 * 判断当前注册用户名是否重复
 */
function nameRepeatYesOrNo() {
    var url = baseUrl + "/nameRepeatYesOrNo";
    var username = $("#username").val();
    var obj = {};
    obj.name = username;
    $.ajax({
        url:url,
        data:obj,
        type:"POST",
        success:function (msg) {
            if (msg == "n"){
                registered();
            }else {
                alert("当期用户已被注册！");
            }
        }
    })
}