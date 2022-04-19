'use strict'
window.onload = function(){
  init();// window가 로드된 이후 초기화 코드
}

function init(){
  let contain = document.createElement('div');
  //contain 요소에 wrap class 추가
  contain.classList.add('wrap');

  let btn = document.createElement('div');
  btn.id = 'btn';
  btn.removeAttribute('id');
  contain.append(btn);

  let text = document.createTextNode('click!!');
  btn.append(text);

  let divBox = document.createElement('div');
  divBox.prepend(document.createTextNode('div-box'));

  document.body.append(contain);
  document.body.append(divBox);
}
