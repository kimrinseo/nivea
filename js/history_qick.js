$(document).ready(function(){
  $(window).scroll(function(){
    let windowHeight = window.innerHeight;
    let scrollTop = $(window).scrollTop();
    let docHeight = $(document).height();
    let fH=$("footer").height();
    //console.log("TESTA:"+scrollTop)
    //console.log("TESTB:"+(docHeight-window.innerHeight-fH))

    // $(".qickNavi").removeClass("on")
    if(scrollTop > $(".all_subH>.story").offset().top && scrollTop <docHeight-window.innerHeight-fH){
      $(".qickNavi").addClass("on")
    }
    else if(scrollTop >= docHeight-windowHeight-fH){
      // alert("끝")
      $(".qickNavi").removeClass("on")
    }
  })
})
