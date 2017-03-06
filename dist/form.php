<?php
//if "email" variable is filled out, send email
  if (isset($_REQUEST['email']))  {
  
  //Email information
  $email = $_REQUEST['email'];
  $send_email = 'javievazq@gmail.com';
  $subject = $_REQUEST['subject'];
  $message = $_REQUEST['message'];
  
  //send email
  mail($send_email, "$subject", $message, "From:" . $email);
  
  //Email response
  echo "Thank you for contacting us!";
  }
  
  //if "email" variable is not filled out, display the form
  else  {
  }
?>