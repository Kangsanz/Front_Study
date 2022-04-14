'use strict'
let count = 0; // 숫자 카운트를 담는 변수
let countM = 0;
let t = null; // setTimeout을 담는 변수
let timerIsOn = 0; // setTimeout의 진행 여부 확인하는 변수

// setTimeout 실행 함수
function timeCount() { // 1초마다 한번씩 count를 증가시키는 함수
  document.getElementById('stop-watch').innerHTML = `${countM}분 ${count}초`;
  count += 1;
  if (count == 60) {
    count = 0;
    countM += 1;
  }else if (count == 0) {
    count += 1;
  }
  t = setTimeout(timeCount, 1000);
  // console.log(count);
}

function startCount() { // timeCount 함수를 실행시키는 함수
  if (timerIsOn == 0) {
    timerIsOn = 1;
    timeCount();
  }
}

function stopCount() { // timeCount 함수를 정지시키는 함수
  clearTimeout(t);
  timerIsOn = 0;
  console.log('setTimeout이 정지되었습니다.');
}

function resetCount() { // timeCount 함수를 정지시키는 함수
  clearTimeout(t);
  timerIsOn = 0;
  count = 0;
  countM = 0;
  document.getElementById('stop-watch').innerHTML = `${countM}분 ${count}초`;
  console.log('setTimeout이 리셋되었습니다.');
}
