$(function() {
  //script 영역 window resize 예
  $('.box').each(function() {
    // console.log($(this));
    let transSize = '+'; // 크기 변화 전환
    let leftDir = '+'; // x축 방향 전환
    let topDir = '+'; // y축 방향 전환
    let speedNum = 1;
    let thisElem = $(this);

    $(window).resize(function() {
      let thisOffset = thisElem.offset();
      // console.log(thisOffset);

      // size 변화 조건식
      // console.log(thisElem.width());
      if (thisElem.width() > 200) {
        transSize = '-';
      } else if (thisElem.width() < 50) {
        transSize = '+';
      }

      // x축 변화 조건식
      if (thisOffset.left < 0) {
        leftDir = '+';
      } else if (thisOffset.left > $(window).width() - thisElem.width()) {
        leftDir = '-';
        speedNum = Math.ceil(Math.random()*10);
        thisElem.css('left',$(window).width() - thisElem.width());
      }

      // y축 변화 조건식
      if (thisOffset.top < 0) {
        topDir = '+';
      } else if (thisOffset.top > $(window).height() - thisElem.width()) {
        topDir = '-';
        speedNum = Math.ceil(Math.random()*10);
        thisElem.css('top',$(window).height() - thisElem.width());
      }

      // thisElem 최종 적용
      thisElem.css({
        'width': transSize + '=' + speedNum+ 'px',
        'height': transSize + '=' + speedNum+ 'px',
        'left': leftDir + '=' + speedNum+ 'px',
        'top': topDir + '=' + speedNum+ 'px'
      });
    });
  });
});
