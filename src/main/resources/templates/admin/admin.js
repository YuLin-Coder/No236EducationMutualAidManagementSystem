var baseUrl = "http://localhost:8080";
$(function () {
    var admin = $.cookie("admin");
    $("#admin").text(admin);
    selectAdmin();
});

function selectAdmin() {
    var url = baseUrl + "/selectAdmin";
    $.ajax({
        url:url,
        type:"POST",
        data:"",
        success:function (msg) {
            AdminHtml(msg);
        },
    })
}

function AdminHtml(msg) {
    let html = "";
    for (let i = 0; i < msg.length; i++) {
        html += "<div class='td w20'>"+(i+1)+"</div>";
        html += "<div class='td w20'>"+msg[i].name+"</div>";
        html += "<div class='td w20'>超级管理员</div>";
        msg[i].account = msg[i].account == null ? "0":msg[i].account;
        html += "<div class='td w20'>"+msg[i].account+"</div>";
        html += "<div class='td w20'>" +
            "<a href='#' onclick='deleteAdmin("+msg[i].id+")'>删除</a></div>";
    }
    $("#AdminShopHtml").html(html)
}

function deleteAdmin(id) {
    var url = baseUrl + "/deleteAdmin";
    var info = {};
    info.id = id;
    $.ajax({
        url:url,
        type:"POST",
        data:info,
        success:function (msg) {
            alert("管理员删除成功！");
            window.history.go(0);
        },
    })
}

