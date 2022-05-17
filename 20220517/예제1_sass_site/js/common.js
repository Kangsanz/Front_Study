$(function() {
  function hrefFunc(x) {
    let thisHref = $(x).attr('href').split('/');
    thisHref = thisHref[thisHref.length-1].split('.')[0];

    return thisHref;
  };
  // let hrefName = $(location).attr('href').split('/');
  // hrefName = hrefName[hrefName.length-1].split('.')[0];

  // #lnb의 메뉴와 같은 서브페이지의 주소값을 매칭하여
  // 해당 메뉴에 on class를 추가하시오.

  $('#lnb ul li a').each(function() {
    // let matchHref = $(this).attr('href').split('/');
    // matchHref = matchHref[matchHref.length-1].split('.')[0];

    if (hrefFunc(location) == hrefFunc(this)) {
      $(this).addClass('on');
    }
  });

});
