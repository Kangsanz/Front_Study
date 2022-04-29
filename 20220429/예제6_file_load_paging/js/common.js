$(function() {
  // script 영역 file load paging 예
  let hrefNum = window.location.href
  hrefNum = hrefNum.split('ing/');
  hrefNum = hrefNum[hrefNum.length-1].split('.');
  hrefNum = hrefNum[0];
  $('header').load('./header.html .inner', function() {
    $('#gnb ul li').each(function() {
      if ($(this).text() == hrefNum) {
        $(this).addClass('on');
      };
    });
  });
  $('footer').load('./footer.html .inner');
});
