'use strict'
// live watch
let t = null;

function startTime() {
  let today = new Date();
  let h = today.getHours();
  let m = today.getMinutes();
  let s = today.getSeconds();
  h = checkTime(h);
  m = checkTime(m);
  s = checkTime(s);
  let amTime = h - 8;
  let pmTime = h - 9;

  if (h == 12 && m > 49 || h == 13 && m < 60) {
    document.getElementById('left_img').style.backgroundImage = 'none';
    document.getElementById('right_img').style.backgroundImage = 'none';
    document.body.style.backgroundImage = 'url(img/background_main2.gif)';
    document.getElementById('middle_txt').innerHTML = `<p>점심 시간!!</p><p>${h}:${m}:${s}</p>`
  } else if (m > 49 && m < 60) {
    document.getElementById('left_img').style.backgroundImage = 'none';
    document.getElementById('right_img').style.backgroundImage = 'none';
    document.body.style.backgroundImage = 'url(img/background_main.gif)';
    document.getElementById('middle_txt').innerHTML = `<p>쉬는 시간!</p><p>${h}:${m}:${s}</p>`
  } else if (h < 14) {
    document.getElementById('left_img').style.backgroundImage = 'url(img/background_02.jpg)';
    document.getElementById('right_img').style.backgroundImage = 'url(img/background_01.jpg)';
    document.body.style.backgroundImage = 'none';
    document.getElementById('middle_txt').innerHTML = `<p>${amTime}교시</p><span>수업 시간!</span><p>${h}:${m}:${s}</p>`
  } else {
    document.getElementById('left_img').style.backgroundImage = 'url(img/background_02.jpg)';
    document.getElementById('right_img').style.backgroundImage = 'url(img/background_01.jpg)';
    document.body.style.backgroundImage = 'none';
    document.getElementById('middle_txt').innerHTML = `<p>${pmTime}교시</p><span>수업 시간!</span><p>${h}:${m}:${s}</p>`
  }
  t = setTimeout(startTime, 500)
}

function checkTime(i) {
  if (i < 10) {
    i = '0' + i;
  }
  return i;
}
let tLunch = null;
let tRest = null;
let tStudy = null;

function setTimeLunch() {
  let today = new Date();
  let h = today.getHours();
  let m = today.getMinutes();
  let s = today.getSeconds();
  h = checkTime(h);
  m = checkTime(m);
  s = checkTime(s);

  document.getElementById('left_img').style.backgroundImage = 'none';
  document.getElementById('right_img').style.backgroundImage = 'none';
  document.body.style.backgroundImage = 'url(img/background_main2.gif)';
  document.getElementById('middle_txt').innerHTML = `<p>점심 시간!!</p><p>${h}:${m}:${s}</p>`
  clearInterval(t)
  clearInterval(tRest)
  clearInterval(tStudy)
  tLunch = setTimeout(setTimeLunch, 500)
}

function setTimeRest() {
  let today = new Date();
  let h = today.getHours();
  let m = today.getMinutes();
  let s = today.getSeconds();
  h = checkTime(h);
  m = checkTime(m);
  s = checkTime(s);

  document.getElementById('left_img').style.backgroundImage = 'none';
  document.getElementById('right_img').style.backgroundImage = 'none';
  document.body.style.backgroundImage = 'url(img/background_main.gif)';
  document.getElementById('middle_txt').innerHTML = `<p>쉬는 시간!</p><p>${h}:${m}:${s}</p>`
  clearInterval(t)
  clearInterval(tLunch)
  clearInterval(tStudy)
  tRest = setTimeout(setTimeRest, 500)
}

function setTimeStudy() {
  let today = new Date();
  let h = today.getHours();
  let m = today.getMinutes();
  let s = today.getSeconds();
  h = checkTime(h);
  m = checkTime(m);
  s = checkTime(s);
  let amTime = h - 8;
  let pmTime = h - 9;

  if (h < 14) {
    document.getElementById('left_img').style.backgroundImage = 'url(img/background_02.jpg)';
    document.getElementById('right_img').style.backgroundImage = 'url(img/background_01.jpg)';
    document.body.style.backgroundImage = 'none';
    document.getElementById('middle_txt').innerHTML = `<p>${amTime}교시</p><span>수업 시간!</span><p>${h}:${m}:${s}</p>`
  } else {
    document.getElementById('left_img').style.backgroundImage = 'url(img/background_02.jpg)';
    document.getElementById('right_img').style.backgroundImage = 'url(img/background_01.jpg)';
    document.body.style.backgroundImage = 'none';
    document.getElementById('middle_txt').innerHTML = `<p>${pmTime}교시</p><span>수업 시간!</span><p>${h}:${m}:${s}</p>`
  }
  clearInterval(t)
  clearInterval(tLunch)
  clearInterval(tRest)
  tStudy = setTimeout(setTimeStudy, 500)
}

function setTimeReset() {
  document.getElementById('left_img').style.backgroundImage = 'none';
  document.getElementById('right_img').style.backgroundImage = 'none';
  document.body.style.backgroundImage = 'none';
  clearInterval(tLunch)
  clearInterval(tRest)
  clearInterval(tStudy)
  startTime();
}
