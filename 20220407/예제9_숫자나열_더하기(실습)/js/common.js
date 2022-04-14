'use strict'
let total = 0;
let qna = prompt(`0부터 더하고 싶은 숫자를 적어주세요.`);
let qnaNumber = Number(qna);
let totalNumber = qnaNumber;

function plusNumber(i) {
  if (i < 1) {
    return 0;
  }
  total = total + i;
  console.log(totalNumber);
  i--;
  totalNumber += '+'+i;
  plusNumber(i);
}

plusNumber(qnaNumber);
console.log(totalNumber+' = '+total);
alert(totalNumber+' = '+total)
