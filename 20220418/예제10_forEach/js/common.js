'use strict'
// let array = new Array();
// array.push('사과','배','포도');

let array = [
  ['사과', '배', '바나나'],
  ['잡지'],
  ['트럭', '승용차', '캠핑카']
]

// array.forEach(function(i){
//     i.forEach(function(j){
//       console.log(j)
//     });
// });

let array2 = [
  ['인텔', '라데온', '퀄컴'],
  ['지포스', '라데온', '인텔'],
  ['기가바이트', 'MSI', '컬러풀']
]
array2.push(['사과', '배', '바나나']);

array2.forEach(function(i) {
  console.log(i)
});
array2.forEach(function(i) {
  i.forEach(function(j) {
    console.log(j);
  });
});
