'use strict'
// 함수 선언
var repeat = function() {
  alert('나는 익명함수 입니다.')
}
// console.log(typeof(repeat));
// repeat();

function repeat() {
  alert(`나는 선언적함수 입니다.`)
}
// console.log(typeof(repeat));
// repeat();
// 함수를 호출하면 익명함수가 실행됨
// 이유: 선언적 함수가 먼저 생성되고 익명 함수가 나중에 생성되기 때문(호이스팅)

// 전역 변수 / 지역 변수
// 전역변수:
// 지역변수: i,j

let num = 10;

function testFunction(i,j){
  let checkNum = 20;//지역변수
  let sumCalc = i + j + num + checkNum;
  return sumCalc
}
// console.log(testFunction(1,2));

let sumTotal = testFunction(1,0);
console.log(`함수에서 반환한 값을 출력: ${sumTotal}`);
