$(document).ready(function() {


  let n1924 = new Swiper('.mo_station',{
    loop:true,
    navigation: {
      nextEl: ".next",
      prevEl: ".prev",
    },
    breakpoints: {
      // when window width is >= 480px
      280: {
        slidesPerView: 1,
      },
      // when window width is >= 640px
      768: {
        slidesPerView: 2,
      }
    }
  })

  function linseoInit(selector){
    let slides = $(selector+">li").length;
    let move = 100/slides;
    $(selector).css("transform","translateX("+(move*2)+"%)")
    $(selector+" .on").next().addClass("small");
    $(selector+" .on").next().next().addClass("small2")
  }

  function linseoWantNavi(selector,idx){
    let slides = $(selector+">li").length;
    let move = 100/slides;

    $(selector+">li").removeClass("small");
    $(selector+">li").removeClass("small2");

    if(idx>-1 && idx<slides){
      $(selector).css("transform","translateX("+(-move*(idx-2))+"%)")
    }

    $(selector+">li").eq(idx).prev().addClass("small");
    $(selector+">li").eq(idx).next().addClass("small");
    $(selector+">li").eq(idx).prev().prev().addClass("small2");
    $(selector+">li").eq(idx).next().next().addClass("small2")
    $(selector+">li").removeClass("on");
    $(selector+">li").eq(idx).addClass("on");

  }

  function slideBar(selectorSlide,selectorBar,idx){
    let slides = $(selectorSlide+">li").length;
    let move = 100/slides;

    $(selectorBar).css("width",move*(idx2+1)+"%")
    //console.log(idx2)
  }



  function loopSlideBar(selectorSlide,selectorBar,idx){
    // console.log("전달받은펄뷰"+copies)
    let copies = $(selectorSlide+">li.swiper-slide-duplicate").length;
    //console.log("복사된개체"+copies)
    let slides = ($(selectorSlide+">li").length)-copies;
    //console.log("슬라이드개수:"+slides)
    let move = 100/slides;

    $(selectorBar).css("width",move*(idx+1)+"%")
  }



  linseoInit(".navi_0");
  let tin = new Swiper('.tin',{
    on:{
      slideChange:function(){
        linseoWantNavi(".navi_0",this.activeIndex)
      },
    },
    navigation: {
      nextEl: ".next",
      prevEl: ".prev",
    },
  })

  linseoInit(".navi_1");
  let ad1 = new Swiper('.ad_1',{
    on:{
      slideChange:function(){
        linseoWantNavi(".navi_1",this.activeIndex)
      },
    },
    navigation: {
      nextEl: ".next",
      prevEl: ".prev",
    },
  })
  // ad2.slideTo(3)

  linseoInit(".navi_2");
  let n1975 = new Swiper('.mo_poto',{
    on:{
      slideChange:function(){
        linseoWantNavi(".navi_2",this.activeIndex)
      },
    },
    navigation: {
      nextEl: ".next",
      prevEl: ".prev",
    },
  })

  linseoInit(".navi_3");
  let ad2 = new Swiper('.ad_2',{
    on:{
      slideChange:function(){
        linseoWantNavi(".navi_3",this.activeIndex)
      },
    },
    navigation: {
      nextEl: ".next",
      prevEl: ".prev",
    },
  })

  let n1988 = new Swiper('.poto',{
    on:{
      slideChange:function(){
        let idx = this.activeIndex

        $(".navi_4>li").removeClass("on");
        $(".navi_4>li").eq(idx).addClass("on");
      },
    },
    navigation: {
      nextEl: ".next",
      prevEl: ".prev",
    },
  })

  linseoInit(".navi_5");
  let ad3 = new Swiper('.ad_3',{
    on:{
      slideChange:function(){
        linseoWantNavi(".navi_5",this.activeIndex)
      },
    },
    navigation: {
      nextEl: ".next",
      prevEl: ".prev",
    },
  })

  let n1911_14 = new Swiper('.mo_station2',{
    on:{
      slideChange:function(){
        slideBar('.mo_station2>ul',".N1911_14 .bar2",this.realIndex)
      },
    },

  })

  let main_advice = new Swiper(".advice_contants", {

    loop:true,
    centeredSlides: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    navigation: {
      nextEl: ".button_right",
      prevEl: ".button_left",
    },
    on:{
      slideChange:function(){
        loopSlideBar(".advice>.advice_contants>ul",".advice .bar2",this.realIndex)

      },
    },
    breakpoints: {
   // when window width is >= 320px
      780: {
        slidesPerView: 4,
      },
    },
    slidesPerView:1
  });

  let main_heritage = new Swiper(".mo_heritage",{
    navigation: {
      nextEl: ".next",
      prevEl: ".prev",
    },
  })

  let main_best = new Swiper(".best>.mo_slide",{
    loop:true,
    navigation: {
      nextEl: ".mo_next",
      prevEl: ".mo_prev",
    },
    on:{
      slideChange:function(){
        loopSlideBar(".best>.mo_slide>ul",".best .bar2",this.realIndex)
      },
    },
  })

  let product_pc_banner = new Swiper(".all_subP>.pc_banner",{
    slidesPerView: 1,
        spaceBetween: 30,
        loop: true,
        pagination: {
          el: ".all_subP>.pc_banner>.swiper-pagination",
          clickable: true,
        },
    navigation: {
      nextEl: ".all_subP>.pc_banner .btn_next",
      prevEl: ".all_subP>.pc_banner .btn_prev",
    },
  })

  let product_mo_banner = new Swiper(".all_subP>.mo_banner",{
    slidesPerView: 1,
        spaceBetween: 30,
        loop: true,
        pagination: {
          el: ".all_subP>.mo_banner>.swiper-pagination",
          clickable: true,
        },
  })


  let product_Best = new Swiper(".all_subP .best>.slide",{
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    breakpoints: {
   // when window width is >= 320px
      780: {
        slidesPerView: 3,
      },
    },
    navigation: {
      nextEl: ".all_subP .best .next",
      prevEl: ".all_subP .best .prev",
    },
    on:{
      slideChange:function(){
        let slides = ($(".all_subP .best>.slide>ul>li").length)-6
        let move = 100/slides;
        //console.log(slides)
        $(".all_subP .best .bar2").css("width",move*(this.realIndex+1)+"%")

        $(".all_subP .best>.slide li").removeClass("on")
        $(".all_subP .best>.slide li").eq(this.activeIndex).next().addClass("on")
      },
    },

  })

  let product_AD = new Swiper(".re_advice>.slide",{
    loop:true,
    navigation: {
      nextEl: ".re_advice .next",
      prevEl: ".re_advice .prev",
    },
    breakpoints: {
   // when window width is >= 320px
      780: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
    },
  })

  let advice_PD = new Swiper(".re_products>.slide",{
    loop:true,
    navigation: {
      nextEl: ".re_products .next",
      prevEl: ".re_products .prev",
    },
    breakpoints: {
   // when window width is >= 320px
      780: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
    },
  })



})
