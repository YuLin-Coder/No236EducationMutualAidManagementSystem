// var baseUrl = "http://120.27.55.169:8080";
var baseUrl = "http://localhost:8080";
var DynamicMessage = "";
var name = "";
var address = "";
var nowTime = "";
var personImg = "";
var personImgPath = "";
var praise = "";
var userID = 0;
var nowChatPerson = "";
$(function () {
	userID = $.cookie("id");
	name = $.cookie("name");
	personImg = $.cookie("personImg");
	personImgPath = $.cookie("personImgPath");
	address = $.cookie("country");
	$("a[name='jumpShoes']").attr("href","../shop/Shop.html");
	$("#rightHead").attr("src",personImg);
	selectDynamic();
	selectChatPerson();
});

/**
 * 查询所有动态内容
 */
function selectDynamic() {
	var url = baseUrl + "/selectDynamic";
	$.ajax({
		url:url,
		type:"POST",
		success:function (msg) {
			DynamicMessage = msg;
			// console.log(JSON.stringify(DynamicMessage));
			dynamicHtml();
		}
	})
}


/**
 * 渲染朋友圈页面
 */
function dynamicHtml() {
	var s = "";
	for (var i = DynamicMessage.length-1; i >= 0; i--) {
		s += "<div class='stateShow'>";
		s += "<div class='stateShowWord'>";
		s += "<table width='450' border='0' cellpadding='0' cellspacing='0' class='stateTable'>";
		s += "<tr>";
		s += "<td width='70' align='center' valign='top'><a href='#' onclick='addChatPerson("+i+")'><img src='http://localhost:8080/getImgHead?personImg="+DynamicMessage[i].dynamicPhoto+"' id='dynamicHead' width='48' height='48' /></a></td>";
		s += "<td width='380'><a href='#' onclick='addChatPerson("+i+")'>"+DynamicMessage[i].dynamicSendName+"</a><br>"+DynamicMessage[i].dynamicContent+"</td>";
		s += "<td width='40px' style='margin-top: -5px'><a href='#' style='text-decoration: none;' onclick='payAttention("+i+")'>关注</a><br>&nbsp;&nbsp;</td>";
		s += "</tr>";
		s += "</table>";
		s += "</div>";
		if (DynamicMessage[i].dynamicPath != null && DynamicMessage[i].dynamicPath != ""){
			s += "<div class='stateImgShow'><img src='http://localhost:8080/getImgAddress?fileName="+DynamicMessage[i].dynamicPath+"' id='dynamicImgPath' style='width: 150px;height: 120px'/></div>";
		}
		s += "<div class='stateShowtime'>"+DynamicMessage[i].dynamicTime+"&nbsp;&nbsp;"+DynamicMessage[i].dynamicAddress+"</div>";
		s += "<div class='stateShowtime' style='margin-left: 150px'>" +
			"<a href='javascript:void(0)' class='chat icon' style='margin-top: 14px;margin-left: 20px' onclick='clickComment("+i+")' title='评论'></a>" +
			"<span id='praise"+i+"' class='thumbs_button' style='margin-left: 50px;color: #eb7350'>("+DynamicMessage[i].dynamicZanNum+")</span>" +
			"<a href='javascript:void(0)' class='thumbs_button fa fa-thumbs-up' onclick='clickPraise("+i+")' style='color: #eb7350;text-decoration: none;margin-left: 20px' title='点赞，支持一下'></a>" +
			"<a href='javascript:void(0)' class='thumbs_button' onclick='clickCan("+i+")' style='color: #eb7350;text-decoration: none;margin-left: -90px' title='取消点赞'>取消</a>" +
			// "<a href='javascript:void(0)' class='thumbs_button' onclick='addToCollect("+i+")' style='color: #eb7350;text-decoration: none;margin-left: -30px'>" +
			//"<img src='../img/logo/sc.png' style='border: none;margin-top: -10px;margin-left: 45px;cursor: pointer' onclick='addToCollect("+i+")' title='收藏'/></a>" +
			"</div>";
		s += "</div>";
		// 评论
		s += "<div id='comment"+i+"'>";
		s += "</div>";
	}
	$("#mainBannerContent").html(s);
	changeDivHeight();
}

function selectChatPerson() {
	var url = baseUrl + "/selectChatPerson";
	var info = {};
	info.id = userID;
	$.ajax({
		data:info,
		url:url,
		type:"POST",
		success:function (msg) {
			nowChatPerson = msg.person;
		}
	})
}

