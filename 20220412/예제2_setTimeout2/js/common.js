'use strict'
function timeText() {
  let x = document.getElementById('txt');
  setTimeout(function(){ x.value = '2초' }, 2000)
  setTimeout(function(){ x.value = '5초' }, 5000)
  setTimeout(function(){ x.value = '9초' }, 9000)
  setTimeout(function(){ x.value = '3초' }, 3000)
  setTimeout(function(){ x.value = '7초' }, 7000)
}
