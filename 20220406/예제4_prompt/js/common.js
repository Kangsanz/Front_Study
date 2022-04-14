'use strict'
window.onload = function(){
  let inputTextNum = '당신의 이름은?'
  let nameText = prompt(inputTextNum)
  console.log(nameText)
  // innerHTML
  // document.body.innerHTML = '<p class="name">'+nameText+'</p>';
  // document.body.innerHTML = '<input class="'+nameText+'" placeholder="'+nameText+'" value="'+nameText+'">'+nameText+'</input>';
  document.body. innerHTML = `<input class="${nameText}" placeholder="${nameText}" value="${nameText}">${nameText}</input>`
  
}
