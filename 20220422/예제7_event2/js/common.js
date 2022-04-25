$(function() {
  // script 영역 event 사용 예
  $('body').append('<span class="tooltip"></span>')
  $('img').mousemove(function(e){
    /*
      span 태그 내부에 "현재 x좌표 : ** 현재 y좌표 **" 추가하고
      span 위치를 e.clientX, e.clientY 값을 사용하여
      커서를 따라다니는 로직을 구현하시오
    */
    $('span').html(`현재 x좌표 : ${e.clientX}, 현재 y좌표 : ${e.clientY}`)
    $('span').css({'left':e.clientX,'top':e.clientY})
  })
});
