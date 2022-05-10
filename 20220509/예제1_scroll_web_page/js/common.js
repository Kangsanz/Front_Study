'use strict';
$(function() {
  const intervalNum = 150;
  //script 입력 영역
  $('nav ul li a,.back-to-top a,.button').click(function() {
    let thisHash = $(this.hash);
    // 1번 여러번 클릭을 방지
    // let isAni = $('html,body').is(':animated');
    // if (!isAni) {
    //   $('html,body').animate({scrollTop : thisHash.offset().top},1500)
    // }

    // 2번 즉시 scroll 대상 변경
    $('html,body').stop();
    $('html,body').animate({
      scrollTop: thisHash.offset().top
    }, 1500)
    return false;
  });

  $(window).scroll(function() {
    if ($(this).scrollTop() != 0) {
      $('.back-to-top').addClass('on')
    } else {
      $('.back-to-top').removeClass('on')
    }
  });

  let wHeight = $(window).height();
  $(window).scroll(function() {
    let thisScTop = $(this).scrollTop();
    $('section').each(function() {
      let thisOffet = $(this).offset();
      if (thisScTop >= thisOffet.top - intervalNum && thisScTop <= thisOffet.top + wHeight) {
        $(this).addClass('active')
      } else {
        // $(this).removeClass('active')
      }
    });
  });
});
