<? 
	session_start(); 

	@extract($_GET);
	@extract($_POST);
	@extract($_SESSION);
	
	include "../lib/dbconn.php";

	$sql = "select * from $table where num=$num";
	$result = mysql_query($sql);

    $row = mysql_fetch_array($result);       
      // 하나의 레코드 가져오기
	
	$item_num = $row[num];
	$item_id = $row[id];
	$item_name = $row[name];
	$item_nick = $row[nick];
	$item_hit = $row[hit];

	$image_name[0] = $row[file_name_0];
	$image_name[1] = $row[file_name_1];
	$image_name[2] = $row[file_name_2];

	$image_copied[0] = $row[file_copied_0];
	$image_copied[1] = $row[file_copied_1];
	$image_copied[2] = $row[file_copied_2];

    $item_date = $row[regist_day];
	$item_subject = str_replace(" ", "&nbsp;", $row[subject]);

	$item_content = $row[content];
	$is_html = $row[is_html];

	if ($is_html != "y"){
		$item_content = str_replace(" ", "&nbsp;", $item_content);
		$item_content = str_replace("\n", "<br>", $item_content);
	}

	if(!$scale){
		$scale = 6;
	}
	
	// 첨부된 이미지 가져오는 for문
	for ($i = 0; $i < 3; $i++){
		if ($image_copied[$i]){ //null이 아니고 값이 있을때
			$imageinfo = GetImageSize("./data/".$image_copied[$i]); //[0] = width / [1] = height / [2] = type 순으로 반환한다.
			$image_width[$i] = $imageinfo[0]; //width
			$image_height[$i] = $imageinfo[1]; //height
			$image_type[$i]  = $imageinfo[2]; //type

			if ($image_width[$i] > 785){
				$image_width[$i] = 785;
			}
		} else { //null일때
			$image_width[$i] = "";
			$image_height[$i] = "";
			$image_type[$i]  = "";
		}
	}

	$new_hit = $item_hit + 1;

	$sql = "update $table set hit=$new_hit where num=$num";   // 글 조회수 증가시킴
	mysql_query($sql);

	$sql = "select * from $ripple where parent=$item_num";
	$result2 = mysql_query($sql, $connect);
	$num_ripple = mysql_num_rows($result2); //parent에 해당하는 레코드 불러오기
