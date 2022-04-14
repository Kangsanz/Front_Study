window.onload = function() {
let titleList =  ['이름', '나이', '키', '점수'];
let nameList =  ['홍길동', '박길동', '김길동', '이길동', '최길동'];
let ageList = [30, 18, 21, 35, 38];
let heightList = [175, 180, 190, 185, 178];
let scoreList =  [85, 88, 90, 95, 95];

let ageTotal = 0;
let ageAvg = 0;
let heightTotal = 0;
let heightAvg = 0;
let scoreTotal = 0;
let scoreAvg = 0;

function scoreFnc() {
  list = `<table border= "1" bordercolor= "black" style="border-collapse: collapse;">`;
  for (let i = 0; i < nameList.length; i++) {
  if ( i <= 3 ) {
    list += `<th width=100>${titleList[i]}</th>`;
  }

  ageTotal += ageList[i]
  heightTotal += heightList[i]
  scoreTotal += scoreList[i]
  }

  ageAvg = ageTotal / ageList.length;
  heightAvg = heightTotal / heightList.length;
  scoreAvg = scoreTotal / scoreList.length;

  nameList.push('평균');
  ageList.push(ageAvg);
  heightList.push(heightAvg);
  scoreList.push(scoreAvg);

  for (let j = 0; j < nameList.length; j++) {
  list += `<tr><td>${nameList[j]}</td><td>${ageList[j]}</td><td>${heightList[j]}</td><td>${scoreList[j]}</td></tr>`
  }
}
scoreFnc();
document.body.innerHTML = list;
}
