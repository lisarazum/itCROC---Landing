//swiper

const swiper = new Swiper('.clients__swiper', {
  loop: true,
  slidesPerView: 4,
  slidesPerGroup: 4,
  spaceBetween: 10,

  pagination: {
    el: '.clients__swiper-pagination',
    clickable: true,
  },
});