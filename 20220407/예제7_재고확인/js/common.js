'use strict'
let soldOut = prompt(`1 ~ 5까지의 숫자를 입력해주세요.`)
let goodsList = [1, 2, 3, 4, 5];
let count = 0;

function checkFunc() {
  if (count < goodsList.length) {
    if (soldOut == goodsList[count]) {
      alert(`${soldOut}는 재고가 있습니다.`);
      let yesNo = confirm(`구매하시겠습니까?`)
      if (yesNo = 1) {
        alert(`구매가 완료 되었습니다.`)
      } else {
        alert(`구매가 취소 되었습니다.`)
      }
    }
    count++
    checkFunc();
  }
}
checkFunc();
