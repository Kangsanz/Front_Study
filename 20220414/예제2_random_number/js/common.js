'use strict'
let num = prompt('1~10 숫자를 입력해주세요.','숫자');
let randomNum = Math.random()*10; //난수(랜덤 숫자)
// let sumNum = num + randomNum;
//
// if( sumNum > 10 ) {
//   num = sumNum - 10;
// }else if ( sumNum == 10 ){
//   num = sumNum;
// }

function getNumber() {
  document.querySelectorAll('div')[num].setAttribute('class','selected');
}
