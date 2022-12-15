$(document).ready(function () {
  var screenSize, screenHeight;
  var current = false;

  function screen_size() {
    screenSize = $(window).width(); //스크린의 너비
    screenHeight = $(window).height(); //스크린의 높이

    $("#content").css("margin-top", screenHeight);

    if (screenSize > 768 && current == false) {
      $("#videoBG").show();
      $("#videoBG").attr("src", "./images/Leon_edit_30s.mp4");
      $("#imgBG").hide();
      $("#headerArea #gnb").show();
      $("#headerArea .gnbOpen").hide();
      current = true;
    }
    if (screenSize <= 768) {
      $("#videoBG").hide();
      $("#videoBG").attr("src", "");
      $("#imgBG").show();
      $("#headerArea .gnbOpen").show();
      current = false;
    }
  }
  screen_size(); //최초 실행시 호출

  $(window).resize(function () {
    // 웹브라우저 크기 조절시 반응하는 이벤트 메소드()
    screen_size();
  });

  $(".down").click(function () {
    screenHeight = $(window).height();
    $("html,body").animate({ scrollTop: screenHeight }, 1000);
  });

  // 스크롤 아래 시 헤더 효과
  const scHeight1 = window.innerHeight;

  function scrollHeader() {
    if (window.scrollY > scHeight1) {
      $("#headerArea").addClass("on");
    } else {
      $("#headerArea").removeClass("on");
    }
  }
  window.addEventListener("scroll", scrollHeader);
});


// scroll event
  const movePlot1 = document.querySelector("#content .plotMain .plotCont");
  const movePlot2 = document.querySelector("#content .plotMain .plotRight");
  const moveMusic1 = document.querySelector("#content .musicMain .musicLeft");
  const moveMusic2 = document.querySelector("#content .musicMain .musicRight");
  const moveNorman = document.querySelector("#content .normanMain");
  const moveCast1 = document.querySelector("#content .castMain ul:nth-child(1)");
  const moveCast2 = document.querySelector("#content .castMain ul:nth-child(2)");
  const moveCast3 = document.querySelector("#content .castMain ul:nth-child(3)");
  const moveTrailer1 = document.querySelector(
    "#content .trailerMain .trailerInner"
  );
  const moveTrailer2 = document.querySelector(
    "#content .trailerMain .trailerLists"
  );
  const moveGallery1 = document.querySelector(
    "#content .galleryMain .gridGallery ul:nth-child(1)"
  );
  const moveGallery2 = document.querySelector(
    "#content .galleryMain .gridGallery ul:nth-child(2)"
  );
  const moveGallery3 = document.querySelector(
    "#content .galleryMain .gridGallery ul:nth-child(3)"
  );
  const winH = window.innerHeight;

  const moveAll = () => {
    // Plot Section
      if (winH > movePlot1.getBoundingClientRect().top) {
        movePlot1.classList.add("movePlot1");
      } else {
        movePlot1.classList.remove("movePlot1");
      };
      if (winH > movePlot2.getBoundingClientRect().top) {
        movePlot2.classList.add("movePlot2");
      } else {
        movePlot2.classList.remove("movePlot2");
      };

    // Music Section
    if (winH > moveMusic1.getBoundingClientRect().top) {
      moveMusic1.classList.add("moveMusic1");
    } else {
      moveMusic1.classList.remove("moveMusic1");
    };
    if (winH > moveMusic2.getBoundingClientRect().top) {
      moveMusic2.classList.add("moveMusic2");
    } else {
      moveMusic2.classList.remove("moveMusic2");
    };

    // Norman Section
    if (winH > moveNorman.getBoundingClientRect().top) {
      moveNorman.classList.add("moveNorman");
    } else {
      moveNorman.classList.remove("moveNorman");
    };

    // Cast Section
    if (winH > moveCast1.getBoundingClientRect().top) {
      moveCast1.classList.add("moveCast1");
    } else {
      moveCast1.classList.remove("moveCast1");
    }
    if (winH > moveCast2.getBoundingClientRect().top - 250) {
      moveCast2.classList.add("moveCast2");
    } else {
      moveCast2.classList.remove("moveCast2");
    }
    if (winH > moveCast3.getBoundingClientRect().top) {
      moveCast3.classList.add("moveCast1");
    } else {
      moveCast3.classList.remove("moveCast1");
    };

    // Trailer Section
    if (winH > moveTrailer1.getBoundingClientRect().top) {
      moveTrailer1.classList.add("moveTrailer1");
    } else {
      moveTrailer1.classList.remove("moveTrailer1");
    }
    if (winH > moveTrailer2.getBoundingClientRect().top) {
      moveTrailer2.classList.add("moveTrailer2");
    } else {
      moveTrailer2.classList.remove("moveTrailer2");
    };

    // Gallery Section
    if (winH > moveGallery1.getBoundingClientRect().top) {
      moveGallery1.classList.add("moveGallery1");
    } else {
      moveGallery1.classList.remove("moveGallery1");
    }
    if (winH > moveGallery2.getBoundingClientRect().top - 250) {
      moveGallery2.classList.add("moveGallery2");
    } else {
      moveGallery2.classList.remove("moveGallery2");
    }
    if (winH > moveGallery3.getBoundingClientRect().top) {
      moveGallery3.classList.add("moveGallery1");
    } else {
      moveGallery3.classList.remove("moveGallery1");
    };
  };
window.addEventListener("scroll", moveAll);


