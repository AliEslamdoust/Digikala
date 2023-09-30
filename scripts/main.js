
var swiper = new Swiper(".main-slider", {
    spaceBetween: 0,
    centeredSlides: true,
    autoplay: {
      delay: 7500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
  var swiper = new Swiper(".amazing-slider", {
    slidesPerView: 1.8,
    spaceBetween: 2,
    breakpoints: {
      768: {
        slidesPerView: 4.3,
        spaceBetween: 2,
      },
      1024: {
        slidesPerView: 6.3,
        spaceBetween: 2,
      },
      1280: {
        slidesPerView: 7.3,
        spaceBetween: 2,
      },
    },
    freeMode: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
  var swiper = new Swiper(".brands-slider", {
    slidesPerView: 3,
    spaceBetween: 0,
    breakpoints: {
      768: {
        slidesPerView: 4.3,
        spaceBetween: 0,
      },
      1024: {
        slidesPerView: 6.3,
        spaceBetween: 0,
      },
      1280: {
        slidesPerView: 9.3,
        spaceBetween: 0,
      },
    },
    freeMode: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
  var swiper = new Swiper(".most-sales-slider", {
    slidesPerView: 1,
    spaceBetween: 0,
    breakpoints: {
      768: {
        slidesPerView: 2.5,
        spaceBetween: 2,
      },
      1024: {
        slidesPerView: 3.5,
        spaceBetween: 2,
      },
      1280: {
        slidesPerView: 4,
        spaceBetween: 2,
      },
    },
    freeMode: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });