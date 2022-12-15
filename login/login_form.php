<? 
	session_start(); 
?>

<!DOCTYPE HTML>
<html>
<head> 
<meta charset="utf-8">
<link rel="stylesheet" href="./css/login.css">
<title>로그인</title>
</head>

<body>
    <header>
        <a class="logo" href="../index.html"><img src="./images/logo2.png" alt=""></a> 
    </header> 
    
<div id="wrap">
<article id="content">  
<div id="col2">
    <form name="member_form" method="post" action="./login.php" class="login"> 
        <h3>로그인</h3>
        <p class="firstPara">가입 시 등록한 아이디와 비밀번호를 입력해주세요.</p>
    <div id="id_pw_input">
        <ul>
            <li>
                <label for="id">아이디</label>
                <input type="text" name="id" class="login_input" placeholder="아이디를 입력하세요" required>
            </li>
            <li>
                <label for="pass">비밀번호</label>
                <input type="password" name="pass" class="login_input" placeholder="비밀번호를 입력하세요" required>
            </li>
        </ul>						
	</div>
    <div id="login_button">
		<button type="submit" class="logBtn">로그인</button>
	</div>
    <div id="join_button">
        <span>아직 회원이 아니신가요?</span> &nbsp;<a href="../member/join.html">회원가입</a>
    </div>

    <ul class="id_pw_find">
        <li>
            <span><a href="./id_find.php">아이디 찾기</a></span>
        </li>
        <li>
            <span><a href="./pw_find.php">비밀번호 찾기</a></span>
        </li>
	</ul>
</form>
</article>

</body>
</html>