$(function() {
  // script 영역 css() 사용 예
  // 방법 1
  // $('.box').css('width','300px');
  // $('.box').css('height','300px');
  // $('.box').css('border','5px solid yellowgreen');

  // 방법 2
  // $('.box').css('width','300px').css('height','300px').css('border','5px solid yellowgreen');

  // 방법 3
  $('.box').css({'width':'300px','height':'300px','border':'5px solid yellowgreen'});
})
