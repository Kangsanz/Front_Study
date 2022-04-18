'use strict'
// classList
function textFunc() {
  // class 단일 추가
  // document.querySelector('#text').classList.add('change-font-style')
  // class 다중 추가
  // document.querySelector('#text').classList.add('change-bg','change-font-style')

  // class 단일 삭제
  // document.querySelector('#text').classList.remove('change-width');
  // class 다중 삭제
  document.querySelector('#text').classList.remove('change-font-style', 'change-bg', 'change-width');
}
