<?
  session_start();

  @extract($_GET); 
	@extract($_POST); 
	@extract($_SESSION);
?>
<!DOCTYPE html>
<html lang="ko">
  <head>
    <meta charset="UTF-8" >
    <meta http-equiv="X-UA-Compatible" content="IE=edge" >
    <meta name="viewport" content="width=device-width, initial-scale=1.0" >
    <title>홍보센터-공지사항</title>
    <link rel="stylesheet" href="../common/css/common.css" >
    <link rel="shortcut icon" href="../common/images/favicon.png" type="image/x-icon" >
    <link rel="stylesheet" href="./common/css/sub6common.css" >
    <link rel="stylesheet" href="./css/sub6_content3.css" >
    <script src="https://kit.fontawesome.com/bc0f1996aa.js" crossorigin="anonymous"></script>
  </head>

  <body>
    <? include "../common/sub_header.html" ?>

      <div class="main">
        <img src="./common/images/company_info_main6-2.jpg" alt="사업분야메인" >
        <h3>홍보센터</h3>
      </div>

      <div class="subNav">
        <ul>
          <li><a href="./sub6_1.html">뉴스룸</a></li>
          <li><a href="./sub6_2.html">미디어센터</a></li>
          <li class="current"><a href="./sub6_3.html">공지사항</a></li>
          <li><a href="./sub6_4.html">FAQ & 문의하기</a></li>
        </ul>
      </div>

      <article id="content">
        <div class="titleArea">
          <div class="lineMap">
            <span
              ><a href="../index.html"><i class="fa-solid fa-house"></i></a
            ></span>
            &nbsp;&nbsp;&gt;&nbsp;
            <span><a href="./sub6_1.html">홍보센터</a></span>
            &nbsp;&nbsp;&gt;&nbsp;
            <span><a href="./sub6_3.html">공지사항</a></span>
          </div>
          <h2>공지사항</h2>
        </div>

        <div class="contentArea">
          <!-- 본문 컨텐츠영역 -->
          <p class="intro"><span class="blue">코오롱 인더스트리</span>의 주요 이슈 및 공지사항을 알려드립니다.</p>
        
        <div class="com_wrap">

        <form name="board_form" method="post" action="insert2.php?page=<?=$page ?>&scale=<?=$scale ?>"> 
          <div id="write_form">

              <div id="write_row1">
                <div class="nickForm">
                  <span><strong>닉네임:</strong> <?=$usernick?></span>
                </div>
              
                <div class="subject1">
                  <strong>제목</strong>
                </div>
                <div class="subject2">
                  <input type="text" name="subject">
                </div>

              <div class="content1">
                <strong>내용</strong>
              </div>
              <div class="htmlCheck">
                  <input type="checkbox" name="html_ok" value="y">
                  <span>HTML 쓰기</span>
                </div>
              <div class="content2">
                  <textarea rows="10" cols="50" name="content"></textarea>
              </div>
        
            </div>
        <? 
          if($userid) {
        ?>
          <script>
            window.onload = function(){
              var btnWrap = document.querySelector('.btn_wrap');
              btnWrap.style.display = 'inline-block';
            }
          </script>
          <div class="btn_wrap_save2">
            <input type="submit" value="저장">
          </div>
        <?
          }
        ?>
        <div class="btn_wrap">
          <a href="./sub6_3.html?page=<?=$page ?>&scale=<?=$scale ?>">목록</a>
        </div>
    </form>

  </div>
  </div>
</article>

<? include "../common/sub_footer.html" ?>
</body>
</html>
