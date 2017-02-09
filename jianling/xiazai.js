$(function(){
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

  
  $("#hezuo").hover(function(){
	  $("#meiti").css("display","block")
	  },function(){
		 $("#meiti").css("display","none") 
		  })

});
