'use strict'
//while 구문
let travel = ['제주도','강원도','거제도','서울','가평','포항'];
// let count = 0;
// while ( count < travel.length ) {
//   console.log(travel[count]);
//   count++
// }

// let count = travel.length-1
// while (count >= 0) {
//   console.log(travel[count]);
//   count--
// }

for (let count = 0; count < travel.length; count++) {
  console.log(travel[count]);
}

for (let count = travel.length-1; count >= 0; count--) {
  console.log(travel[count]);
}
