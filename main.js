// Toggle menu account
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
var swiper = new Swiper(".mySwiper", {});
var swiperSlider = new Swiper(".mySwiper-logo-slider", {
  watchSlidesProgress: true,
  watchSlidesVisibility: true,
  slidesPerView: 7,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
});


$(function () {
  $('[data-toggle="tooltip"]').tooltip()
})

