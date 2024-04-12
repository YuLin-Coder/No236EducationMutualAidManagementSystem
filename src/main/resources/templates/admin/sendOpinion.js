var baseUrl = "http://localhost:8080";
$(function () {
    var admin = $.cookie("admin");
    $("#admin").text(admin);
    selectOpinion();
});

function selectOpinion() {
    var url = baseUrl + "/selectOpinion";
    $.ajax({
        url:url,
        type:"POST",
        data:"",
        success:function (msg) {
            opinionHtml(msg);
        },
        error:function () {
            alert("商品系统繁忙！");
        }
    })
}

function opinionHtml(msg) {
    let html = "";
    for (let i = 0; i < msg.length; i++) {
        html += "<div class='td w05'>"+(i+1)+"</div>";
        html += "<div class='td w12'>"+msg[i].opinionName+"</div>";
        html += "<div class='td w10'>"+msg[i].opinionEmail+"</div>";
        if (msg[i].opinionMessage.length >= 30){
            msg[i].opinionMessage = msg[i].opinionMessage.substring(0,30) + "...";
        }
        html += "<div class='td w40'>"+msg[i].opinionMessage+"</div>";
        html += "<div class='td w05'>"+msg[i].opinionTime+"</div>";
        html += "<div class='td w05'>"+msg[i].opinionPhone+"</div>";
        html += "<div class='td w15'>" +
            "<a href='#' style='margin-left: 30px' onclick='deleteOpinion("+msg[i].opinionID+")'>删除</a></div>";
    }
    $("#AdminShopHtml").html(html)
}



function deleteOpinion(id) {
    var url = baseUrl + "/deleteOpinion";
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

