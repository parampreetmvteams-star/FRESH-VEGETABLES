const swiper1 = new Swiper(".mySwiper", {
    loop: true,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });

// categories-swiper 

const categoriesSwiper = new Swiper(".categories-mySwiper", {
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
      slidesPerView: 2,
      // spaceBetween: 20,
    },
    640: {
      slidesPerView: 3,
      // spaceBetween: 20,
    },
    768: {
      slidesPerView: 5,
      // spaceBetween: 50,
    },
    1024: {
      slidesPerView: 7,
      // spaceBetween: 50,
    },
    1200:{
      slidesPerView: 8,
    },
    1300:{
      slidesPerView: 9,
    },
    1600:{
      slidesPerView: 10,
    }
  },
    });

    console.log(document.querySelector("#best-mySwiper"));

const bestMySwiper = new Swiper("#best-mySwiper", {
  loop: true,
  slidesPerView: 1,
  spaceBetween: 15,
  navigation: {
    nextEl: ".best-swiper-button-next",
    prevEl: ".best-swiper-button-prev",
  },
  breakpoints: {
    468: {
      slidesPerView: 1,
    },
    530: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 25,
    },
    1200:{
      slidesPerView: 4,
    },
    1600: {
      slidesPerView: 5,
    }
  },
});