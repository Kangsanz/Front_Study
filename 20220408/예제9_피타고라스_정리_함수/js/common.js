'use strict'
// 함수선언
function square(x){
  return x*x;
}
function pytha(width,height){//피타고라스 연산 함수
  // `${square(width)},${square(height)}`;
  return Math.sqrt(square(width) + square(height))
}
console.log(pytha(3,4));
