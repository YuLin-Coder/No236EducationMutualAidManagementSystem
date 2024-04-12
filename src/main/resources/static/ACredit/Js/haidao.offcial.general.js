$(function(){
	//ajax设置
//	$(document).ajaxStart(function(){
//	  layer.load(0, {shade: false});
//	});
//	$(document).ajaxStop(function(){
//	  layer.close(layer.load());
//	});
	
	//下拉
	$(".dropdown").live('click',function(e){
		if($(this).hasClass("open")){
			$(this).removeClass("open");
		}else{
			$(".dropdown").removeClass("open");
			$(this).addClass("open");
		}
		//e.stopPropagation();
	});
	//formhash
	try{
	$('form').each(function(i, n) {
        $(this).append('<input type="hidden" name="formhash" value="'+ formhash +'"/>');
    })

    $("a").each(function() {
    	var href = $(this).attr('href');
    	if(href && href.indexOf('javascript:') == -1 && href.indexOf('formhash') == -1 && $(this).attr('rel') != 'nofollow') {
			if(href.indexOf('?') != -1) {
				href += '&formhash='+formhash;
			} else {
				href += '?formhash='+formhash;
			}
			$(this).attr('href', href);
    	}
    })
	}catch(e){}
	//按钮弹窗
	$(".btn_ajax_open").live('click',function(){
		var panel = ''+$(this).attr('data-panel')+'';
		var callback = ''+$(this).attr('data-callback')+'';
		var title = $(this).attr('data-title');
		var btn = $(this).attr('data-btn');
		title = (typeof(title)=='undefined')?'信息':title;
		btn = (typeof(btn)=='undefined')?['确认','取消']:btn.split(",");
		//捕获页
		layer.open({
			type:1,
			maxWidth:600,
			title:title,
			content: $('.'+panel+''), //捕获的元素
			btn:btn,
			yes: function(index, layero){
				eval(callback);
			},
			cancel: function(index){
				layer.close(index);
			}
		});
		return false;
	})
		//确认弹窗
	$('.btn_ajax_confirm').live('click',function(){
		var callback = ''+$(this).attr('callback')+'';
		layer.confirm(''+$(this).attr('msg')+'', {
		    btn: ['确认','取消'], //按钮
		    icon: 3
		}, function(){
			try{
				eval(callback);
				layer.close(layer.confirm());
			}catch(e){
				layer.alert(e.message, {icon: 2});
			}
		});
	})
});

//全选反选
$(".check-all").live("click",function() {
	$(".ids:visible").prop("checked", this.checked);});
$(".ids").live("click",function() {
	var option = $(".ids:visible");
	option.each(function(i) {
		if (!this.checked){
				$(".check-all:visible").prop("checked", false);
				return false;
			}else{
			$(".check-all:visible").prop("checked", true);
		}
	});
});
//全选反选 确认操作并回调
function check_ajax_callback(msg,callback){
	var ids = new Array();
	$("[name='ids[]']:visible:checked").each(function(i,d){
		ids.push($(this).val());
	});
	if(ids.length == 0){
		layer.alert('请选择要操作的项!', {icon: 2});
		return false;
	}
	if(typeof(msg) == "undefined"){
		eval(callback);
	}else{
		layer.confirm(''+msg+'', {
		    btn: ['确认','取消'], //按钮
		    icon: 3
		}, function(){
			try{
				eval(callback);
				layer.close(layer.confirm());
			}catch(e){
				layer.alert('未定义操作', {icon: 2});
			}
		});
	}
}
	

