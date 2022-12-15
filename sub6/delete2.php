<?
	session_start();

	@extract($_GET); 
	@extract($_POST); 
	@extract($_SESSION);

	// $num이 넘어옴

	include "../lib/dbconn.php"; //DB 접속

	$sql = "delete from greet where num = $num";
	mysql_query($sql);

	mysql_close($connect);

	echo "<script>
			location.href = 'sub6_3.html?page=$page&scale=$scale';
		</script>";
?>