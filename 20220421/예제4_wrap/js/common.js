$(function() {
  //script 영역 wrap(), wrapAll, wrapInner() 사용 예
  //wrap() 특정 태그를 지정한 태그로 감싸는 method
  // $('strong').wrap('<h2></h2>') // 선택한 요소를 개별로 감싼다.
  // $('h2').wrapAll('<header></header>') // 선택한 요소들을 모아 전체를 감싼다.
  // menu 클래스 태그의 자식 요소 span을 선택하고 개별 요소를
  // <a href="http://naver.com" target=''></a> 로 감싸시요.

  // $('.menu ul li span').wrap('<a href="http://naver.com" target="_self"></a>');
  // $('span').wrapAll('<header></header>');

  // wrapAll()
  // .wrap-all의 요소에 있는 p태그들을 .item-wrap 클래스 갖고 있는 div 태그로 감싸시오
  $('.wrap-all p').wrapAll('<div class="item-wrap"></div>')

  // .wrap-all의 요소에 있는 span태그들을 .span-wrap 클래스 갖고 있는 div 태그로 감싸시오
  $('.wrap-all span').wrapAll('<div class="span-wrap"></div>')

  // .wrap-all의 요소에 있는 .items태그들을 .div-items-wrap 클래스 갖고 있는 div 태그로 감싸시오
  $('.wrap-all .items').wrapAll('<div class="div-items-wrap"></div>')

  // strong 태그들을 .title 클래스를 갖고 있는 div 태그로 감싸시오
  $('strong').wrapAll('<div class="title"></div>')

  // wrapInner()
  // wrapInner method 사용 시 선택한 요소의 자식 요소 모두를 특정 태그로 감싼다.
  $('.wrap-inner').wrapInner('<div class="inner"></div>')
  // .items의 자식 요소들을 wrapInner를 사용하여 '<a href="http://daum.net"></a>`로 감싸시오
  $('.wrap-inner .items').wrapInner('<a href="http://daum.net"></a>')

  

});
