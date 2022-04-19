'use strict'
window.onload = function() {
  init(); // window가 로드된 이후 초기화 코드
}

function init() {
  let contain = document.createElement('div');
  //contain 요소에 wrap class 추가
  contain.classList.add('wrap');
  let text = document.createTextNode('test');
  contain.append(text);
  document.body.append(contain);

  // let input = document.createElement('input');
  // input.id = 'male';
  // input.setAttribute('type', 'checkbox')
  // contain.prepend(input)

  // let label = document.createElement('label');
  // label.id = 'gender';
  // label.setAttribute('for', 'male')
  // label.append(document.createTextNode('남성'));
  // contain.prepend(label);

  // let input2 = document.createElement('input');
  // input2.id = 'female';
  // input2.setAttribute('type', 'checkbox')
  // contain.prepend(input2)

  // let label2 = document.createElement('label');
  // label2.id = 'gender';
  // label2.setAttribute('for', 'female')
  // label2.append(document.createTextNode('여성'));
  // contain.prepend(label2)

  // 공통 코드 부분 함수로 만들기
  function inputFunc(parentX,idX) {
    let inputX = document.createElement('input');
    inputX.id = `${idX}`;
    inputX.setAttribute('type', 'checkbox')
    parentX.prepend(inputX)
    return inputX;
  }

  function labelFunc(parentX,forX,textX) {
    let labelX = document.createElement('label');
    labelX.id = 'gender';
    labelX.setAttribute('for', `${forX}`)
    labelX.append(document.createTextNode(`${textX}`));
    parentX.prepend(labelX);
    return labelX
  }

  // console.log(labelFunc(contain,'female','여성'));
  // console.log(inputFunc(contain,'female'));
  // console.log(labelFunc(contain,'male','남성'));
  // console.log(inputFunc(contain,'male'));
  inputFunc(contain,'male');
  labelFunc(contain,'male','남성');
  inputFunc(contain,'female');
  labelFunc(contain,'female','여성');
}
