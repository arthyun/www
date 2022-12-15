$(document).ready(function () {
  var screenSize, screenHeight;
  var current = false;

  function screen_size() {
    screenSize = $(window).width(); //스크린의 너비
    screenHeight = $(window).height(); //스크린의 높이

    $("#content").css("margin-top", screenHeight);

    if (screenSize > 768 && current == false) {
      //   $("#videoBG").show();
      //   $("#videoBG").attr("src", "./images/Leon_edit_30s.mp4");
      //   $("#imgBG").hide();
      // $("#headerArea #gnb").show();
      current = true;
    }
    if (screenSize <= 768) {
      //   $("#videoBG").hide();
      //   $("#videoBG").attr("src", "");
      //   $("#imgBG").show();
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

// tab 클릭 시 이벤트
const btnAll = document.querySelectorAll('.tabCont .tabTop ul li a');
const gifZone = document.querySelector('#content .tabCont .tabTop .gifZone');
const changeTitle = document.querySelector('.tabRight h3');
const changePara = document.querySelector('.tabRight p');
const changePara2 = document.querySelector('.tabBottom p')

btnAll.forEach(el => {
  el.addEventListener('click', () => {
    if(el.classList.contains('btn1')){
      gifZone.style.backgroundImage = 'url(./images/gif1.gif)';
      changeTitle.innerText = 'Trailer #1';
      changePara.innerText = "A 1994 French film directed by Luc Besson. It is a story of revenge between a girl who has lost her parents and a knowledgeable killer. The French director Besson's challenge to Hollywood is regarded as a masterpiece with both the fun as an action movie and the pity as a melodrama. In particular, after the release, conservative critics gave a harsh evaluation, but as a result, it not only made a big box office profit in the US market, but also achieved tremendous success in Korea and other countries, causing the Leon Syndrome.";
      changePara2.innerText = `Trailer #1 is open.. \nIf you want another trailer, please click one of the buttons above.`;
    } else if(el.classList.contains('btn2')){
      gifZone.style.backgroundImage = 'url(./images/gif2.gif)';
      changeTitle.innerText = 'Trailer #2';
      changePara.innerText = "Using the uniforms and gas masks of the officers killed in the previous battle. Police commandos take off Leon's gas mask to check for injuries, but they do not know Leon's face, and the troops from various places are called for emergency, so they treat him as a wounded soldier, thinking it might be from another unit. Whether it's to kill himself after seeing Leon's face or to avoid mixing with other troops, he withdraws the troops from the building and puts on the gas mask again without Leon noticing it."
      changePara2.innerText = `Trailer #2 is open.. \nIf you want another trailer, please click one of the buttons above.`;
    } else if(el.classList.contains('btn3')){
      gifZone.style.backgroundImage = 'url(./images/gif3.gif)';
      changeTitle.innerText = 'Trailer #3';
      changePara.innerText = "At the same time as Leon enters the house, DEA's corrupt police officers Stansfield and Malkey tell where he hid the stolen drugs, and when he pushes Matilda's father into custody, Stansfield threatens to come back tomorrow at noon to retrieve the drugs and leave the place. leave On the way home from a movie the next day, Leon meets Matilda again. Even today, there are traces of she had a nosebleed as a result of being beaten by her family, and Leon hands Matilda a handkerchief.";
      changePara2.innerText = `Trailer #3 is open.. \nIf you want another trailer, please click one of the buttons above.`;
    } else if(el.classList.contains('btn4')){
      gifZone.style.backgroundImage = 'url(./images/gif4.gif)';
      changeTitle.innerText = 'Trailer #4';
      changePara.innerText = "Was captured in the bathroom by Stansfield, Who had already noticed a clue. Leon silently killed Molkey, Stansfield's closest aide, to avenge Matilda, but when he returned home, Matilda was chasing Stansfield. Learning this, Leon invades the Enforcement Bureau, kills Stansfield's men, and rescues Matilda. Matilda confesses her love for Leon, convinced that she is in love with her, but Leon is embarrassed, calming him down, trying to figure it out, and getting confused before accepting it.";
      changePara2.innerText = `Trailer #4 is open.. \nIf you want another trailer, please click one of the buttons above.`;
    }
  });
})