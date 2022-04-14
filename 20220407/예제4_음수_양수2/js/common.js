'use strict'
// 변수 선언
let inputText = prompt('숫자를 적어주세요.','숫자');
console.log(inputText);
if ( inputText === '숫자' || inputText === '' ) {
  alert('입력된 숫자가 없습니다.')
}else {
  inputText = Number(inputText);
  console.log(inputText);
  if ( isNaN(inputText) ){
    alert('숫자를 입력해주세요.')
  }else if (inputText < 0) {
    alert(`입력하신 숫자 ${inputText}은 음수입니다.`)
  }else if (inputText > 0) {
    alert(`입력하신 숫자 ${inputText}은 양수입니다.`)
  }
}