?>
<!DOCTYPE html>
<html lang="ko">
  <head>
    <meta charset="UTF-8" >
    <meta http-equiv="X-UA-Compatible" content="IE=edge" >
    <meta name="viewport" content="width=device-width, initial-scale=1.0" >
    <title>홍보센터-뉴스룸</title>
    <link rel="stylesheet" href="../common/css/common.css" >
    <link rel="shortcut icon" href="../common/images/favicon.png" type="image/x-icon" >
    <link rel="stylesheet" href="./common/css/sub6common.css" >
    <link rel="stylesheet" href="./css/sub6_content1.css" >
    <script src="https://kit.fontawesome.com/bc0f1996aa.js" crossorigin="anonymous"></script>
	<script>
		function check_input(){
		if (!document.ripple_form.ripple_content.value){
			alert("내용을 입력하세요!");    
			document.ripple_form.ripple_content.focus();
			return false;
		}
		document.ripple_form.submit();
    	}

		function del(href){
			if(confirm("한번 삭제한 자료는 복구할 방법이 없습니다.\n\n정말 삭제하시겠습니까?")){
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
          <li class="current"><a href="./sub6_1.html">뉴스룸</a></li>
          <li><a href="./sub6_2.html">미디어센터</a></li>
          <li><a href="./sub6_3.html">공지사항</a></li>
          <li><a href="./sub6_4.html">FAQ & 문의하기</a></li>
        </ul>
      </div>

      <article id="content">
        <div class="titleArea">
          <div class="lineMap">
            <span>
				<a href="../index.html">
					<i class="fa-solid fa-house"></i>
			  	</a>
			</span>
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
	if ($num_ripple){
		$rippleCnt = $num_ripple;
	} else {
		$rippleCnt = '';
	}
?>
		<div id="view_title">
			<div id="view_title1">
				<?= $item_subject ?>
			</div>
			<div id="view_title2">
				<?= $item_nick ?>  &nbsp;/ &nbsp;<?=$item_date ?> &nbsp;/ &nbsp;<i style="line-height: 1.5rem;" class="fa-regular fa-comment-dots"></i>&nbsp;&nbsp;<?=$rippleCnt ?> &nbsp;/ &nbsp;<i style="line-height: 1.5rem;" class="fa-regular fa-eye"></i>&nbsp;&nbsp;<?=$item_hit ?> 
			</div>	
		</div>

		<div id="view_content">
			<?= $item_content ?>
		
<?
	for ($i = 0; $i < 3; $i++){
		if ($image_copied[$i]){
			$img_name = $image_copied[$i]; //파일명
			$img_name = "./data/".$img_name; //파일명 앞에 실제경로 붙이기
			$img_width = $image_width[$i]; //크기 확인
			
			echo "<br><br><img src='$img_name' width='$img_width'>";
		}
	}
?>
	</div>

	<!-- 댓글 시작 -->
	<div id="ripple">
<?
	//댓글 처리 코드*
	$sql = "select * from $ripple where parent='$item_num'";
	$ripple_result = mysql_query($sql);

	while($row_ripple = mysql_fetch_array($ripple_result)){ //$row가 아닌 $row_ripple를 사용
	$ripple_num = $row_ripple[num];
	$ripple_id = $row_ripple[id];
	$ripple_nick = $row_ripple[nick];
	$ripple_content = str_replace("\n", "<br>", $row_ripple[content]);
	$ripple_content = str_replace(" ", "&nbsp;", $ripple_content);
	$ripple_date = $row_ripple[regist_day];
?>
	<div id="ripple_writer_title">
		<ul>
			<li id="writer_title1">
				<?=$ripple_nick?>
			</li>
			/
			<li id="writer_title2">
				<?=$ripple_date?>
			</li>
		</ul>
	</div>
	<div id="ripple_content">
		<?=$ripple_content?>
		<div class="contentDel">
		<? 
		if($userid == "admin" || $userid == $ripple_id){ //해당되는 사람만 삭제할 수 있게
		echo "<a href='delete_ripple.php?table=$table&num=$item_num&ripple_num=$ripple_num&ripple=$ripple'>
				[삭제]
			</a>";
		} 
		?>
		</div>
	</div>
<?
	}
?>

<? 
	if($userid){
?>
	<!-- 댓글 작성 form 태그1 -->
	<form name="ripple_form" method="post" action="insert_ripple.php?table=<?=$table?>&num=<?=$item_num?>&ripple=<?=$ripple?>">  
	<div id="ripple_box">
		<div id="ripple_con1">
			<strong>댓글</strong>
		</div>
		<div id="ripple_con2">
			<textarea rows="3" cols="65" name="ripple_content" placeholder="현재 <?=$userid?>으로 로그인 되어 있어 작성 가능합니다."></textarea>
			<a href="#" onclick="check_input()">작성</a>
		</div>
	</div>
	</form>
	</div>
<?
	} elseif(!$userid) {
?>
	<!-- 댓글 작성 form 태그2 -->
	<form name="ripple_form" method="post" action="insert_ripple.php?table=<?=$table?>&num=<?=$item_num?>&ripple=<?=$ripple?>">  
	<div id="ripple_box">
		<div id="ripple_con1">
			<strong>댓글</strong>
		</div>
		<div id="ripple_con2">
			<textarea rows="3" cols="65" name="ripple_content" placeholder="로그인 후 입력하세요."></textarea>
			<a href="#" onclick="check_input()">작성</a>
		</div>
	</div>
	</form>
	</div>
<?
	}
?>
<? 
	if($userid == $item_id || $userid == "admin" || $userlevel == 1){
?>
	<div class="btn_wrap">
    	<a href="write_form3.php?num=<?=$num ?>&page=<?=$page ?>&mode=modify&scale=<?=$scale ?>">수정</a>
    	<a href="javascript:del('delete3.php?num=<?=$num ?>&page=<?=$page ?>&scale=<?=$scale ?>')">삭제</a>
    	<a href="./sub6_1.html?table=<?=$table?>&page=<?=$page?>&scale=<?=$scale ?>">목록</a>
    </div>
<?
	} else {
?>
	<div class="btn_wrap">
    	<a href="./sub6_1.html?table=<?=$table?>&page=<?=$page?>&scale=<?=$scale ?>">목록</a>
    </div>
<?
	}
?>
 </div> <!-- end of content -->
</div> <!-- end of wrap -->
</article>

<? include "../common/sub_footer.html" ?>

</body>
</html>
