'use strict'
// confirm test
// let inputText = confirm('회원가입을 하시겠습니까?');
// console.log(inputText);
// if( inputText == true ){
//   alert('회원가입이 완료 되었습니다.')
// }else {
//   alert('회원가입이 취소 되었습니다.')
// }


// let answerX = prompt('X 값');
// let answerY = prompt('Y 값');
// let changeX = Number(answerX);
// let changeY = Number(answerY);
// console.log(`X값 ${changeX}(${typeof(changeX)}), Y값 ${changeY}(${typeof(changeY)})`);
//
// let answerXY = confirm(`입력값이 입력완료 되었습니다. X값은 ${changeX}이고, Y값은 ${changeY}입니다.`);
// if( changeX == changeY ) {
//   confirm('X는 Y와 같습니다.');
// }else if( changeX > changeY ) {
//   confirm('X는 Y보다 큽니다.');
// }else {
//   confirm('X는 Y보다 작습니다.');
// }

const moneyAll = 10000
let fruitX = prompt('사과의 가격을 입력해주세요');
let fruitY = prompt('배의 가격을 입력해주세요');
let changeX = Number(fruitX);
let changeY = Number(fruitY);
let fruitTotal = changeX + changeY;

let fruitXY = confirm(`사과의 가격은 ${changeX}원이고, 배의 가격은 ${changeY}원입니다.
  총 지불금액은 ${fruitTotal}입니다. `)

if( fruitTotal > moneyAll ) {
  confirm(`조금 모자란데, 깎아주시면 안될까요..?`)
}else if( fruitTotal < moneyAll ) {
  confirm(`넘 가격이 착하네요, 바로 포장해주세요.`)
}else {
  confirm(`혹시 상품이 정말 좋은데, 조금만 에누리 해주시면 안될까요?`)
}
