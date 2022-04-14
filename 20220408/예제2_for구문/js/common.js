'use strict'
//for 구문
// let arrayFruits = new Array();
// arrayFruits.push('사과')
let arrayFruits = ['사과', '배', '수박', '포도', '키위', '수박', '레몬']
// console.log(`${arrayFruits[0]},${arrayFruits[1]},${arrayFruits[2]}`);
// let qna = prompt('과일을 적어 주세요.')
// for( let i = 0; i < arrayFruits.length; i++) {
//   console.log(`${arrayFruits[i]}`)
//
//   if (qna == arrayFruits[i]) {
//     alert(`맛있는 ${arrayFruits[i]} 입니다.`)
//   }
// }

// for 구문의 특정 구간에서 for 구문 정지
// let outPut = '';
// for (var i = 0; i < 10; i++) {
//   // 실행구문
//   outPut += '@';
//   console.log(outPut);
//   if ( i == 5 ) {
//     console.log('여섯번째 입니다.');
//     break;
//   }
// }

//재고확인
let inputText = prompt(`과일을 입력해주세요.`, `과일`)
let checkNum = 0; // 재고가 없다.  1일 때는 재고가 있다.
for (var i = arrayFruits.length - 1; i >= 0; i--) {
  // 실행구문
  if (inputText == arrayFruits[i]) { // 재고가 있다.
    alert(`맛있는 ${arrayFruits[i]}`)
    checkNum = 1;
    break;
  } else if (i == 0) { // 재고 확인을 마친 마지막 i 값
    console.log(`재고확인 : ${checkNum}`);
    if (checkNum == 0) {
      alert(`해당 상품의 재고가 없습니다.`)
    }
  }
}
