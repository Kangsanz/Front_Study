$(function() {
  // 첫번째 섹션
  let isAni = $(this).is(":animated")
  $('.banner-navigator .control-btn.next').click(function() {
    if ($('.banner-wrap.three').hasClass('active')) {
      $('.banner-wrap.active').removeClass('active').css('opacity', '0');
      $('.banner-wrap.one').css('opacity', '1').addClass('active');
      $('.progress.active').removeClass('active');
      $('.progress:first-child').addClass('active');
    } else {
      $('.banner-wrap.active').removeClass('active').css('opacity', '0').next().css('opacity', '1').addClass('active');
    }

    if ($('.banner-wrap.two').hasClass('active')) {
      $('.progress.active').next().addClass('active');
    } else if ($('.banner-wrap.three').hasClass('active')) {
      $('.progress.active').next().addClass('active');
    }
  })

  $('.banner-navigator .control-btn.prev').click(function() {
    console.log('test');
    if ($('.banner-wrap.one').hasClass('active')) {
      $('.banner-wrap.active').removeClass('active').css('opacity', '0');
      $('.banner-wrap.three').css('opacity', '1').addClass('active');
      $('.progress').addClass('active');
    } else {
      $('.banner-wrap.active').removeClass('active').css('opacity', '0').prev().css('opacity', '1').addClass('active');
    }

    if ($('.banner-wrap.two').hasClass('active')) {
      $('.progress:last-child').removeClass('active');
    }
  })

  // 세번째 섹션
  $(window).scroll(function() {
    let nowHeight = $(this).scrollTop();
    let headerHeight = $('#header').innerHeight() + $('#first').innerHeight() + $('#second').innerHeight();
    let sectionHeight = $('.illustration-slides').innerHeight();
    let funcHeight = headerHeight + sectionHeight

    if (nowHeight > funcHeight) {
      $('.illustration-slides.two').css('transform', 'translateY(0)')
      $('.contents-slides.two').css('transform', 'translateY(0)')
    } else if (nowHeight < funcHeight) {
      $('.illustration-slides.two').css('transform', 'translateY(120vh)')
      $('.contents-slides.two').css('transform', 'translateY(120vh)')
    }

    if (nowHeight > funcHeight + sectionHeight) {
      $('.illustration-slides.three').css('transform', 'translateY(0vh)')
      $('.contents-slides.three').css('transform', 'translateY(0)')
    } else if (nowHeight < funcHeight + sectionHeight) {
      $('.illustration-slides.three').css('transform', 'translateY(120vh)')
      $('.contents-slides.three').css('transform', 'translateY(120vh)')
    }

    if (nowHeight > funcHeight + sectionHeight * 2) {
      $('.illustration-slides.four').css('transform', 'translateY(0vh)')
      $('.contents-slides.four').css('transform', 'translateY(0)')
    } else if (nowHeight < funcHeight + sectionHeight * 2) {
      $('.illustration-slides.four').css('transform', 'translateY(120vh)')
      $('.contents-slides.four').css('transform', 'translateY(120vh)')
    }

    if (nowHeight > funcHeight + sectionHeight * 3) {
      $('.illustration-slides.five').css('transform', 'translateY(0vh)')
      $('.contents-slides.five').css('transform', 'translateY(0)')
    } else if (nowHeight < funcHeight + sectionHeight * 3) {
      $('.illustration-slides.five').css('transform', 'translateY(120vh)')
      $('.contents-slides.five').css('transform', 'translateY(120vh)')
    }
  });

  // 다섯번째 섹션
  $('.customer-grid .customer-logo .logo').each(function() {
    let thisCSS = $(this).attr('class');
    let nameClass = thisCSS.split(' ')[1]
    $(this).css({
      "background": `url(img/customer/common/${nameClass}.png)`,
      'background-repeat': 'no-repeat',
      'background-size': 'cover'
    });
  });

  $('.customer-grid.common .customer-logo .logo').each(function() {
    let thisCSS = $(this).attr('class');
    let nameClass = thisCSS.split(' ')[1]
    $(this).css({
      "background": `url(img/customer/uncommon/${nameClass}.png)`,
      'background-repeat': 'no-repeat',
      'background-size': 'cover'
    });
  });

});
