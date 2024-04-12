var baseUrl = "http://localhost:8080";
$(function () {
    var admin = $.cookie("admin");
    $("#admin").text(admin);
    selectDynamic();
});

function selectDynamic() {
    var url = baseUrl + "/selectDynamic";
    $.ajax({
        url:url,
        type:"POST",
        success:function (msg) {
            dynamicHtml(msg);
        }
    })
}

function dynamicHtml(msg) {
    let html = "";
    for (let i = 0; i < msg.length; i++) {
        html += "<div class='td w05'>"+(i+1)+"</div>";
        html += "<div class='td w06'>"+msg[i].dynamicSendName+"</div>";
        html += "<div class='td w10'>" +
            "<img src='http://localhost:8080/getImgHead?personImg="+msg[i].dynamicPhoto+"' " +
            "alt='product thumb' " +
            "style='width: 100px;height: 60px'>" +
            "</div>";
        if (msg[i].dynamicContent.length >= 30){
            msg[i].dynamicContent = msg[i].dynamicContent.substring(0,30) + "...";
        }
        html += "<div class='td w25'>"+msg[i].dynamicContent+"</div>";
        if (msg[i].dynamicPath != null){
            html += "<div class='td w10'>" +
                "<img src='http://localhost:8080/getImgAddress?fileName="+msg[i].dynamicPath+"' " +
                "alt='product thumb' " +
                "style='width: 100px;height: 60px'>" +
                "</div>";
        }else {
            html += "<div class='td w10'>无</div>";
        }
        html += "<div class='td w15'>"+msg[i].dynamicTime+"</div>";
        html += "<div class='td w10'>"+msg[i].dynamicAddress+"</div>";
        html += "<div class='td w5'>"+msg[i].dynamicZanNum+"</div>";
        html += "<div class='td w10'>" +
            "<a href='#' style='margin-left: 0px' onclick='deleteDynamic22("+msg[i].dynamicID+")'>删除</a></div>";
    }
    $("#discussDynamicHtml").html(html)
}

/**
 * 删除个人当前已发表
 */
function deleteDynamic22(dynamicID) {
    var url = baseUrl + "/deleteDynamic";
    var ID = dynamicID;
    var obj = {};
    obj.ID = ID;
    $.ajax({
        url:url,
        data:obj,
        type:"POST",
        success:function () {
            window.history.go(0);
        }
    })
}

