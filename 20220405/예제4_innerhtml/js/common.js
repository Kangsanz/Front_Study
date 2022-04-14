// 평균구하기
// var score_1, score_2, score_3, score_4, score_5, leng, total, avg;
// score_1 = 85;
// score_2 = 90;
// score_3 = 95;
// score_4 = 100;
// score_5 = 75;
// leng = 5
// total = score_1 + score_2 + score_3 + score_4 + score_5;
// avg = total / leng
//
// console.log(`교과목 평균 점수는 ${avg}점 입니다.`)

// 나이 키 평균 평균 구하기
var heightTotal, ageTotal, heightAvg, ageAvg;
var countLeng = 10;

// 키 변수 선언
var height_1 = 175
var height_2 = 180
var height_3 = 182
var height_4 = 190
var height_5 = 185
var height_6 = 179
var height_7 = 182
var height_8 = 183
var height_9 = 192
var height_10 = 187

// 나이 변수 선언
var age_1 = 32
var age_2 = 44
var age_3 = 21
var age_4 = 18
var age_5 = 52
var age_6 = 22
var age_7 = 45
var age_8 = 25
var age_9 = 38
var age_10 = 28

// 키의 합산
heightTotal = height_1 + height_2 + height_3 + height_4 + height_5 + height_6 + height_7 + height_8 + height_9 + height_10

// 나이의 합산
ageTotal = age_1 + age_2 + age_3 + age_4 + age_5 + age_6 + age_7 + age_8 + age_9 + age_10

// 키의 평균
heightAvg = heightTotal / countLeng
// console.log(heightAvg)

// 나이의 평균
ageAvg = ageTotal / countLeng
// console.log(ageAvg)

// alert 출력하기
// 평균 키는 ***cm 입니다.
// alert(`평균 키는 ${heightAvg}cm 입니다.`)
//
// 평균 나이는 ***살 입니다.
// alert(`평균 나이는 ${ageAvg}살 입니다.`)

// document에 text 출력
var list = '';

// 데이터 합치기
list += '<ul>'; // list = list + ''
list += '<li>우리반 학생의 평균 나이는 '+ageAvg+'살 입니다.</li>';
list += '<li>우리반 학생의 평균 키는 '+heightAvg+'cm 입니다.</li>';
list += '</ul>';
console.log(list)

document.body.innerHTML = list;
