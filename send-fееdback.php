<?php

$name = $_POST['name'];
$number = $_POST['phone'];
$email = 'and.torgomyan01@gmail.com';

if(!isset($areaForLaying) && !isset($baseType) && !isset($name) && !isset($number)){
  echo 0;
} else {
  $to = "contanct@rimplitka.ru"; // Stacox
  $subject = "Обратный звонок"; // TITLE
  $headers = "From: ".$email."\r\n";
  $headers .= "Reply-To: ".$email."\r\n";
  $headers .= "Content-type: text/html\r\n";
  $message = "<html><body>";
  $message .= "<h3>Обратный звонок</h3>";
  $message .= "<p><b>Имя: </b>".$name."</p>";
  $message .= "<p><b>Ваше телефон: </b>".$number."</p>";
  $message .= "</body></html>";

  $mail = mail($to, $subject, $message, $headers);

  if($mail){
    echo 1;
  } else{
    echo 2;
  }
}