'use strict'
// live watch
let t = null;

function startTime() {
  // console.log('startTime!!!');
  // let elem = document.getElementById('txt')
  // console.log(elem);
  let today = new Date();
  let h = today.getHours();
  let m = today.getMinutes();
  let s = today.getSeconds();
  h = checkTime(h);
  m = checkTime(m);
  s = checkTime(s);
  if (h == 12 && m > 49 || h == 13 && m < 60) {
    document.body.style.backgroundImage = 'url(img/background_01.gif)';
    document.body.style.backgroundColor = '#fff';
    document.getElementById('txt').innerHTML = `<p>Let&acute;s Lunch Time</p>${h}:${m}:${s}`
  } else {
    document.body.style.backgroundImage = 'url(img/background_02.jpg)';
    document.body.style.backgroundColor = '#67c7b2';
    document.getElementById('txt').innerHTML = `${h}:${m}:${s}`
  }
  t = setTimeout(startTime, 500)
}

function checkTime(i) {
  if (i < 10) {
    i = '0' + i;
  }
  return i;
}
