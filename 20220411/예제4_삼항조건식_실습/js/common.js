'use strict'
let qna = prompt('숫자를 입력해주세요');
qna = Number(qna);
let absQna = Math.abs(qna);
console.log(qna);
console.log(absQna);

// if (qna % 2 == 0) {
//   alert(qna + '는 짝수 입니다.');
// } else {
//   alert(qna + '는 홀수 입니다.');
// }

qna % 2 == 0 ? alert(qna + '는 짝수 입니다.') : alert(qna + '는 홀수 입니다.');
