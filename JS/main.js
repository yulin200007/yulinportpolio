'use strict';

console.log(100);

jQuery(document).ready(function ($) {
  const $navlistBtn = $('.navlist__btn');
  const $navMenu = $('.nav');
  const $navItems = $('.nav__list--item');

  $navlistBtn.on('click', function () {
    $navMenu.toggleClass('active');
    $(this).toggleClass('is-active');
  });

  $navItems.on('click', function () {
    $navMenu.removeClass('active');
    $navlistBtn.removeClass('is-active');
    $('body').css('overflow', '');
  });

  $('.gotop').on('click', function () {
    const position = 0;
    const speed = 600;
    $('html,body').animate(
      {
        scrollTop: position,
      },
      speed,
    );
  });

  //fadeIn

  $(window).on('load scroll', function () {
    const fadeIn = $('.fadeIn');

    fadeIn.each(function () {
      const boxOffset = $(this).offset().top;
      const scrollPos = $(window).scrollTop();
      const wh = $(window).height();

      if (scrollPos > boxOffset - wh + 100) {
        //条件に当てはまったら
        $(this).addClass('animated');
      }
    });
  });

  const $desktopFilterButtons = $(
    '.Works__select.PCselect .Works__categories--item',
  );
  const $mobileFilterSelect = $('.Works__select.SPselect .Works__categories');
  const $portfolioCards = $('.Works__card');

  function filterCards(category) {
    $portfolioCards.each(function () {
      const cardCategories = $(this).data('category');

      if (
        category === 'all' ||
        (cardCategories && cardCategories.includes(category))
      ) {
        $(this).removeClass('is-hidden');
      } else {
        $(this).addClass('is-hidden');
      }
    });
  }

  $desktopFilterButtons.on('click', function () {
    $desktopFilterButtons.removeClass('active');
    $(this).addClass('active');

    const selectedCategory = $(this).data('category');

    filterCards(selectedCategory);
  });

  $mobileFilterSelect.on('change', function () {
    const selectedCategory = $(this).find('option:selected').data('category');

    filterCards(selectedCategory);
  });

  $(
    '.Works__select.PCselect .Works__categories--item[data-category="all"]',
  ).trigger('click');

  $('.Worksdesign__bannerdirections--list').slick({
    centerMode: true,
    variableWidth: true,
    centerPadding: '60px',
    slidesToShow: 1,
    dots: true,
    infinite: true,
    prevArrow: '.Worksdesign__bannerdirections--change-img.before',
    nextArrow: '.Worksdesign__bannerdirections--change-img.next',
  });

  $('.otherworks__list').slick({
    centerMode: true,
    variableWidth: true,
    centerPadding: '60px',
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: $('.otherworks__change-img.next'),
    prevArrow: $('.otherworks__change-img.before'),
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });

  const buttons = document.querySelectorAll('.Gallery__set--btn');
  buttons.forEach((btn) => {
    btn.addEventListener('click', () => {
      btn.classList.toggle('active');
    });
  });

  const btns = document.querySelectorAll('.Gallery__set--btn');
  btns.forEach((btn) => {
    btn.addEventListener('click', () => {
      const content = btn.closest('.Gallery__content');
      content.classList.toggle('open');
    });
  });

  const biographContainer = document.querySelector('.biograph__container');

  let isBiographScrollActive = false;

  if (biographContainer) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            isBiographScrollActive = true;
          } else {
            isBiographScrollActive = false;
          }
        });
      },
      {
        threshold: 0.4,
      },
    );

    observer.observe(biographContainer);

    window.addEventListener(
      'wheel',
      (event) => {
        if (!isBiographScrollActive) {
          return;
        }

        const el = biographContainer;
        const isScrollingDown = event.deltaY > 0;
        const isScrollingUp = event.deltaY < 0;

        const isAtEnd = el.scrollLeft + el.clientWidth >= el.scrollWidth - 2;

        const isAtStart = el.scrollLeft === 0;

        if ((isAtEnd && isScrollingDown) || (isAtStart && isScrollingUp)) {
          return;
        }

        event.preventDefault();
        el.scrollLeft += event.deltaY;
      },
      { passive: false },
    );
  }
});

const matchMedia = window.matchMedia('(max-width:768px)');

if (matchMedia.matches) {
  // 1000px以下で行う処理
}

$('.SPimgbox--PC').slick({
  centerMode: false,
  variableWidth: true,
  centerPadding: '60px',
  slidesToShow: 4,
  dots: false,

  responsive: [
    {
      breakpoint: 800,
      settings: {
        arrows: false,
        centerMode: true,
        dots: true,
        centerPadding: '40px',
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        arrows: false,
        centerMode: true,
        dots: true,
        centerPadding: '40px',
        slidesToShow: 1,
      },
    },
  ],
});

$('.SPimgbox--SP').slick({
  centerMode: false,
  variableWidth: true,
  centerPadding: '60px',
  slidesToShow: 4,
  dots: false,
  responsive: [
    {
      breakpoint: 800,
      settings: {
        arrows: false,
        centerMode: true,
        dots: true,
        centerPadding: '40px',
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        arrows: false,
        centerMode: true,
        dots: true,
        centerPadding: '40px',
        slidesToShow: 1,
      },
    },
  ],
});

$(function () {
  //カーソル要素の指定
  //カーソル要素の指定
  var cursor = $('#cursor');
  //ちょっと遅れてついてくるストーカー要素の指定
  var stalker = $('#stalker');

  //mousemoveイベントでカーソル要素を移動させる
  $(document).on('mousemove', function (e) {
    //カーソルの座標位置を取得
    var x = e.clientX;
    var y = e.clientY;
    //カーソル要素のcssを書き換える用
    cursor.css({
      opacity: '1',
      top: y + 'px',
      left: x + 'px',
    });
    //ストーカー要素のcssを書き換える用
    setTimeout(function () {
      stalker.css({
        opacity: '1',
        top: y + 'px',
        left: x + 'px',
      });
    }); //カーソルより遅れる時間を指定
  });

  $('a').on({
    mouseenter: function () {
      //activeクラス付与
      stalker.addClass('linkhover');
    },
    mouseleave: function () {
      stalker.removeClass('linkhover');
    },
  });

  $('.scollpoint').on({
    mouseenter: function () {
      //activeクラス付与
      stalker.addClass('active');
    },
    mouseleave: function () {
      stalker.removeClass('active');
    },
  });
});

$(document).ready(function () {
  $('.masonry').masonry({
    itemSelector: '.masonry-item', //單一卡片
    columnWidth: '.masonry-item', //控制卡片寬度
    percentPosition: true, //定位使用百分比
    horizontalOrder: true, //第二列開始的順序左至右，沒有設會是隨機順序
    transitionDuration: '0.2s', //變換位置時的過場時間
  });
});
