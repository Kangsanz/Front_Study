'use strict'
// function outFunc(a) {
//   let outerText = a;
//   console.log(outerText);
//   function innerFunc() {
//     let innerText = 'inner-text';
//     console.log(`${outerText},${innerText}`);
//   }
//   innerFunc();
// }
//
// console.log(outFunc('안녕하세요 저는 외부함수 입니다.'));

// function outFunc(a) {
//   let outerText = 'outer-text';
//   function innerFunc(num) {
//     let innerText = num;
//     console.log(`${outerText},${innerText}`);
//   }
//   innerFunc(a);
// }
//
// console.log(outFunc('안녕하세요 저는 내부함수 입니다.'));

function outFunc() {
  let outerText = '외부 테스트';
  function innerFunc(a) {
    let innerText = 'inner-text'
    console.log(`${outerText},${a}`);
  }
  return innerFunc; // 내부함수를 return을 통해 외부로 노출(closure 함수)
}

let closureFunc = new outFunc();
closureFunc('안녕하세요 전 크로저에요!!'); // return으로 받은 내부함수
console.log(closureFunc);

//중첩함수
/*
변수 선언 이름과 동일한 함수명을 사용할 수 없다.
*/
