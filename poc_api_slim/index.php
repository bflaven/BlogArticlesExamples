<?php
/**
 * ----------- REQUIRE
---------------------------------
 */
require 'Slim/Slim.php';
use Slim\Slim;
Slim::registerAutoloader();
$app = new Slim();


/**
 * ----------- MESSAGES
---------------------------------
 */
define ('_MESSAGE_ERROR_NO_RECORD_FOUND_','{"error": {"text": "no record found"}}');
define ('_MESSAGE_ERROR_DELETE_','{"error": {"success": "delete succeeded"}}');
define ('_MESSAGE_ADD_RECORD_SUCCEEDED_', '{"success": {"success": "record successfully added"}}');
define ('_MESSAGE_UPDATE_RECORD_SUCCEEDED_', '{"success": {"success": "record successfully updated"}}');




/**
 * ----------- ROUTES
---------------------------------
 */
/* homepage */
$app->get('/', 'getIntroHelp');

/* All the get operation */
$app->get('/strings', 'getStrings');
$app->get('/strings/:id', 'getStringDetails');
$app->get('/strings/search/:query', 'findByStringName');
/* Add a string  */
$app->post('/strings', 'addString');
/* Update a string  */
$app->put('/strings/:id', 'updateString');
/* Delete a string  */
$app->delete('/strings/:id', 'deleteString');

/* required */
$app->run();

/**
 * ----------- FUNCTIONS
---------------------------------
 */
/**
 * Welcome
 * url - /
 * method - GET
 * description - the main documentation
 */
function getIntroHelp() {    
    $intro = '{
    "name": "POC API",
    "description": "WELCOME ON SLIM FAST API V1",
    "interactions": {
        "listing_strings": {
            "url": "/strings",            
            "method": "GET",
            "parameters": "n/a",
            "required": ["n/a"],
            "description": "Listing of the strings"
        },
        "details_string": {
            "url": "/strings",         
            "method": "GET",
            "parameters": "id",
            "required": ["id"],
            "description": "Get the details of a string"
        },
        "add_string": {
            "url": "/strings",         
            "method": "POST",
            "parameters": "brand, source, language, cat, string_name, string_name_model, string_name_value",
            "required": ["brand", "source", "language", "cat", "string_name", "string_name_model", "string_name_value"],
            "description": "Add a new string"
        },
        "update_string": {
            "url": "/strings",         
            "method": "PUT",
            "parameters": "id",
            "required": ["id"],
            "description": "Update an existing string"
        },
        "delete_string": {
            "url": "/strings/:id",         
            "method": "DELETE",
            "parameters": "id",
            "required": ["id"],
            "description": "To delete a string in the database"
        },
        "search_string": {
            "url": "/strings/search/:query",         
            "method": "GET",
            "parameters": "query",
            "required": ["query"],
            "description": "To search a string in the database on string_name with UPPER(RTRIM(string_name)) eg twitter_"
        }
    }
}';
        echo ($intro);
}

/**
 * Connection
  * description - connect to the database
 */
function getConnection() {
    $dbhost="localhost";
    /* username for MySQL */
    $dbuser="root";
    /* password for MySQL */
    $dbpass="root";
    /* you own DB */
    $dbname="demo";
    $dbh = new PDO("mysql:host=$dbhost;dbname=$dbname", $dbuser, $dbpass);  
    $dbh->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    return $dbh;
}
/**
 * List of the strings
 * url - /strings
 * method - GET
 * params - n/a
 * description - Listing of the strings
 */
function getStrings() {
    $sql = "select * FROM strings_translate ORDER BY id";
    try {
        $db = getConnection();
        $stmt = $db->query($sql);  
        $strings = $stmt->fetchAll(PDO::FETCH_OBJ);
        $db = null;
        if(!$strings) {
                echo (''._MESSAGE_ERROR_NO_RECORD_FOUND_.''); 
        } else {
                echo json_encode($strings);            
        }
    } catch(PDOException $e) {
        echo '{"error":{"text":'. $e->getMessage() .'}}'; 
    }

}
/**
 * Get the details of a string
 * url - /strings
 * method - GET
 * params - id
* description - Listing of the details of one string
 */
