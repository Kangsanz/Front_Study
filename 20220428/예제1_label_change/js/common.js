$(function() {
  // script 영역 label change 예
  // input 선택 방식 1
  // let inputElem = $('input[type=radio]');
  // console.log(inputElem);

  // input 선택 방식 2(축약형)
  // let inputElem = $(':radio');
  // console.log(inputElem);

  // $(':radio').change(function() {
  // let genderNum = $(this).attr('id');
  // $("label").css("font-weight", "normal"); // label 모든 요소
  // $(`label[for='${genderNum}']`).css("font-weight", "bold");
  // });

  // 취미를 구분하는 checkbox 및 label을 추가하고 (헬스, 그림)
  // change method 내부에서 if조건문 사용하여 type 속성을 구분하고
  // checkbox, radio일 때 로직을 구현하시오

  // checked 확인 방법
  // 1번
  // if ($('input[type=checkbox]:checked').length > 0) {}
  // 2번
  // if ($('input[type=checkbox]').prop('checked') == true) {}
  // 3번
  // if ($('input[type=checkbox]').is(':checked') == true) {}

  $(':checkbox, :radio').change(function() {
    console.log($(this).attr('type'));
    let inputElem = $(this).attr('type');
    let attrNum = $(this).attr('id');

    if (inputElem == 'radio') {
      $('label[for^="gender"]').css('font-weight', 'normal');
      $(`label[for='${attrNum}']`).css('font-weight', 'bold');
      
    } else if (inputElem == 'checkbox') {
      if ($(this).prop('checked') == true) {
        $(`label[for='${attrNum}']`).css("font-weight", "bold");
      } else if ($(this).prop('checked') == false) {
        $(`label[for='${attrNum}']`).css('font-weight', 'normal');
      }
    }
  });
});
