;(function($){
	var Banner = (function (){
		//定义Banner的构造函数
		function Banner(element,options){
			this.settings=$.extend(true,$.fn.Banner.defaults, options || {});
			this.element=element;
			this.init();
		}
		Banner.prototype={
			init:function(){
				var e = this;
				e.banner = e.element;
				e.current = 0;
				e.timer;
				e.playFlag=true;
				e.lilength = e.banner.find("li").length;
				e.prevBtn = e.banner.find(".prev");
				e.nextBtn = e.banner.find(".next");
				
				// 是否开启自动播放
				if( e.settings.autoPlay && typeof e.settings.autoPlay == "boolean" ){
					e.autoPlay();
					e.banner.find(".box").hover(function(){
						window.clearInterval(e.timer);
					},function(){
						e.autoPlay();
					});
				};
				// 是否开启分页
				if( e.settings.pagination && typeof e.settings.pagination =="boolean" ){
					e.Pagination();
				};
				
				// 是否开启分页
				if( e.settings.buttons && typeof e.settings.buttons =="boolean" ){
					e.Buttons();
				};
			},
			Buttons:function(){
				var e = this;
				e.banner = e.element;
				var switchH = '<div class="arrow"><span class="prev">&lt;</span><span class="next">&gt</span></div>';
				e.banner.append(switchH);
				e.banner.find(".prev").on("click",function(){
					if(e.playFlag){
						e.playFlag=false;
						e.isCarousel(false);
					}
				});
				e.banner.find(".next").on("click",function(){
					if(e.playFlag){
						e.playFlag=false;
						e.isCarousel(true);
					}
				});
			},
			isCarousel:function(method){
				var e = this;
				e.current = method ? (e.current+1+e.lilength) % e.lilength : (e.current-1+e.lilength) % e.lilength;
				e.Carousel(e.current);
			},
			autoPlay:function(){
				var e = this;
				e.timer=window.setInterval(function(){
					e.isCarousel(true);
				},e.settings.delay);
			},
			Carousel:function(current){
				var e = this;
				var ulelem = e.banner.find("ul");
				var wid = ulelem.find("li").width();
				
				ulelem.stop(true,true).animate({
					left:-[(current-1/2)*wid]
				},e.settings.speed,function(){
					e.playFlag=true;
				});
				
				var btn = e.banner.find(".hd span");
				btn.removeClass("active").eq(current).addClass("active");
			},
			Pagination:function(){
				var e = this;
				e.banner = e.element;
				spanH = "";
				for(var i = 0; i < e.lilength; i++) {
					if(i == 0){
						spanH += '<span class="active"></span>';
					}else{
						spanH += '<span></span>';
					}
				}
				e.banner.find(".box").append('<div class="hd">' + spanH + '</div>');
				e.banner.find(".box .hd span").on("click",function(){
					if(e.playFlag){
						e.playFlag=false;
						e.current = $(this).index();
						e.Carousel(e.current);
					}
//					$(this).addClass("active").siblings().removeClass("active");
				})
				return;
			}
		}
		return Banner;
	})();
	
	$.fn.Banner = function (options){
		var _this = $(this);
		return new Banner(_this,options);
	}

	$.fn.Banner.defaults={
		"speed":600,			//动画时长
		"autoPlay":false,		//是否开启自动播放
		"delay":3000,			//自动播放间隔
		"pagination":false,		//分页
		"buttons":false
	}
})(jQuery);
