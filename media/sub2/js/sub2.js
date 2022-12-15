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
