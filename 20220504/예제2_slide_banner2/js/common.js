$(function() {
  // script 영역 slide banner2 사용 예
  // slide li 개별 너비, ul.column의 너비를 계산할 수 있다.
  const widthNum = 150;
  const caInner = $('#carousel-inner');

  // li의 개수 가져오기
  let liLeng = $('ul.column li', caInner).length;
  console.log(liLeng);

  // li의 개수로 ul.column의 너비를 설정
  $('ul.column', caInner).css('width', widthNum * liLeng);

  // 슬라이드 포지션 초기화
  // 1. ul.column의 마지막 li를 ul.column의 첫번째 자식요소로 이동하시오
  // 2. ul.column의 초기 슬라이드 위치로 이동하시오
  function initialFunc(init) {
    caInner.css('margin-left', -widthNum);
    if (init === 'prev') {
      $('ul.column li:last', caInner).prependTo('ul.column', caInner);
    } else {
      $('ul.column li:first', caInner).appendTo('ul.column', caInner);
    }
  }

  initialFunc('prev');

  function actionBtn(el) {
    el.click(function() {
      let caInMarginLeft = parseInt(caInner.css('margin-left'));
      let isAni = caInner.is(':animated');
      if (!isAni) {
        if (el.attr('id') === 'carousel-prev') {
          caInner.animate({marginLeft: caInMarginLeft + widthNum},
            function() {
              initialFunc('prev')
            });
        } else if (!isAni) {
          caInner.animate({marginLeft: caInMarginLeft - widthNum},
            function() {
              initialFunc('next')
            });
        };
      };
    });
  };

  $('.btn').each(function() {
    actionBtn($(this));
  });

  //auto slide
  // 실습
  // setInterval 함수를 사용하여 auto slide를 구현

  let timerID = null;
  let auto = function() {
    timerID = setInterval(function() {
      $('#carousel-next').trigger('click');
    }, 1000);
  }
  auto();

  $('#carousel-prev,#carousel-next').on({
    mouseenter: function() {
      clearInterval(timerID);
    },
    mouseleave: function() {
      timerID = setInterval(function() {
        $('#carousel-next').trigger('click');
      }, 1000);
    }
  });

  //
  // //prev button javascript
  // $('#carousel-prev').click(function() {
  //   let caInMarginLeft = parseInt(caInner.css('margin-left'));
  //   let isAni = caInner.is(':animated');
  //   if (!isAni) {
  //     caInner.animate({
  //         marginLeft: caInMarginLeft + widthNum
  //       },
  //       function() {
  //         $('ul.column li:last',caInner).prependTo('ul.column',caInner);
  //         caInner.css('margin-left', -widthNum);
  //       });
  //   };
  // });
  //
  // //next button javascript
  // $('#carousel-next').click(function() {
  //   let caInMarginLeft = parseInt(caInner.css('margin-left'));
  //   let isAni = caInner.is(':animated');
  //   if (!isAni) {
  //     caInner.animate({
  //         marginLeft: caInMarginLeft - widthNum
  //       },
  //       function() {
  //         $('ul.column li:first',caInner).appendTo('ul.column',caInner);
  //         caInner.css('margin-left', -widthNum);
  //       });
  //   };
  // });




});
