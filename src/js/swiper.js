new Swiper('.products__slider', {
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    keyboard: {
      enabled: true,
    },
    freeMode: true,
    autoplay: {
      delay: 2000,
      stopOnLastSlide: false,
      disableonInteraction: true,
    },
    speed: 750,
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 0,
      },
      768: {
        slidesPerView: 2.5,
        spaceBetween: 16,
      },
      1200: {
        slidesPerView: 4,
        spaceBetween: 18,
      },
    },
  });
  
  new Swiper('.reviews-slider', {
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    keyboard: {
      enabled: true,
    },
    freeMode: true,
    autoplay: {
      delay: 2000,
      stopOnLastSlide: false,
      disableonInteraction: true,
    },
    speed: 750,
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 0,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 16,
      },
      1200: {
        slidesPerView: 3,
        spaceBetween: 28,
      },
    },
  });