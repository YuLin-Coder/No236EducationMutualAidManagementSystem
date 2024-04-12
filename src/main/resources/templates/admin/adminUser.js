var baseUrl = "http://localhost:8080";
$(function () {
    var admin = $.cookie("admin");
    $("#admin").text(admin);
    selectAdminUser();
});

function selectAdminUser() {
    var url = baseUrl + "/selectAdminUser";
    $.ajax({
        url:url,
        type:"POST",
        data:"",
        success:function (msg) {
            console.log(msg)
            AdminUserHtml(msg);
        },
    })
}

function AdminUserHtml(msg) {
    let html = "";
    for (let i = 0; i < msg.length; i++) {
        html += "<div class='td w06'>"+(i+1)+"</div>";
        html += "<div class='td w07'>"+msg[i].name+"</div>";
        html += "<div class='td w07'>"+msg[i].netName+"</div>";
        html += "<div class='td w10'><img src='http://localhost:8080/getImgAddress?fileName="+msg[i].path+"' " +
            "alt='product thumb' " +
            "style='width: 60px;height: 60px'></div>";
        html += "<div class='td w10'>"+msg[i].phone+"</div>";
        html += "<div class='td w15'>"+msg[i].email+"</div>";
        html += "<div class='td w06'>"+msg[i].country+"</div>";
        html += "<div class='td w30'>"+msg[i].signature+"</div>";
        html += "<div class='td w10'>" +
            "<a href='#' onclick='deleteUser("+msg[i].id+")'>删除</a></div>";
    }
    $("#AdminShopHtml").html(html)
}

function deleteUser(id) {
    var url = baseUrl + "/deleteUser";
    var info = {};
    info.id = id;
    $.ajax({
        url:url,
        type:"POST",
        data:info,
        success:function (msg) {
            alert("删除成功！");
            window.history.go(0);
        },
    })
}

