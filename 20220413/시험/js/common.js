'use strict'
let monthTem = [32, 28, 35, 27, 26, 32, 38];
let sumTem = 0;
let avgTem = 0;
let lengTem = monthTem.length;

function avgFunc() {
  for (let i = 0; i < lengTem; i++) {
    sumTem += monthTem[i];
    avgTem = sumTem / lengTem;
  }
  return avgTem = Math.round(avgTem);
}

let list = '<table><tr><th>NO</th><th>온도</th></tr>';
for (let i = 0; i < lengTem; i++) {
  list += `<tr><td>${i+1}</td><td>${monthTem[i]}</td></tr>`
}
list += `<tr><td>평균</td><td>${avgFunc()}</td></tr>`

document.body.innerHTML = list;

console.log(list);
