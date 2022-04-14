'use strict'
// substr 사용
let nameStr = ['박길동','홍길동','이길동'];
let str = 'hello javascript'; // string (문자열)
let strNum = '20200413';
let numberText = '1234567890'
// console.log(str.[0]);
// console.log(str.length);
// console.log(numberText.substr(1,1));
// console.log(str.substr(0));
let ntNum_01 = numberText.substr(1,1);
console.log(ntNum_01);

console.log(`오늘은 ${strNum.substr(6,2)}일 입니다.`);
console.log(`저는 ${nameStr[0]}입니다.`);
console.log(`나이는 ${numberText.substr(1,2)}세 입니다.`);
