var baseUrl = "http://localhost:8080";
var paramLogin = 1;
/**
 * 登录
 */
function loginAdmin() {
    var name = $("#name").val();
    var password = $("#password").val();
    var url = baseUrl + "/loginAdmin";
    var obj = {};
    obj.name = name;
    obj.password = password;
    $.ajax({
        url:url,
        data:obj,
        type:"POST",
        success:function (msg) {
            if (msg){
                $.cookie("admin",name);
                $.cookie("module",msg.module);
                window.location.href = baseUrl + "/admin/adminUser.html";
            }else {
                alert("用户名或密码不正确！");
            }
        },
        error:function () {
            alert("登录失败！")
        }
    })
}

function register() {
    window.location.href = "register.html";
}

//点击图片刷新验证码
function change() {
    var src = baseUrl + "/code?"+new Date().getTime();
    $("#verifyCodeImg").attr("src",src);
}


function switchModule(module) {
    if (module=="0"){
        window.location.href = baseUrl + "/admin/shopIsSell.html";
    }else if (module=="1"){//商城管理
        window.location.href = baseUrl + "/admin/shopIsSell.html";
    }else if (module=="2"){//玩家管理
        window.location.href = baseUrl + "/admin/adminUser.html";
    }else if (module=="3"){//信息管理
        window.location.href = baseUrl + "/admin/information.html";
    }else if (module=="4"){//新闻管理
        window.location.href = baseUrl + "/admin/adminNews.html";
    }else if (module=="5"){//意见管理
        window.location.href = baseUrl + "/admin/sendOpinion.html";
    }else if (module=="6"){//动态管理
        window.location.href = baseUrl + "/admin/discussDynamic.html";
    }else if (module=="7"){//新闻评论
        window.location.href = baseUrl + "/admin/discussNews.html";
    }else {
        window.location.href = baseUrl + "/admin/discussNews.html";
    }
}