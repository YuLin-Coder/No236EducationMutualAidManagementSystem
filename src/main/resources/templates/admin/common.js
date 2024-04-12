var module = "";
$(function () {
    module = $.cookie("module");//拿到管理员权限
    isModuleAdmin();
});

/**
 * 判断管理员权限
 */
function isModuleAdmin() {
    if (module=="0"){//超级管理员
        $("li[name = 'duodebufen']").hide();
    }else if (module=="1"){ //商城管理
        $("#shopHidden").hide();
    }else if (module=="2"){ //玩家管理
        $("#userHidden").hide();
    }else if (module=="3"){ //信息管理
        $("#InforHidden").hide();
    }else if (module=="4"){//新闻管理
        $("#newsHidden").hide();
    }else if (module=="5"){//意见管理
        $("#opinionHidden").hide();
    }else if (module=="6"){//动态管理
        $("#dynamicHidden").hide();
    }else if (module=="7"){//新闻评论
        $("#disNewsHidden").hide();
    }
}

/**
 * 获取url参数值
 * @param name
 * @returns {string|null}
 */
function getQueryString(name) {
    var url = window.location.href;
    var params1 = url.split("?")[1];
    if(typeof(params1) == "undefined") return null;
    var params = params1.split("&");
    for (var i = 0; i < params.length; i++) {
        if(params[i].indexOf(name) > -1){
            return params[i].split("=")[1];
        }
    }
    return null;
}