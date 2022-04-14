'use strict'
// move elements
let elem = document.getElementsByClassName('box')[0];
let xMove = 0;
let yMove = 0;
let xDirection = 1;
let yDirection = 1;
let moveInterval = setInterval(move, 5);

console.log(window.innerHeight);

function move(){
  xMove += 1*xDirection;
  if ( xMove > window.innerWidth - 101 || xMove < 0 ) {
    xDirection = xDirection*(-1);
  }
  elem.style.left = `${xMove}px`;
  yMove += 1*yDirection;
  if ( yMove > window.innerHeight - 101 || yMove < 0) {
    yDirection = yDirection*(-1);
  }
  elem.style.top = `${yMove}px`;
}
