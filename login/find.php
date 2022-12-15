<?
    session_start();
?>
    <meta charset="UTF-8">
<?
    @extract($_GET); 
    @extract($_POST); 
    // @extract($_SESSION); 

    // .find 클릭 시 넘어오는 정보들
    // $name='최순실'
    // $hp1='010'
    // $hp2='0000'
    // $hp3='0000'

  if(!$name) {  //null값 우선 검사
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

  include "../lib/dbconn.php"; //DB 접속

   $sql = "select * from member where name='$name'";  //이름으로 검색
   $result = mysql_query($sql); //있으면 1, 없으면 null
   $num_match = mysql_num_rows($result);  //1 null

   if(!$num_match){ //검색 레코드가 없으면
      echo "<script>
              window.alert('등록되지 않은 이름 입니다');
              history.go(-1);
            </script>";
        exit;
    } else { //검색 레코드가 있으면  
      $hp = $hp1."-".$hp2."-".$hp3; // 010-1111-2222

      $row = mysql_fetch_array($result); 
      //$row[id] ,.... $row[level]
      $sql ="select * from member where name='$name' and hp='$hp'";
      $result = mysql_query($sql);
      $num_match = mysql_num_rows($result); //있으면 1, 없으면 null
      /* db에 이미 암호화 된 pass를 다시 암호화해서 기존의 pass로 알아낼수 없다,
      암호화된 pass가 입력된 pass의 암호화와 일치하는가를 확인해야함*/

        if(!$num_match){ //이름은 있지만. 전화번호가 일치하지 않으면
            echo "<script>
                  window.alert('등록된 정보가 없습니다');
                  history.go(-1);
                </script>";
            exit;
        } else {  //이름과 전화번호가 모두 일치 한다면
          
          //일반변수
          $userid = $row[id];
          $username = $row[name];
          $userhp = $row[hp];
          $date = $row[regist_day];

          echo "<strong>[ 가입정보 ]</strong><br>
                아이디 : $userid <br>
                이름 : $username <br>
                연락처: $userhp <br>
                가입일자 : $date ";
        }
      }
?>
