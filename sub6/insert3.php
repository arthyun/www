<? 
	session_start(); 

	@extract($_GET);
	@extract($_POST);
	@extract($_SESSION);

	$table = "concert";
?>

<meta charset="utf-8">

<?
	if(!$userid){
		echo "<script>
				window.alert('로그인 후 이용해 주세요.');
				history.go(-1);
			</script>";
		exit;
	}

	$regist_day = date("Y-m-d (H:i)");  // 현재의 '년-월-일-시-분'을 저장
	/* 단일 파일 업로드 
	$upfile_name = $_FILES["upfile"]["name"]; //첨부된 원본 파일명
	$upfile_tmp_name = $_FILES["upfile"]["tmp_name"]; //첨부된 파일의 임시파일명
	$upfile_type = $_FILES["upfile"]["type"]; //첨부파일의 종류
	$upfile_size = $_FILES["upfile"]["size"]; //첨부파일의 용량(너비아님)
	$upfile_error = $_FILES["upfile"]["error"]; //에러 - true/false가 리턴 된다
	*/

	// 다중 파일 업로드 - 현재 3개 첨부
	$files = $_FILES["upfile"]; //배열로 리턴
	$count = count($files["name"]); //$_FILES[][] 형식으로 만들기 위함 = 3;

	$upload_dir = './data/';

	for($i = 0; $i < $count; $i++)	{
		$upfile_name[$i] = $files["name"][$i]; //$_FILES[][][] 이런 형식이 된 것
		$upfile_tmp_name[$i] = $files["tmp_name"][$i]; //확장자가 .tmp
		$upfile_type[$i] = $files["type"][$i]; //image/jpeg, image/pjpeg
		$upfile_size[$i] = $files["size"][$i]; //파일 용량 - 단위 byte
		$upfile_error[$i] = $files["error"][$i]; //true냐 false냐

		$file = explode(".", $upfile_name[$i]); //split과 같은 기능
		$file_name = $file[0]; //'dog1'
		$file_ext  = $file[1]; //'jpg'

		if (!$upfile_error[$i])	{ //true라면! - 첨부가 잘 됐다면
			$new_file_name = date("Y_m_d_H_i_s"); //2022_11_21_11_21_50
			$new_file_name = $new_file_name."_".$i; //2022_11_21_11_21_50_0
			$copied_file_name[$i] = $new_file_name.".".$file_ext; //2022_11_21_11_21_50_0.jpg
			$uploaded_file[$i] = $upload_dir.$copied_file_name[$i]; //'./data/2022_11_21_11_21_50_0.jpg'

			if($upfile_size[$i] > 500000){ //용량 체크 - 500kb(500000byte)
				echo "<script>
						alert('업로드 파일 크기가 지정된 용량(500KB)을 초과합니다!<br>파일 크기를 체크해주세요! ');
						history.go(-1)
					</script>";
				exit;
			}
			if(($upfile_type[$i] != "image/gif") &&
			   ($upfile_type[$i] != "image/jpeg") &&
			   ($upfile_type[$i] != "image/pjpeg") &&
			   ($upfile_type[$i] != "image/png") &&
			   ($upfile_type[$i] != "image/x-png")){
				echo "<script>
						alert('JPG와 GIF 이미지 파일만 업로드 가능합니다!');
						history.go(-1);
					</script>";
				exit;
			}
			// 파일을 업로드 시켜주는 메소드 move_uploaded_file(pc에 있는 임시파일, 저장될 실제 경로) -> true/false
			if(!move_uploaded_file($upfile_tmp_name[$i], $uploaded_file[$i])){ //실패 시
				echo "<script>
						alert('파일을 지정한 디렉토리에 복사하는데 실패했습니다.');
						history.go(-1);
					</script>";
				exit;
			}
		}
	}

	include "../lib/dbconn.php"; //DB 접속

	//수정 모드
	if($mode == "modify"){
		$num_checked = count($_POST['del_file']); //삭제할 배열 갯수 구하기 - 3
		$position = $_POST['del_file']; //체크한 value 값만 넘어옴

		for($i = 0; $i < $num_checked; $i++){ //delete checked item
			$index = $position[$i]; //[0],[1],[2] 가 순서대로 넘어감
			$del_ok[$index] = "y"; //del_ok 배열 생성 후 각각 "y"를 담아줌
		}

		$sql = "select * from $table where num=$num";   //get target record
		$result = mysql_query($sql);

		$row = mysql_fetch_array($result);
		for($i = 0; $i < $count; $i++){ //update DB with the value of file input box
			$field_org_name = "file_name_".$i; //file_name_0
			$field_real_name = "file_copied_".$i; //file_copied_0
			$org_name_value = $upfile_name[$i]; //첨부한 실제 파일명
			$org_real_value = $copied_file_name[$i]; //data에 들어가있는 파일명

			if($del_ok[$i] == "y") { //삭제하기위해 체크된 아이들
				$delete_field = "file_copied_".$i; //file_copied_0
				$delete_name = $row[$delete_field]; //$row[file_copied_0]
				$delete_path = "./data/".$delete_name; //'./data/22_11_21_13_13_59_0.jpg'
				unlink($delete_path); //해제한다!

				$sql = "update $table set $field_org_name = '$org_name_value', $field_real_name = '$org_real_value' where num=$num";
				mysql_query($sql);  //$sql에 저장된 명령 실행
			} else {    //삭제를 체크하지 않았을때
				if(!$upfile_error[$i])	{
					$sql = "update $table set $field_org_name = '$org_name_value', $field_real_name = '$org_real_value' where num=$num";
					mysql_query($sql);  //$sql에 저장된 명령 실행					
				}
			}
		}
		$subject = htmlspecialchars($subject);
		$content = htmlspecialchars($content);
		$subject = str_replace("'", "&#039;", $subject);
		$content = str_replace("'", "&#039;", $content);
		
		$sql = "update $table set subject='$subject', content='$content' where num=$num";
		mysql_query($sql);  // $sql 에 저장된 명령 실행
	} else {
		if ($html_ok=="y") {
			$is_html = "y";
		} else {
			$is_html = "";
		}
		$subject = htmlspecialchars($subject);
		$content = htmlspecialchars($content);
		$subject = str_replace("'", "&#039;", $subject);
		$content = str_replace("'", "&#039;", $content);

		$sql = "insert into $table (id, name, nick, subject, content, regist_day, hit, is_html, ";
		$sql .= " file_name_0, file_name_1, file_name_2, file_copied_0,  file_copied_1, file_copied_2) ";
		$sql .= "values('$userid', '$username', '$usernick', '$subject', '$content', '$regist_day', 0, '$is_html', ";
		$sql .= "'$upfile_name[0]', '$upfile_name[1]', '$upfile_name[2]', '$copied_file_name[0]', '$copied_file_name[1]','$copied_file_name[2]')";
		mysql_query($sql);  // $sql 에 저장된 명령 실행
	}

	mysql_close($connect); // DB 연결끊기

	echo "<script>
			location.href = './sub6_1.html?&page=$page&scale=$scale';
		</script>";
?>