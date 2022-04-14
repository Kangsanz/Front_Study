'use strict'
// 중첩 for 구문
// 홀수 짝수 구분하여서 별찍기
let outPut = '';
for (let i = 0; i < 10; i++) {
  // 실행문
  if (i % 2 == 1) {
    console.log(outPut += `/*`);
  }
  else if (i % 2 == 0) {
    console.log(outPut += `/**`);
  }
}
