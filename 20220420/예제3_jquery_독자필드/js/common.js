$(function() {
  //jquery 실행구문
  // first, first-child / last, last-child 비교 예제
  // $('p:first-child').css('color','red');
  // p를 자식 요소로 갖고 있는 요소의 자식들 중 첫 번째 p를 선택

  // $('p:first').css('color','blue');
  //document 전체에서 선택한 첫 번째를 선택

  // $('p:last-child').css('color','green');
  // p를 자식 요소로 갖고 있는 요소의 자식들 중 마지막 p를 선택

  // $('p:last').css('color','blueviolet');
  //document 전체에서 선택한 마지막을 선택

  // even, odd 예제 // index 갑이 0 부터 시작. css의 even과 다름
  // $("li:odd").css('color','yellowgreen');
  // $("li:even").css('color','green');
  // console.log($('li:odd'));

  // eq, gt(greater than), lt(less than) // index 갑이 0 부터 시작
  // $('li:eq(2)').css('color','red');
  // 해당 인덱스와 같은 위치의 요소를 선택
  // $('li:gt(2)').css('color','blue');
  // eq 기준으로 해당 index 값보다 큰 요소를 선택
  // $('li:lt(2)').css('color','green');
  // eq 기준으로 해당 index 값보다 작은 요소를 선택

  // heading 태그 선택
  // $('h6:header').css('color','red');
  // $('h1,h6').css('color','blue');

  // contains 문자열로 포함 유무 확인 후 요소 선택
  // $('li:contains("menu1")').css('color','red');
  // $('li:contains("menu3")').css('color','green').css('font-size','20px');
  // $('li:contains("menu5")').css('font-weight','bold');
  // $('p:contains("!")').css('color','hotpink').css('font-weight','bold').css('font-size','20px');
  // $('p:contains("t")').css('color','yellowgreen').css('font-weight','bold');
  // $('p:contains("포")').css('color','purple').css('font-weight','700');
  // let elem = $('li:contains("menu1")');
  // if ( elem.length > 0) {
  //   console.log('menu1 존재합니다.');
  // }

  // has 태그 포함 유무로 요소 선택
  // $('li:has("strong")').css('color','red');

  /*
  1. p 태그를 갖고 있는 li 텍스트 색상을 blue로 변경
  2. span 태그를 갖고 있는 li 텍스트 색상을 orange으로 변경
  3. a 태그를 갖고 있는 li 텍스트 색상을 green으로 변경
  */
  // $('li:has("p")').css('color','blue');
  // $('li:has("span")').css('color','orange');
  // $('li:has("a"), li:has("a") a').css('color','green');

  $('li:parent').css('border','1px solid red')
  //부정유사 클래스를 사용하여 자식 요소가 존재하지 않는 요소를 선택할 수 있다.
  $('li:not(:parent)').css('border','1px solid yellow')
});
