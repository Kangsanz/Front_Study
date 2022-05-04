$(function() {
  // script 영역 아코디언 사용 예
  // $('dd:not(:first)').css('display', "none");
  // $('dl dt').click(function() {
  //   if ($('+dd', this).css('display') == 'none') {
  //     $('dd').slideUp('slow');
  //     $('+dd', this).slideDown('slow');
  //   }
  // });

  $('dd:not(:first)').css({
    'display': 'none',
    'height': 0
  });
  $('dl dt').click(function() {
    let thisElem = $(this);
    // console.log(thisElem);
    if ($('+dd', thisElem).css('display') == 'none') {
      let isAni = $('dd').is(':animated');
      if (!isAni) {
      $('dd').each(function() {
        // if ($(this).css('display') == 'block') {
        //   $(this).animate({height: 0},'slow',function() {
        //     $(this).css('display', 'none');
        //   });
        // };

        if ( parseInt($(this).css('height')) == 300) {
          $(this).animate({height: 0},1500,function() {
            $(this).css('display', 'none');
          });
        };
      });
        $('+dd', thisElem).css('display', 'block').animate({height: 300},300);
      }
    }
  });

  // $('dd:not(:first)').css('display', 'none');
  // $('dl dt').click(function() {
  //   let isAni = $('dd').is(':animated');
  //   if ($('+dd', this).css('display') == 'none' && isAni == false) {
  //     $('dd').animate({
  //       height: 'hide'
  //     }, 'slow', 'swing');
  //     $('+dd', this).animate({
  //       height: 'show'
  //     }, 'slow', 'swing');
  //   };
  // });




});
