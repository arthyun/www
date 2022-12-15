<?
    session_start();

    @extract($_POST);
    @extract($_GET);
    @extract($_SESSION);
?>
<!DOCTYPE HTML>
<html>
<head>
    <meta charset="utf-8">
    <title>회원정보 수정</title>
    <link rel="stylesheet" href="./css/member_mod.css">
    <script src="./js/jquery-1.12.4.min.js"></script>
    <script src="./js/jquery-migrate-1.4.1.min.js"></script>
    <script>
    function check_id(){
        window.open("check_id.php?id=" + document.member_form.id.value,
            "IDcheck",
            "left=200,top=200,width=250,height=100,scrollbars=no,resizable=yes");
    }

    function check_nick(){
        window.open("../member/check_nick.php?nick=" + document.member_form.nick.value,
            "NICKcheck",
            "left=200,top=200,width=250,height=100,scrollbars=no,resizable=yes");
    }
    
    function check_input(){
        if (!document.member_form.pass.value){
            alert("비밀번호를 입력하세요");    
            document.member_form.pass.focus();
            return false;
        }

        if (!document.member_form.pass_confirm.value){
            alert("비밀번호확인을 입력하세요");    
            document.member_form.pass_confirm.focus();
            return false;
        }

        // if (!document.member_form.name.value){
        //     alert("이름을 입력하세요");    
        //     document.member_form.name.focus();
        //     return false;
        // }

        if (!document.member_form.nick.value){
            alert("닉네임을 입력하세요");    
            document.member_form.nick.focus();
            return false;
        } 
        
        var load2 = document.querySelector('#loadtext2 span');
        if(load2.style.color === 'red') {
            alert("닉네임이 중복됩니다. 다시 입력하세요.");    
            document.member_form.nick.focus();
            return false;
        }

        if (!document.member_form.hp2.value || !document.member_form.hp3.value){
            alert("휴대폰 번호를 입력하세요");    
            document.member_form.nick.focus();
            return false;
        }

        if (document.member_form.pass.value != 
                document.member_form.pass_confirm.value){
            alert("비밀번호를 잘못 입력하였습니다.\n다시 입력해주세요.");    
            document.member_form.pass.focus();
            document.member_form.pass.select();
            return false;
        }
        document.member_form.submit();
    }

    function reset_form(){
        // document.member_form.id.value = "";
        document.member_form.pass.value = "";
        document.member_form.pass_confirm.value = "";
        // document.member_form.name.value = "";
        document.member_form.nick.value = "";
        document.member_form.hp1.value = "010";
        document.member_form.hp2.value = "";
        document.member_form.hp3.value = "";
        document.member_form.email1.value = "";
        document.member_form.email2.value = "";
        $("#loadtext1").html("");
        $("#loadtext2").html("");

        // document.member_form.id.focus();
    }

    $(document).ready(function(){	 
    //pass 일치검사
    $("#pass_confirm").keyup(function(){    // id입력 상자에 id값 입력시
        var pass = $('#pass').val();
        var passSplit = Array.from(pass);
        var pass2 = $('#pass_confirm').val();
        var passSplit2 = Array.from(pass);

            if(pass === pass2){
                $("#loadtext1").html("<span style='color:green'>✔ 비밀번호가 일치합니다.</span>");
            } else {
                $("#loadtext1").html("<span style='color:red'>✖ 일치하지 않습니다.</span>");
            }
        });	

    //nick 중복검사
    $("#nick").keyup(function(){    // id입력 상자에 id값 입력시
        var nick = $('#nick').val();
        $.ajax({
            type: "POST",
            url: "./check_nick.php",
            data: "nick="+ nick,  
            cache: false, 
            success: function(data){
                $("#loadtext2").html(data);
                }
            });
        });		 
    });
    </script>
</head>
<?
    include "../lib/dbconn.php"; //DB접속

    $sql = "select * from member where id='$userid'"; //세션변수를 찾음
    $result = mysql_query($sql);
    $row = mysql_fetch_array($result);

    $hp = explode("-", $row[hp]); // split()과 같은 기능
    $hp1 = $hp[0];
    $hp2 = $hp[1];
    $hp3 = $hp[2];

    $email = explode("@", $row[email]);
    $email1 = $email[0];
    $email2 = $email[1];

    mysql_close($connect);
?>

<body>
<header>
    <a class="logo" href="../index.html"><img src="./images/logo2.png" alt=""></a> 
</header> 

<article id="content">
<form name="member_form" method="post" action="./modify.php" class="mod">
    <h3>회원정보 수정</h3>
    <p class="firstPara">아이디, 이름을 제외한 모든 정보를 변경할 수 있습니다.</p>

<table>
<tr>
    <th scope="col"><label for="id">아이디*</label></th>
    <td>
        <?=$userid ?>
    </td>
</tr>
<tr>
    <th scope="col"><label for="pass">비밀번호</label></th>
    <td>
        <input type="password" name="pass" id="pass" required>
    </td>
</tr>
<tr>
    <th scope="col"><label for="pass_confirm">비밀번호확인</label></th>
    <td>
        <input type="password" name="pass_confirm" id="pass_confirm" required>
        <span id="loadtext1"></span>
    </td>
</tr>
<tr>
    <th scope="col"><label for="name">이름*</label></th>
    <td>
        <?=$username ?>
    </td>
</tr>
<tr>
    <th scope="col"><label for="nick">닉네임</label></th>
    <td>
        <input type="text" name="nick" id="nick" value="<?=$usernick ?>" required>
        <span id="loadtext2"></span>
    </td>
</tr>
<tr>
    <th scope="col">휴대폰</th>
    <td class="hpMain">
    <label class="hidden" for="hp1">전화번호앞3자리</label>
        <select class="hp" name="hp1" id="hp1"> 
            <option value='010'>010</option>
            <option value='011'>011</option>
            <option value='016'>016</option>
            <option value='017'>017</option>
            <option value='018'>018</option>
            <option value='019'>019</option>
        </select>  - 
    <label class="hidden" for="hp2">전화번호중간4자리</label>
    <input type="text" class="hp" name="hp2" id="hp2" maxlength="4" value="<?=$userhp2 ?>" required> - 
    <label class="hidden" for="hp3">전화번호끝4자리</label>
    <input type="text" class="hp" name="hp3" id="hp3" maxlength="4" value="<?=$userhp3 ?>" required>
    </td>
</tr>
<tr>
    <th scope="col">이메일</th>
    <td>
        <label class="hidden" for="email1">이메일아이디</label>
        <input class="email" type="text" id="email1" name="email1" value="<?=$useremail1 ?>" required> 
        &nbsp; @ &nbsp;
        <label class="hidden" for="email2">이메일주소</label>
        <input class="email" type="text" name="email2" id="email2" value="<?=$useremail2 ?>" required>
    </td>
</tr>
<tr class="lastTr">
    <td colspan="2">
        <a href="#" class="bottomBtn" onclick="check_input()">변경하기</a>
        <a href="#" class="bottomBtn" onclick="reset_form()">초기화</a>
    </td>
</tr>
</table>
</form>
</article>
</body>
</html>