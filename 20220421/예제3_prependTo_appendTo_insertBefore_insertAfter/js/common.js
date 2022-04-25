$(function() {
  // script 영역 prependTo(), appendTo() 사용 예
  // $('strong').appendTo('p');
  // $('.items:last-child').prependTo('#wrap');
  // $('.items:nth-child(3)').appendTo('#wrap');

  // script 영역 insertBefore(), insertAfter() 사용 예
  $('#wrap').insertBefore('p');
  // items5를 item3 바로 앞으로 이동
  $('.items:nth-child(5)').insertBefore('.items:nth-child(3)');
  // strong 태그를 items3 자리 뒤로 이동 시키세요.
  $('strong').insertAfter('.items:nth-child(4)');
  console.log($('.items:last-child').text());
});
