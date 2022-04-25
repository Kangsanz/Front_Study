$(function() {
  let elem = $('.more-text');
  const showText = 100;
  let moreBtnText = 'Show More'
  let lessBtnText = 'Show Less'

  // elem = document.body.getElementsByClassName('more-text')
  // for (let i = 0; i < elem.length; i++) {
  //   let content = elem[i].html();
  // }// 아래 each method와 같은 구문

  elem.each(function(i) {
    console.log(i);
    let content = $(this).html();
    let contentLeng = content.length;
    let lessText = content.substr(0, showText);
    let moreText = content.substr(showText, contentLeng);
    let changeHtml = '';
    if (showText < contentLeng) {
      changeHtml = `${lessText}<span>...</span><span class='more-content'><span>${moreText}</span><a href='#' class='more-btn active'><span>${moreBtnText}</span></a></span>`
      $(this).html(changeHtml);
      // if ( i == 0 ) {
      //   $(this).html('11111'+changeHtml);
      // }else if ( i == 1 ) {
      //   $(this).html('22222'+changeHtml);
      // }else if ( i == 2 ) {
      //   $(this).html('33333'+changeHtml);
      // }
    }
  });

  $('.more-btn').click(function() {
    if ($(this).hasClass('active')) {
      $(this).removeClass('active')
      $(this).html(`<span>${lessBtnText}</span>`)
    } else {
      $(this).addClass('active')
      $(this).html(`<span>${moreBtnText}</span>`)
    }
    $(this).prev().toggle();
    $(this).parent().prev().toggle();
  })
});
