<?
   session_start();

   @extract($_GET);
	@extract($_POST);
	@extract($_SESSION);

   // $table, $num이 넘어왔음
   
   include "../lib/dbconn.php";

   $sql = "select * from $table where num = $num";
   $result = mysql_query($sql, $connect);

   $row = mysql_fetch_array($result);

   $copied_name[0] = $row[file_copied_0];
   $copied_name[1] = $row[file_copied_1];
   $copied_name[2] = $row[file_copied_2];

   for ($i = 0; $i < 3; $i++){
		if ($copied_name[$i]){
			$image_name = "./data/".$copied_name[$i];
			unlink($image_name);
	   }
   }

   $sql = "delete from $table where num = $num";
   mysql_query($sql);

   //게시글 삭제 시 댓글까지 지우기 위함
   $sql2 = "delete from concert_ripple where parent = $num";
   mysql_query($sql2);

   mysql_close($connect);

   echo "
         <script>
         location.href = 'view3.php?table=$table';
         </script>
	      ";
?>