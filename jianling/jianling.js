$(function(){
/******************轮播1********************/
	 var banner = {
    index:0,
    image:["banner_01.jpg","banner_02.jpg","banner_03.jpg","banner_04.jpg","banner_05.jpg","banner_06.jpg"],
    WAIT:1500,
    timer:null,
    change:function(){
     if(banner.index==6){
        banner.index=0;
       } 
       $("#hunsa_zuo>a>img").attr("src",
       banner.image[banner.index]);
      $("#hunsa_zuo li").removeClass("quan_1");
      $("#hunsa_zuo li:eq("+banner.index+")").addClass("quan_1");
       banner.index++;

     },
     start:function(){
       banner.timer = setInterval(banner.change,banner.WAIT);
       $("#hunsa_zuo").hover(function(){
         clearInterval(banner.timer);
       },function(){
         banner.timer = setInterval(banner.change,banner.WAIT);
       });
     }
  }
  banner.start();
/***************轮播2*****************/
     var i=0;
    function a1(){
      
      if(i>2){
        i=0;
      }
      $(".eee li").css("display","none");
     $(".w"+i).css("display","block");
     $(".zhong_zuo>.xiaoyuanquan li").removeClass("quan_1");
      $(".zhong_zuo>.xiaoyuanquan li:eq("+i+")").addClass("quan_1");
      i++;
    }
  var a2=setInterval(function(){
    a1()
  },2000);
  $(".eee li").hover(function(){clearInterval(a2);},function(){a2=setInterval(function(){
    a1()
  },2000);});
  /**********************下拉菜单 透明背景***************/
  $("#xiala").hover(function(){
    $("#xiala").css("height",'0');
      $("#xiala_biao").show();
      $("#xiala").css("background-image","url(css/touming.png)");
       $("#xiala").animate({height:"300"},1000);
  },function(){
       $("#xiala_biao").hide();
       $("#xiala").css("background","");
        $("#xiala").animate({height:"0"},1);
  });
/****************************新闻*********************/
  $("#gonggao_h1 li").hover(function(){
      var id = $(this).attr("data-i");
	  $("#gonggao_h1 li a").css("color","#333b48")
	  $(this).children("a").css("color","#ee0000")
      $("#gonggao").children("div[data-i]").hide();
       if(id==1){
    $("#gonggao").children("div[data-i=1]").show();
   }else{
    $("#gonggao").children("div[data-i="+id+"]").show();
    $("")
   }
  })
  /**********下拉********************************/
  $("#hezuo").hover(function(){
	  $("#meiti").css("display","block")
	  },function(){
		 $("#meiti").css("display","none") 
		  })
/*************点击 换图********/
	$("#zi li").click(function(){
		var id=$(this).attr("data-c");
		$("#zi li a").css("color","#545758")
		$(this).children("a").css("color","#ee0000")
		$("#quan li").css("display","none");
		$("#quan li:nth-child("+id+")").css("display","block");
			
		});  
		
/*********************资讯********************/
$("#tuijian .woe").click(function(){
	var id=$(this).attr("data-d");
	var a = 1+id*2;
	$(".tuijian_1").css("display","none");
	$("#tuijian .tuijian_1:nth-child("+a+")").css("display","block");
	})
	

});

