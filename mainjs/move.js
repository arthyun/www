// 메인 비주얼 공식
var imageCount = $('.gallery li').size(); // 갯수 공식
// var imageCount1 = document.querySelectorAll('.gallery li').length; // 갯수 공식
var cnt = 1;
var timeonoff; // 살인마에게 전달 예정
var onoff = true; // 타이머 가정문

// 로드 시 먼저 보여야 할 것
$('.gallery .link1').fadeIn('slow');
$('.gallery .link1 .slogan').delay(1000).animate({top: '52%', opacity: 1},'slow');
$('.btn1').css('background','#fff').css('opacity', 1).css('width', 30);

// li, Button, span 등 중복 코드이기 때문에 함수로 만들어서 사용
// function moveSpan() {
//   $('.gallery li .slogan').css('top', '60%').css('opacity', 0);
//   $('.gallery .link'+cnt+' .slogan').delay(1000).animate({top: '52%', opacity: 1},'slow');
// }

// function fadeList() {
//   $('.gallery li').hide();
//   $('.gallery .link'+cnt).fadeIn('slow');
// }

// function fadeBtn() {
//   $('.mbutton').css('background','#ccc').css('opacity', .5).css('width', 16);
//   $('.btn'+cnt).css('background','#fff').css('opacity', 1).css('width', 30);
// }

// 위 함수 3가지를 합쳐보자(Test)
function totalFunc() {
  $('.gallery li').hide();
  $('.gallery .link'+cnt).fadeIn('slow');

  $('.mbutton').css('background','#ccc').css('opacity', .5).css('width', 16);
  $('.btn'+cnt).css('background','#fff').css('opacity', 1).css('width', 30);

  $('.gallery li .slogan').css('top', '60%').css('opacity', 0);
  $('.gallery .link'+cnt+' .slogan').delay(1000).animate({top: '52%', opacity: 1},'slow');
};

// 메인 함수 작성
function moveGallery() {
  cnt++;

  totalFunc();

  if(cnt == imageCount){
    cnt = 0;
  }
};
timeonoff = setInterval(moveGallery, 4000);

// 각 버튼 클릭 시 
$('.mbutton').click(function(event){
  var $target = $(event.target);
  clearInterval(timeonoff);
  
  if($target.is('.btn1')){
    cnt = 1;
  } else if($target.is('.btn2')){
    cnt = 2;
  } else if($target.is('.btn3')){
    cnt = 3;}

    totalFunc();

  // 카운트 초기화 시점
  if(cnt == imageCount){
    cnt = 0;
  }
  // 카운트 초기화 시 타이머 부활해야함
  timeonoff = setInterval(moveGallery, 4000);

  // 클릭 시 버튼 모양도 반대되기 때문에 되돌려 줘야함
  if(onoff == false){
    onoff = true;
    $('.ps').css('background', 'url(../images/stop.png) 0 no-repeat');
  }
});

  // stop, play 버튼 클릭 시
  $('.ps').click(function(){
    if(onoff == true){
      clearInterval(timeonoff);
      $('.ps').css('background', 'url(../images/play.png) 0 no-repeat');
      onoff = false;
    } else {
      timeonoff = setInterval(moveGallery, 4000);
      $('.ps').css('background', 'url(../images/stop.png) 0 no-repeat');
      onoff = true;
    }
  });



// 바닐라 version
// var imageCount = document.querySelectorAll('.gallery li').length; // 바닐라 배열 갯수 구하는 공식
var listAll = document.querySelectorAll('.gallery li');
var btnAll = document.querySelector('.mbutton');
var btn1 = document.querySelector('.btn1');
var btn2 = document.querySelector('.btn2');
var btn3 = document.querySelector('.btn3');

// 첫 로드 시 보여야 할 것 - 슬로건은 클래스로 줘야할 듯
listAll[0].style.display = 'block';
btn1.style.background = '#fff';
btn1.style.opacity = '1';
btn1.style.width = '30px';