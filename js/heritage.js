$(document).ready(function(){
  let prgSwitch = false;
  $(window).scroll(function(){
   let scrollTop = $(window).scrollTop()
   let windowHeight = $(window).height()*0.8;
   let heritage = $(".pc_heritage>ul>li")
   //console.log(heritage)

   function showProgress(a,input,time){
    let num = 0;
    let timer = setInterval(function(){
      if(num<input){
        num++
        $(a).text(num)
      }else{
        clearInterval(timer)
      }
    },time)
   }

   if(scrollTop+windowHeight>$(".pc_heritage").offset().top && prgSwitch==false){

     showProgress(heritage.eq(0).find("span"),100,10)
     showProgress(heritage.eq(1).find("span"),173,7)
     showProgress(heritage.eq(2).find("span").eq(0),1,10)
     showProgress(heritage.eq(2).find("span").eq(1),290,0.7)
     showProgress(heritage.eq(3).find("span").eq(0),1,10)
     showProgress(heritage.eq(3).find("span").eq(1),700,0.01)
     showProgress(heritage.eq(4).find("span"),500,0.6)
     showProgress(heritage.eq(5).find("span"),0,10)
     prgSwitch=true;
   }
  })


})
