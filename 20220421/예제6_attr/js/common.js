$(function() {
  //script 영역 attr() 사용 예
  // #wrap-id class attribute 가지고 온다
  // let attrNum = document.querySelector('#wrap-id').getAttribute('class');
  // console.log(attrNum);
  //
  // let num = $('#wrap-id').attr('class');
  // console.log(num);
  // console.log(`get class attribute: ${num}`);
  // // .wrap-inner 클래스로 선택하여 id 값을 가져오시오.
  // let idNum = $('.wrap-inner').attr('id');
  // console.log(idNum);

  // set getAttribute
  // 자바스크립트
  // document.querySelector(".items").setAttribute("title", "this is items");

  // 제이쿼리
  console.log($('.items'));
  $('.items').attr('title', 'this is items');
  $('input').attr('checked',false); // input check 해제
  // $('input').attr('checked',true); // input checked
  console.log($('input').attr('checked'));

  // add class
  // 자바스크립트
  // document.body.classList.add('bg-red');
  // 제이쿼리
  $('body').addClass('bg-red');
  $('body').addClass('bg-yellow');

});
