<?php

/* values */
define("_TABLE_NAME_", "tbl_potus");

//function.php

function get_total_all_records($connect)
{
 $statement = $connect->prepare('SELECT * FROM '._TABLE_NAME_.'');
 $statement->execute();
 return $statement->rowCount();
}

function clean_text($string)
{
 $string = trim($string);
 $string = stripslashes($string);
 $string = htmlspecialchars($string);
 return $string;
}

function convert_string($action, $string)
{
 $output = '';
 $encrypt_method = "AES-256-CBC";
    $secret_key = 'i7fh3x68dch#jh1ey0s+j9$(h128+(i9g)725*k0grt!'; // 44 characters
    $secret_iv = '8mgo+i40!l-jtr!fb@vb='; // 21 characters
    // hash
    $key = hash('sha256', $secret_key);
 $initialization_vector = substr(hash('sha256', $secret_iv), 0, 16);
 if($string != '')
 {
  if($action == 'encrypt')
  {
   $output = openssl_encrypt($string, $encrypt_method, $key, 0, $initialization_vector);
   $output = base64_encode($output);
  } 
  if($action == 'decrypt') 
  {
   $output = openssl_decrypt(base64_decode($string), $encrypt_method, $key, 0, $initialization_vector);
  }
 }
 return $output;
}

?>