'use strict'
// scroll top
let numY = 0; // y축 scroll 변수
let numX = 0; // x축 scroll 변수
let elem = document.querySelector('#mydiv');
let t = null;

// y축 scroll 작동 함수
function scrollTopFunc(){
  if (numY <= elem.scrollTop) {
    numY += 10;
  } else {
    numY = elem.scrollTop
  }
  elem.scrollTop = numY;
  console.log(numY);
  console.log(elem.scrollTop);
  // console.log(`scroll height : ${elem.scrollHeight}, offset height : ${elem.offsetHeight}`);
  // console.log(`scroll width : ${elem.scrollWidth}, offset width : ${elem.offsetWidth}`);

  t = setTimeout(scrollTopFunc, 10)
}

function scrollBottomFunc() {
  if (numY >= 10) {
    numY -= 10;
  }else {
    numY = 0;
  }
  elem.scrollTop = numY;
  console.log(numY);
  console.log(elem.scrollTop);

  clearInterval(t);
}

// x축 scroll 작동 함수
function scrollRightFunc(){
  if (numX <= elem.scrollLeft) {
    numX += 10;
  } else {
    numX = elem.scrollLeft
  }
  elem.scrollLeft = numX;
  console.log(numX);
  console.log(elem.scrollLeft);

  t = setTimeout(scrollRightFunc, 10)
}

function scrollLeftFunc() {
  if (numX >= 10) {
    numX -= 10;
  }else {
    numX = 0;
  }
  elem.scrollLeft = numX;
  console.log(numX);
  console.log(elem.scrollLeft);

  clearInterval(t);
}
