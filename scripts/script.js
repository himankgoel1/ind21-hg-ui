var swiper = new Swiper(".mySwiper", {
  // spaceBetween: ,
  slidesPerView: 3,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".blog-posts__navs--next",
    prevEl: ".blog-posts__navs--prev",
  },
});