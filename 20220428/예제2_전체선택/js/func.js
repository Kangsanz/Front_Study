function allCheckFunc(btn, elem) {
  if (btn.hasClass('all') == true) {
    btn.text('전체 선택');
    elem.prop('checked', false);
  } else {
    btn.text('전체 해제');
    elem.prop('checked', true);
  }
  btn.toggleClass('all');
}
