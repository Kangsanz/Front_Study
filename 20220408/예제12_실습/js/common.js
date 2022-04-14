'use strict'
// 배열선언
let korean = [85, 75, 88, 90, 95, 97, 77, 80, 100, 88] //국어
let math = [85, 75, 88, 90, 95, 97, 77, 80, 90, 88] //수학
let english = [85, 75, 88, 87, 90, 95, 77, 85, 100, 88] //영어

function examAvg(subject) {
  let total = 0;
  let subjectNum = subject.length;
  let subjectAvg;
  for (let i = 0; i < subjectNum; i++) {
    total += subject[i];
  }
  console.log(total);
  return subjectAvg = total / subjectNum
}

console.log(examAvg(korean));


let star = '';
for (let a = 0; a < 20; a++) {
  for (let b = 20; b > a; b--) {
    star += ` `;
  }
  for (let c = 0; c < a*2 -1; c++) {
    star += `*`;
  }
  star += '\n';
}
console.log(star);
