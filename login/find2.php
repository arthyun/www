<?
    session_start();
?>
    <meta charset="UTF-8">
<?
  @extract($_GET); 
  @extract($_POST); 
  @extract($_SESSION);

  // $id='aaa'
  // $name='최순실'
  // $hp1='010'
  // $hp2='0000'
  // $hp3='0000'

  if(!$id){  //null값 검사부터
    echo "<script>
            window.alert('아이디를 입력하세요');
            history.go(-1);
          </script>";
      exit;
  }
  if(!$name){
    echo "<script>
            window.alert('이름을 입력하세요');
            history.go(-1);
          </script>";
      exit;
  }
  if(!($hp2 && $hp3)) { //hp1은 고정이라 제외
    echo "<script>
            window.alert('연락처를 입력하세요');
            history.go(-1);
          </script>";
      exit;
  }

  include "../lib/dbconn.php"; // DB 접속

  $sql = "select * from member where id='$id'";
  $result = mysql_query($sql); //있으면 1, 없으면 null
  $num_match = mysql_num_rows($result);  //1 null

  if(!$num_match){ //검색 레코드가 없으면
      echo "<script>
              window.alert('등록되지 않은 아이디 입니다');
              history.go(-1);
            </script>";
        exit;
    } else { //검색 레코드가 있으면
        $hp = $hp1."-".$hp2."-".$hp3;
      
        $row = mysql_fetch_array($result); 
        //$row[id] ,.... $row[level]
        $sql ="select * from member where id='$id' and name='$name' and hp='$hp'";
        $result = mysql_query($sql);
        $num_match = mysql_num_rows($result); //있으면 1, 없으면 null
      /* db에 이미 암호화 된 pass를 다시 암호화해서 기존의 pass로 알아낼수 없다,
      암호화된 pass가 입력된 pass의 암호화와 일치하는가를 확인해야함*/

      if(!$num_match){ //null이면=입력된 pass가 암호화된 패스와 맞지 않다면
          echo "<script>
              window.alert('등록된 정보가 없습니다');
              history.go(-1);
            </script>";
          exit;
      } else {  //아이디와 이름 전화번호가 모두 일치 한다면

          //일반변수
          $userid = $row[id];
          $username = $row[name];
          $userhp = $row[hp];
          $date = $row[regist_day];

      function generateRandomPassword($length=0, $strength=0) {
          $vowels = 'aeuy';
          $consonants = 'bdghjmnpqrstvz';  //랜덤으로 뽑아낼 기본 문자

          if ($strength & 1) {
              $consonants .= 'BDGHJMNPQRSTVZ1234567890@#$%';  //추가할 문자
          } 

          $password = '';
          $alt = time() % 2; //가정문 - time()을 실행하면 숫자가 1이나 0이 나옴
          //$alt = 0; 하나만 사용할 것이라면 0으로 고정

          for ($i = 0; $i < $length; $i++) {
              if ($alt == 1) {
                  $password .= $consonants[(rand() % strlen($consonants))]; //하나씩 뽑아내는 랜덤함수
                  $alt = 0;
              } else {
                  $password .= $vowels[(rand() % strlen($vowels))];
                  $alt = 1;
              }
          }
          return $password;
      }
      $ranpass = generateRandomPassword(8, 1);  //랜덤으로 뽑은 8자의 문자
          
      echo "<strong>[ 가입정보 ]</strong><br>
              임시비밀번호는 <strong> $ranpass </strong> 입니다<br>
              아이디 : $userid <br>
              이름 : $username <br>
              연락처: $userhp <br>
              가입일자 : $date <br>
            <strong>* 로그인 후 비밀번호를 변경해주세요.</strong>";
          
      $sql = "update member set pass=password('$ranpass') where id='$id' and name='$name' and hp='$hp'";
      $result = mysql_query($sql);
      }
  }          
?>