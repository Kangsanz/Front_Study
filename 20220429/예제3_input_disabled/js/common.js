$(function() {
// script 영역 input disabled 예
  $('select').change(function() {
    // console.log($(this)[0][$(this)[0].length-1]);
    // console.log($(this).val());
    console.log($(':selected').attr('value'));
    /*
    실습:
    10대일 때는 input text field를 비활성화 하고
    10대가 아닐 때는 input text field를 활성화 하시오.
    */

    if ($(':selected').attr('value') != '10대') {
      $('input').removeAttr('disabled');
    } else {
      $('input').attr('disabled',true)
    }
  });
});
