<?php
header("Access-Control-Allow-Origin: *"); 

if((isset($_POST['phone'])&&$_POST['phone']!="")){
        $to = 'rudikov-web@ya.ru'; 
        $subject = 'Обращение с сайта test';
        $message = '
                <html>
                    <head>
                        <title>'.$subject.'</title>
                    </head>
                    <body>
                        <p>Название товара: '.$_POST['title'].'</p> 
                        <p>Имя: '.$_POST['name'].'</p>
                        <p>Телефон: '.$_POST['phone'].'</p> 
                        <p>Email: '.$_POST['email'].'</p>                   
                    </body>
                </html>'; 
        $headers  = "Content-type: text/html; charset=utf-8 \r\n";  
        $headers .= "From: Заявка с сайта test <Lisitsayulia@yandex.ru>\r\n";
        if (mail($to, $subject, $message, $headers)) {
            http_response_code(200);
            die();
        } else {
            http_response_code(403);
            die();
        }

}
?>