var time_delay=null;
var BrowseVer=0
$(document).ready(function(){
	$("#more .btnmore").mouseenter(function(){
		$(this).parent().find(".morebox").fadeIn(300)
	})
	$("#more").mouseleave(function(){	$(this).find(".morebox").fadeOut(300)})

		if ($("#playBanner").length>0)
		{
				$("#playBanner").Xslider({
					speed: 1200, 
					space: 3000,
					auto: true, //自动滚动
					affect:'fade',
					ctag: 'div'
				});
		}
		$('#Introduction .Tab').Tab({lilab:"li",labselect:".change",Tabname:".Tab_nr",labaction:"click",animatename:"scroll_x",animateTime:600,mode:"none"})
		$('#Docs .Tab').Tab({lilab:"li",labselect:".change",Tabname:".Tab_nr",labaction:"click",animatename:"scroll_x",animateTime:600,mode:"none"})
		$('#PhotoSHow .Tab').Tab({lilab:"li",labselect:".change",Tabname:".Tab_nr",labaction:"click",animatename:"scroll_x",animateTime:600,mode:"none"})
		$(".Tab").Tab_()
		$(".fenlei").Tab_()
		
		
	/*播放视频*/		 
	$("#btn_play").one("click",function(){
		var videourl=$(this).attr("data-file")	
		var autoplay=$(this).attr("data-autoplay")	
		var playobj=$(this).attr("data-playobj")
		if ($(playobj).length==0) return false;
		
		if (videourl)
		{
			
		var w=$(playobj).outerWidth()
		var h=$(playobj).outerHeight()
			
		var writehtml='<object class id="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" codebase="/download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=7,0,19,0" width="'+w+'" height="'+h+'">'
			writehtml+='<param name="movie" value="flash/Flvplayer.html">'
			writehtml+='<param name="quality" value="high">'
			writehtml+='<param value="transparent" name="wmode">'
			writehtml+='<param name="allowFullScreen" value="true">'
			writehtml+='<param name="FlashVars" value="vcastr_file='+videourl+'&BufferTime=3&IsAutoPlay='+autoplay+'">'
			writehtml+='<embed src="flash/Flvplayer.swf" wmode="Opaque" allowfullscreen="true" flashvars="vcastr_file='+videourl+'&IsAutoPlay='+autoplay+'" quality="high" pluginspage="/www.macromedia.com/go/getflashplayer" type="application/x-shockwave-flash" width="'+w+'" height="'+h+'"></embed>'
			writehtml+='</object>'
			
			$(this).stop(true,false).animate({opacity: 0}, 500,function(){$(playobj).html(writehtml)})
		}
		
		
	})	
	
		
	$("#Video").bind('mouseenter',function(){
				var self=$(this).find("img");
				time_delay=setTimeout(function(){
							if(!self.is(":animated"))
							{
								self.addClass("star_animate");
								self.stop(true,false).animate({"opacity":0.6}, 500);
							}
					
				},100)
			
		}).bind('mouseleave',function(){
				clearTimeout(time_delay)	
						var self=$(this).find("img")
						if (self.is(".star_animate"))
						{		
								self.removeClass("star_animate");
								self.stop(true,false).animate({"opacity":1}, 500);
						}
		})
		
				
	/*友情链接悬停*/
	$("#links").bind("mouseenter",function(){
		$(this).find("dd").stop().slideDown(150)
		
		}).bind("mouseleave",function(){
			
		$(this).find("dd").slideUp(150)		
	})
	$("#ZhiYe").ZhiYe()
	$(".PhotoList .photo").hover_shine()
	$(".btn_download,.btn_jiangli").hover_shine()
	
	
	
	$.fn.css3_allnth()
	
	
	
	
})
$.fn.css3_allnth=function(){
	if (BrowseVer=="ie7" || BrowseVer=="ie6" || BrowseVer=="ie8")
	{
		
			$.fn.css3_nthchild2(
					"#menu",
					[
						{"set_obj":"li:nth-child(4)","set_class":"margin_left"},
						{"set_obj":"li:last-child","set_class":"margin_0"}
						
					]						
			)
	
	}
}
//ie8和IE8以下运行CSS3 nth-child（xn) 兼容
$.fn.css3_nthchild2=function(obj,objlist){
	var obj=$(obj)
	if (obj.length==0) return false;
	var window_w=$(window).width();
	var runok=-1;
	$.each(objlist,function(index,value){
		var objs=objlist[index];
		obj.find(objs.set_obj).removeClass(objs.set_class)		
	})
	
	$.each(objlist,function(index,value){
		var objs=objlist[index],max_width,min_width
		if (typeof(objs.set_width)!="undefined")
		{
		  max_width=parseInt(objs.set_width.split("index.html")[0])
		  min_width=parseInt(objs.set_width.split("index.html")[1])
		}
		else
		{
			window_w=0
			max_width=0
			min_width=0
			
		}
		if (window_w<=max_width && window_w>=min_width)
		{
			
			obj.find(objs.set_obj).addClass(objs.set_class)
			runok=parseInt(index)
			return false  
		}
	})
}

