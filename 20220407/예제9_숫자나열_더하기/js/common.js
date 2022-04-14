'use strict'
// 숫자나열
// 변수선언
let total = 0;

let inputText = prompt('정수를 입력해주세요.', '숫자');
inputText = Number(inputText);
// console.log(inputText);

function sumRepeat(i) {
  if (i < 1) {
    console.log('정지')
    return 0;
  }
  total += i;
  console.log(total);
  i--;
  sumRepeat(i);
}

sumRepeat(inputText);
alert(total);
