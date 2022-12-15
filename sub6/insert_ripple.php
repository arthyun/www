<?
    session_start();

    @extract($_GET);
    @extract($_POST);
    @extract($_SESSION);

	  //$table, $num, $ripple_content가 넘어왔다.
?>
<meta charset="utf-8">
<?
  if(!$userid) {
      echo("
      <script>
        window.alert('로그인 후 이용하세요.')
        history.go(-1)
      </script>
    ");
  exit;
  }   
   include "../lib/dbconn.php"; //dconn.php 파일을 불러옴

  $regist_day = date("Y-m-d (H:i)"); //현재의 '년-월-일-시-분'을 저장

  // 레코드 삽입 명령 - parent가 관건!!!
  $sql = "insert into concert_ripple (parent, id, name, nick, content, regist_day) ";
  $sql .= "values($num, '$userid', '$username', '$usernick', '$ripple_content', '$regist_day')";
  mysql_query($sql); //$sql 에 저장된 명령 실행
  mysql_close($connect); //DB 연결 끊기

  echo "
        <script>
          location.href = 'view3.php?table=$table&num=$num&ripple=$ripple';
        </script>
        ";
?>