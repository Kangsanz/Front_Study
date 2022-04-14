'use strict'
// 함수선언
let sqQnaW = prompt(`사각형의 가로 길이를 알려주세요.`)
let sqNumberW = Number(sqQnaW)
let sqQnaH = prompt(`사각형의 세로 길이를 알려주세요.`)
let sqNumberH = Number(sqQnaH)

function sqArea(x,y){
  return x*y;
}
console.log(`가로:${sqNumberW}, 세로:${sqNumberH} 인 사각형의 넓이는 ${sqArea(sqNumberW,sqNumberH)}입니다.`);


let triQnaW = prompt(`삼각형의 가로 길이를 알려주세요.`)
let triNumberW = Number(triQnaW)
let triQnaH = prompt(`삼각형의 높이를 알려주세요.`)
let triNumberH = Number(triQnaH)

function triArea(x,y){
  return x*y/2;
}
console.log(`가로:${triNumberW}, 높이:${triNumberH} 인 삼각형의 넓이는 ${triArea(triNumberW,triNumberH)}입니다.`);
