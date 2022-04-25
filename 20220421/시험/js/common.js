'use strict'
let t = null;
function startTime() {
  let today = new Date();
  let h = today.getHours();
  let m = today.getMinutes();
  let s = today.getSeconds();
  h = checkTime(h);
  m = checkTime(m);
  s = checkTime(s);

  function checkTime(i) {
    if (i < 10) {
      i = '0' + i;
    }
    return i;
  }

  if (h == 15 && m >= 20 && m < 30) {
    document.getElementById('txt').innerHTML = `${h}:${m}:${s}<br>지금은 실습시간입니다.`;
  } else if (h == 16 && m > 49) {
    document.getElementById('txt').innerHTML = `${h}:${m}:${s}<br>7교시 종료 지금은 쉬는 시간입니다.`;
  } else if (h == 17 && m >= 50) {
    document.getElementById('txt').innerHTML = `${h}:${m}:${s}<br>오늘 하루 수고 하셨습니다.`;
  } else {
    document.getElementById('txt').innerHTML = `${h}:${m}:${s}`;
  }
  t = setTimeout(startTime, 1000);
}
startTime();
