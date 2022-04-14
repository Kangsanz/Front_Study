'use strict'
// 변수선언
let array = ['사과','배','수박','포도','키위','레몬']
let obj = { car : `승용차`, phone: `iphone`, house: `아파트`}
let foodList = { 한식: '김치찌개', 중식: '짜장면', 일식: '돈까스', 양식: '피스타'}
// let obj = new Object();
// console.log(typeof(odj));
// console.log(array);
// console.log(obj);

// for( let items of array) {
  // 반복 가능한 객체(iterable), 배열도 객체이며 array, set, map 등으로
  // 사용할 수 있다.
  // console.log('for of 구문으로 출력하기:'+ items);
// }

// for( let items in array ) {
//   console.log('for in 구문으로 index 출력하기:' + items);
//   console.log('for in 구문으로 value 출력하기:' + array[items]);
// }

// for( let items of obj) {
//   //일반 객체타입은 iterable 하지 않기 때문에 for of를 사용할 수 없다.
//   console.log('for of 구문으로 출력하기:' + items);
// }

// for( let [key, val] of Object.entries(obj) ) {
//   // 일반 객체타입을 iterable 하게 사용하기
//   console.log('for of 구문으로 출력하기: key:'+key+',value:'+val);
// }

// for( let items in obj ) {
//   console.log('for in 구문으로 index 출력하기:' + items);
//   console.log('for in 구문으로 value 출력하기:' + obj[items]);
// }

// let userMap = new Map();
// userMap.set('test','tttttt');
// userMap.set('car','트럭');
// userMap.set('lunch','비빔밥');
// // console.log(userMap);
// console.log(userMap.has('test'));
//
// if(userMap.has('test')){
//   console.log('test는 존재합니다.');
// }

let angryStatus = new Map();
angryStatus.set('약간','문제 없음')
angryStatus.set('보통','조금 문제 있음')
angryStatus.set('많이','많이 문제 있음')
angryStatus.set('최대','일상생활 불가')
console.log(angryStatus);

 for( let items in foodList) {
   console.log('오늘의 음식은 ' + items);
   console.log('오늘의 음식은 ' + foodList[items]);
 }
