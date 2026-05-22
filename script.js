var swiper = new Swiper(".mySwiper", {
    loop: true,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });

// categories-swiper 

var swiper = new Swiper(".categories-mySwiper", {
    loop: true,
      slidesPerView: 10,
      spaceBetween: 10,

    navigation: {
        nextEl: ".categories-swiper-button-next",
        prevEl: ".categories-swiper-button-prev",
    },

    breakpoints: {
      200: {
      slidesPerView: 1,
      // spaceBetween: 20,
    },
    540: {
      slidesPerView: 1,
      // spaceBetween: 20,
    },
    640: {
      slidesPerView: 2,
      // spaceBetween: 20,
    },
    768: {
      slidesPerView: 2,
      // spaceBetween: 50,
    },
    1024: {
      slidesPerView: 10,
      // spaceBetween: 50,
    },
  },
    });