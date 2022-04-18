'use strict'
function avgCalc(a,b,c) {
  let sum = a + b;
  c(sum); // 함수 실행
}

// 익명함수로 콜백함수 호출
avgCalc(10,30,function(num){
  let avg = num/2;
  console.log(avg);
});

// arrow function 으로 콜백함수 호출
avgCalc(20,40,(num) => {
  let avg = num/2;
  console.log(avg);
});

// 선언적 함수로 콜백함수 부르기
function avg(num) {
  let avg = num/2;
  console.log(avg);
}

avgCalc(50,100,avg)
/*
  let sum = 50 + 100;
  avg(sum)
*/

window.onload = function(){
  document.getElementById('wrap').innerHTML = myFunction();
  function myFunction(){
    return this; // window
  }
}
