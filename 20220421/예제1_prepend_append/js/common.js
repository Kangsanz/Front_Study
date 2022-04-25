$(function() {
  //jquery 실행구문
  // script 영역 prepend(), append() 사옹 예
  // prepend() 사용 예
  let elemNum = $('p#first');
  elemNum.prepend('<span>hi!!</span>')

  // append() 사옹 예
  elemNum.append('<span>have a good day!!</span>')


// p 태그의 총 개수 3개
// 각각의 p 태그 자식요소의 제일 앞 쪽에 '<strong>kind: </strong>'
// for 구문을 사용하여 추가하시오
// p 태그의 총 개수 3개
// 각각의 p 태그 자식요소의 제일 뒷 쪽에 '<br><strong>add text</strong>'
// for 구문(초기값을 1로 시작)을 사용하여 추가하시오


// let pLeng = $('p').length
// for (let i = 0; i < pLeng; i++) {
//   $(`p:nth-child(${i+1})`).prepend('<strong>kind: </strong>')
// }
//
// for (let i = 1; i < pLeng; i++) {
//   $(`p:nth-child(${i})`).append('<br><strong>add text</strong>')
// }

$('li:nth-child(1) a').prepend('<img src="img/bolt.png">')
$('li:nth-child(2) a').prepend('<img src="img/build.png">')
$('li:nth-child(3) a').prepend('<img src="img/paid.png">')
$('li:nth-child(4) a').prepend('<img src="img/watch.png">')

let arrayNum = [];
arrayNum.push('<img src="img/bolt.png">');
arrayNum.push('<img src="img/build.png">');
arrayNum.push('<img src="img/paid.png">');
arrayNum.push('<img src="img/watch.png">');

for (let i = 0; i < arrayNum.length; i++) {
  $(`li:nth-child(${i+1}) a`).prepend(arrayNum[i]);
  }

  // let elem = $('ul li');
  // console.log($('ul li').find('a'));

  // 위 코드를 eq() 명령어(methods)를 사용하여 변경하시오.
  // $('ul li').eq(0).find('a').prepend(arrayNum[0])
  // $('ul li').eq(1).find('a').prepend(arrayNum[1])
  // $('ul li').eq(2).find('a').prepend(arrayNum[2])
  // $('ul li').eq(3).find('a').prepend(arrayNum[3])

  for (let i = 0; i < arrayNum.length; i++) {
    $('ul li').eq(i).find('a').prepend(arrayNum[i])
    }


});
