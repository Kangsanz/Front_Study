$(function() {
  // 세번째 섹션
  $(window).scroll(function() {
    let nowHeight = $(this).scrollTop();
    let headerHeight = $('#header').innerHeight() + $('#first').innerHeight() + $('#second').innerHeight();
    let sectionHeight = $('.illustration-slides').innerHeight();
    let sectionLength = $('.illustration-slides').length;
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
