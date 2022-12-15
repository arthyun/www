<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />

<!-- 그냥 함수를 사용하면 오류가 난다. 그래서 메일발송서버를 따로 설치해야 한다. -->

<?php
        $uname = $_POST['uname'];
        $email = $_POST['email'];
        $phone = $_POST['phone'];
        $msg2 = $_POST['message'];

        $to = 'heun3316@naver.com'; //관리자 메일 주소
        $subject = '기업형 포트폴리오 사이트에서 관리자에게 보낸 메일'; //메일 제목
        $msg =  "보낸사람: $uname\n". 
                "보낸사람메일주소: $email\n". //Header 자리에 들어갈 정보
                "보낸사람전화번호: $phone\n".
                "내용: $msg2\n"; //contents 자리에 들어갈 정보

        mail($to, $subject, $msg, '보낸사람메일주소:'.$email);

        echo "<script>
                alert('성공적으로 메일이 전송되었습니다.');
                location.href='./sub6_4.html' ;
                </script>";
                //history.go(-1);
?>