//选择框
;(function(){
	$.fn.selects=function(){
		this.live('click',function(e){
			var num=$(this).index('.select-table');
			$('.select-table').not($('.select-table').eq(num)).find('ul').hide();;
			var $status=$(this).find('ul').eq(0).css("display");
			if($status=="block"){
				$(this).find('ul').eq(0).hide();
				$(this).find('input').eq(0).css({"border-bottom-left-radius":"3px","border-bottom-right-radius":"3px"});
			}else{
				$(this).find('ul').eq(0).show();
				$(this).find('input').eq(0).css({"border-bottom-left-radius":"0","border-bottom-right-radius":"0"});
			}
			e.stopPropagation();
		});
		this.find('li').bind('click',function(e){
			var parent=$(this).closest(".select-table");
			parent.find('input').eq(0).val($(this).text());
			parent.find('ul').eq(0).hide();
			e.stopPropagation();
			parent.find('input').eq(0).css({"border-bottom-left-radius":"3px","border-bottom-right-radius":"3px"});
		});
		$(window).click(function(){
			$(".select-table ul").hide();
			$(".select-table").find('input').css({"border-bottom-left-radius":"3px","border-bottom-right-radius":"3px"});
		});
	}
})(jQuery);

//浮动选择框
;(function(){
	$.fn.mouse_on=function(){
		this.hover(function(){
			$(".status-table ul").show();
			$(this).find('input').css("background","#fff");
			$(this).css("box-shadow","0 0 10px #ccc");
		},function(){
			$(".status-table ul").hide();
			$(this).find('input').css("background","#F5F6FA");
			$(this).css("box-shadow","none");
		});
		this.find('li').bind('click',function(e){
			$(this).closest(".select-table").find('input').eq(0).val($(this).text());
			$(this).addClass('on').siblings().removeClass('on');
			$(".select-table ul").hide();
			e.stopPropagation();
		});
	}
})(jQuery);

//标题下划线滑动
function slider_head(current){
	//要选中的标题
	var _self = $(".info-center-title").find("span a").eq(current);
	//右侧预留宽度
	var _left_width = 180;
	var span_width = _self.outerWidth(true);
	var span_left = _self.offset().left-_left_width;
	$(".solid-slider").css({"width":span_width+"px","left":span_left});
	var aSpan=$(".info-center-title a");
	for(var i=0;i<aSpan.length;i++){
		aSpan.eq(i).mouseover(function(){
			$(".solid-slider").css({"width":$(this).outerWidth(true)+'px'});
			$(".solid-slider").animate({left:$(this).offset().left-_left_width},100);
		});
		aSpan.eq(i).click(function(){
			$(this).addClass("manage-title").siblings().removeClass("manage-title");
		});
	}
	$(".info-center-title").mouseleave(function(){
		$(".solid-slider").css({"width":span_width+"px","left":span_left});
		$(".solid-slider").animate({left:span_left},200);
	});
}

//页码浮动
function offical_page(){
	var $len=$(".show-page .page").children().length;
	if($len<1){
		$(".show-page").addClass("hidden");
	}
	$(".offcial-table").find('.tr').last().addClass('border-bottom-none');
	var $page_top=$(".offcial-table").offset().top+$(".offcial-table").height();
	if(($(window).height()-50)<$page_top && $(window).height()>($(".offcial-table").offset().top+50)){
			$(".show-page").addClass('float-position');
		}else{
			$(".show-page").removeClass('float-position');
		}
	$(window).scroll(function(){
		if(($(window).height()-50)<$page_top && $(window).height()>($(".offcial-table").offset().top+50)){
			$(".show-page").addClass('float-position');
		}else{
			$(".show-page").removeClass('float-position');
		}
	});
	$(window).resize(function(){
		if(($(window).height()-50)<$page_top && $(window).height()>($(".offcial-table").offset().top+50)){
			$(".show-page").addClass('float-position');
		}else{
			$(".show-page").removeClass('float-position');
		}
	});
}


//进度条
function progress(){
	var i=0;
	var _max_width=$(".progress-bar").width();
	var _width=$(".progress-bar").children().eq(0).data("width");
	var level_text =$(".progress-bar").closest(".account-basic").find(".leval-safe");
	var progress_bar = $(".progress-bar div");
	var width_num = _max_width/100*_width;
	if(_width<=50){
		level_text.text('低').css("color","#d3290c");
		progress_bar.css("background","#d3290c");
	}else if(_width<=80){
		level_text.text('中').css("color","#f90");
		progress_bar.css("background","#f90");
	}else{
		level_text.text('高').css("color","#40b2da");
		progress_bar.css("background","#40b2da");
	}
	progress_bar.animate({width:width_num},500);
}


//左侧导航栏滑动
function nav_slider(){
	var num=0;
	var sh = 40;
	var height_big=$(".sidebar-content").height();
	var height=$(".view-sidebar").height();
	if(height<height_big){
		$(".show-side").addClass('show');
	}else{
		$(".show-side").removeClass('show');
	}
	$(window).resize(function(){
		var height_big=$(".sidebar-content").height();
		var height=$(".view-sidebar").height();
		if(height<height_big){
			$(".show-side").addClass('show');
		}else{
			$(".show-side").removeClass('show');
		}
		//上滑
		$(".show-side .top").click(function() {

			var top=$(".sidebar-content").offset().top-50;

			if (!((height_big+top) < height)) {
				num++;
				$(".sidebar-content").animate({
					marginTop: "-" + num*sh + "px"
				}, 100);
			}

		});
		//下滑
		$(".show-side .bottom").click(function() {
			num--;
			if (num <= 0) {
				num = 0;
			}
			$(".sidebar-content").animate({
				marginTop: "-" + num*sh + "px"
			}, 100);
		});
	});
	//上滑
	$(".show-side .top").click(function() {

		var top=$(".sidebar-content").offset().top-50;

		if (!((height_big+top) < height)) {
			num++;
			$(".sidebar-content").animate({
				marginTop: "-" + num*sh + "px"
			}, 100);
		}

	});
	//下滑
	$(".show-side .bottom").click(function() {
		num--;
		if (num <= 0) {
			num = 0;
		}
		$(".sidebar-content").animate({
			marginTop: "-" + num*sh + "px"
		}, 100);
	});
}


//弹窗
function pop_up_show(){
	$(".pop-up").addClass('show');
	$(".pop-up-con").addClass('show');
}
function pop_up_close(){
	$(".pop-up").removeClass('show');
	$(".pop-up-con").removeClass('show');
}


//验证码
;(function(){
	$.fn.code_indentiy=function(){
		this.click(function(){
			$(".identify-code").attr("disabled",false);
			var parent=$(this).closest('.revise-right');
			var $p=parent.find('p');
			$p.removeClass('code-error');
			$p.removeClass('code-send');
			$(this).addClass('revise-grey');
			$this=$(this);
			var i=60;
			var interval=setInterval(function(){
				if(i>1){
					i--;
					$this.text(i+"秒后，重新发送验证码");
				}else{
					clearInterval(interval);
					$this.removeClass('revise-grey').text("重新发送验证码");
				}
			},1000);
		});
	}
})(jQuery);

