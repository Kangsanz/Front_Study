'use strict'
// var, let, const test
var numVar; // 변수 선언
numVar = 10; // 변수 값 할당 및 초기화
console.log(numVar)

var numVar; // 재선언
console.log(numVar)

let numLet; // 변수 선언
numLet = 15; // 변수 값 할당 및 초기화
console.log(numLet)

// var numLet; // 재선언이 안됨
numLet = 20;
console.log(numLet)

const numConst = 50;
// numConst = 100;
// const numConst = 300;
console.log(numConst)
