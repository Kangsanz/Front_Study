$(function(){
  //jquery 실행구문
  // document.querySelector("li").style.color = 'red'
  // $('li').css('color','red');
  // $('#first').css('color','blue');
  // $('li.fourth').css('background-color','green');
  // $('li.third span').css('background-color','blue');
  // $('li.second p').css('font-size','10px');
  let num = 30;
  $('.first, .third, .fourth').css('left',`${num}px`);
  // $('.first, .third, .fourth').css('left',num+'px');
  // $('.first, .third, .fourth').css('left',num);

  // ul 첫번째 li의 자식 요소 span에 텍스트 색상을 red로 바꿔라
  // $('li.first > span').css('color','red');
  // $('*').css('color','blue')
  // ul의 세번째 li요소를 인접 선택자를 사용하여 텍스트 색상을 blue로 바꿔라
  // $('.second + li').css('color','blue');
  // $('li:first-child').css('color','green'); // 유사클래스로 요소를 선택
  // $('li:last-child').css('color','red').css('font-size','10px');
  // $('li.second ~ li').css('color','yellow');
  // $('li:not(:first-child)').css('color','blue');

  // 메뉴구조 요소를 선택하고 style을 적용
  $('.submenu span').css('color','blue');
  $('.submenu span:empty').css('background','salmon');
});
