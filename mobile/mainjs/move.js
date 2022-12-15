// 헤더 스크롤 - 바닐라 version
// var imgHeight = $('.main').height(); // 이미지 높이값 리턴
var imgHeight = document.querySelector('.main').clientHeight; // 이미지 높이값 리턴
var on_off = false;   // false(안오버), true(오버)

function headerScroll() {
  if(window.scrollY > imgHeight - 200) {
    document.querySelector('#headerArea').classList.add('on');
  } else {
    if(on_off == false) {
      document.querySelector('#headerArea').classList.remove('on');
    }
  }
};
window.addEventListener('scroll', headerScroll);

// 메인 비주얼 공식
let cnt = 0;
let position = -100;
var timeonoff; // 살인마에게 전달 예정

const moveCont = document.querySelector('.gallery');
const sloganFirst = document.querySelector('.gallery .link1 .slogan');
const sloganScd = document.querySelector('.gallery .link2 .slogan');
const sloganThird = document.querySelector('.gallery .link3 .slogan');
const sloganAll = [sloganFirst, sloganScd, sloganThird];
const dockAll = document.querySelectorAll('.mbutton');

// 로드 시 먼저 보여야 할 것
sloganFirst.style.top = '50%';
sloganFirst.style.opacity = 1;
sloganFirst.style.transition = 'all 1.5s';
dockAll[0].style.width = '30px';
dockAll[0].style.background = '#fff';
dockAll[0].style.transition = 'all .5s';

function moveHandler() {

    sloganAll.forEach(el=>{
        el.style.top = '60%';
        el.style.opacity = 0;
    });
    dockAll.forEach(el1 => {
        el1.style.width = '8px';
        el1.style.background = '#999';
    });

    cnt++;
    moveCont.style.left = position*cnt+'%';

    if(cnt == 1){
        sloganAll[1].style.top = '50%';
        sloganAll[1].style.opacity = 1;
        sloganAll[1].style.transition = 'all 1.5s';
        dockAll[1].style.width = '30px';
        dockAll[1].style.background = '#fff';
        dockAll[1].style.transition = 'all .5s';
    } else if(cnt == 2){
        sloganAll[2].style.top = '50%';
        sloganAll[2].style.opacity = 1;
        sloganAll[2].style.transition = 'all 1.5s';
        dockAll[2].style.width = '30px';
        dockAll[2].style.background = '#fff';
        dockAll[2].style.transition = 'all .5s';
    } else if(cnt == 0){
        sloganAll[0].style.top = '50%';
        sloganAll[0].style.opacity = 1;
        sloganAll[0].style.transition = 'all 1.5s';
        dockAll[0].style.width = '30px';
        dockAll[0].style.background = '#fff';
        dockAll[0].style.transition = 'all .5s';
    };

    if(cnt == 2) {
        cnt = -1;
    };
}
timeonoff = setInterval(moveHandler, 4000);

// 각 버튼 클릭 시 
$('.mbutton').click(function(event){
    var $target = $(event.target);
    clearInterval(timeonoff);
    
    if($target.is('.btn1')){
      cnt = 0;
    } else if($target.is('.btn2')){
      cnt = 1;
    } else if($target.is('.btn3')){
      cnt = 2;}

    sloganAll.forEach(el => {
        el.style.top = '60%';
        el.style.opacity = 0;
    });
    dockAll.forEach(el1 => {
        el1.style.width = '8px';
        el1.style.background = '#999';
    });

    moveCont.style.left = position*cnt+'%';

    if(cnt == 1){
        sloganAll[1].style.top = '50%';
        sloganAll[1].style.opacity = 1;
        sloganAll[1].style.transition = 'all 1.5s';
        dockAll[1].style.width = '30px';
        dockAll[1].style.background = '#fff';
        dockAll[1].style.transition = 'all .5s';
    } else if(cnt == 2){
        sloganAll[2].style.top = '50%';
        sloganAll[2].style.opacity = 1;
        sloganAll[2].style.transition = 'all 1.5s';
        dockAll[2].style.width = '30px';
        dockAll[2].style.background = '#fff';
        dockAll[2].style.transition = 'all .5s';
    } else if(cnt == 0){
        sloganAll[0].style.top = '50%';
        sloganAll[0].style.opacity = 1;
        sloganAll[0].style.transition = 'all 1.5s';
        dockAll[0].style.width = '30px';
        dockAll[0].style.background = '#fff';
        dockAll[0].style.transition = 'all .5s';
    };

    timeonoff = setInterval(moveHandler, 4000);

    // 카운트 초기화 시점
    if(cnt == 2){
      cnt = -1;
    };
  });

// 터치 이벤트
let curPos = 0;
let position2 = 0;
let movesize2 = 100;
let start_x, end_x;

function touch_start (e){
  start_x = e.touches[0].pageX;
};

