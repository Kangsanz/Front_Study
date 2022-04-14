'use strict'
// 시간체크하기
const date = new Date();
let hours = date.getHours();

//조건문
//11시 이전 아침 식사, 15시 이전 점심 식사. 나머지는 저녁 시간

if ( hours < 11 ) {
  alert ('아침 먹을 시간입니다.')
}else if ( hours < 15 ){
  alert ('점심 먹을 시간입니다.')
}else {
  alert ('저녁 먹을 시간입니다.')
}
