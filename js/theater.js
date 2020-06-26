'use strict';

{
    $("#movies  li").click(function(){
        $("li").css("border-bottom","5px solid gray");
        $(this).css("border-bottom","5px solid #cc0099");
      });
      
      
  
    $("#schedule").click(function(){
      $(".now").css("display","none");
      $(".future").css("display","flex");
      
    });
  
  
  
    $("#rightnow").click(function(){
      $(".now").css("display","flex");
      $(".future").css("display","none");
      
    });

}