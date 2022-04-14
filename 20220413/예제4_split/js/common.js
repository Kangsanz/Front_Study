'use strict'
// split 사용
let num = '1,2,3,4,5,6,7,8,9'
let array = num.split(',');
// console.log(array);

let chatText_1 = "How are you doing today?";
let chatText_2 = "let's go lunch";
let chatText_3 = "i am a boy";
let chatText_4 = "good luck man!!";

// let str = chatText_1.split('a'); // `a`로 문자열을 잘라서 배열로 반환
let str = chatText_1.split('a', 1); // 두번째 매개변수는 반환하는 배열의 수

let ctStr_1 = chatText_1.split(' ')
let ctStr_2 = chatText_2.split(' ')
let ctStr_3 = chatText_3.split(' ')
let ctStr_4 = chatText_4.split(' ')
console.log(`${ctStr_1[2]} ${ctStr_1[1]} ${ctStr_3[2]} ${ctStr_4[0]} ${ctStr_4[2]}`);
