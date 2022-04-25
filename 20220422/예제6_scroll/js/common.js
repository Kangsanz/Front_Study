$(function() {
  $(window).scroll(function(){
    let winHeight = $(window).height() - 70;
    let scTop = $(this).scrollTop();
    let navBar = $('nav');

    if (scTop > winHeight ) {
      navBar.addClass('fixed');
    }else {
      navBar.removeClass('fixed');
    }
  });
});
