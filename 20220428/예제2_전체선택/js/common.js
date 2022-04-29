$(function() {
// script 영역 all selected 예
  // 1번: click event, attr()
  // $('button').click(function() {
    // console.log($('input[type="checkbox"]').attr('checked'));
    // $('input[type="checkbox"]').attr('checked');
    // $(':checkbox').attr('checked','checked');
  // });

  // 2번: on method, prop()
  $('body').on('click','button',function() {
    // console.log('click!!');
    // $(':checkbox').attr('checked','checked');
    // $(':checkbox').prop('checked',true);
    // $(':checkbox').each(function() {
    //   if ($(this).is(':checked')) {
    //     $(this).prop('checked',false);
    //   } else {
    //     $(this).prop('checked',true);
    //   }
    // });

    /*
    실습:
    전체 선택 버튼을 all 클래스를 추가하여 checkbox를 모두 선택하고
    버튼 텍스트는 '전체 해제'로 변경, 전체 해제 버튼을 클릭하면 all을
    제거하고 checkbox를 모두 선택 해제하는 logic을 구현하시오.
    */

    // if ($(this).hasClass('all') == true) {
    //   $(':checkbox').prop('checked',false);
    //   $(this).text('전체 선택');
    // }else {
    //   $(':checkbox').prop('checked',true);
    //   $(this).text('전체 해제');
    // }
    // $(this).toggleClass('all');

    allCheckFunc($(this), $(':checkbox'));
  });
});
