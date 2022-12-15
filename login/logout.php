<?
  session_start();

  unset($_SESSION['userid']);
  unset($_SESSION['username']);
  unset($_SESSION['usernick']);
  unset($_SESSION['userlevel']);
  unset($_SESSION['userhp2']);
  unset($_SESSION['userhp3']);
  unset($_SESSION['useremail1']);
  unset($_SESSION['useremail2']);

  echo "<script>
          location.href = '../index.html'; 
        </script>";
?>