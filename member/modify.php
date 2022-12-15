<?
	session_start();

  @extract($_POST);
  @extract($_GET);
  @extract($_SESSION);

  //id, name값 빼고 다넘어 옴(세션변수 포함)
?>

<meta charset="utf-8">

<?
  $hp = $hp1."-".$hp2."-".$hp3;
  $email = $email1."@".$email2;
  $regist_day = date("Y-m-d (H:i)");  // 현재의 '년-월-일-시-분'을 저장

  include "../lib/dbconn.php"; // DB접속

  $sql = "update member set pass=password('$pass'), nick='$nick', ";  //sql 명령문 - 넘어온 값은 문자열로 넣어주기
  $sql .= "hp='$hp', email='$email', regist_day='$regist_day' where id='$userid'"; // id는 세션변수
  mysql_query($sql);

  //수정된 세션변수 닉네임을 바꾸어준다
  $_SESSION['usernick'] = $nick;
  $_SESSION['userhp2'] = $hp2;
  $_SESSION['userhp3'] = $hp3;
  $_SESSION['useremail1'] = $email1;
  $_SESSION['useremail2'] = $email2;

  mysql_close($connect); // DB 연결 끊기

  echo "<script>
          window.alert('회원님의 정보가 수정되었습니다.');
          location.href = '../index.html';
        </script>";
?>
