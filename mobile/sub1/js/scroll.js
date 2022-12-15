// 헤더 스크롤 조건문
var imgHeight = $('.main').height(); // 이미지 높이값 리턴
var on_off = false;   // false(안오버), true(오버)

$(window).on('scroll',function(){
    var scroll_2 = $(window).scrollTop(); // 스크롤링 리턴
    if(scroll_2 > imgHeight-150){
      $('#headerArea').addClass('on');
    } else { 
      if(on_off == false) {
      $('#headerArea').removeClass('on');
    }}
  })