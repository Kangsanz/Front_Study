$(function() {
  function hrefFunc(x) {
    let thisHref = $(x).attr('href').split('/');
    thisHref = thisHref[thisHref.length - 1].split('.')[0];
    return thisHref;
  };

  // 메인배너 영역
  $('.mainbanner .swiper-pagination-bullet').each(function() {
    console.log($(this).index());
    if ($(this).index() == 0) {
      $(this).prepend('<div class="bullet_text">INSPER</div');
    } else if ($(this).index() == 1) {
      $(this).prepend('<div class="bullet_text">인쇄용지</div');
    } else if ($(this).index() == 2) {
      $(this).prepend('<div class="bullet_text">산업용지</div');
    } else if ($(this).index() == 3) {
      $(this).prepend('<div class="bullet_text">특수지</div');
    } else if ($(this).index() == 4) {
      $(this).prepend('<div class="bullet_text">감열지</div');
    }
  })

  // 서브페이지 메뉴 영역
  $('#lnb ul li a').each(function() {
    if (hrefFunc(location) == hrefFunc(this)) {
      $(this).addClass('on');
    }
  });

  // 아코디언 영역
  $('dd:not(:first)').css('display', "none");
  $('dl dt').click(function() {
    if ($('+dd', this).css('display') == 'none') {
      $('dd').slideUp('slow');
      $('+dd', this).slideDown('slow');
    }
  });
  $('dd:not(:first)').css('display', 'none');
  $('dl dt').click(function() {
    let isAni = $('dd').is(':animated');
    if ($('+dd', this).css('display') == 'none' && isAni == false) {
      $('dd').animate({
        height: 'hide'
      }, 'slow', 'swing');
      $('+dd', this).animate({
        height: 'show'
      }, 'slow', 'swing');
    };
  });

  // 로드 영역
  if (hrefFunc(location) == 'index' || hrefFunc(location) == '') {
    $('#footer-wrap').load('footer.html #footer');
    $('#header-wrap').load('header.html #header');
  } else {
    $('#footer-wrap').load('../footer.html #footer');
    $('#header-wrap').load('../header2.html #header');
  }
});