// audio 제어
var playBtn = document.querySelector(".playBtn");
var cdPlayer = document.querySelector(".cd");
var audio; //전역변수 선언
audio = document.getElementById("testAudio");
var cnt = 0;

function audioControl(e) {
  e.preventDefault();
  cnt++;
  if (cnt % 2 == 1) {
    audio.play(); //비디오를 재생한다.
    playBtn.innerText = "Pause";
    playBtn.style.color = "#fff";
    playBtn.style.background =
      "-webkit-linear-gradient(-45deg, #3239ff 40%,#e389ff 100%)";
    cdPlayer.classList.add("cdRotate");
  } else {
    audio.pause(); //비디오를 재생한다.
    playBtn.innerText = "Play";
    playBtn.style.color = "#333";
    playBtn.style.background =
      "-webkit-linear-gradient(-45deg, #fde306 40%, #ffb96d 100%)";
    cdPlayer.classList.remove("cdRotate");
  }
}
playBtn.addEventListener("click", audioControl);


// trailer 좌우 버튼
var movieArr = ['trailer01.png', 'trailer02.jpg', 'trailer05.jpg', 'trailer04.jpg']
var leftBtn = document.querySelector('.trailerBtn .leftBtn');
var rightBtn = document.querySelector('.trailerBtn .RightBtn');
var movieZone = document.querySelector('.moviePart');
var movieZone2 = document.querySelector('#content .trailerMain .trailerLists ul li:nth-of-type(2)');
var trailerNum = document.querySelector('.trailerIntro p:nth-of-type(2)');
var trailerPara = document.querySelector('.trailerIntro p:nth-of-type(3)');
var curPos = 0;
var curPos2 = 0;
var current2 = false;

movieZone.style.background = 'url(./images/'+movieArr[0]+') 50% 50% no-repeat';
movieZone.style.backgroundSize = 'cover';

  function leftHandle(e){
    e.preventDefault();
    curPos--;
    movieZone.style.background = 'url(./images/'+movieArr[curPos]+') 50% 50% no-repeat';
    movieZone.style.backgroundSize = 'cover';
    if(curPos == -1){
      curPos = 3;
      movieZone.style.background = 'url(./images/'+movieArr[curPos]+') 50% 50% no-repeat';
      movieZone.style.backgroundSize = 'cover';
    }
    if(curPos == 3){
      trailerNum.innerText = 'Trailer #4'
      trailerPara.innerText = 'A little hope and support for a little girl who lost her parents was found. His name is Leon.'
    } else if (curPos == 2) {
      trailerNum.innerText = 'Trailer #3'
      trailerPara.innerText = "Leon tells him to leave to save Matilda. Matilda grieves and the two part. What happened to Leon after that?"
    } else if (curPos == 1) {
      trailerNum.innerText = 'Trailer #2'
      trailerPara.innerText = "Norman comes to find Leon. They are looking for Leon by all means. Will he be able to reveal Leon's location?"
    } else if (curPos == 0) {
      trailerNum.innerText = 'Trailer #1'
      trailerPara.innerText = "Trailer for Luc Besson's film starring Jean Reno, Gary Oldman, Natalie Portman, Danny Aiello, Michael Badalucco, Peter Appel, Ellen Greene, Frank Senger..."
    }

    if(matchMedia("screen and (max-width: 768px)").matches) {
      curPos2--;
      movieZone2.style.backgroundImage = 'url(./images/'+movieArr[curPos2]+')';
      if(curPos2 == -1){
        curPos2 = 3;
        movieZone2.style.backgroundImage = 'url(./images/'+movieArr[curPos2]+')';
      }
    }
  }
  function rightHandle(e){
    e.preventDefault();
      curPos++;
      movieZone.style.background = 'url(./images/'+movieArr[curPos]+') 50% 50% no-repeat';
      movieZone.style.backgroundSize = 'cover';
     if(curPos > 3) {
        curPos = 0;
        movieZone.style.background = 'url(./images/'+movieArr[curPos]+') 50% 50% no-repeat';
        movieZone.style.backgroundSize = 'cover';
     }    
     if(curPos == 3){
      trailerNum.innerText = 'Trailer #4'
      trailerPara.innerText = 'A little hope and support for a little girl who lost her parents was found. His name is Leon.'
    } else if (curPos == 2) {
      trailerNum.innerText = 'Trailer #3'
      trailerPara.innerText = "Leon tells him to leave to save Matilda. Matilda grieves and the two part. What happened to Leon after that?"
    } else if (curPos == 1) {
      trailerNum.innerText = 'Trailer #2'
      trailerPara.innerText = "Norman comes to find Leon. They are looking for Leon by all means. Will he be able to reveal Leon's location?"
    } else if (curPos == 0) {
      trailerNum.innerText = 'Trailer #1'
      trailerPara.innerText = "Trailer for Luc Besson's film starring Jean Reno, Gary Oldman, Natalie Portman, Danny Aiello, Michael Badalucco, Peter Appel, Ellen Greene, Frank Senger..."
    }
    if(matchMedia("screen and (max-width: 768px)").matches) {
      curPos2++;
      movieZone2.style.backgroundImage = 'url(./images/'+movieArr[curPos2]+')';
      if(curPos2 > 3) {
        curPos2 = 0;
        movieZone2.style.backgroundImage = 'url(./images/'+movieArr[curPos2]+')';
     }   
    }
  }
  leftBtn.addEventListener('click', leftHandle);
  rightBtn.addEventListener('click', rightHandle);