<?php
// Файлы phpmailer
require 'class.phpmailer.php';
require 'class.smtp.php';

$name = $_POST['client-name'];
$number = $_POST['client-tel'];
$orderNumber = microtime(true)*100;

// Настройки
$mail = new PHPMailer;

$mail->CharSet = 'utf-8';
$mail->isSMTP(); 
$mail->Host = 'smtp.yandex.ua';  
$mail->SMTPAuth = true;                      
$mail->Username = 'Kvim.group'; // Ваш логин в Яндексе. Именно логин, без @yandex.ru
$mail->Password = 'Qwer1212'; // Ваш пароль
$mail->SMTPSecure = 'ssl';                            
$mail->Port = 465;
$mail->setFrom('Kvim.group@yandex.ua'); // Ваш Email
$mail->addAddress('Kvim.group@yandex.ua'); // Email получателя

// Прикрепление файлов
  for ($ct = 0; $ct < count($_FILES['userfile']['tmp_name']); $ct++) {
        $uploadfile = tempnam(sys_get_temp_dir(), sha1($_FILES['userfile']['name'][$ct]));
        $filename = $_FILES['userfile']['name'][$ct];
        if (move_uploaded_file($_FILES['userfile']['tmp_name'][$ct], $uploadfile)) {
            $mail->addAttachment($uploadfile, $filename);
        } else {
            $msg .= 'Failed to move file to ' . $uploadfile;
        }
    }   
                                 
// Письмо
$mail->isHTML(true); 
$mail->Subject = "Заявка с сайта 'Летающая фея' №$orderNumber"; // Заголовок письма
$mail->Body    = "Имя клиента: $name  <br> Телефон клиента: $number  <br>  Номер заказа: $orderNumber"; // Текст письма

// Результат
if(!$mail->send()) {
    echo 'Message could not be sent.';
    echo 'Mailer Error: ' . $mail->ErrorInfo;
} else {
    echo 'ok';
}
?>