<?php
/* Set e-mail recipient */
$myemail = "cameronzaas@gmail.com";
$name = $_POST['name'];
$phone = $_POST['phone'];
$email = $_POST['email'];
$message = $_POST['message'];
$subject = "Visitor at TestaPainting.com messaged you.";
/* Let's prepare the message for the e-mail */
$message = "
Name: $name
E-mail: $email
Phone: $phone
Message:
$message
";
/* Send the message using mail() function */
mail($myemail, $subject, $message);
/* Redirect visitor to the thank you page */
header('Location: thankyou.php');
exit();
?>