function addChatPerson(i) {
	var chatName = DynamicMessage[i].dynamicSendName;
	if (name == chatName){
		alert("不可加自己为好友哦~");
		return false;
	}
	if (nowChatPerson!=null && nowChatPerson !=""){
		if (nowChatPerson.indexOf(chatName) != -1){
			alert("当前已是好友请勿重复添加！");
			return false;
		}
	}
	var url = baseUrl + "/addChatPerson";
	var info = {};
	info.id = userID;
	if (nowChatPerson==null || nowChatPerson==""){
		info.chatName = chatName;
	}else {
		info.chatName = nowChatPerson+","+chatName;
	}
	$.ajax({
		data:info,
		url:url,
		type:"POST",
		success:function (msg) {
			alert("添加好友成功！");
			var url = baseUrl + "/selectChatPerson02";
			var info = {};
			info.userName = chatName;
			info.name = name;
			$.ajax({
				data:info,
				url:url,
				type:"POST",
				success:function (msg) {}
			})
		}
	})

}

function addToCollect(i) {
	var url = baseUrl + "/addToCollect";
	var info = {};
	info.collectUserID = userID;
	info.collectPath = DynamicMessage[i].dynamicPath;
	info.collectPrice = "0";
	info.collectName = DynamicMessage[i].dynamicSendName+":"+DynamicMessage[i].dynamicContent;
	info.collectParam = 1;
	var obj = {};
	obj.info = JSON.stringify(info);
	$.ajax({
		data:obj,
		url:url,
		type:"POST",
		success:function (msg) {
			alert("成功收藏！");
		}
	})
}

/**
 * 评论html
 */
