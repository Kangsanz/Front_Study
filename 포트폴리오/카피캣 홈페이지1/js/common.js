$(function() {
  // 배너 이미지 영역
  let timerID = null;
  let auto = function() {
    timerID = setInterval(function() {
      let slideNum = $('#wrap img');
      slideNum.each(function() {
        if ($(this).css('opacity') == 1) {
          $(this).animate({
            opacity: 0
          }, {
            duration: 3000,
            easing: 'swing'
          });
        } else {
          $(this).animate({
            opacity: 1
          }, {
            duration: 3000,
            easing: 'swing'
          });
        };
      });
    }, 4000);
  }
  auto();

  // 카운트 영역
  let boxNum = $('.section_box .count');
  boxNum.each(function() {
    $(this).prop('Counter', 0).animate({
      Counter: $(this).text()
    }, {
      duration: 2000,
      easing: 'swing',
      step: function(now) {
        $(this).text(Math.ceil(now).toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ","));
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
          marginLeft: caInMarginLeft - widthNum * 2
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

  $(function() {
    $('#header_wrap').load('./header.html #header');
    $('#footer_wrap').load('./footer.html #footer');
  });
});

// TOP 버튼
function topFunc() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
};

function readyTopFunc() {
  $(document).ready(function() {
    topFunc()
  });
};

// 패밀리사이트
function siteFunc() {
  let ele = document.getElementsByClassName('site_up')[0];
  ele.classList.toggle('on');
};

function readySiteFunc() {
  $(document).ready(function() {
    siteFunc()
  });
};
