'use strict';

var swiper = new Swiper('.mySwiper', {
  effect: 'fade',
  loop: true,
  autoplay: {
    delay: 3000, // 遅延なし
    disableOnInteraction: false, // ユーザー操作後も動き続ける
  },
  speed: 2000,

  pagination: {
    el: '.swiper-pagination',
    dynamicBullets: true,
  },
});