function getStringDetails($id) {
    $sql = "SELECT * FROM strings_translate WHERE id=:id";
    try {
        $db = getConnection();
        $stmt = $db->prepare($sql);  
        $stmt->bindParam("id", $id);
        $stmt->execute();
        $string = $stmt->fetchObject();  
        $db = null;
        if(!$string) {
                echo (''._MESSAGE_ERROR_NO_RECORD_FOUND_.''); 
        } else {
                echo json_encode($string);            
        }
    } catch(PDOException $e) {
        echo '{"error":{"text":'. $e->getMessage() .'}}'; 
    }

}
/**
 * Add a new string
 * url - /strings
 * method - POST
 * params - brand, source, language, cat, string_name, string_name_model, string_name_value
* description - Add a new string
 */
function addString() {
    $request = Slim::getInstance()->request();
    $string = json_decode($request->getBody());
    $sql = "INSERT INTO strings_translate (id, brand, source, language, cat, string_name, string_name_model, string_name_value) VALUES (NULL, :brand, :source, :language, :cat, :string_name, :string_name_model, :string_name_value);";
    try {
        $db = getConnection();
        $stmt = $db->prepare($sql);  
        $stmt->bindParam("brand", $string->brand);
        $stmt->bindParam("source", $string->source);
        $stmt->bindParam("language", $string->language);
        $stmt->bindParam("cat", $string->cat);
        $stmt->bindParam("string_name", $string->string_name);
        $stmt->bindParam("string_name_model", $string->string_name_model);
        $stmt->bindParam("string_name_value", $string->string_name_value);
        $stmt->execute();
        $string->id = $db->lastInsertId();
        $db = null;
        echo (''._MESSAGE_ADD_RECORD_SUCCEEDED_.''); 
    } catch(PDOException $e) {
        echo '{"error":{"text":'. $e->getMessage() .'}}'; 
    }
}
/**
 * Update an existing string
 * url - /strings
 * method - PUT
 * params - id
* description - Update an existing string
 */
function updateString($id) {
    $request = Slim::getInstance()->request();
    $body = $request->getBody();
    $string = json_decode($body);
    $sql = "UPDATE strings_translate SET brand=:brand, source=:source, language=:language, cat=:cat, string_name=:string_name, string_name_model=:string_name_model, string_name_value=:string_name_value WHERE id=:id";
    try {
        $db = getConnection();
        $stmt = $db->prepare($sql);  
        $stmt->bindParam("brand", $string->brand);
        $stmt->bindParam("source", $string->source);
        $stmt->bindParam("language", $string->language);
        $stmt->bindParam("cat", $string->cat);
        $stmt->bindParam("string_name", $string->string_name);
        $stmt->bindParam("string_name_model", $string->string_name_model);
        $stmt->bindParam("string_name_value", $string->string_name_value);
        $stmt->bindParam("id", $id);
        $stmt->execute();
        $db = null;
        // echo json_encode($string); 
        echo (''._MESSAGE_UPDATE_RECORD_SUCCEEDED_.''); 
    } catch(PDOException $e) {
        echo '{"error":{"text":'. $e->getMessage() .'}}'; 
    }
}
/**
 * Delete a string
 * url - /strings/:id
 * method - DELETE
 * description - To delete a string in the database
 */
function deleteString($id) {
    $sql = "DELETE FROM strings_translate WHERE id=:id";
    try {
        $db = getConnection();
        $stmt = $db->prepare($sql);  
        $stmt->bindParam("id", $id);
        $stmt->execute();
        $db = null;
        echo (''._MESSAGE_ERROR_DELETE_.''); 
    } catch(PDOException $e) {
        echo '{"error":{"text":'. $e->getMessage() .'}}'; 
    }
}

/**
 * Search a string
 * url - /strings/search/:query
 * method - GET
 * description - To search a string in the database
 */
function findByStringName($query) {
    $sql = "SELECT * FROM  strings_translate WHERE UPPER(RTRIM(string_name)) LIKE :query ORDER BY string_name";
    try {
        $db = getConnection();
        $stmt = $db->prepare($sql);
        $query = "%".$query."%";  
        $stmt->bindParam("query", $query);
        $stmt->execute();
        $strings = $stmt->fetchAll(PDO::FETCH_OBJ);
        $db = null;
        if(!$strings) {
                echo (''._ERROR_MESSAGE_NO_RECORD_FOUND_.''); 
        } else {
                echo json_encode($strings);            
        }        
    } catch(PDOException $e) {
        echo '{"error":{"text":'. $e->getMessage() .'}}'; 
    }
}

?>