'use strict'
// 변수 선언

let numberX = prompt('숫자를 적어주세요');
let changeX = Number(numberX);

const numCheck = 10;
const numCheck2 = 3;

if (changeX < numCheck) {
  alert(`숫자 ${changeX}은 ${numCheck}보다 작습니다.`)
  if (changeX % numCheck2 == 0) {
    alert(`숫자 ${changeX}은 ${numCheck2}의 배수 입니다.`)
  } else if (changeX != numCheck2) {
    alert(`숫자 ${changeX}은 ${numCheck2}의 배수가 아닙니다.`)
  }
}
