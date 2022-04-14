window.onload = function(){

  var heightTotal, ageTotal, scoreTotal, heightAvg, ageAvg, scoreAvg;
  var countLeng = 5;
  var average = '평균';

  // 이름 변수 선언
  var name_1 = '홍길동';
  var name_2 = '박길동';
  var name_3 = '김길동';
  var name_4 = '이길동';
  var name_5 = '최길동';

  // 키 변수 선언
  var height_1 = 175;
  var height_2 = 180;
  var height_3 = 190;
  var height_4 = 185;
  var height_5 = 178;

  // 나이 변수 선언
  var age_1 = 30;
  var age_2 = 18;
  var age_3 = 21;
  var age_4 = 35;
  var age_5 = 38;

  // 점수 변수 선언
  var score_1 = 85;
  var score_2 = 88;
  var score_3 = 90;
  var score_4 = 95;
  var score_5 = 95;

  // 키의 합산
  heightTotal = height_1 + height_2 + height_3 + height_4 + height_5;
  // 나이의 합산
  ageTotal = age_1 + age_2 + age_3 + age_4 + age_5;
  // 점수의 합산
  scoreTotal = score_1 + score_2 + score_3 + score_4 + score_5;

  // 키의 평균
  heightAvg = heightTotal / countLeng;
  // 나이의 평균
  ageAvg = ageTotal / countLeng;
  // 점수의 평균
  scoreAvg = scoreTotal / countLeng;

  var list = '';
  list += '<table border= "1" bordercolor= "black" style="border-collapse: collapse;">';
  list += '<tr><th width="150">이름</th><th width="100">나이</th><th width="100">키</th><th width="100">점수</th></tr>';
  list += '<tr><td>'+name_1+'</td><td>'+age_1+'</td><td>'+height_1+'</td><td>'+score_1+'</td></tr>';
  list += '<tr><td>'+name_2+'</td><td>'+age_2+'</td><td>'+height_2+'</td><td>'+score_2+'</td></tr>';
  list += '<tr><td>'+name_3+'</td><td>'+age_3+'</td><td>'+height_3+'</td><td>'+score_3+'</td></tr>';
  list += '<tr><td>'+name_4+'</td><td>'+age_4+'</td><td>'+height_4+'</td><td>'+score_4+'</td></tr>';
  list += '<tr><td>'+name_5+'</td><td>'+age_5+'</td><td>'+height_5+'</td><td>'+score_5+'</td></tr>';
  list += '<tr><td>'+average+'</td><td>'+ageAvg+'</td><td>'+heightAvg+'</td><td>'+scoreAvg+'</td></tr>';

  console.log(list);
  document.body.innerHTML = list;
}
