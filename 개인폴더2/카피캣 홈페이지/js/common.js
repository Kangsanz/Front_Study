$(function() {
  $(function() {
    $('#header_wrap').load('./header.html #header');
    $('#footer_wrap').load('./footer.html #footer');
  });
  // 카운트 영역
  let boxNum = $('.section_box .count');
  boxNum.each(function() {
    $(this).prop('Counter', 0).animate({
      Counter: $(this).text()
    }, {
      duration: 2000,
      easing: 'swing',
      step: function(now) {
        $(this).text(Math.ceil(now));
        $(this).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
      }
    });
  });

  // 원 영역
  const widthNum = 230;

  function animFunc(name) {
    let innerElem = $('#wrap_circle');
    let caInMarginLeft = parseInt(innerElem.css('margin-left'));
    innerElem.css('margin-left', -widthNum);

    $(name).click(function() {
      let isAni = innerElem.is(':animated');
      if (name == '#carousel_prev' && !isAni) {
        innerElem.animate({
          marginLeft: caInMarginLeft + widthNum
        }, '1200', 'swing', function() {
          $('#wrap_circle .circle:last').prependTo(innerElem);
          innerElem.css('margin-left', -widthNum);
        });
      } else if (name == '#carousel_next' && !isAni) {
        innerElem.animate({
          marginLeft: caInMarginLeft - widthNum*2
        }, '1200', 'swing', function() {
          $('#wrap_circle .circle:first').appendTo(innerElem);
          innerElem.css('margin-left', -widthNum);
        });
      };
    });
  };

  animFunc('#carousel_prev');
  animFunc('#carousel_next');

  // 리스트 영역
  $('.list_click').click(function() {
    let headLeng = $('.head').length;
    if ($(this).hasClass('head') == false) {
      $('.list_click').removeClass('head')
      $('.list_body').removeClass('on')
      $(this).addClass('head')
      if ($(this).hasClass('head')) {
        $(this).next().find('.list_body').addClass('on')
      }
    }
    return false;
  });




});
