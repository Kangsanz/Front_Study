'use strict'
// 과일 구매하기
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
