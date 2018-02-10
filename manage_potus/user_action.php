<?php 

/* values */
define("_TABLE_NAME_", "tbl_potus");
//user_action.php

include('database_connection.php');

include('function.php');

if(isset($_POST["crud_action"]))
/* fetch_all */  
{
 if($_POST["crud_action"] == 'fetch_all')
 {
  $query = '';
  
  $output = array();
  
  /* change */
  $order_column = array('username','password', 'address', 'salt','apikey');

  $query .= "SELECT * FROM ";
  $query .= ""._TABLE_NAME_."";
  $query .= " ";

  /* search */  
  if(isset($_POST["search"]["value"]))
  {
  /* change */
  $query .= 'WHERE username LIKE "%'.convert_string('encrypt', $_POST["search"]["value"]).'%" ';
  $query .= 'OR password LIKE "%'.convert_string('encrypt', $_POST["search"]["value"]).'%" ';
  $query .= 'OR address LIKE "%'.convert_string('encrypt', $_POST["search"]["value"]).'%" ';
  $query .= 'OR salt LIKE "%'.convert_string('encrypt', $_POST["search"]["value"]).'%" ';
  $query .= 'OR apikey LIKE "%'.convert_string('encrypt', $_POST["search"]["value"]).'%" ';
  }

  if(isset($_POST["order"]))
  {
   $query .= 'ORDER BY '.$order_column[$_POST['order']['0']['column']].' '.$_POST['order']['0']['dir'].' ';
  }
  else
  {
   $query .= 'ORDER BY id DESC ';
  }

  if($_POST["length"] != -1)
  {
   $query .= 'LIMIT ' . $_POST['start'] . ', ' . $_POST['length'];
  }

  $statement = $connect->prepare($query);
  $statement->execute();
  $result = $statement->fetchAll();
  $filtered_rows = $statement->rowCount();

  foreach($result as $row)
  {
   $sub_array = array();
   
  /* change */
   $sub_array[] = convert_string('decrypt', $row['username']);
   $sub_array[] = convert_string('decrypt', $row['password']);
   $sub_array[] = convert_string('decrypt', $row['address']);
   $sub_array[] = convert_string('decrypt', $row['salt']);
   $sub_array[] = convert_string('decrypt', $row['apikey']);


   $sub_array[] = '<button type="button" name="update" id="'.convert_string('encrypt', $row["id"]).'" class="btn btn-warning btn-xs update">Update</button>';
   $sub_array[] = '<button type="button" name="delete" id="'.convert_string('encrypt', $row["id"]).'" class="btn btn-danger btn-xs delete">Delete</button>';
   $output[] = $sub_array;
  }

  $data = array(
   "draw"    => intval($_POST["draw"]),
   "recordsTotal"  => $filtered_rows,
   "recordsFiltered" => get_total_all_records($connect),
   "data"    => $output
  );
 }

 /* // fetch_all */  

 /* fetch_single */  
 elseif($_POST["crud_action"] == 'fetch_single')
 {
  $id = convert_string('decrypt', $_POST["id"]);
  $query = " SELECT * FROM "._TABLE_NAME_." WHERE id = '$id' ";

  $statement = $connect->prepare($query);
  $statement->execute();
  $result = $statement->fetchAll();
  foreach($result as $row)
  {
    /* change */
   $data['username'] = convert_string('decrypt', $row['username']);
   $data['password'] = convert_string('decrypt', $row['password']);
   $data['address'] = convert_string('decrypt', $row['address']);
   $data['salt'] = convert_string('decrypt', $row['salt']);
   $data['apikey'] = convert_string('decrypt', $row['apikey']);

  }
 }
  /* delete */  
 elseif($_POST["crud_action"] == 'Delete')
 {
  $id = convert_string('decrypt', $_POST["id"]);
  $query = " DELETE FROM "._TABLE_NAME_." WHERE id = '$id' ";
  $statement = $connect->prepare($query);
  $statement->execute();
  $data = array(
   'message'  => '<div class="alert alert-success">User Deleted</div>'
  );
 }
 else
 {
  $message = '';
  $error = '';

  /* change */
  /* --- surface testing */
  $username = '';
  $password = '';
  $address = '';
  $salt = '';
  $apikey = '';

  /* username */
  if(empty($_POST["username"]))
  {
   $error .= '<p class="text-danger">username is Required</p>';
  }
  else
  {
    if (!preg_match("/^[\p{L}\p{N} .-]+$/",$_POST["username"]))

   {
    $error .= '<p class="text-danger">Only Alphabet allowed in username</p>';
   }
   else
   {
    $username = clean_text($_POST["username"]);
   }
  }
  /* password */
  if(empty($_POST["password"]))
  {
   $error .= '<p class="text-danger">password is Required</p>';
  }
  else
  {
    $password = clean_text($_POST["password"]);
  }
/* address */
if(empty($_POST["address"]))
  {
   $error .= '<p class="text-danger">address is Required</p>';
  }
  else
  {
    $address = clean_text($_POST["address"]);
  }
  /* salt */
  if(empty($_POST["salt"]))
  {
   $error .= '<p class="text-danger">salt is Required</p>';
  }
  else
  {
    $salt = clean_text($_POST["salt"]);
  }

  /* apikey */
  if(empty($_POST["apikey"]))
  {
   $error .= '<p class="text-danger">apikey is Required</p>';
  }
  else
  {
    $apikey = clean_text($_POST["apikey"]);
  }
  /* change */
  /* --- deep testing */
  if($error == '')
  {
   /* change */
   $username = convert_string('encrypt', $username);
   $password = convert_string('encrypt', $password);
   $address = convert_string('encrypt', $address);
   $salt = convert_string('encrypt', $salt);
   $apikey = convert_string('encrypt', $apikey);
    
   if($_POST["crud_action"] == "Add")
   {
    $query = " SELECT * FROM "._TABLE_NAME_." WHERE username = '$username' ";
    $statement = $connect->prepare($query);
    $statement->execute();
    $no_of_row = $statement->rowCount();
    if($no_of_row > 0)
    {
     $error = '<div class="alert alert-danger">username Already Exists</div>';
    }
    else
    {
     $query = " INSERT INTO "._TABLE_NAME_." (username, password, address, salt, apikey) VALUES('".$username."', '".$password."', '".$address."', '".$salt."', '".$apikey."') ";
     $message = '<div class="alert alert-success">User Added</div>';
    }
   }
   /* edit */  
   if($_POST["crud_action"] == "Edit")
   {
    $id = convert_string('decrypt', $_POST["id"]);
    
    /* change */
    $query = " UPDATE "._TABLE_NAME_." SET username = '$username', password = '$password', address = '$address', salt = '$salt', apikey = '$apikey'  WHERE id = '$id' ";



    $message = '<div class="alert alert-success">User Edited</div>';
   }
   $statement = $connect->prepare($query);
   $statement->execute();
   $result = $statement->fetchAll();
   if(isset($result))
   {
    $data = array(
     'error'   => $error,
     'message'  => $message
    );
   }
  }
  else
  {
   $data = array(
    'error'   => $error,
    'message'  => $message
   );
   
  }
 }
 echo json_encode($data);
}

?>