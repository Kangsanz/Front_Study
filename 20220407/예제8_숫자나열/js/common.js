'use strict'
// 숫자나열
// 변수선언
let num = 0; // 숫자를 담을 변수
let count = 0; // 작은 숫자부터 큰 숫자까지 개수

function repeat(i,j){ // i는 시작하는 숫자, j는 끝나는 숫자
  // 실행코드
  if( count == 0 ) { // 초기실행
    num = num + i;
  }else if( i > j ) { // 최대숫자 제한
    return 0;
  }else { // 초기 실행이 아니라면 콤마 추가
    num = num + ',' + i;
  }
  i++;
  count++;
  repeat(i,j);
}

repeat(1,100);
console.log(num);
