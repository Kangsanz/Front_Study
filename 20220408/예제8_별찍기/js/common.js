'use strict'
// 중첩 for 구문
// 삼각형, 피라미드  별찍기
// let outPut = '';
// for (let i = 0; i < 15; i++) {
//   outPut += `*`;
//   outPut += `\n`;
//   // for (let x = 0; x < i; x++) {
//   // }
//   // for (let y = 10; y >= i; y--) {
//   // }
// }
// console.log(outPut);


let outPut = '';
for (let i = 0; i < 15; i++) {
  for (let j = 15; j > i; j--) {
    outPut += 'a';
  }
  for (let k = 0; k < 2*i-1; k++) {
    outPut += '*';
  }
  outPut += `\n`
}
for (let i = 14; i >= 0; i--) {
  for (let j = 15; j > i; j--) {
    outPut += 'a';
  }
  for (let k = 0; k < 2*i-1; k++) {
    outPut += '*';
  }
  outPut += `\n`
}
console.log(outPut);
