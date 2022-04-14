'use strict'
let pos = 0;
let elem = document.getElementsByClassName('box')[0]
let start = setInterval(boxMove, 100);

function boxMove() {
  pos++
  elem.style.left = `${pos}px`;
  console.log(elem);
}

function startMove() {
  elem.style.left = `${pos}px`;
  start = setInterval(boxMove, 100);
}

function stopMove() {
  clearInterval(start);
}

function resetMove() {
  pos = 0;
  elem.style.left = `${pos}px`;
  clearInterval(start);
}
