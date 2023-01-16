$(document).ready(function(){

  $('.hrefNone').click(function(e) {
  e.preventDefault();
  });

  let clickView = function(clickMe,veiwHere,close){
    $(clickMe).click(function(){
      if ($(veiwHere).hasClass("on")){
        $(veiwHere).removeClass("on")
      }else{
        $(veiwHere).addClass("on")
      }
    })
    $(close).click(function(){
      $(veiwHere).removeClass("on")
    })
  }

  clickView(".mo_header>.searchManu .manu",".mo_header")
  clickView(".care>a>figure",".viewBetter",".close")
  clickView(".mo_station .boys>a>figure",".viewBoys",".close")
  clickView(".mo_station .glrls>a>figure",".viewGlrls",".close")
  clickView(".pc_station .boys>a>figure",".viewBoys",".close")
  clickView(".pc_station .glrls>a>figure",".viewGlrls",".close")

  $("footer>p").click(function(){
    if ($("footer").hasClass("on")){
      $("footer").removeClass("on")
      $("footer>.allFooter").height(0)
    }else{
      $("footer").addClass("on")
      let foHeight = $(".fT").height()+$(".fB").height()+85
      $("footer>.allFooter").height(foHeight)
    }
  })


  //$(".mo_depthManu>ul>li").click(function(){
  //  let ul2 = $(this).children("ul");
  //  let ul2Height = [192,192,63,192,null];
  //  let idx=$(this).index();
  //  console.log(ul2Height[idx]);
  //  $(".mo_depthManu>ul>li>ul").css("height",0);

  //  if($(this).hasClass("on")){
  //    //열려있는 상태인 경우 닫는소스
  //    $(".mo_depthManu>ul>li").removeClass("on");
  //    $(".mo_depthManu>ul>li>a").removeClass("on")
  //  }else{
  //    //닫혀있는 상태인 경우 여는소스
  //    $(this).addClass("on")
  //    $(".mo_depthManu>ul>li>a").addClass("on")
  //    ul2.css("height",ul2Height[idx]);
  //  }
  //})

  // function open_close(oc){
  //   $(oc).click(function(){
  //
  //     $(oc).removeClass("on");
  //     if($(this).hasClass("on")){
  //       $(this).removeClass("on");
  //     }else{
  //       $(this).addClass("on")
  //     }
  //   })
  // }
  //
  // open_close(".mo_depthManu>ul>li")
  // open_close(".mo_depthManu .depth_2>li")

  let lastScrollTop = 0;
  $(window).scroll(function(){
    let scrollTop = $(window).scrollTop()
    let timerHeader = setTimeout(function(){
       lastScrollTop = $(window).scrollTop();
       if(scrollTop-lastScrollTop > 0){
         //console.log("스크롤 올림")
         $("header.on,.mo_header").css("transform","translateY(0)")
         $(".qick").css("opacity","1").css("transform","translateY(0)").css("pointer-events","auto")
       }else if(scrollTop-lastScrollTop < 0){
         //console.log("스크롤 내림")
         $("header.on,.mo_header").css("transform","translateY(-100%)")
         $(".qick").css("opacity","0").css("transform","translateY(10px)").css("pointer-events","none")
       }
       clearTimeout(timerHeader);
    },25);

    // console.log("current:"+scrollTop)
    // console.log("LAST:"+lastScrollTop)

    if(scrollTop>$(".all_contants").offset().top){
      $(".pc_header").addClass("on")
    }else{
      $(".pc_header").removeClass("on")
    }


  });

  $(".best,.all .advice>h2,.advice_contants,.heritage>h2,.heritage>h3,.heritage_Station,.re_advice,.text>.text1,.text>.text2,.text>.text3,.re_products,.all_subA>.text,.youtube,.touch,.rule>.station li,.power>.text2,.day>.station li,.bodyTip li").each(function(){
    $(this).attr("dataFlag","false");
    $(this).css("transition","all .5s ease .1s").css("opacity","0").css("pointer-events","none").css("transform","translateY(50px)")
  })

  $(".rule>.station li").eq(0).css("transition","all .5s ease 0s")
  $(".rule>.station li").eq(1).css("transition","all .5s ease .4s")
  $(".rule>.station li").eq(2).css("transition","all .5s ease .8s")
  $(".day>.station li").eq(0).css("transition","all .5s ease 0s")
  $(".day>.station li").eq(1).css("transition","all .5s ease .4s")
  $(".day>.station li").eq(2).css("transition","all .5s ease .8s")

  $(window).scroll(function(){
    let scrollTop = $(window).scrollTop()
    let windowHeight = window.innerHeight*0.7;


    $(".best,.all .advice>h2,.advice_contants,.heritage>h2,.heritage>h3,.heritage_Station,.re_advice,.text>.text1,.text>.text2,.text>.text3,.re_products,.all_subA>.text,.youtube,.touch,.rule>.station li,.power>.text2,.day>.station li,.bodyTip li").each(function(){

      if(scrollTop+windowHeight>$(this).offset().top && $(this).attr("dataFlag")=="false"){
        $(this).addClass("on").css("opacity","1").css("pointer-events","auto").css("transform","translateY(0)")
        $(this).attr("dataFlag","true");
      }
    })

  })

  //

  let bestCount = 0;

  $(".best>.pc_controller>.next").click(function(){
    bestCount++
    if(bestCount>5){
      bestCount=0;
    }

    console.log(bestCount)
    $(".pc_slide>ul>li").removeClass()
    $(".pc_slide>ul>li").eq((bestCount)%6).addClass("l1")
    $(".pc_slide>ul>li").eq((bestCount+1)%6).addClass("l2")
    $(".pc_slide>ul>li").eq((bestCount+2)%6).addClass("l3")

  })

  $(".best>.pc_controller>.prev").click(function(){
    bestCount--
    if(bestCount<0){
      bestCount=5;
    }
    console.log(bestCount)
    $(".pc_slide>ul>li").removeClass()
    $(".pc_slide>ul>li").eq((bestCount)%6).addClass("l1")
    $(".pc_slide>ul>li").eq((bestCount+1)%6).addClass("l2")
    $(".pc_slide>ul>li").eq((bestCount+2)%6).addClass("l3")
    // $(".pc_slide>ul>li").removeClass()
    // $(".pc_slide>ul>li").eq(bestCount).addClass("l1")
    // $(".l1").next().addClass("l2")
    // $(".l2").next().addClass("l3")

    // if (bestCount == 0){
    //   setTimeout(function(){
    //     $(".pc_slide>ul>li").css("transition","none");
    //     bestCount = 6;
    //     $(".pc_slide>ul>li").removeClass()
    //     $(".pc_slide>ul>li").eq(bestCount).addClass("l1")
    //     $(".l1").next().addClass("l2")
    //     $(".l2").next().addClass("l3")
    //   },500)
    // }else{
    //   $(".pc_slide>ul>li").css("transition","all 0.5s ease 0s");
    // }

  })

  // $(".products>.btn_more").click(function(){
  //   // 제품 리스트 더보기 버튼 js
  //   $("products_list").css("height","auto")
  // })

  $(".qickNavi li>a").click(function(e){
    e.preventDefault();
    let targetHref = $(this).attr("href")
    let movePage = $(targetHref).offset().top;
    $("html,body").stop().animate({scrollTop:movePage},800)
  })

  $(".all_subH>.scrollPage").on("wheel DOMMouseScroll",function(event){
    let E = event.originalEvent;
    let delta = 0;
    if(E.detail){
      delta = E.detail = -40;
    }else{
      delta = E.wheelDelta;
    }

    if(delta>0){
      let movePage = $(this).prev().offset().top;
      $("html,body").stop().animate({scrollTop:movePage},800)
    }else{
      let movePage = $(this).next().offset().top;
      $("html,body").stop().animate({scrollTop:movePage},800)
    }
  })


  $(".all_subH>.scrollPage2").on("wheel DOMMouseScroll",function(event){

    let E = event.originalEvent;
    let delta = 0;
    if(E.detail){
      delta = E.detail = -40;
    }else{
      delta = E.wheelDelta;
    }
    let docHeight = $(document).height();
    let thisTop = $(this).offset().top;
    let thisHeight = $(this).height();
    let thisTop2 = $(this).offset().top + thisHeight;
    let winH = window.innerHeight/2;
    let scrollTop = $(window).scrollTop();
    console.log("TESTA:"+scrollTop)
    // console.log("TESTA2:"+thisTop2)
    // console.log("TESTA3:"+(thisTop2-(winH*2)))


    if(delta>0){
      if(scrollTop>=thisTop && scrollTop<thisTop+winH){
        let movePage = $(this).prev().offset().top;
        $("html,body").stop().animate({scrollTop:movePage},800)
      }
    }else{
      if(scrollTop<=+thisTop2 && scrollTop>thisTop2-(winH*2)){
        let movePage = $(this).next().offset().top;
        $("html,body").stop().animate({scrollTop:movePage},800)
      }
    }
  })

  $(window).scroll(function(){
    let count = 0;
    let windowH = window.innerHeight/2
    //let posTop = ($(window).scrollTop()/10+10000)%201;
    let posTop = ($(window).scrollTop()/25+10000)%201;

    $(".niveaCreme>.nivea").css("transform","translateX("+-(posTop)+"%)");
    $(".niveaCreme>.creme").css("transform","translateX("+(posTop)+"%)");

  })

  $(".cards").click(function(){
    if($(this).hasClass("on")){
      $(this).removeClass("on")
    }else{
      $(this).addClass("on")
    }
  })

  $(".qick>.up").click(function(){
    $("html, body").animate({ scrollTop: 0 }, 500);
  })

  $(".qick>.down").click(function(){
    let bottom = $(document).height();
    let windowH = window.innerHeight

    $("html, body").animate({ scrollTop: bottom-windowH }, 500);
  })

  if(matchMedia("screen and (min-width: 769px)").matches){
    let productList = $(".products_list>li").eq(0).height()+110
    $(".products_list").height(productList*4)

    $(".products>.btn_more").click(function(){
      // let slideListH = $(".products_list>li").eq(0).height()
      let slideListH2 = $(".products_list>li").eq(4).height()+120
      let slideNum = $(".products_list>li").length/4
      // alert(slideListH2)

       $(".products_list").css("height",(slideListH2*slideNum)+"px")
    })

    let adviceList = $(".advice_list>li").eq(10).height()+110
    $(".advice_list").height(adviceList*4)

    $(".advice>.btn_more").click(function(){
      // let slideListH = $(".products_list>li").eq(0).height()
      let slideListH2 = $(".advice_list>li").eq(17).height()+120
      let slideNum = $(".advice_list>li").length/3
      //alert(slideListH2)

       $(".advice_list").css("height",(slideListH2*slideNum)+"px")
    })
  }

  if(matchMedia("screen and (max-width: 768px)").matches){
    let productList = $(".products_list>li").eq(0).height()+100
    $(".products_list").height(productList*4)

    $(".products>.btn_more").click(function(){
      // let slideListH = $(".products_list>li").eq(0).height()
      let slideListH2 = $(".products_list>li").eq(4).height()+120
      let slideNum = $(".products_list>li").length/2
      // alert(slideListH2)

       $(".products_list").css("height",(slideListH2*slideNum)+"px")
    })

    let adviceList = $(".advice_list>li").eq(4).height()+100
    $(".advice_list").height(adviceList*4)

    $(".advice>.btn_more").click(function(){
      // let slideListH = $(".products_list>li").eq(0).height()
      let slideListH2 = $(".advice_list>li").eq(1).height()+120
      let slideNum = $(".advice_list>li").length/1
      //alert(slideListH2)

       $(".advice_list").css("height",(slideListH2*slideNum)+"px")
    })
  }



})
