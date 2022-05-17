$(function() {
  $('.customer-grid .customer-logo .logo').each(function() {
    let thisCSS = $(this).attr('class');
    let nameClass = thisCSS.split(' ')[1]
    console.log(nameClass);
    $(this).css({
      "background": `url(img/customer/common/${nameClass}.png)`,
      'background-repeat': 'no-repeat',
      'background-size': 'cover'
    });
  });

  $('.customer-grid.common .customer-logo .logo').each(function() {
    let thisCSS = $(this).attr('class');
    let nameClass = thisCSS.split(' ')[1]
    console.log(nameClass);
    $(this).css({
      "background": `url(img/customer/uncommon/${nameClass}.png)`,
      'background-repeat': 'no-repeat',
      'background-size': 'cover'
    });
  });


});
