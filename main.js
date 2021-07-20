// Toggle top navbar 
$(".myAccount").click(function () { 
  $(".dropdown-menu-account").toggle();
});

$(".Currency").click(function () { 
  $(".dropdown-menu-currency").toggle();
});

$(".Language").click(function () { 
  $(".dropdown-menu-language").toggle();
});


// Initialize Swiper 
var swiper = new Swiper(".mySwiper", {
  slidesPerView: 4,
  spaceBetween: 10,
  breakpoints: {
    425: {
      slidesPerView: 2,
    },
    576: {
      slidesPerView: 2,
      spaceBetween: 10
    },
    // when window width is >= 320px
    768: {
      slidesPerView: 2,
      spaceBetween: 10
    },
    // when window width is >= 480px
    992: {
      slidesPerView: 3,
      spaceBetween: 10
    },
    // when window width is >= 640px
    1200: {
      slidesPerView: 4,
      spaceBetween: 10
    }
  },
  
});
//  Swiper SlideShow (right side)
var swiperSlideShow = new Swiper(".mySwiperSlideShow", {
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  autoplay: {
    delay: 4000,
    
  },
});
//swiper specials
var swiperSpecials = new Swiper(".swipSpecials", {
  slidesPerView: 4,
  spaceBetween: 10,
  breakpoints: {
    425: {
      slidesPerView: 1,
    },
    576: {
      slidesPerView: 2,
      spaceBetween: 10
    },
    // when window width is >= 320px
    768: {
      slidesPerView: 2,
      spaceBetween: 10
    },
    // when window width is >= 920px
    992: {
      slidesPerView: 2,
      spaceBetween: 10
    },
    // when window width is >= 1200px
    1200: {
      slidesPerView: 4,
      spaceBetween: 10
    }
  },
  
});

//swiper before footer
var swiperSlider = new Swiper(".mySwiper-logo-slider", {
  watchSlidesProgress: true,
  watchSlidesVisibility: true,
  slidesPerView: 7,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  breakpoints: {
    425: {
      slidesPerView: 1,
    },
    576: {
      slidesPerView: 2,
      spaceBetween: 10
    },
    // when window width is >= 320px
    768: {
      slidesPerView: 5,
      spaceBetween: 10
    },
    // when window width is >= 920px
    992: {
      slidesPerView: 7,
      spaceBetween: 10
    },
    // when window width is >= 1200px
    1200: {
      slidesPerView: 7,
      spaceBetween: 10
    }
  },
  
});

//swiper blog
var swiperBlog = new Swiper(".mySwiperBlog", {
  slidesPerView: 2,
  breakpoints: {
    425: {
      slidesPerView: 1,
      spaceBetween: 10
    },
    576: {
      slidesPerView: 1,
      spaceBetween: 10
    },
    // when window width is >= 320px
    768: {
      slidesPerView: 2,
      spaceBetween: 10
    },
    // when window width is >= 920px
    992: {
      slidesPerView: 2,
      spaceBetween: 10
    },
    // when window width is >= 1200px
    1200: {
      slidesPerView: 2,
      spaceBetween: 10
    }
  },
  
});
//end blog

//end before footer

//footer (reponsive 576px)
$( "#showListf-extras" ).click(function() {
  $( "#listf-extras" ).toggle( "slow");
});
$( "#showListf-info" ).click(function() {
  $( "#listf-info" ).toggle( "slow");
});
$( "#showListf-account" ).click(function() {
  $( "#listf-account" ).toggle( "slow");
});
$( "#showListf-contact" ).click(function() {
  $( "#listf-contact" ).toggle( "slow");
});
//end footer
$(function () {
  $('[data-toggle="tooltip"]').tooltip()
})

$('.carousel').carousel({
  interval: 5000,
})



// responsive 576px nav
$( ".toogle-category" ).click(function() {
  $( ".navbar-responsive" ).show( "slow");
});
$( "#close" ).click(function() {
  $( ".navbar-responsive" ).hide( "slow");
});


