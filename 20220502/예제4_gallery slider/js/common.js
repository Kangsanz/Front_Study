$(function() {
  // script 영역 gallery slider 사용 예
  $('#navi a').click(function() {
    let imgSrc = $(this).attr('href');
    let checkAni = $('#main img:last').is(':animated');
    // if (checkAni) {
    //   $('#main img:last').stop().css('opacity', 0);
    //   $('#main img:last').remove();
    //   $('#main img').attr('src', imgSrc)
    // } else {
    //   $('#main img').before(`<img src='${imgSrc}'>`);
    //   $('#main img:last').animate({
    //     opacity: 0
    //   }, {
    //     duration: 1000,
    //     easing: 'swing',
    //     complete: function() {
    //       $(this).remove();
    //     }
    //   });
    // }

    $('#main img:last').animate({
      opacity: 0
    }, {
      duration: 1000,
      easing: 'swing',
      start: function() {
        $('#main img').before(`<img src='${imgSrc}'>`);
      },
      complete: function() {
        $(this).remove();
      }
    });
    return false;
  });

  // prev, next 버튼으로 작동하는 스크립트
  let marginLeftNum = $('#navi page-wrap').css('margin-left');
  // console.log(parseInt(marginLeftNum));
  const marginNumber = 300;

  $('img.next').click(function() {
    marginLeftNum = $('#navi .page-wrap').css("margin-left");
    $('#navi .page-wrap').animate({
        marginLeft: parseInt(marginLeftNum) - marginNumber
      },
      'fast',
      function() {
        console.log(marginLeftNum);
      }
    );
  });

  $('img.prev').click(function() {
    marginLeftNum = $('#navi .page-wrap').css("margin-left");
    $('#navi .page-wrap').animate({
        marginLeft: parseInt(marginLeftNum) + marginNumber
      },
      'fast',
      function() {
        console.log(marginLeftNum);
      }
    );
  });

});
