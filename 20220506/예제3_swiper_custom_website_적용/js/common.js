$(function() {
  // script 영역 change 예
  // $('select').change(function() {
  //   let thisVal = $(this).val();
  //   console.log(thisVal);
  //   $(this).next().find('input').val(thisVal)
  // });

  // $('input.inputtest').change(function() {
  //   alert(`inputtest가 ${$(this).val()}로 변경되었습니다.`)
  // })

  // $('select').change(function() {
  //   let thisVal = $(this).val();
  //   $(location).attr('href',thisVal)
  // });

  $('select').change(function() {
    let thisVal = $(this).val();
    if ($(this).hasClass('familysite')) {
      $(location).attr('href', thisVal)
    } else {
      $(this).next().find('input').val(thisVal)
    }
  });
});
