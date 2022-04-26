$(function() {
  //script 영역 table scroll 생성 시 스크롤바
  $(window).on('load resize', function() {
    // 실행구문 영역
    console.log(`table parent width: ${$('.tbl-content').outerWidth()}, table width: ${$('.tbl-content table').outerWidth()}`);
    let scrollBarWidth = $('.tbl-content').outerWidth() - $('.tbl-content table').outerWidth();
    console.log(scrollBarWidth);
    $('.tbl-header').css('padding-right',scrollBarWidth);
  }).resize();
});
