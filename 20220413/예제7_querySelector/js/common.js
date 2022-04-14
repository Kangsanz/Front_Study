'use strict'
// query selector
function textColorChange() {
  // document.getElementsByTagName('p')[0].style.color = "red"
  // document.querySelector('.txt').style.color = "blue"; // 단일 선택
  let txtNum = document.querySelectorAll('.txt'); // class name "txt"인 배열리스트 가져옴
  let txtNumLeng = txtNum.length; // 배열의 개수
  console.log(txtNum);
  for (let i = 0; i < txtNumLeng; i++) {
    txtNum[i].style.color = "red";
  }
}
