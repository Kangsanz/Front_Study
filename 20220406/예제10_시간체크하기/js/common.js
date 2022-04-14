'use strict'
// 시간체크하기
const date = new Date();
let year = date.getFullYear();
let month = date.getMonth();
let day = date.getDay();
let hours = date.getHours();
let minutes = date.getMinutes();
let seconds = date.getSeconds();

//오전 오후 확인 조건문
if ( hours < 12 ) {
  confirm( `${year}년 ${month}월 ${day}일 오전 ${hours}시 ${minutes}분 ${seconds}초 입니다.` )
}else if ( hours == 12 ) {
  confirm( `${year}년 ${month}월 ${day}일 정오 ${hours}시 ${minutes}분 ${seconds}초 입니다.` )
}else {
  confirm( `${year}년 ${month}월 ${day}일 오후 ${hours-12}시 ${minutes}분 ${seconds}초 입니다.` )
}
