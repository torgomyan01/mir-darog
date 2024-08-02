<?php

$name = $_POST['name'];
$tel = $_POST['phone'];
$mess = $_POST['message'];
$type = $_POST['type'];



if(isset($name) && isset($tel) && isset($type)){
  $to = "contanct@mir-darog.ru"; // Stacox
  $subject = "Обратная связь"; // TITLE
  $headers = "From: torgomyan97@mail.ru\r\n";
  $headers .= "Reply-To: torgomyan97@mail.ru\r\n";
  $headers .= "Content-type: text/html\r\n";
  $message = "<html><body>";
  $message .= "<h3>".$type."</h3>";
  $message .= "<p><b>Имя:</b> ".$name."</p>";
  $message .= "<p><b>Номер телефона:</b> ".$tel."</p>";
  $message .= "<p><b>Сообщение:</b> ".$mess."</p>";
  $message .= "</body></html>";

  if (mail($to, $subject, $message, $headers)) {
      echo 1;
  } else {
      echo 0;
  }

} else{
  echo 2;
}

?>