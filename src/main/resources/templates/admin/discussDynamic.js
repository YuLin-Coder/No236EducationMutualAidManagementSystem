var baseUrl = "http://localhost:8080";
$(function () {
    var admin = $.cookie("admin");
    $("#admin").text(admin);
    selectDiscuss();
});

function selectDiscuss() {
    var url = baseUrl + "/selectDiscuss";
    $.ajax({
        url:url,
        type:"POST",
        data:"",
        success:function (msg) {
            discussHtml(msg);
        },
        error:function () {
            alert("商品系统繁忙！");
        }
    })
}

function discussHtml(msg) {
    let html = "";
    for (let i = 0; i < msg.length; i++) {
        html += "<div class='td w05'>"+(i+1)+"</div>";
        html += "<div class='td w12'>"+msg[i].sendName+"</div>";
        html += "<div class='td w10'>" +
            "<img src='http://localhost:8080/getImgAddress?fileName="+msg[i].photo+"' " +
            "alt='product thumb' " +
            "style='width: 100px;height: 60px'>" +
            "</div>";
        if (msg[i].content.length >= 30){
            msg[i].content = msg[i].content.substring(0,30) + "...";
        }
        html += "<div class='td w40'>"+msg[i].content+"</div>";
        html += "<div class='td w15'>"+msg[i].time+"</div>";
        html += "<div class='td w15'>" +
            "<a href='#' style='margin-left: 0px' onclick='deleteDynamic("+msg[i].id+")'>删除</a></div>";
    }
    $("#discussDynamicHtml").html(html)
}

function deleteDynamic(id) {
    var url = baseUrl + "/deleteDynamicDis";
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

