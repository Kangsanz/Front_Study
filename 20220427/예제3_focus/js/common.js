$(function() {
  // method 체인을 이용해서 입력한 값의 font color를 #ccc로 변경하시오
  $('input').val('입력해주세요')
    .css('color', '#ccc')
    .one('focus', function() { // 초기 포커스 일대 한번만 실행
      $(this).val('').css('color', '#000');
    })
    .blur(function() { // focus out 일 때를 의미한다.
      if ($(this).val() == '') {
        $(this).val('입력해주세요').css('color', '#ccc')
          .one('focus', function() {
            $(this).val('').css('color', '#000')
          });
      }
    });
});
