$(function() {
  /*script 영역 ajax 사용 예*/
  $.ajax({
    url: 'data.xml',
    dataType: 'xml',
    success: function(data) {
      // 실행구문
      // console.log($(data).find("item"));
      //실습
      // 데이터의 item 요소를  개별로 추출하고
      // 아래와 같이 개별로 dl의 내부 영역에 삽입하시오.
      // dt a : xml파일 내부 item의  title
      // dt a href: xml파일 내부 item의  link
      // dd : xml파일 내부 item의  description
      // <dt><a href='http://daum.net'>"우주에서 숨쉰다." 지구 밖 '산소분자' 최초 발견</a></dt>
      // <dd>지구를 떠나서 우주에서 숨을 쉬는 일이(중략) 설명했다.</dd>

      // $(data).find('item').each(function() {
      //   console.log($(this).find('link').text());
      //   console.log($(this).find('title').text());
      //   console.log($(this).find('description').text());
      // })
      $('item', data).each(function() {
        console.log($('link',this).html());
        console.log($('title',this).html());
        console.log($('description',this).html());

        let linkText = $('link',this).text();
        let titleText = $('title',this).text();
        let descriptionText = $('description',this).text();

        $('dl').append(`<dt><a href=${linkText}>${titleText}</a></dt><dd>${descriptionText}</dd>`)
      });
    }
  });

  // 기사노출 클릭이벤트
  $('button').click(function() {

    if ($(this).hasClass('on')) {
      $(this).removeClass('on');
    }else {
      $(this).addClass('on');
    }
  })
});
