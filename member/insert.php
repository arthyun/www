<meta charset="utf-8">

<?
  @extract($_POST); //한꺼번에 넘어온 값들은 POST

  $hp = $hp1."-".$hp2."-".$hp3; //010-0000-0000
  $email = $email1."@".$email2; //bini@naver.com

  $regist_day = date("Y-m-d (H:i)"); //현재의 '년-월-일-시-분'을 저장 - 가입날짜 지정
  $ip = $REMOTE_ADDR; //방문자의 IP 주소를 저장* - 필드는 만들지 않았지만 알아두자

  include "../lib/dbconn.php"; //DB 접속

  $sql = "select * from member where id='$id'";
  $result = mysql_query($sql);
  $exist_id = mysql_num_rows($result);

  if($exist_id) { //id 중복검사
      echo "<script>
              window.alert('해당 아이디가 존재합니다.')
              history.go(-1)
            </script>";
          exit;
  } else { //id 중복 아닐때
	  $sql = "insert into member(id, pass, name, nick, hp, email, regist_day, level) ";
		$sql .= "values('$id', password('$pass'), '$name', '$nick', '$hp', '$email', '$regist_day', 9)";
    mysql_query($sql); //$sql에 저장된 명령 실행
  }
   mysql_close($connect); //DB 연결 끊기
    echo "<script>
            alert('회원가입을 축하드립니다!');
            location.href = '../index.html';
          </script>";
?>