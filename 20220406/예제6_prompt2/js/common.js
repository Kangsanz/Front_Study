'use strict'
// number string prompt test
// const num = 10;
// let inputText = prompt('좋아하는 숫자를 입력해주세요', '4')
// console.log(typeof(inputText));
// console.log(num + inputText);
// let changeNumber = Number(inputText);
// console.log(num + changeNumber+', '+typeof(num + changeNumber));


// 반지름 입력ㄱ밧에 다라 원의 둘레 구하기
const pi = 3.14159265;
let radiusNum = prompt('원의 둘레 구하기', '반지름을 입력해주세요, 숫자')
let circle;
radiusNum = Number(radiusNum);
circle = 2*pi*radiusNum

console.log(`입력한 반지름은 : ${radiusNum}, 데이터 타입 : ${typeof(radiusNum)}`);

alert(`반지름은 ${radiusNum}이고, 원의 둘레는 ${circle}입니다`)
