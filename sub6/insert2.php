<? session_start(); ?>
<meta charset="utf-8">
<?

	@extract($_GET); 
	@extract($_POST); 
	@extract($_SESSION);

	// $html_ok='y';
	// $subject='제목글'
	// $content='내용글'이 넘어옴

	// 수정모드일 때
	// $mode / $num => get방식으로 넘어옴
    // $subject / $content => post방식으로 넘어옴

	//로그인 버튼은 애초에 목록에서부터 권한을 까지기 때문에 여기서는 안써도 됨
	if(!$userid) {
		echo "<script>
				alert('로그인 후 이용해 주세요.')
				history.go(-1)
			  </script>";
		exit;
	}

	if(!$subject) {
		echo  "<script>
				alert('제목을 입력하세요.')
				history.go(-1)
			  </script>";
		exit;
	}

	if(!$content) {
		echo  "<script>
				alert('내용을 입력하세요.')
				history.go(-1)
			  </script>";
		exit;
	}

	$regist_day = date("Y-m-d (H:i)");  // 현재의 '년-월-일-시-분'을 저장

	include "../lib/dbconn.php"; // DB 접속

	if ($mode == "modify"){ //수정 모드
    	$subject = htmlspecialchars($subject);
		$content = htmlspecialchars($content);
		$subject = str_replace("'", "&#039;", $subject);
		$content = str_replace("'", "&#039;", $content);

		$sql = "update greet set subject='$subject', content='$content' where num=$num";

	} else { //수정 모드가 아닐때

		if ($html_ok == "y"){
			$is_html = "y";
		}else{
			$is_html = "";
		}
		
		$subject = htmlspecialchars($subject);
		$content = htmlspecialchars($content);
		$subject = str_replace("'", "&#039;", $subject);
		$content = str_replace("'", "&#039;", $content);
	 	// "(&quot;) '(&#039;) &(&amp;) <(&lt;) >(&gt;)

		$sql = "insert into greet (id, name, nick, subject, content, regist_day, hit, is_html) ";
		$sql .= "values('$userid', '$username', '$usernick', '$subject', '$content', '$regist_day', 0, '$is_html')";
	}

	mysql_query($sql); // $sql 에 저장된 명령 실행
	mysql_close($connect); // DB 연결 끊기

	echo "<script>
	    	location.href = 'sub6_3.html?page=$page&scale=$scale';
	   	  </script>";
?>