'use strict'
// classList
function sideMenuSlide() {
  let elem = document.querySelector('#sideMenu');
  let checkNum = elem.getAttribute('class');
  elem.classList.toggle('on');
  // if(document.querySelector('#sideMenu').getAttribute('class') == 'on') {
  //   // on class가 있을 때
  //   // on을 삭제하는 코드
  //   document.querySelector('#sideMenu').classList.remove('on');
  // }else{
  //   // on을 추가하는 코드
  //   document.querySelector('#sideMenu').classList.add('on');
  // }
}
