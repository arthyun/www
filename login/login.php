<?
  session_start();
?>

<meta http-equiv="Content-Type" content="text/html;charset=UTF-8">

<?
  @extract($_GET); 
  @extract($_POST); 
  @extract($_SESSION);
  // @extract($_SERVER); - 서버는 사용할 일이 없음
  // 이전화면에서 이름이 입력되지 않았으면 "이름을 입력하세요"
  // 메시지 출력
  // $id => 입력id값 / $pass => 입력 pass
  
  if(!$id){   //아무값도 입력되지 않았냐?
      echo "<script>
              window.alert('아이디를 입력하세요.');
              history.go(-1);
            </script>";
      exit;
    }

  if(!$pass) {
      echo "<script>
              window.alert('비밀번호를 입력하세요.');
              history.go(-1);
            </script>";
      exit;
    }

  include "../lib/dbconn.php"; //DB 접속

  $sql = "select * from member where id='$id'";
  $result = mysql_query($sql);
  $num_match = mysql_num_rows($result);

    if(!$num_match) { // id 검색이 안됐을때
      echo "<script>
              window.alert('등록되지 않은 아이디입니다.');
              history.go(-1);
            </script>";
        exit;
    } else {   // password도 확인해 봐야함
      $row = mysql_fetch_array($result); 
      $sql ="select * from member where id='$id' and pass=password('$pass')"; //암호화 되어 있으니 암호화로 찾음
      $result = mysql_query($sql);
      $num_match = mysql_num_rows($result);

    if(!$num_match){  // 입력한 패스워드와 DB내 패스워드가 같지않을때
      echo "<script>
              window.alert('비밀번호가 틀립니다.');
              history.go(-1);
            </script>";
        exit;
    } else {  //일치할때

      // 세션에 등록하기 위해 정보를 우선 가져온다.
      $userid = $row[id];
      $username = $row[name];
      $usernick = $row[nick];
      $userlevel = $row[level];
    
      // 세션변수를 등록한다(로그인)
      $_SESSION['userid'] = $userid; //$_SESSION['userid'] = $row[id];
      $_SESSION['username'] = $username; //$_SESSION['username'] = $row[name];
      $_SESSION['usernick'] = $usernick; //$_SESSION['usernick'] = $row[nick];
      $_SESSION['userlevel'] = $userlevel; //$_SESSION['userlevel'] = $row[level];

      echo "<script>
            alert('환영합니다. {$username}님!');
            location.href = '../index.html';
          </script>";
      }
    }
?>