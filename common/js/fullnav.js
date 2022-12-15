// 변수 먼저 지정 - eval 사용금지
// 스크롤 변수 지정 시 각 범위마다 넣어주기
var imgHeight = $('.main').height(); // 이미지 높이값 리턴
var on_off = false;   // false(안오버), true(오버)

// 마우스엔터 및 리브
$('#headerArea').mouseenter(function(){
  $(this).addClass('on');
  on_off = true;
})
$('#headerArea').mouseleave(function(){
  var scroll_1 = $(window).scrollTop(); // 스크롤링 리턴
  if(scroll_1 < imgHeight-300){
    $(this).removeClass('on');
  } else {
    $(this).addClass('on');
  }
  on_off = false;
})

// 스크롤 조건문
$(window).on('scroll',function(){
  var scroll_1 = $(window).scrollTop(); // 스크롤링 리턴
  if(scroll_1 > imgHeight-300){
    $('#headerArea').addClass('on');
  } else { 
    if(on_off == false) {
    $('#headerArea').removeClass('on');
  }}
})

// 2depth 열리게
$('.dropdownmenu').hover(function(){
$('.dropdownmenu .menu ul').fadeIn('normal', function() {
  $(this).stop();
});
$('#headerArea').animate({height:390},'fast').clearQueue();
},function(){
  $('.dropdownmenu .menu ul').hide(); // fadeOut으로 했더니 잔상 오류생김
  $('#headerArea').animate({height:210},'fast').clearQueue();
})

// 접근성을 위한
$('.dropdownmenu .menu .depth1').on('focus',function(){
  $('.dropdownmenu .menu ul').slideDown('normal')
  $('#headerArea').animate({height:390},'fast').clearQueue();
  $('#headerArea').addClass('on')
})

$('.dropdownmenu .m6 li:last').find('a').on('blur',function(){
  $('.dropdownmenu .menu ul').slideUp('normal')
  $('#headerArea').animate({height:210},'fast').clearQueue();
  $('#headerArea').removeClass('on')
})

// 탑으로 가는 버튼 기능
// $('.topMove').hide();

// $(window).on('scroll', function(){
//   var scroll_2 = $(window).scrollTop();

//   if(scroll_2 > 500) {
//     $('.topMove').fadeIn('slow');
//   } else {
//     $('.topMove').fadeOut('fast');
//   }
// })

// $('.topMove').click(function(e){
//     e.preventDefault();
//     $('html,body').stop().animate({'scrollTop':0}, 1000);
// })

// 탑으로 가는 버튼 기능 - 바닐라 version
var topBtn = document.querySelector('.topMove');

function topBtnUp(){
  if(window.scrollY > 100){
    topBtn.style.display = 'block';
    topBtn.classList.add('topMoveOn');
  } else {
    topBtn.style.display = 'none';
    topBtn.classList.remove('topMoveOn');
  }
}
window.addEventListener('scroll', topBtnUp);

topBtn.onclick = function(e){
  e.preventDefault();
  window.scrollTo({top:0, behavior: 'smooth'});
}


// family site 효과
$('.familySite > a').toggle(function(e){
  e.preventDefault();
  $('.familySite ul').stop().slideDown('fast', function(){
    $('.familySite ul').css('height', '');
    $('.familySite ul').css('margin', '');
    $('.familySite ul').css('padding', '');
  });
  $('.familySite > a').css('background', '#0081cc');
  $('.familySite > a span').html('<i class="fa-solid fa-caret-down"></i>')
}, function(e){
  e.preventDefault();
  $('.familySite ul').stop().slideUp('fast');
  $('.familySite > a').css('background', '#182eae');
  $('.familySite > a span').html('<i class="fa-solid fa-caret-up"></i>')
})

$('.familySite > a').on('focus', function(){
  $('.familySite ul').stop().slideDown('fast');
  $('.familySite > a').css('background', '#0081cc');
  $('.familySite > a span').html('<i class="fa-solid fa-caret-down"></i>');
});

$('.familySite ul li:last a').on('blur', function(){
  $('.familySite ul').stop().slideUp('fast');
  $('.familySite > a').css('background', '#182eae');
  $('.familySite > a span').html('<i class="fa-solid fa-caret-up"></i>');
});