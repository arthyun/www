// gnb 클릭 이벤트 - 바닐라 version
let op = false;  //네비가 열려있으면(true) , 닫혀있으면(false)
const openBtn = document.querySelector('.gnbOpenBtn');
let moveGnb = document.querySelector('#gnb');
const headerCont = document.querySelector('#headerArea');

function openGnb(e){
  e.preventDefault();
  const docHeight = window.innerHeight;
  moveGnb.style.height = docHeight;

  if(op == false) {
    moveGnb.style.right = 0;
    moveGnb.style.transition = 'all .5s';
    headerCont.classList.add('mn_open');
    op = true;
  } else {
    moveGnb.style.right = '-100%';
    moveGnb.style.transition = 'all .5s';
    headerCont.classList.remove('mn_open');
    op = false;
  }
}
openBtn.addEventListener('click', openGnb);

// gnb 클릭 이벤트
// $(".gnbOpenBtn").click(function(e) { // 메뉴버튼 클릭시
//     e.preventDefault();
//     var documentHeight =  $(document).height();
//     $("#gnb").css('height',documentHeight); 

//     if(op==false) {
//         $("#gnb").animate({right:0, opacity:1}, 'fast');
//         $('#headerArea').addClass('mn_open');
//         op=true;
//     } else {
//         $("#gnb").animate({right:'-100%', opacity:0}, 'fast');
//         $('#headerArea').removeClass('mn_open');
//         op=false;
//     }
// });

//2depth 메뉴 교대로 열기 처리 
var onoff=[false,false,false,false,false,false];
var arrcount=onoff.length;

$('#gnb .depth1 h3 a').click(function(){
    var ind=$(this).parents('.depth1').index();
    
    if(onoff[ind]==false) {
        //$('#gnb .depth1 ul').hide();
        $(this).parents('.depth1').find('ul').slideDown('slow');
        $(this).parents('.depth1').siblings('li').find('ul').slideUp('fast');

        for(var i=0; i<arrcount; i++) {
        onoff[i]=false; 
        }
        onoff[ind]=true;
        
        $('.depth1 span').html('<i class="fa-solid fa-caret-down"></i>');   
        $(this).find('span').html('<i class="fa-solid fa-caret-up"></i>');       
    } else {
        $(this).parents('.depth1').find('ul').slideUp('fast'); 
        onoff[ind]=false;   
        $(this).find('span').html('<i class="fa-solid fa-caret-down"></i>');     
    }
});

// 1depth 클릭 이벤트 - 바닐라 version
// const depth2All = document.querySelectorAll('#gnb > ul .depth1 > ul');
// const depth1Lists = document.querySelectorAll('#gnb > ul .depth1');
// const depth1Length = depth1Lists.length;
// let opUl = false;
// let cntGnb = 0;

// for(let i = 0; i < depth1Length; i++){
//   depth1Lists[i].addEventListener('click', function(e){
//     e.preventDefault();

//     cntGnb++;

//     depth2All.forEach(el=>{
//       el.style.display = 'none';
//     });

//     if(i == 0) {
//       depth2All[0].style.display = 'block';
//     } else if(i == 1) {
//       depth2All[1].style.display = 'block';
//     } else if(i == 2) {
//       depth2All[2].style.display = 'block';
//     } else if(i == 3) {
//       depth2All[3].style.display = 'block';
//     }

//     // if(opUl == false){
//     //   depth2All[i].style.display = 'block';
//     //   opUl = true;
//     // } else {
//     //   depth2All[i].style.display = 'none';
//     //   opUl = false;
//     // }
// });
// };


 
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
$('.familysite > a').toggle(function(e){
    e.preventDefault();
    $('.familysite ul').stop().slideDown('fast', function(){
      $('.familysite ul').css('height', '');
      $('.familysite ul').css('margin', '');
      $('.familysite ul').css('padding', '');
    });
    // $('.familysite > a').css('background', '#0081cc');
    $('.familysite > a span').html('<i class="fa-solid fa-caret-down"></i>')
  }, function(e){
    e.preventDefault();
    $('.familysite ul').stop().slideUp('fast');
    // $('.familysite > a').css('background', '#182eae');
    $('.familysite > a span').html('<i class="fa-solid fa-caret-up"></i>')
  })