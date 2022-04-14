'use strict'
window.onload = function() {
  let num = 1;
  let numberVar = 10;
  let changeString = String(num);
  let changeNumber = null;

  changeString += numberVar;
  console.log(changeString + ',' + typeof(changeString));
  changeNumber = Number(changeString);
  console.log(changeString + ',' + typeof(changeNumber));
}
