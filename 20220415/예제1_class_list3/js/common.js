'use strict'
// classList
function textFunc() {
  let leng = document.querySelector('#text').classList;
  console.log(leng);
  /*
  contains method는 classList의 해당 클래스가 포함되어있는지 여부를 확인하여
  boolean type으로 반환한다.
  */
  let bulNum = document.querySelector('#text').classList.contains('change-bg');
  console.log(bulNum);
}

function sideMenuSlide() {
  let side = document.querySelector('#sideMenu');
  let activeNum = side.classList.contains('on');
  if (activeNum) {
    side.classList.remove('on');
  } else {
    side.classList.add('on');
  }
}
