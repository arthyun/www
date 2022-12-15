<?
	session_start();
    
    @extract($_GET); 
    @extract($_POST); 
    @extract($_SESSION);  
?>

<!DOCTYPE html>
<html lang="ko">
<head>
<meta charset="UTF-8">
<title>비밀번호 찾기</title>
<link rel="stylesheet" href="./css/pw_find.css">
<script src="https://kit.fontawesome.com/f8a0f5a24e.js" crossorigin="anonymous"></script>
<script src="../common/js/jquery-1.12.4.min.js"></script>
<script src="../common/js/jquery-migrate-1.4.1.min.js"></script>
<script>
	$(document).ready(function() {
        $(".find").click(function() {   // id입력 상자에 id값 입력시
        var id = $('.find_id').val(); //green2
        var name = $('.find_name').val(); //홍길동
        var hp1 = $('#hp1').val(); 
        var hp2 = $('#hp2').val(); 
        var hp3 = $('#hp3').val(); 

        $.ajax({
            type: "POST",
            url: "find2.php", /*매개변수인 check_id.php파일을 post방식으로 넘기세요*/
            data: "id="+ id+ "&name="+ name+ "&hp1="+hp1+ "&hp2="+hp2+ "&hp3="+hp3,  /*매개변수id도 같이 넘겨줌*/
            cache: false, 
            success: function(data){ /*이 메소드가 완료되면 data라는 변수 안에 echo문이 들어감*/
                $("#loadtext").html(data); /*span안에 있는 태그를 사용할것이기 때문에 html 함수사용*/
                }
            });
            // $("#loadtext").addClass('loadtexton');     
        }); 
    });
</script>
</head>
<body>
<div id="wrap">
    <header>
        <a class="logo" href="../index.html"><img src="./images/logo2.png" alt=""></a> 
    </header> 
<article id="content">
	<div id="col2">
    <form name="find" method="post" action="find2.php" class="passFind"> 
    <h3>비밀번호 찾기</h3>
		<div id="title">
			<h2 class="hidden">비밀번호 찾기</h2>
			<p class="firstPara">가입 시 입력하신 정보로 비밀번호를 찾아드립니다.</p>
		</div>

		<div id="login_form">

		<div class="clear"></div>

        <div id="login2">
            <div id="id_input_button">
                    <label for="name">이름</label>
                    <input type="text" name="name" class="find_input find_name" placeholder="이름을 입력하세요">
                    <label for="id">아이디</label>
                    <input type="text" name="id" class="find_input find_id" placeholder="아이디를 입력하세요">
                    <div class="telBox">
                        <label class="hidden" for="hp1">연락처 앞3자리</label>
                        <select name="hp1" id="hp1" title="휴대폰 앞3자리를 선택하세요." class="find_input">
                            <option>010</option>
                            <option>011</option>
                            <option>016</option>
                            <option>017</option>
                            <option>018</option>
                            <option>019</option>
                        </select> ㅡ
                        <label class="hidden" for="hp2">연락처 가운데3자리</label>
                        <input class="find_input" type="text" id="hp2" name="hp2" title="연락처 가운데3자리를 입력하세요." maxlength="4" placeholder="4자리 입력" required> ㅡ
                        <label class="hidden" for="hp3">연락처 마지막3자리</label>
                        <input class="find_input" type="text" id="hp3" name="hp3" title="연락처 마지막3자리를 입력하세요." maxlength="4" placeholder="4자리 입력" required>
                    </div>
                    <input type="button" value="비밀번호 찾기" class="find">
                
                <span id="loadtext"></span>
                
                <ul class="go">
                    <li class="loginGo"><a href="login_form.php">로그인하기</a></li>
                    <li class="idGo"><span>아이디를 잊으셨나요?</span> &nbsp;<a href="id_find.php">아이디 찾기</a></li>
                </ul>
            </div>
        <div class="clear"></div>
        
        <div id="login_line"></div>
        <div id="join_button"><span>아직도 회원이 아니신가요?</span> &nbsp;<a href="../member/join.html" class="go_join">회원가입</a></div>
        </div>			 
    </div> <!-- end of form_login -->

	</form>
	</div> <!-- end of col2 -->
</article>

</div> <!-- end of wrap -->
</body>
</html>