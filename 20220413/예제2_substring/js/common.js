'use strict'
// substring 사용
let a = '1234567890';
// let abc = a.substring(5,2);
// 매개변수 중 작은 숫자가 시작인덱스가
// let abc = a.substring(-5);
// let abc = a.substring(0);
// console.log(abc);

let stringText = 'hello this is string';
// substring() 메서드 사용 'hi' 값을 console.log로 출력
// console.log(`${stringText.substring(0,1)}${stringText.substring(8,9)}`);

let infoText = '안녕하세요. 저는 대구에 사는 홍길동입니다. 나이는 20세입니다.'
let ageNumText = infoText.substring(29,31)
let nameText = infoText.substring(17,20)
let regionText = infoText.substring(10,12)

console.log(`나이: ${ageNumText}세, 이름: ${nameText}, 지역:${regionText} `);