function touch_end (e){
  end_x = e.changedTouches[0].pageX;

  if(start_x > end_x){
    clearInterval(timeonoff);
    curPos++;
    cnt = curPos;
    if(curPos >= 3) {
        curPos = curPos - 1;
        moveCont.style.left = '-200%';
    } else {
        position2 -= movesize2;
        moveCont.style.left = `${position2}%`
    }

    sloganAll.forEach(el => {
        el.style.top = '60%';
        el.style.opacity = 0;
    });
    dockAll.forEach(el1 => {
        el1.style.width = '8px';
        el1.style.background = '#999';
    });

    if(curPos == 1){
        sloganAll[1].style.top = '50%';
        sloganAll[1].style.opacity = 1;
        sloganAll[1].style.transition = 'all 1.5s';
        dockAll[1].style.width = '30px';
        dockAll[1].style.background = '#fff';
        dockAll[1].style.transition = 'all .5s';
    } else if(curPos == 2){
        sloganAll[2].style.top = '50%';
        sloganAll[2].style.opacity = 1;
        sloganAll[2].style.transition = 'all 1.5s';
        dockAll[2].style.width = '30px';
        dockAll[2].style.background = '#fff';
        dockAll[2].style.transition = 'all .5s';
    } else if(curPos == 0){
        sloganAll[0].style.top = '50%';
        sloganAll[0].style.opacity = 1;
        sloganAll[0].style.transition = 'all 1.5s';
        dockAll[0].style.width = '30px';
        dockAll[0].style.background = '#fff';
        dockAll[0].style.transition = 'all .5s';
    };

    // timeonoff = setInterval(moveHandler, 4000);

    // // 카운트 초기화 시점
    // if(curPos >= 3){
    //     curPos = curPos - 1;
    // }

  } else {
    clearInterval(timeonoff);
    curPos--;
    if(curPos < 0) {
        curPos = 0
        moveCont.style.left = 0;
    } else {
        position2 += movesize2;
        moveCont.style.left = `${position2}%`
    }

    sloganAll.forEach(el => {
        el.style.top = '60%';
        el.style.opacity = 0;
    });
    dockAll.forEach(el1 => {
        el1.style.width = '8px';
        el1.style.background = '#999';
    });
    
    if(curPos == 1){
        sloganAll[1].style.top = '50%';
        sloganAll[1].style.opacity = 1;
        sloganAll[1].style.transition = 'all 1.5s';
        dockAll[1].style.width = '30px';
        dockAll[1].style.background = '#fff';
        dockAll[1].style.transition = 'all .5s';
    } else if(curPos == 2){
        sloganAll[2].style.top = '50%';
        sloganAll[2].style.opacity = 1;
        sloganAll[2].style.transition = 'all 1.5s';
        dockAll[2].style.width = '30px';
        dockAll[2].style.background = '#fff';
        dockAll[2].style.transition = 'all .5s';
    } else if(curPos == 0){
        sloganAll[0].style.top = '50%';
        sloganAll[0].style.opacity = 1;
        sloganAll[0].style.transition = 'all 1.5s';
        dockAll[0].style.width = '30px';
        dockAll[0].style.background = '#fff';
        dockAll[0].style.transition = 'all .5s';
    };

    // timeonoff = setInterval(moveHandler, 4000);

    // // 카운트 초기화 시점
    // if(curPos >= 3){
    //     curPos = curPos - 1;
    // }
  };
};

moveCont.addEventListener('touchstart', touch_start);
moveCont.addEventListener('touchend', touch_end);

// document.addEventListener('touchmove', function(e) {
//     console.log('movemove~');
// }, false);



// 미디어센터 스크롤바 이벤트 - 1
// let barSize = 20;
// let barTotal = 20;
// let movesize3 = 245;
// let position3 = 0;
// let newCnt = 0;
// let startX, endX;
// const mediaSec = document.querySelector('.mediaMain');
// const mediaMove = document.querySelector('.mediaMain ul');
// const scrollBarBlue = document.querySelector('.scrollBar span');

// function touchMediaStart(e){
//   startX = e.touches[0].pageX;
// };
// function touchMediaEnd(e){
//   endX = e.changedTouches[0].pageX;

//   if(startX > endX){
//     newCnt++;

//     if(newCnt >= 5){
//       newCnt = newCnt - 1;
//       mediaMove.style.left = '-980px'
//     } else {
//       position3 += -movesize3;
//       mediaMove.style.left = position3+'px';

//       barTotal += barSize;
//       scrollBarBlue.style.width = `${barTotal}%`
//       scrollBarBlue.style.transition = 'width .3s'
//     }
//   } else {
//     newCnt--;

//     if(newCnt < 0){
//       newCnt = 0;
//       mediaMove.style.left = 0;
//     } else {
//       position3 -= -movesize3;
//       mediaMove.style.left = position3+'px';

//       barTotal -= barSize;
//       scrollBarBlue.style.width = `${barTotal}%`
//       scrollBarBlue.style.transition = 'width .3s'
//     }
//   }
// };
// mediaSec.addEventListener('touchstart', touchMediaStart);
// mediaSec.addEventListener('touchend', touchMediaEnd);

// 미디어센터 스크롤바 이벤트 - 2
const mediaUl = document.querySelector('.mediaMain ul');
const mediaLi = document.querySelector('.mediaMain ul li');
const mediaLength = document.querySelectorAll('.mediaMain ul li').length;
const mediaListsWidth = document.querySelector('.mediaMain ul li').clientWidth * mediaLength;
const scrollBarBlue = document.querySelector('.scrollBar span');


mediaUl.addEventListener('scroll', () => {

  const scrollWidth = mediaListsWidth - mediaUl.clientWidth;
  let result = 15 + Math.floor((mediaUl.scrollLeft/scrollWidth) * 85)
  
  scrollBarBlue.style.width = result + '%';
});