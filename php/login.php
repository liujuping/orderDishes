<?php
$staff = array
	(
		array("username"=>"1052228950", "password"=>"1052228950"),
		array("username"=>"105222895", "password"=>"105222895")
	);

$username = $_POST["username"];
$password = $_POST["password"];
if(!$username){
  echo '{"success":false,"message":"用户名不能为空"}';
  return;
}
if(!$password){
  echo '{"success":false,"message":"密码不能为空"}';
  return;
}
foreach ($staff as $value) {
  if($username==$value["username"]){
       if($value["password"]  == $password){
         echo '{"success":true}';
         return;
       }
       else{
            echo '{"success":false,"message":"密码错误"}';
            return;
        }
   }
}
echo '{"success":false,"message":"该用户名不存在"}';

?>