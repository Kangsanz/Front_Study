$(function() {
  let boxNum = $('.section_box .count');
  boxNum.each(function() {
    $(this).prop('Counter', 0).animate({Counter: $(this).text()}, {
      duration: 2000,
      easing: 'swing',
      step: function(now) {
        $(this).text(Math.ceil(now));
      }
    });
    $(this).change(function() {
      console.log(boxNum);
    })
  });
});
