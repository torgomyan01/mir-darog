<?php

$areaForLaying = $_POST['areaForLaying'];
$baseType = $_POST['baseType'];
$name = $_POST['name'];
$number = $_POST['phone'];
$email = 'and.torgomyan01@gmail.com';

if(!isset($areaForLaying) && !isset($baseType) && !isset($name) && !isset($number)){
  echo 0;
} else {
  $to = "contanct@rimplitka.ru"; // Stacox
  $subject = "КАЛЬКУЛЯТОР"; // TITLE
  $headers = "From: ".$email."\r\n";
  $headers .= "Reply-To: ".$email."\r\n";
  $headers .= "Content-type: text/html\r\n";
  $message = "<html><body>";
  $message .= "<h3>КАЛЬКУЛЯТОР</h3>";
  $message .= "<p><b>Площадь для укладки (м2)</b>".$areaForLaying."</p>";
  $message .= "<p><b>Тип основания:</b>".$baseType."</p>";
  $message .= "<p><b>Ваше имя:</b>".$name."</p>";
  $message .= "<p><b>Ваше телефон:</b>".$number."</p>";
  $message .= "</body></html>";

  $mail = mail($to, $subject, $message, $headers);

  if($mail){
    echo 1;
  } else{
    echo 2;
  }
}