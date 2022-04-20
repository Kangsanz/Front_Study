$(function(){
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
  $('li:lt(2)').css('color','green');
  // eq 기준으로 해당 index 값보다 작은 요소를 선택
});