//职业切换
$.fn.ZhiYe=function(){
	var obj=$(this)
	if (obj.length==0) return false;
	
	
	var navobj=obj.find(".ZhiYeTab")
	var boxobj=obj.find(".zhiyeBox")
	if (navobj.find("li.change").length==0) 
	{
		navobj.find("li:first").addClass("change");		
		var index=$(this).index();
	}
	
	obj.find(".zhiyeBox:eq("+navobj.find("li.change").index()+")").fadeIn()
	
	navobj.find("li").bind("click",function(){
		
		//已加载的
		var index2=$(this).siblings(".change").index()
		var obj002=obj.find(".zhiyeBox:eq("+index2+")")
		var objleft2=obj002.find(".txt")
		var objright2=obj002.find(".zheye_pic")
		
		//等待加载的
		$(this).addClass("change").siblings().removeClass("change");
		var index=$(this).index();
		var obj001=obj.find(".zhiyeBox:eq("+index+")")
		var objleft=obj001.find(".txt")
		var objright=obj001.find(".zheye_pic")
		
		
			  var outplay=[
				function(){objleft2.animate({"opacity":"0","left":"-242px"},200,plays)},
				function()
				{objright2.animate({"opacity":"0","right":"-125px"},200,plays)}
				,
				function(){
				obj002.css("display","none")		
				obj001.css("display","block")		
				plays();
				},
				function(){
					objleft.css({"left":"-242px","opacity":0}).stop().animate({"opacity":1,"left":"51px"},{ duration:500,easing:'easeInOutCirc' },plays())
				}
				,function(){
					objright.css({"right":"-125px","opacity":0}).stop().animate({"opacity":1,"right":"0px"},{ duration:500,easing:'easeInOutCirc' },plays())
				}
				
			 ]
				
		
		

			obj.queue("playlist01",outplay)	
			var plays=function(){obj.dequeue("playlist01")}
			plays()
			
		
	})
}

//悬停发光效果
$.fn.hover_shine=function(){
		var obj=$(this)
		if (obj.length==0) return false;
		obj.each(function(index, element) {
            obj.append("<i class='shine'></i>")
        });
		var time_delay=null;
		
		obj.bind('mouseenter',function(){
					var self=$(this)
					clearTimeout(time_delay)	
					time_delay=setTimeout(function(){
								if(!self.is(":animated"))
								{
									self.addClass("hover");
								var self_shine=self.find(".shine");
									self_shine.stop(true,false).animate({"left":"468px"}, 1000);
								}
						
					},100)
				
			}).bind('mouseleave',function(){
				   clearTimeout(time_delay)	
							var self=$(this)
							if (self.is(".hover"))
							{		
								var self_shine=self.find(".shine");
									self_shine.stop(true,false).animate({"left":"-468px"},700);
									self.removeClass("hover");
							}
			})		
		
}


//选项卡滑动
	$.fn.Tab_=function(){
		var obj=$(this)
		if (obj.length==0) return false;
		var times=300
		obj.each(function(index, element) {
			var tab_obj=$(this)
			var li=tab_obj.find("li.change");
			
			tab_obj.find("li:last-child").after("<span class='lines'></span>")
			if (li.length>0)
			{
				obj.css("position","relative");
				var width=li.outerWidth();
				var lineobj=tab_obj.find(".lines")
				lineobj.css("width",width);
				
				tab_obj.find("li").bind("mouseenter",function(){
						var left=$(this).position().left
						lineobj.stop(true,false).animate({"left":left},times)
				}).bind("mouseleave",function(){
						if (!$(this).is(".change"))
						{
						var left=$(this).siblings(".change").css("position","static").position().left;
						 lineobj.stop(true,false).animate({"left":left},times)
						}
						
				})
				var left=li.css("position","static").position().left;
				lineobj.stop(true,false).animate({"left":left},0)
				
			}
		});	
	}

