var baseUrl = "http://localhost:8080";
var name = "";
var id = "";
var personAll = []; //当前用户所有好友列表
var receiveUserName = ""; //当前收到消息用户
$(function () {
    name = $.cookie("name");
    id = $.cookie("id");
    selectChatPerson();
});

function meimiaojiazaiyici(){
    setTimeout(function () {
        chatList();
    },1000*5);
    meimiaojiazaiyici();
}


/**
 * 好友列表
 */
function selectChatPerson() {
    var url = baseUrl + "/selectChatPerson";
    var obj = {};
    obj.id = id; //当前用户
    $.ajax({
        url:url,
        data:obj,
        type:"POST",
        success:function (msg) {
            if (msg.person != "" && msg.person != null){
                personAll = msg.person.split(",");
            }
            myChatPerson();
        }
    });
}

/**
 * 好友列表渲染
 */
function myChatPerson() {
    let html = "";
        html += "<h3 style='margin-bottom: 30px;'>好友列表</h3>";
        if (personAll.length == 0){
            html += "<h3 style='margin-top: 50px'>无好友</h3>";
            $("#MyChat").hide();
            $("#img").hide();
        }
    for (let i = 0; i < personAll.length; i++) {
        html += "<a href='#MyChat' data-toggle='tab' onclick='selectChatContent("+i+")' id='mychat"+i+"'><i class='fa fa-user'></i>"+personAll[i]+"</a>";
    }
    $("#myChatPerson").html(html);
    $("#mychat0").click();
}

/**
 * 查看好友基本资料
 */
function selectChatContent(i) {
    var url = baseUrl + "/selectChatContent";
    var obj = {};
    obj.name = personAll[i]; //当前用户
    $.ajax({
        url:url,
        data:obj,
        type:"POST",
        success:function (msg) {
            $("#netName").val(msg.netName);
            $("#email").val(msg.email);
            $("#country").val(msg.country);
            $("#phone").val(msg.phone);
            $("#signature").text(msg.signature);
            $("#personImg").attr("src","http://localhost:8080/getImgHead?personImg="+msg.path);
            receiveUserName = msg.name;
        }
    });
}

/**
 * 聊天
 */
function chatLayerHtml() {
    layer.open({
        type: 1,
        title: "聊天界面",
        content: $("#chatHtml"),
        area: ['60%','80%'],
    });
    chatList(receiveUserName);
    $("#chatName").text(receiveUserName)
}


function chatList(receive) {
    var url = baseUrl + "/chatList";
    var obj = {};
    obj.sendName = name;
    obj.receiveName = receive;
    $.ajax({
        type:"POST",
        data:obj,
        url:url,
        success:function (msg) {
            chatHtmlBuild(msg);
        }

    })
}

function chatHtmlBuild(msg) {
    var html = "";
    html += "<ul>";
    for (let i = 0; i < msg.length; i++) {
        var sendName = msg[i].sendName;
        var receiveName = msg[i].receiveName;
        var sendByName = msg[i].sendByName;
        if (sendByName == name){
            html += "<li class='msgright' style='list-style: none;'>";
            html += "<img style='border-radius: 20px; vertical-align: top;width: 35px;height: 35px;' class='msgright' src='../img/head.gif'>";
            html += "<p class='msgcard msgright'>"+msg[i].content+"</p>";
            html += "</li>";
        }else{
            html += "<li class='msgleft' style='list-style: none;'>";
            html += "<img style='border-radius: 20px; vertical-align: top;width: 35px;height: 35px;' class='msgleft' src='../img/head.gif'>";
            html += "<p class='msgcard msgleft'>"+msg[i].content+"</p>";
            html += "</li>";
        }
    }
    html += "</ul>";
    $("#chatHtmlBuild").html(html);
}

function sendChat() {
    var chatMess = $("#chatMess").val();
    var url = baseUrl + "/sendChat";
    var info = {};
    info.sendName = name;
    info.receiveName = receiveUserName;
    info.content = chatMess;
    info.sendByName = name;
    var obj = {};
    obj.info = JSON.stringify(info);
    $.ajax({
        type:"POST",
        data:obj,
        url:url,
        success:function (msg) {
            chatList(receiveUserName);
            $("#chatMess").val("");
        }
    })
}

/**
 * 共计总数
 */
function totalQuantity() {
    var url = baseUrl + "/totalQuantity";
    var obj = {};
    obj.userID = id;
    obj.param = 1;
    $.ajax({
        url:url,
        data:obj,
        type:"POST",
        success:function (msg) {
            var totalQuantity = msg.length;
            $("#cart-Num").text(totalQuantity);
        }
    });

}

function chatHtml() {
    layer.open({
        type: 1,
        content: $("#chatDeleteHtml"),
        area: ['25%','25%'],
        title:"删除好友界面"
    });
}


/**
 * 取消界面
 * @constructor
 */
function CancelCartHtml() {
    $(".layui-layer-close").click();
}

/**
 * 删除当前好友  并将我从当前好友中一并删除
 */
function deleteUserChat() {
    var url = baseUrl + "/deleteUserChat";
    var obj = {};
    obj.person = receiveUserName;//当前删除好友
    obj.id = id; //当前用户ID
    obj.name = name; //当前用户名称
    $.ajax({
        url:url,
        data:obj,
        type:"POST",
        success:function (msg) {
            alert("好友删除成功！");
            window.history.go(0);
        }
    });

}
/**
 * 全局搜索鞋子(通过url传值)
 */
function findShoes(param) {
    var searchShoes = $("#searchShoes").val();
    if (param == 1){
        window.location.href = "shop/Shop.html?Parameter="+searchShoes;
    }else {
        window.location.href = "../shop/Shop.html?Parameter="+searchShoes;
    }
}