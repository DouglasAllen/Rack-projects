<?php
include("global.inc.php");
$errors=0;
$error="The following errors occured while processing your form input.<ul>";
pt_register('POST','FirstName');
pt_register('POST','LastInitial');
pt_register('POST','PhoneNumber');
pt_register('POST','EmailAddress');
pt_register('POST','CommentsorQuestions');
$CommentsorQuestions=preg_replace("/(\015\012)|(\015)|(\012)/","&nbsp;<br />", $CommentsorQuestions);pt_register('POST','Response');
if($FirstName=="" || $EmailAddress=="" ){
$errors=1;
$error.="<li>You did not enter one or more of the required fields. Please go back and try again.";
}
if($errors==1) echo $error;
else{
$where_form_is="http".($HTTP_SERVER_VARS["HTTPS"]=="on"?"s":"")."://".$SERVER_NAME.strrev(strstr(strrev($PHP_SELF),"/"));
$message="First Name: ".$FirstName."
Last Initial: ".$LastInitial."
Phone Number: ".$PhoneNumber."
Email Address: ".$EmailAddress."
Comments or Questions: ".$CommentsorQuestions."
Response: ".$Response."
";
$message = stripslashes($message);
mail("webservant@aadistrict71.org","Form Submitted at your website",$message,"From: phpFormGenerator");

header("Refresh: 0;url=http://www.aadistrict71.org");
?><?php 
}
?>