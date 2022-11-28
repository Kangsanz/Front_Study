'use strict';
$(function() {
  const intervalNum = 150;
  //script 입력 영역
  $('nav ul li a,.back-to-top a,.button').click(function() {
    $('input[type=checkbox]#gnbcheck').prop("checked", false);

    let thisHash = $(this.hash);
    // 1번 여러번 클릭을 방지
    // let isAni = $('html,body').is(':animated');
    // if (!isAni) {
    //   $('html,body').animate({scrollTop : thisHash.offset().top},1500)
    // }

    // 2번 즉시 scroll 대상 변경
    $('html,body').stop();
    $('html,body').animate({
      scrollTop: thisHash.offset().top
    }, 1500)
    return false;
  });

  $(window).scroll(function() {
    if ($(this).scrollTop() != 0) {
      $('.back-to-top').addClass('on')
    } else if ($(window).scrollTop() + $(window).height() >= $(document).height()) {
      $('.back-to-top').addClass('white');
      $('.back-to-top').removeClass('on')
    } else {
      $('.back-to-top').removeClass('white')
      $('.back-to-top').removeClass('on')
    }
  });

  let wHeight = $(window).height();
  $(window).scroll(function() {
    let thisScTop = $(this).scrollTop();
    $('section').each(function() {
      let thisOffet = $(this).offset();
      if (thisScTop >= thisOffet.top - intervalNum && thisScTop <= thisOffet.top + wHeight) {
        $(this).addClass('active')
      } else {
        // $(this).removeClass('active')
      }
    });
  });

  // modal 영역
  $(".modal-open").click(function() {
    $("#" + $(this).attr("data-name") + "").css('display', 'flex').hide().fadeIn();
    //팝업을 flex속성으로 바꿔준 후 hide()로 숨기고 다시 fadeIn()으로 효과
  });

  $(".confirm").click(function() {
    modalClose($(this).attr("data-name")); //모달 확인 함수 호출
  });

  $(".close").click(function() {
    modalClose($(this).attr("data-name")); //모달 닫기 함수 호출
  });

  function modalClose(name) {
    $("#" + name + "").fadeOut(); //페이드아웃 효과
  }

  $(".img_hover img").hover(function() {
    $(this).parent().toggleClass("hovered");
  });

});
