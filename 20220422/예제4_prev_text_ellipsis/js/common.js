$(function() {
  // script 영역 text ellipsis 사용 예
  let elem = $('.more-text');
  const showText = 100; // 보여주고 싶은 글자수
  let moreBtnText = 'Show More'
  let lessBtnText = 'Show Less'
  let content = elem.html();
  let contentLeng = content.length;// 총 글자수
  let lessText = content.substr(0,showText);// 화면이 줄어들때 보여지는 텍스트
  let moreText = content.substr(showText,contentLeng);// 화면이 줄어들때 잘린 텍스트
  let changeHtml = '';
  if ( showText < contentLeng ) {
    changeHtml = `${lessText}<span>...</span><span class='more-content'><span>${moreText}</span><a href='#' class='more-btn active'><span>${moreBtnText}</span></a></span>`
    elem.html(changeHtml);
  }
  // console.log(changeHtml);
  // 버튼 실행 영역
  // class 삭제 할 때는 el.removeClass('on')
  $('.more-btn').click(function() {
    if ($(this).hasClass('active')) {
      $(this).removeClass('active')
      $(this).html(`<span>${lessBtnText}</span>`)
    } else {
      $(this).addClass('active')
      $(this).html(`<span>${moreBtnText}</span>`)
    }
    $(this).prev().toggle();
    $(this).parent().prev().toggle();

    // prev(),parent(),toggle() 3개의 메서드를 사용하여
    // 줄임말 포함된 span, 잘려진 텍스트를 담은 span을 선택하여 toggle형태로 구현
    /*
    prev() : 선택자 바로 앞 요소
    next() : 선택자 바로 뒤 요소
    parent() : 선택자의 부모의 요소
    toggle() : display: none 반복하여 나타냄
    */
    console.log($(this).parent());
  })
});
