$(function() {
  // script 영역 gallery slider 사용 예
  $('#navi a').click(function() {
    let imgSrc = $(this).attr('href');
    // let checkAni = $('#main img:last').is(':animated');

    $('#main img:last').animate({
      opacity: 0
    }, {
      duration: 400,
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
  const marginNumber = 600;
  const pwElem = $('#navi .page-wrap');
  const pageLeng = $('#navi .page-wrap .page').length;// page 개수로 범위 지정
  $(pwElem).width(marginNumber*pageLeng); // page의 length 값을 가져와서 page-wrap 초기 너비 값을 설정

  function btnFunc(name) {
    $(`img.${name}`).click(function() {
      console.log(pageLeng);
      let marginLeftNum = parseInt($(pwElem).css("margin-left"));
      let isAni = $(pwElem).is(':animated');
      if (name == 'next' && marginLeftNum > -(marginNumber*(pageLeng - 1)) && !isAni) {
        $(pwElem).animate({
          marginLeft: marginLeftNum - marginNumber
        });
      } else if (name == 'prev' && marginLeftNum < 0 && !isAni) {
        $(pwElem).animate({
          marginLeft: marginLeftNum + marginNumber
        });
      } else if (marginLeftNum == -(marginNumber*(pageLeng - 1)) || marginLeftNum == 0 && !isAni) {
        alert('더 이상 이미지가 없습니다.')
      }
    });
  }

  btnFunc('next');
  btnFunc('prev');

});
