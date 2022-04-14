'use strict'
// query selector
function innerTxt() { // 텍스트 출력 함수
  let input_Txt = document.querySelector('#inputTxt')
  document.querySelector('.content h2 p').innerHTML = input_Txt.value
}
