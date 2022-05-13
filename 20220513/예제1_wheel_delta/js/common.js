'use strict';
$(function() {
  let windowHeight = $(window).innerHeight();
  let direc = 0; // 방향 전환을 위한 변수 정의
  let maxDirec = $('.wheel-wrap section').length - 1;
  let wheelAction = false;
  function wheelMove() {
    $('html').animate({
      scrollTop: direc * windowHeight
    }, {
      duration: 1000,
      start: function() {
        wheelAction = true;
      },
      complete: function() {
        wheelAction = false;
      }
    });
  }

  $(window).on('wheel', function(event) {
    let eventDelta = event.originalEvent.wheelDelta;
    if (eventDelta > 0 && wheelAction == false) {
      if (direc <= 0) {
        direc = 0;
      } else {
        direc--;
        wheelMove();
      }
    } else if (eventDelta < 0 && wheelAction == false) {
      if (direc >= maxDirec) {
        direc = maxDirec;
      } else {
        direc++;
        wheelMove();
      }
    }
  });
});
