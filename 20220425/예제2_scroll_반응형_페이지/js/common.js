$(function() {
  //script 영역 scroll 반응형 페이지 사용 예
  $(window).scroll(function() {
    let winHeight = $(this).height();
    let scTop = $(this).scrollTop();

    $('.slide').each(function() {
      let thisOffset = $(this).offset();
      console.log(`${thisOffset.top},${scTop}` );
      if ( thisOffset.top <= scTop && scTop < thisOffset.top + winHeight / 3 ) {
        console.log($(this).find('h2').text());

        $('body').css('background-color',$(this).data("background"));
        $(this).addClass('on');
      }
      // slide 구간을 if 구문으로 체크하고 각 구간마다 h2의 텍스트를 log로 출력
    });

    if (scTop > winHeight - 70) {
      $('nav').addClass('fixed');
    } else {
      $('nav').removeClass('fixed');
    }
  });
});
