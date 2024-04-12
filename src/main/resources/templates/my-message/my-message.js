var myMessage = "";
var name = "";
var personImg = "";
$(function () {
    name = $.cookie("name");
    $("#userName").text(name);
    personImg = $.cookie("personImg");
    $("#myHead").attr("src",personImg);
    $("a[name='jumpShoes']").attr("href","../shop/Shop.html");
    selectDynamicMe();
    selectVBNum();
    selectVBAttention();
    selectWhoAttentionMe();
});

/**
 * 查询所有动态内容(我的动态)
 */
function selectDynamicMe() {
    var url = baseUrl + "/selectDynamicMe";
    var obj = {};
    obj.setName = name;
    $.ajax({
        url:url,
        data:obj,
        type:"POST",
        success:function (msg) {
            myMessage = msg;
            // console.log(JSON.stringify(DynamicMessage));
            dynamicHtmlMe();
        }
    })
}

/**
 * 渲染页面
 */
function dynamicHtmlMe() {
    var s = "";
    for (var i = myMessage.length-1; i >= 0; i--) {
        s += "<div class='stateShow'>";
        s += "<div class='stateShowWord'>";
        s += "<table width='450' border='0' cellpadding='0' cellspacing='0' class='stateTable'>";
        s += "<tr>";
        s += "<td width='70' align='center' valign='top'><a href='#'><img src='"+personImg+"' width='48' height='48' /></a></td>";
        s += "<td width='380'><a href='#'>"+myMessage[i].dynamicSendName+"</a><br>"+myMessage[i].dynamicContent+"</td>";
        s += "</tr>";
        s += "</table>";
        s += "</div>";
        if (myMessage[i].dynamicPath != null && myMessage[i].dynamicPath != ""){
            s += "<div class='stateImgShow'><img src='http://localhost:8080/getImgAddress?fileName="+myMessage[i].dynamicPath+"' style='width: 150px;height: 120px'/></div>";
        }
        s += "<div class='stateShowtime'>"+myMessage[i].dynamicTime+"&nbsp;&nbsp;"+myMessage[i].dynamicAddress+"</div>";
        s += "<div class='stateShowtime'>" +
                "<a href='javascript:void(0)' class='chat icon' style='margin-top: 14px;margin-left: 30px' onclick='clickCommentMe("+i+")'></a>"+
                "<a href='javascript:void(0)' class='thumbs_button fa fa-thumbs-up' style='color: darkorange;text-decoration: none;margin-left: 70px' title='点赞，支持一下'> 点赞" +
                "<span>("+myMessage[i].dynamicZanNum+")</span></a>" +
                "<a href='#' onclick='return deleteDynamicConfirmed("+i+")' style='margin-left: 10px;margin-top: -5px;color: darkorange;text-decoration: none'><strong style='font-size: 16px'>删除</strong></a>" +
              "</div>";
        s += "<div class='stateShowtime'></div>";
        s += "</div>";
        // 评论
        s += "<div id='comment"+i+"'>";
        s += "</div>";
    }

    $("#mainBannerContent").html(s);
    changeDivHeightMe();
}

/* 设置页面中的主题部分的左栏和右栏部分高度为自动 */
function initDivHeightMe(divObj1,divObj2){
    divObj1.style.height = "auto";
    divObj2.style.height = "auto";
}
/* 设置主体部分的高度以实际高度高的那个为准 */
function changeDivHeightMe(){
    var mainBanner = document.getElementById("mainBanner");
    var mainRight = document.getElementById("mainRight");
    initDivHeightMe(mainBanner,mainRight);//设置高度为自动
    var height = mainBanner.offsetHeight > mainRight.offsetHeight ? mainBanner.offsetHeight : mainRight.offsetHeight;//获取高度高的值
    mainBanner.style.height = height + "px";//为他们的高度都赋高的那个值
    mainRight.style.height = height+ "px";//
}

/**
 * 查看当前发表微博数量
 */
function selectVBNum() {
    var url = baseUrl + "/selectVBNum";
    var obj = {};
    obj.name = name;
    $.ajax({
        url:url,
        data:obj,
        type:"POST",
        success:function (msg) {
            $("#VBNum").text(msg);
        }
    })
}

/**
 * 查看当前用户关注人数
 */
function selectVBAttention() {
    var url = baseUrl + "/selectVBAttention";
    var obj = {};
    obj.attentionWhoName = name;
    $.ajax({
        url:url,
        data:obj,
        type:"POST",
        success:function (msg) {
            $("#VBAttention").text(msg);
        }
    })
}

/**
 * 查看我的粉丝
 */
function selectWhoAttentionMe() {
    var url = baseUrl + "/selectWhoAttentionMe";
    var obj = {};
    obj.attentionName = name;
    $.ajax({
        url:url,
        data:obj,
        type:"POST",
        success:function (msg) {
            $("#VBWhoAttentionMe").text(msg);
        }
    })
}
/**
 * 删除提示
 * @param i
 * @returns {boolean}
 */
function deleteDynamicConfirmed(i) {
    var msg = "确定删除该条数据？";
    if (confirm(msg)==true){
        deleteDynamic(i);
    }else{
        return false;
    }
}
/**
 * 删除个人当前已发表
 */
function deleteDynamic(i) {
    var url = baseUrl + "/deleteDynamic";
    var ID = myMessage[i].dynamicID;
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
/**
 * 点击评论(先做查询)
 */
function clickCommentMe(i) {
    var url = baseUrl + "/clickComment";
    var obj = {};
    obj.commentName = myMessage[i].dynamicSendName;// 以前帖子姓名
    obj.commentPath = myMessage[i].dynamicPath; // 以前帖子图片地址
    obj.commentContent = myMessage[i].dynamicContent; //以前帖子内容
    $.ajax({
        url:url,
        data:obj,
        type:"POST",
        success:function (msg) {
            // console.log(JSON.stringify(msg))
            var s = commentHtml(i,msg);
            $("#comment"+i).html(s);
            changeDivHeightMe();
        }
    })

}
/**
 * 评论html
 */
function commentHtml(i,msg) {
    var s = "";
    for (var j = 0; j < msg.length; j++) {
        s += "<div class='comment-wrap'>";
        s += "<div class='photo'>";
        s += "<div class='avatar'>" +
            "<img src='http://localhost:8080/getImgHead?personImg="+msg[j].photo+"' style='width: 50px;height: 40px;border-radius: 25px'/></div>";
        s += "</div>";
        s += "<div class='comment-block'>";
        s += "<div class='bottom-comment'>";
        s += "<div class='comment-date'><span style='color: #eb7350'>"+msg[j].sendName+"</span>&nbsp;:&nbsp;&nbsp;&nbsp;</div>";
        s += "<div class='comment-date' style='color: dimgrey'>"+msg[j].content+"</div><br>";
        s += "<div class='comment-date'>"+msg[j].time+"</div>";
        s += "</div>";
        s += "</div>";
        s += "</div>";
    }
    return s;
}