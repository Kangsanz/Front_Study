'use strict'
// 배열 선언
// let array = ['A','B','C'];
// let lastIndex = array.length -1;
// console.log(array.length);
// console.log(`첫번째 배열값은 ${array[0]}입니다.`);
// console.log(`마지막 배열값은 ${array[lastIndex]}입니다.`);

const myFruits = '포도';
let count = 0;
let fruits = ['사과', '배', '수박', '포도'];
// console.log(fruits);
// fruits.push('딸기');
// fruits.push('멜론');
// console.log(fruits.pop());
// console.log(fruits);
// console.log(fruits.shift());
// console.log(fruits);
// fruits.unshift('오렌지');
// console.log(fruits);
// fruits.splice(1,2,'키위');
// console.log(fruits);
// console.log(fruits.length);
// fruits.splice(fruits.length, 0, '참외');
// console.log(fruits);
// alert(`총 과일의 개수는 ${fruits.length}개 입니다.`)

// 함수 선언
// 재귀함수: 하나의 함수를 반복하여 작동하는 함수

function checkFunc() {
  // 실행코드 작성 영역
  if ( count < fruits.length ) {
    console.log(fruits[count]);
    if( myFruits == fruits[count] ) {
      console.log(`${fruits[count]}는 제가 좋아하는 과일 입니다.`)
    }
    count++;
    checkFunc();
  }else {
    alert('더 이상 과일이 없습니다.')
  }
}
checkFunc();
