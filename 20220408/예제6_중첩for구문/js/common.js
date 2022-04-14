'use strict'
// 중첩 for 구문
// 다중 배열 or 다차원 배열
// let arrayNum = [1,2,3];
// let array = [['가','나','다'],'b',['제주도','강원도','포항']];
// console.log(arrayNum[0]);
// console.log(array[2].length);

// for (let i = 0; i < 10; i++) {
//   // 실행문
//   console.log(i);
//   for (let j = 0; j < 5; j++) {
//     console.log(`중첩for ${j}`);
//   }
// }

let shoppingItems = [
  ['반바지', '슬랙스'],
  ['점퍼', '조끼'],
  ['슬립온', '워커', '스니커즈'],
  ['크로스백', '백팩', '클러치백']
];

for (let i = 0; i < shoppingItems.length; i++) {
  for (let j = 0; j < shoppingItems[i].length; j++) {
    if (shoppingItems[i][j] == shoppingItems[0][0]){
      console.log(shoppingItems[i][j]);
    }else if (shoppingItems[i][j] == shoppingItems[2][2]) {
      console.log(shoppingItems[i][j]);
    }else if (shoppingItems[i][j] == shoppingItems[3][1] ) {
      console.log(shoppingItems[i][j]);
    }
  }
}

// let gTLeng = shoppingItems.length;
//
// for (let i = 0; i < gTLeng; i++) {
//   // 실행구문
//   if (i == 0) { //바지 섹션
//     outputItems(i,0)
//   } else if (i == 2) { //신발 섹션
//     // 실행구문
//     outputItems(i,2)
//   } else if (i == 3) { //가방 섹션
//     // 실행구문
//     outputItems(i,1)
//   }
// }
//
// // items 가져오기 함수 만들기
// function outputItems(currentArray, checkIndex){
//   for (let j = 0; j < shoppingItems[currentArray].length; j++) {
//     if (j == checkIndex) {
//       console.log(shoppingItems[currentArray][j]);
//     }
//   }
// }
