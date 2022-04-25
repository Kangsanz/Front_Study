$(function() {
  // script 영역 prev toggle 사용 예
  // document.querySelector('#gnb').prevElementSibling();
  console.log($('#gnb').prev());
  console.log($('#gnb').next());
  $('button').click(function() {
    $('#header').toggle();
  });
});
