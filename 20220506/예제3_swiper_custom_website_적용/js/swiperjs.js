var swiper = new Swiper(".mySwiper", {
  // loop: true,
  // autoplay: {
  //   delay: 2500,
  // },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    dynamicBullets: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

var swiper2 = new Swiper(".mySwiper2", {
  // loop: true,
  // autoplay: {
  //   delay: 2500,
  // },
  // pagination: {
  //   el: '.swiper-pagination',
  //   clickable: true,
  //   dynamicBullets: true,
  // },
  navigation: {
    nextEl: ".thumb-button-next",
    prevEl: ".thumb-button-prev",
  },
});
