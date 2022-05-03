$(function() {
  // script 영역 gallery slider 사용 예
  $('#navi a').click(function() {
    let imgSrc = $(this).attr('href');
    let checkAni = $('#main img:last').is(':animated');

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
  let marginLeftNum = $('#navi .page-wrap').css('margin-left');
  // console.log(parseInt(marginLeftNum));
  const marginNumber = 300;

  function btnFunc(name) {
    $(`img.${name}`).click(function() {
      marginLeftNum = parseInt($('#navi .page-wrap').css("margin-left"));
      let isAni = $('#navi .page-wrap').is(':animated');
      if (name == 'next' && marginLeftNum > -600 && !isAni) {
        $('#navi .page-wrap').animate({
          marginLeft: marginLeftNum - marginNumber
        });
      } else if (name == 'prev' && marginLeftNum < 0 && !isAni) {
        $('#navi .page-wrap').animate({
          marginLeft: marginLeftNum + marginNumber
        });
      } else if (marginLeftNum == -(marginNumber * 2) || marginLeftNum == 0 && !isAni) {
        alert('더 이상 이미지가 없습니다.')
      }
      console.log(marginLeftNum);
    });
  }
  btnFunc('next');
  btnFunc('prev');

});
