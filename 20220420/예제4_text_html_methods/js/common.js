$(function() {
  //jquery 실행구문
  // script 영역 text() 사용 예
  let textNum = '';
  textNum = $('p#first');
  // textNum.text('hi!! jquery!!')
  // console.log(textNum);

  // 특정 요소의 텍스트를 다른 요소에 삽입하는 예
  // 방법 1
  // $('p#first').text($('p#second').text())
  // 방법 2 : 변수 처리
   // a type
   // let elem = $('p#first');
   // let elemInputText = $('p#second').text();
   // elem.text(elemInputText);

   // b type
   // let elem = $('p#first');
   // let elemInput = $('p#second');
   // elem.text(elemInput.text());

   // numHtml = $('p#second').html();
   // let numHtml = '';
   // numHtml = document.querySelector('p#second').innerHTML;
   // console.log(numHtml);

   // #third의 자식 요소 h2의 텍스트를 가져와서 p#first에 추가 변경하세요.
   let thirdHtml = $('#third h2').html();
   textNum.html(thirdHtml);

   // let thirdHtml2 = document.querySelector('p#first');
   // thirdHtml2.innerHTML = document.querySelector('#third h2').innerHTML;



});
