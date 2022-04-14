'use strict'
// live watch
let t = null;
// t = setInterval(startTime, 1000);
function startTime() {
  let today = new Date(); // 날짜 생성자
  let h = today.getHours(); // 시간 생성자
  let m = today.getMinutes(); // 분 생성자
  let s = today.getSeconds(); // 초 생성자
  h = checkTime(h)
  m = checkTime(m)
  s = checkTime(s)

  function checkTime(i) {// 일의 자리에 '0'을 포함시키는 함수
    if( i < 10 ) {
      i = '0' + i;
    } return i;
  }

  // 구간 설정
  if ( h == 16 && m > 49 ) {
    document.getElementById('txt').innerHTML = `${h}:${m}:${s}<br>7교시 종료 지금은 쉬는 시간입니다.`
  }else if ( h == 17 && m < 50 ) {
    document.getElementById('txt').innerHTML = `${h}:${m}:${s}<br>8교시 시간입니다.`
  }else{
    document.getElementById('txt').innerHTML = `${h}:${m}:${s}`
  }
  t = setTimeout(startTime, 1000);
  // console.log(`${h}:${m}:${s}`);
}
startTime();
