var baseUrl = "http://localhost:8080";
var id = 0;
var name = "";
var password = "";
/**
 * 登录
 */
function loginMessage() {
    debugger;
    name = $("#username").val();
    password = $("#password").val();
    var code = $("#code").val();
    var url = baseUrl + "/loginMessage";
    var obj = {};
    obj.loginName = name;
    obj.loginPassword = md5(password);
    obj.code = code;
    $.ajax({
        url:url,
        data:obj,
        type:"POST",
        success:function (msg) {
            debugger;
            if (msg != 0 && msg !=111111){
                id = msg;
                cookies();
                window.location.href = baseUrl + "/index.html";
            }else if (msg == 111111){
                alert("验证码不正确！");
                change();
            }else {
                alert("用户名或密码不正确！");
            }
        },
        error:function () {
            alert("登录失败！")
        }
    })
}
//点击图片刷新验证码
function change() {
    var src = baseUrl + "/code?"+new Date().getTime();
    $("#verifyCodeImg").attr("src",src);
}

/**
 * keyup 用户释放按键时触发
 * keydown 用户按下按键时触发
 */
$(document).keyup(function(event){
    if(event.keyCode == 13){
        loginMessage();
    }
});

/**
 * cookie
 */
function cookies() {
    $.cookie("id",id,{expires:3,path:"/"});
    $.cookie("name",name,{expires:3,path:"/"});
    $.cookie("password",password,{expires:3,path:"/"});
}