//选项卡切换
		$.fn.Tab=function(config){
			var self=$(this);
			var select_=0;
			var classname=config.labselect.replace(".","")
			if (self.length==0) return false;
			if (self.find(config.lilab).length==0) return false;
			
			
			self.each(function(index, element) {
							
				self=$(this);
						
						if (self.find(config.labselect).length==0) 
						{self.find(config.lilab+":eq(0)").addClass(classname);}
						self.find(config.lilab).each(function(index, element) {
							if (!$(this).is(config.labselect))
							{
								self.siblings(config.Tabname+":eq("+index+")").hide();
							}
						});
						
						self.find(config.lilab).bind(config.labaction+".action",function(){
							
							var index=$(this).index();
							if(self.siblings(config.Tabname+":visible").is(":animated")){ 
							return false;
							
							}

							
							if ($(this).is(config.labselect)) return false;
							var index2=$(this).siblings(config.labselect).index()
							$(this).addClass(classname).siblings().removeClass(classname);
							
							config.animate(index,index2,config.animatename)
							return config.labaction=="click"?   false :  true;
						})
						
						config.animate=function(index,index2,active){
							
							switch (active)
							{
								case "fade":
									self.siblings(config.Tabname+":visible").hide();
									self.siblings(config.Tabname+":eq("+index+")").fadeIn(config.animateTime);
								break;
								case "scroll_x":
									self.parent().css({"position":"relative","overflow":"hidden"});
									var selfs=self.siblings(config.Tabname+":visible")
									var dr="100%",dr2="100%"
									if (index2>index)
									{
										dr="100%";
										dr2="-100%"
									}
									else
									{
										dr="-100%";
										dr2="100%"
									}
									var top=selfs.position().top
									
									
									if (config.mode=="delay")		
									{
									//当前渐隐
									selfs
									.css({"position":"relative","width":"100%"})
									.stop(true,false)
									.animate({"left":dr,"opacity":0},config.animateTime,
												function(){
													 $(this).css({"position":"static","left":"auto","opacity":1,"display":"none"}
												)}
											)
									setTimeout(function(){
												self.siblings(config.Tabname+":eq("+index+")").css({"position":"relative","left":dr2,"display":"block","opacity":0})
												.stop(true,false)
												.animate({"left":0,"opacity":1},config.animateTime
												,function(){
														$(this).css({"top":0,"position":"static"})	
														
												})
									},config.animateTime)		
								
									}
									
									else
									{
										
											selfs
											.css({"position":"absolute","width":"100%","left":selfs.position().left,"top":selfs.position().top})
											.stop(true,false)
											.animate({"left":dr,"opacity":0},config.animateTime,
												function(){
													 $(this).css({"position":"relative","top":"auto","left":"auto","opacity":1,"display":"none"}
												)}
											)
									
									
												self.siblings(config.Tabname+":eq("+index+")").css({"position":"relative","left":dr2,"display":"block","opacity":0})
												.stop(true,false)
												.animate({"left":0,"opacity":1},config.animateTime
												,function(){
														$(this).css({"top":0,"position":"relative"})	
														
												})
									}
								break;
								
							}
							
							
						}


            });

		}


//返回浏览器类型 
$.fn.Browser_ver=function(){
		var navmsg=navigator.userAgent
		var ver='1';
		if(navmsg.indexOf("MSIE")>0){   
			  ver="";
			  if(navmsg.indexOf("MSIE 6.0")>0){ver='ie6'}   
			  if(navmsg.indexOf("MSIE 7.0")>0){ver='ie7'}   
			  if(navmsg.indexOf("MSIE 8.0")>0 && !window.innerWidth){ver='ie8'}   
			  if(navmsg.indexOf("MSIE 9.0")>0){ver='ie9'}   
			  if(navmsg.indexOf("MSIE 10.0")>0){ver='ie10' }   
			  if(navmsg.indexOf("MSIE 11.0")>0){ver='ie11'}   
		} 
		else if(ver=="1" && navmsg.indexOf("Safari")>0){ 
			ver="Saifari"
		}
		else if(ver=="1" && navmsg.indexOf("Firefox")>0){ 
			ver="Firefox"
		}
		else if(ver=="1" && navmsg.indexOf("Opera")>0){ 
			ver="Opera"
		}
		return ver	
}
BrowseVer=$.fn.Browser_ver()



