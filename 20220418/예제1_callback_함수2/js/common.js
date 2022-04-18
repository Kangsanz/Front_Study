'use strict'
function areaCalc(x,y,c) {
  let area = x * y;
  return c(area);
}

areaCalc(10, 20, function(num){
  console.log(num);
})

function square(num){
  // console.log(num);
  return num
}

document.body.innerHTML = `${areaCalc(10, 20, square)}`
console.log(areaCalc(10, 20, square));
