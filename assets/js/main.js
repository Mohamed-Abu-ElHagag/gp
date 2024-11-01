// Library
//=================AOS================================//
AOS.init();
//===============fitText=============================//
jQuery("#responsive_headline").fitText(1.2, {
  minFontSize: "15px",
  maxFontSize: "18px",
});
jQuery("#font-btn").fitText(1.2, { minFontSize: "15px", maxFontSize: "18px" });
jQuery("#font-heroH4").fitText(1.2, {
  minFontSize: "18px",
  maxFontSize: "30px",
});
jQuery("#font-heroH1").fitText(1.2, {
  minFontSize: "20px",
  maxFontSize: "55px",
});
jQuery("#about-p").fitText(1.2, {
  minFontSize: "12px",
  maxFontSize: "18px",
});
jQuery("#about-h4").fitText(1.2, {
  minFontSize: "18px",
  maxFontSize: "25px",
});
//==============OWL========================//
$('.owl-carousel').owlCarousel({
  loop:true,
  margin:10,
  nav:false,
  autoplay: true,
  autoplayTimeout:2000,
  autoplayHoverPause:true,
  smartSpeed:5000,
  responsive:{
      0:{
          items:2
      },
      600:{
          items:4
      },
      1000:{
          items:6
      }
  }
})
 

// My Code

$(document).ready(function () {
  $(window).scroll(function () {
    if (scrollY >= 70) {
      $("nav").addClass("scrollBG");
    } else {
      $("nav").removeClass("scrollBG");
    }
  });
});
