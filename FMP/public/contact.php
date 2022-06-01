<?php
//get data from form  

$name = $_POST['name'];
$email= $_POST['email'];
$message= $_POST['message'];
$phone= $_POST['phone'];
$to = "rehanaziz284@gmail.com";
$subject = "Mail From website";
$txt ="Name = ". $name . "\r\n  Email = " . $email . "\r\n  Phone Number = " . $phone . "\r\n Message =" . $message;
$headers = "From: noreply@eventpartner.com" . "\r\n" .
"CC: somebodyelse@example.com";
if($email!=NULL){
    mail($to,$subject,$txt);
    echo "<script type='text/javascript'>alert('your message send successfully');
    window.history.log(-1);
    </script>";
}
else{
    echo ("please fill all fields");
}

?>