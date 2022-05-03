$(function() {
  // script 영역 slide banner 사용 예
  const widthNum = 620; // slide 개별의 너비, carousel-inner의 너비를 계산할 수 있다.

  // ul의 개수 가져오기
  let ulLeng = $('#carousel-inner ul.column').length;
  console.log(ulLeng);

  // ul 개수로 #carousel-inner의 초기 너비 설정
  console.log(widthNum * ulLeng);
  $('#carousel-inner').width(widthNum * ulLeng)

  // 슬라이드 포지션 초기화
  $('#carousel-inner ul.column:last').prependTo('#carousel-inner');
  $('#carousel-inner').css('margin-left', -widthNum)

  // 함수 형태
  function animFunc(name) {
    let innerElem = $('#carousel-inner');
    let caInMarginLeft = parseInt(innerElem.css('margin-left'));

    $(name).click(function() {
      let isAni = innerElem.is(':animated');
      if (name == '#carousel-prev' && !isAni) {
        innerElem.animate({
          marginLeft: caInMarginLeft + widthNum
        }, 'slow', 'swing', function() {
          $('#carousel-inner ul.column:last').prependTo('#carousel-inner');
          innerElem.css('margin-left', -widthNum);
        });
      } else if (name == '#carousel-next' && !isAni) {
        innerElem.animate({
          marginLeft: caInMarginLeft - widthNum
        }, 'slow', 'swing', function() {
          $('#carousel-inner ul.column:first').appendTo('#carousel-inner');
          innerElem.css('margin-left', -widthNum);
        });
      };
    });
  };

  animFunc('#carousel-prev');
  animFunc('#carousel-next');

  // 버튼 show() or hide()

  // prev button script
  // $('#carousel-prev').click(function() {
  //   let caInMarginLeft = parseInt($('#carousel-inner').css('margin-left'));
  //   $('#carousel-prev,#carousel-next').hide();
  //   $('#carousel-inner').animate({
  //     marginLeft: caInMarginLeft + widthNum
  //   }, 'slow', 'swing', function() {
  //     // animation 실행이 끝난 직후 실행 영역
  //     $('#carousel-inner ul.column:last').prependTo('#carousel-inner');
  //     $('#carousel-inner').css('margin-left', -widthNum);
  //     $('#carousel-prev,#carousel-next').show();
  //   });
  // });
  //
  // $('#carousel-next').click(function() {
  //   let caInMarginLeft = parseInt($('#carousel-inner').css('margin-left'));
  //   $('#carousel-prev,#carousel-next').hide();
  //   $('#carousel-inner').animate({
  //     marginLeft: caInMarginLeft - widthNum
  //   }, 'slow', 'swing', function() {
  //     // animation 실행이 끝난 직후 실행 영역
  //     $('#carousel-inner ul.column:first').appendTo('#carousel-inner');
  //     $('#carousel-inner').css('margin-left', -widthNum);
  //     $('#carousel-prev,#carousel-next').show();
  //   });
  // });

  // 버튼 한번만 실행

  // let caInMarginLeft = parseInt($('#carousel-inner').css('margin-left'));
  // $('#carousel-prev').click(function() {
  //   let isAni = $('#carousel-inner').is(':animated');
  //   if (!isAni) {
  //     $('#carousel-inner').animate({
  //       marginLeft: caInMarginLeft + widthNum
  //     }, 'slow', 'swing', function() {
  //       $('#carousel-inner ul.column:last').prependTo('#carousel-inner');
  //       $('#carousel-inner').css('margin-left', -widthNum);
  //     });
  //   };
  // });
  // $('#carousel-next').click(function() {
  //   let isAni = $('#carousel-inner').is(':animated');
  //   if (!isAni) {
  //     $('#carousel-inner').animate({
  //       marginLeft: caInMarginLeft - widthNum
  //     }, 'slow', 'swing', function() {
  //       $('#carousel-inner ul.column:first').appendTo('#carousel-inner');
  //       $('#carousel-inner').css('margin-left', -widthNum);
  //     });
  //   };
  // });

});
