(function($) {
    "use strict"

 $('.fade_slide_area').slick({
  dots: false,
  infinite: true,
  autoplay: true,
  autoplaySpeed: 1500,
  speed: 500,
  fade: true,
  cssEase: 'linear'
});

     $(".awol_carosel_area").owlCarousel({
         center: false,
         items: 2,
         loop: true,
         autoplay:true,
         margin: 20,
          nav: true,
          navText:['<i class="fas fa-long-arrow-alt-right"></i>','<i class="fas fa-long-arrow-alt-left"></i>']
          
     }); $(".awol_carosel_area1").owlCarousel({
         center: false,
         items: 2,
         loop: true,
         autoplay:true,
         margin: 20,
          nav: true,
          navText:['<i class="fas fa-long-arrow-alt-right"></i>','<i class="fas fa-long-arrow-alt-left"></i>']
          
     });

 $(".owl-loaded ").addClass("owl-carousel");


})(jQuery);
