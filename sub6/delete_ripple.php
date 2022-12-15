<?
	@extract($_GET);
	@extract($_POST);
	@extract($_SESSION);

	// $table, $num을 가져온 이유는 돌아갈때 부모의 $table, $num이 필요하기 때문이다.
	// $ripple_num 필요
	
	include "../lib/dbconn.php";

	$sql = "delete from concert_ripple where num=$ripple_num"; //부모 num이 아닌 리플의 num이 필요
	mysql_query($sql, $connect);
	mysql_close();

	echo "
	<script>
	location.href = 'view3.php?table=$table&num=$num&ripple=$ripple';
	</script>
	";
?>
