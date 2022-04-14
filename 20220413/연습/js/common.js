'use strict'
window.onload = function() {
  let nameList = ['홍길동', '박길동', '김길동', '이길동', '최길동'];
  let ageList = [30, 18, 21, 35, 38];
  let heightList = [175, 180, 190, 195, 178];
  let scoreList = [85, 88, 90, 95, 95];


  function avgFunc(x) {
    let totalList = 0;
    let lengList = x.length;
    let avgList = 0;
    for (let i = 0; i < lengList; i++) {
      totalList += x[i]
    }
    avgList = totalList / lengList

    return avgList;
  }

  let finalList = '<table border = 1 bordercolor = "black" style="border-collapse: collapse">';
  finalList += `<tr><th>이름</th><th>나이</th><th>키</th><th>점수</th>`
  for (let i = 0; i < nameList.length; i++) {
    finalList += `<tr><td>${nameList[i]}</td><td>${ageList[i]}</td><td>${heightList[i]}</td><td>${scoreList[i]}</td></tr>`
  }
  finalList += `<tr><td>평균</td><td>${avgFunc(ageList)}</td><td>${avgFunc(heightList)}</td><td>${avgFunc(scoreList)}</td>`
  console.log(avgFunc(ageList));

  let testList = document.getElementById('wrapList')
  function getList() {
    testList.innerHTML = finalList;
  }
  document.getElementById('btnList').addEventListener('click',getList)
  console.log(finalList);
}
