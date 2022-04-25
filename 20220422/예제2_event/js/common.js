$(function() {
  // script 영역 event 사용 예
  // button으로 event 실행
  // document.querySelector('button').addEventLister('click',function(){})
  // let num = 0;

  // console.log($('img').attr('title'));

  /*
  아래 코드를 사용하여
  이미지를 toggle 형태로 구현하고
  첫번째 이미지의 alt 값 : 산이미지 1
  두번째 이미지의 alt 값 : 산이미지 2
  */


  $('button').click(function(){
    if ($('img').attr('title') == 'mountain01') {
      $('img').attr({'title':'mountain02','src':'img/mountain_02.png','alt':'산 이미지2'})
    }else{
      $('img').attr({'title':'mountain01','src':'img/mountain_01.png','alt':'산 이미지1'})
    }
  });

  $('a').click(function(){
    if ($('img').attr('title') == 'mountain01') {
      $('img').attr({'title':'mountain02','src':'img/mountain_02.png','alt':'산 이미지2'})
    }else{
      $('img').attr({'title':'mountain01','src':'img/mountain_01.png','alt':'산 이미지1'})
    }
    return false;
    //하위 브라우저 혹은 특정 브라우저에서 a link 기본 속성이
    // 먼저 실행하여 event가 작동하지 않는 경우가 있다
  });
});