function commentHtml(i,msg) {
	var s = "";
		s += "<div class='comment-wrap'>";
		s += "<div class='photo'>";
		s += "<div class='avatar'></div>";
		s += "</div>";
		s += "<div class='comment-block'>";
		s += "<form action=''>";
		s += "<textarea name='' id='commentContent"+i+"' cols='30' rows='3' placeholder='Say something...'></textarea>";
		s += "</form>";
		s += "</div>";
		s += "</div>";
		s += "<button class='btn btn-sqr' style='margin-left: 364px;width: 114px;height: 42px' onclick='sendComment("+i+")'>确定评论</button>";
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
/**
 * 点赞
 * @constructor
 */
function clickPraise(i) {
	var dynamicZanNum = DynamicMessage[i].dynamicZanNum;
	var id = DynamicMessage[i].dynamicID;
	praise = dynamicZanNum + 1;
	$("#praise"+i).text("("+praise+")");
	var url = baseUrl + "/clickPraise";
	var obj = {};
	obj.praise = praise;
	obj.id = id;
	$.ajax({
		url:url,
		data:obj,
		type:"POST",
		success:function (msg) {}
	})
}

/**
 * 发表评论
 */
function sendComment(i) {
	var content = $("#commentContent"+i).val(); //发表内容
	var time = nowTimeFormat();//发表时间
	var sendName = name;//发送人姓名
	var photo = personImgPath;//发送人头像
	var commentName = DynamicMessage[i].dynamicSendName;// 以前帖子姓名
	var commentPath = DynamicMessage[i].dynamicPath; // 以前帖子图片地址
	var commentContent = DynamicMessage[i].dynamicContent; //以前帖子内容
	if (content != null && content != ""){
		var url = baseUrl + "/sendComment";
		var info = {};
		info.content = content;
		info.time = time;
		info.sendName = sendName;
		info.photo = photo;
		info.commentName = commentName;
		info.commentPath = commentPath;
		info.commentContent = commentContent;
		var obj = {};
		obj.info = JSON.stringify(info);
		$.ajax({
			url:url,
			data:obj,
			type:"POST",
			success:function () {
				alert("当前评论发表完成！");
				history.go(0);
			}
		})
	}else {
		alert("当前发送内容不可为空！");
		// history.go(0);
	}

}
/**
 * 点击评论(先做查询)
 */
function clickComment(i) {
	var url = baseUrl + "/clickComment";
	var obj = {};
	obj.commentName = DynamicMessage[i].dynamicSendName;// 以前帖子姓名
	obj.commentPath = DynamicMessage[i].dynamicPath; // 以前帖子图片地址
	obj.commentContent = DynamicMessage[i].dynamicContent; //以前帖子内容
	$.ajax({
		url:url,
		data:obj,
		type:"POST",
		success:function (msg) {
			// console.log(JSON.stringify(msg))
			var s = commentHtml(i,msg);
			$("#comment"+i).html(s);
			changeDivHeight();
		}
	})

}

/**
 * 关注
 */
function payAttention(i) {
	var attentionName = DynamicMessage[i].dynamicSendName;
	var attentionWhoName = name;
	var url = baseUrl + "/payAttention";
	var obj = {};
	obj.attentionName = attentionName;
	obj.attentionWhoName = attentionWhoName;
	$.ajax({
		url:url,
		data:obj,
		type:"POST",
		success:function (msg) {
			alert(msg);
		}
	})
}
/**
 * 封装上传
 * @constructor
 */
function PackageUpload() {
	$("#file").click();
}

/**
 * 发送朋友圈(有图片)
 */
function uploadImg() {
    debugger;
	var url = baseUrl + "/uploadPicture";
	var filePath = $("#file").val();
	var imgObj = $("#file")[0].files[0];
	if(filePath != "" && filePath != null && filePath != "undefined"){
		var formData = new FormData();
		var content = $("#textfield2").val();
		nowTime = nowTimeFormat();
		console.log(nowTime+filePath+content);
		//上传朋友圈数据可append
		formData.append("file",imgObj);
		formData.append("name",name);
		formData.append("address",address);
		formData.append("time",nowTime);
		formData.append("content",content);
		formData.append("photo",personImgPath);
		$.ajax({
			url:url,
			data:formData,
			type:"POST",
		    // async : false,
			contentType: false,// 告诉jQuery不要去设置Content-Type请求头
			cache: false, //缓存
			processData: false, // 告诉jQuery不要去处理发送的数据
			success:function (msg) {
				alert("发表成功！");
				window.history.go(0);
			},
			error:function () {
				alert("系统繁忙！")
			},
		})
	}else {
		sendDynamicContent();
	}

}

/**
 * 发送朋友圈(无图片形式)
 */
function sendDynamicContent() {
	var content = $("#textfield2").val();
	var url = baseUrl +"/sendDynamicContent";
	var info = {};
	info.DynamicSendName = name;
	info.DynamicTime = nowTimeFormat();
	info.DynamicAddress = address;
	info.DynamicContent = content;
	info.DynamicPhoto = personImgPath;
	var obj = {};
	obj.info = JSON.stringify(info);
	$.ajax({
		url:url,
		data:obj,
		type:"POST",
		success:function () {
			alert("发表成功！");
			window.history.go(0);
		}
	})

}
/* 设置页面中的主题部分的左栏和右栏部分高度为自动 */
function initDivHeight(divObj1,divObj2){
	divObj1.style.height = "auto";
	divObj2.style.height = "auto";
}

/* 设置主体部分的高度以实际高度高的那个为准 */
function changeDivHeight(){
	var mainBanner = document.getElementById("mainBanner");
	var mainRight = document.getElementById("mainRight");
	initDivHeight(mainBanner,mainRight);//设置高度为自动
	var height = mainBanner.offsetHeight > mainRight.offsetHeight ? mainBanner.offsetHeight : mainRight.offsetHeight;//获取高度高的值
	mainBanner.style.height = height + "px";//为他们的高度都赋高的那个值
	mainRight.style.height = height+ "px";//
}

/* 生成当前的时间 */
function nowTimeFormat(){
	var today = new Date();
	var month = today.getMonth();
	var day = today.getDate();
	var hour = today.getHours();
	var minits = today.getMinutes();
	/* 对数字中不到2位数的处理，前面加0 */
	if(month<9){
		month += 1;
		month="0"+month;
	}
	if(day<10){
		day="0"+day;
	}
	if(hour<10){
		hour="0"+hour;
	}
	if(minits<10){
		minits="0" + minits;
	}
	var str = month+"月"+day+"日";
	return str;
}

/**
 * 时刻监测文本框的字数
 */
$('#textfield2').keyup(function () {
	var textLength = $("#textfield2").val().length;
	if (textLength>140){
		return false;
	}
	$("#wordNumber").text(140-textLength);
});

/**
 * 取消点赞
 */
function clickCan(i) {
	var id = DynamicMessage[i].dynamicID;
	var dynamicZanNum = DynamicMessage[i].dynamicZanNum;
	if (dynamicZanNum==0){
		alert("当前点赞不可取消！");
		return false;
	}
	praise = dynamicZanNum - 1;
	$("#praise"+i).text("("+praise+")");
	var url = baseUrl + "/clickCanCel";
	var obj = {};
	obj.id = id;
	obj.zan = dynamicZanNum;
	$.ajax({
		url:url,
		data:obj,
		type:"POST",
		success:function (msg) {

		}
	})
}