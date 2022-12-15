<? 
	session_start(); 

	@extract($_GET);
	@extract($_POST);
	@extract($_SESSION);

	$table = "concert";

	include "../lib/dbconn.php";

	//게시글 수정모드
	if ($mode == "modify"){
		$sql = "select * from $table where num=$num";
		$result = mysql_query($sql);

		$row = mysql_fetch_array($result);       
	
		$item_subject = $row[subject];
		$item_content = $row[content];

		$item_file_0 = $row[file_name_0];
		$item_file_1 = $row[file_name_1];
		$item_file_2 = $row[file_name_2];

		$copied_file_0 = $row[file_copied_0];
		$copied_file_1 = $row[file_copied_1];
		$copied_file_2 = $row[file_copied_2];
	}
?>
<!DOCTYPE html>
<html lang="ko">
  <head>
    <meta charset="UTF-8" >
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>홍보센터-뉴스룸</title>
    <link rel="stylesheet" href="../common/css/common.css">
    <link rel="shortcut icon" href="../common/images/favicon.png" type="image/x-icon">
    <link rel="stylesheet" href="./common/css/sub6common.css">
    <link rel="stylesheet" href="./css/sub6_content1.css">
    <script src="https://kit.fontawesome.com/bc0f1996aa.js" crossorigin="anonymous"></script>
	<script>
	function check_input(){
		if (!document.board_form.subject.value){
			alert("제목을 입력하세요!");    
			document.board_form.subject.focus();
			return;
		}

		if (!document.board_form.content.value){
			alert("내용을 입력하세요!");    
			document.board_form.content.focus();
			return;
		}
		document.board_form.submit();
	}
	</script>
</head>

</head>

<body>
<? include "../common/sub_header.html" ?>

<div class="main">
<img src="./common/images/company_info_main6-2.jpg" alt="사업분야메인" >
<h3>홍보센터</h3>
</div>

<div class="subNav">
<ul>
	<li class="current"><a href="./sub6_1.html">뉴스룸</a></li>
	<li><a href="./sub6_2.html">미디어센터</a></li>
	<li><a href="./sub6_3.html">공지사항</a></li>
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
	<span><a href="./sub6_1.html">뉴스룸</a></span>
	</div>
	<h2>뉴스룸</h2>
</div>

<div class="contentArea">
	<!-- 본문 컨텐츠영역 -->
	<p class="intro">
	오늘보다 나은 내일, 함께 나누는 가치 <br><span class="blue">코오롱 인더스트리</span>의 뉴스 소식을 만나보세요.
	</p>
<?
	if($mode == "modify"){
?>
	<form name="board_form" method="post" action="insert3.php?mode=modify&num=<?=$num?>&page=<?=$page?>&table=<?=$table?>&scale=<?=$scale ?>" enctype="multipart/form-data"> 
<?
	} else {
?>
	<form name="board_form" method="post" action="insert3.php?table=<?=$table?>&page=<?=$page?>&scale=<?=$scale ?>" enctype="multipart/form-data"> 
<?
	}
?>
<div class="news_wrap">
	<div id="write_form">
		<div class="write_line"></div>
		<div id="write_row1">
		<div class="nickForm">
			<span><strong>닉네임:</strong> <?=$usernick?></span>
		</div>					
	</div>
	<div class="write_line"></div>
	<div class="subject1">
		<strong>제목</strong>
	</div>
	<div class="subject2">
		<input type="text" name="subject" value="<?=$item_subject?>">
	</div>

	<div class="write_line"></div>
	<div id="write_row3">
		<div class="content1">
			<strong>내용</strong>
		</div>
		<?
			if($userid && ($mode != "modify")){ //로그인 및 새글쓰기 일때
		?>
			<div class="htmlCheck">
				<input type="checkbox" name="html_ok" value="y">
				<span>HTML 쓰기</span>
			</div>
		<?
			}
		?>	
		<div class="content2">
		<textarea rows="10" cols="50" name="content"><?=$item_content?></textarea>
		</div>
	</div>

	<div class="write_line"></div>
	<div id="imgBigBox">
		<div class="imgCon">이미지파일1</div>
		<div class="imgBox">
			<input type="file" name="upfile[]">
		</div>
	</div>

	<div class="clear"></div>

<? 	
	if($mode == "modify" && $item_file_0){
?>
	<div class="delete_ok">
		<?=$item_file_0?> 파일이 등록되어 있습니다. 
		<input type="checkbox" name="del_file[]" value="0"> 삭제
	</div>
	<div class="clear"></div>
<?
	}
?>
	<div class="write_line"></div>
	<div id="imgBigBox">
		<div class="imgCon">이미지파일2</div>
		<div class="imgBox">
			<input type="file" name="upfile[]">
		</div>
	</div>
<? 	
	if($mode == "modify" && $item_file_1){
?>
	<div class="delete_ok">
		<?=$item_file_1?> 파일이 등록되어 있습니다. 
		<input type="checkbox" name="del_file[]" value="1"> 삭제
	</div>
	<div class="clear"></div>
<?
	}
?>
	<div class="write_line"></div>
	<div class="clear"></div>
	<div id="imgBigBox">
		<div class="imgCon">이미지파일3</div>
		<div class="imgBox">
			<input type="file" name="upfile[]">
		</div>
	</div>
<? 	
	if($mode == "modify" && $item_file_2){
?>
			<div class="delete_ok">
				<?=$item_file_2?> 파일이 등록되어 있습니다. 
				<input type="checkbox" name="del_file[]" value="2"> 삭제
			</div>
			<div class="clear"></div>
<?
	}
?>
			<div class="write_line"></div>
			<div class="clear"></div>
		</div>

		<? 
			if($userid){
		?>
		<div class="btn_wrap btn_wrap_save2">
            <input type="submit" value="저장">
			<a href="./sub6_1.html?table=<?=$table?>&page=<?=$page?>&scale=<?=$scale ?>">목록</a>
        </div>
		<?
			} else {
		?>
		<div class="btn_wrap btn_wrap_save2">
			<a href="./sub6_1.html?table=<?=$table?>&page=<?=$page?>&scale=<?=$scale ?>">목록</a>
		</div>
		<?
			}
		?>
		</div>
		</form>

	</div> <!-- end of col2 -->
	</div> <!-- end of content -->
</div> <!-- end of wrap -->
<? include "../common/sub_footer.html" ?>
</body>
</html>
