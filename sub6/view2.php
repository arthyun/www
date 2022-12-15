<? 
	session_start(); 

	@extract($_GET); 
	@extract($_POST); 
	@extract($_SESSION);

	// $num, $page, $scale가 넘어옴

	include "../lib/dbconn.php"; //DB 접속

	$sql = "select * from greet where num = $num";
	$result = mysql_query($sql);
    $row = mysql_fetch_array($result);   
    // 하나의 레코드 가져오기
	
	$item_num = $row[num];
	$item_id = $row[id];
	$item_name = $row[name];
	$item_nick = $row[nick];
	$item_hit = $row[hit];
    $item_date = $row[regist_day];
	$item_subject = str_replace(" ", "&nbsp;", $row[subject]); //오류가 생길 수 있으니 변환
	$item_content = $row[content];
	$is_html = $row[is_html];

	if ($is_html != "y"){
		$item_content = str_replace(" ", "&nbsp;", $item_content);
		$item_content = str_replace("\n", "<br>", $item_content);
	}	

	$new_hit = $item_hit + 1;

	$sql = "update greet set hit=$new_hit where num=$num";  // 글 조회수 증가시킴
	mysql_query($sql);
?>
<!DOCTYPE HTML>
<html>
<head> 
<meta charset="UTF-8" >
    <meta http-equiv="X-UA-Compatible" content="IE=edge" >
    <meta name="viewport" content="width=device-width, initial-scale=1.0" >
    <title>홍보센터-공지사항</title>
    <link rel="stylesheet" href="../common/css/common.css" >
    <link rel="shortcut icon" href="../common/images/favicon.png" type="image/x-icon" >
    <link rel="stylesheet" href="./common/css/sub6common.css" >
    <link rel="stylesheet" href="./css/sub6_content3.css" >
    <script src="https://kit.fontawesome.com/bc0f1996aa.js" crossorigin="anonymous"></script>
<script>
    function del(href) {
        if(confirm("한번 삭제한 자료는 복구할 방법이 없습니다.\n\n정말 삭제하시겠습니까?")) {
            document.location.href = href;
        }
    }
</script>
</head>

<body>
<? include "../common/sub_header.html" ?>

	<div class="main">
		<img src="./common/images/company_info_main6-2.jpg" alt="사업분야메인" >
		<h3>홍보센터</h3>
	</div>

	<div class="subNav">
		<ul>
			<li><a href="./sub6_1.html">뉴스룸</a></li>
			<li><a href="./sub6_2.html">미디어센터</a></li>
			<li class="current"><a href="./sub6_3.html">공지사항</a></li>
			<li><a href="./sub6_4.html">FAQ & 문의하기</a></li>
		</ul>
	</div>

<article id="content">
<div class="titleArea">
          <div class="lineMap">
            <span
              ><a href="../index.html"><i class="fa-solid fa-house"></i></a
            ></span>
            &nbsp;&nbsp;&gt;&nbsp;
            <span><a href="./sub6_1.html">홍보센터</a></span>
            &nbsp;&nbsp;&gt;&nbsp;
            <span><a href="./sub6_3.html">공지사항</a></span>
          </div>
          <h2>공지사항</h2>
        </div>

	<div class="contentArea">
		<p class="intro"><span class="blue">코오롱 인더스트리</span>의 주요 이슈 및 공지사항을 알려드립니다.</p>

	
		<div class="com_wrap">

		<div id="view_title">
			<div id="view_title1">
				<?=$item_subject ?>
			</div>

			<div id="view_title2">
				<?=$item_nick ?> &nbsp;/ &nbsp;<?=$item_date ?> &nbsp;/ &nbsp;<i style="line-height: 1.5rem;" class="fa-regular fa-eye"></i>&nbsp;&nbsp;<?=$item_hit ?>
			</div>	
		</div>

		<div id="view_content">
			<?=$item_content ?>
		</div>

<? 
	if($userid == $item_id || $userlevel == 1 || $userid == "admin"){
?>
		<div class="btn_wrap">
			<a href="modify_form2.php?num=<?=$num ?>&page=<?=$page ?>&scale=<?=$scale ?>">수정</a>
			<a href="javascript:del('delete2.php?num=<?=$num ?>&page=<?=$page ?>&scale=<?=$scale ?>')">삭제</a>
        	<a href="./sub6_3.html?page=<?=$page ?>&scale=<?=$scale ?>">목록</a>
        </div>
<?
	} else {
?>  
		<div class="btn_wrap">
        	<a href="./sub6_3.html?page=<?=$page ?>&scale=<?=$scale ?>">목록</a>
        </div>
<?
	}
?>
	</div>

	</div>
</div>
</article> <!-- end of content -->
<? include "../common/sub_footer.html" ?>
</body>
</html>
