$(document).ready(function() {
  $(".main-slider-photos").owlCarousel({
    items: 1,
    nav: true,
    loop: true,
    autoplay: true,
    autoplayTimeout: 3000,
    margin: 35,
    dots: true,
    dotsEach: true,
    animateOut: "fadeOut",
    smartSpeed: 1500,
    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
        nav: true
      },
      575: {
        items: 1,
        nav: true
      },
      767: {
        items: 1,
        nav: true
      },
      991: {
        items: 1,
        nav: true,
        loop: true
      }
    }
  });

  // momentsSliderPhotos
  $(".moments-slider-photos").owlCarousel({
    items: 1,
    nav: false,
    loop: true,
    autoplay: true,
    autoplayTimeout: 3000,
    margin: 35,
    dots: true,
    dotsEach: true,
    animateOut: "fadeOut",
    smartSpeed: 1500,
    responsiveClass: true,
    responsive: {
      0: {
        items: 1
      },
      575: {
        items: 1
      },
      767: {
        items: 1
      },
      991: {
        items: 1,
        loop: true
      }
    }
  });

  $(".moments-slider-photos-content").owlCarousel({
    items: 1,
    nav: false,
    loop: true,
    stagePadding: 0,
    autoplay: true,
    autoplayTimeout: 3000,
    margin: 35,
    dots: true,
    dotsEach: true,
    smartSpeed: 1500,
    responsiveClass: true,
    responsive: {
      0: {
        items: 1
      },
      575: {
        items: 1
      },
      767: {
        items: 1
      },
      991: {
        items: 1,
        loop: true,
        stagePadding:0
      },
      1200:{
        items:1,
        stagePadding:200
      }
    }
  });
});
