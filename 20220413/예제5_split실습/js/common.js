'use strict'
// function getTextFunc() {
//
// }

let infoText = "javascript,html,css3,photoshop,xd";
let aHtml = '<h1>My Skill</h1>';

let str = infoText.split(',');
console.log(str);
// let str = [];
// str.push(infoText.substring(0,10));
// str.push(infoText.substring(11,15));
// str.push(infoText.substring(16,20));
// str.push(infoText.substring(21,30));
// str.push(infoText.substring(31,33));
aHtml += '<br><ul>';
for (let i = 0; i < str.length; i++) {
  aHtml += `<li>${str[i]}</li>`
}
aHtml += '</ul>';
document.getElementsByClassName('demo')[0].innerHTML = aHtml;


// inforText를 substring으로 단어를 개별 추출하고 해당값을
// 배열에 담아서 aHtml의 변수에 반복구문을 사용하여서 추가(ul)한 후
// document에 있는 요소 .demo element에 출력해주세요

// let skillList = [`${infoText.substring(0,10)}`,`${infoText.substring(11,15)}`,`${infoText.substring(16,20)}`,`${infoText.substring(21,30)}`,`${infoText.substring(31,33)}`]
// let list = `<div class="demo">${aHtml}<br><ul>`;
// for (let i = 0; i < skillList.length; i++) {
  //   list += `<li>${skillList[i]}</li>`
  // }
  // list += `</ul></div>`
  // document.body.innerHTML = list
