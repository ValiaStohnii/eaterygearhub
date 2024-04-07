import Swiper, { Navigation, Pagination, EffectFade, Scrollbar } from 'swiper';

const swiperTeam = new Swiper('.crafting-slider', {
  slidesPerView: 3,
  spaceBetween: 20,
  modules: [Navigation, Pagination],
  pagination: {
    clickable: true,
    el: '.crafting .swiper-pagination',
  },

  draggable: true,
  grabCursor: true,
  navigation: {
    nextEl: '.crafting .btn--next',
    prevEl: '.crafting .btn--prev',
  },
  breakpoints: {
    992: {
      slidesPerView: 3,
    },
    650: {
      slidesPerView: 2,
    },
    611: {
      slidesPerView: 1,
    },
    320: {
      slidesPerView: 1,
    }
  },
});

const swiperPortfolio = new Swiper('.portfolio-slider', {
  slidesPerView: 1,
  spaceBetween: 20,
  loop: true,
  modules: [Navigation, Pagination],
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  draggable: true,
  grabCursor: true,
});
