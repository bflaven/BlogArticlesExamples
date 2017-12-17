<?php header('Content-Type: text/html; charset=utf-8'); ?>
<?php

/* values */
$path_file = $argv[1]; // the path to the json file
$brand = $argv[2]; // the specific brand


/* DB */
$databasehost = "127.0.0.1";
$databasename = "mojoinc_backup_all";
$databasetable = "mojoinc_users";
$databaseusername ="root";
$databasepassword = "root";


try {
        $conn = new PDO ('mysql:host='.$databasehost.';dbname='.$databasename.';charset=utf8', ''.$databaseusername.'', ''.$databasepassword.'');
        $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
        $json =file_get_contents(''.$path_file.'');
        $json_array = (array)(json_decode($json));
        // var_dump($json_array);
        for ($i=0;$i<(count($json_array['results']));$i++){//BOL
            $sql = 'INSERT INTO mojoinc_users (ID, user_email, user_uuid, user_clientId, user_clientId_id, user_clientId_brand) VALUES (\'\', \''.addslashes(trim($json_array['results'][$i]->email)).'\', \''.addslashes(trim($json_array['results'][$i]->uuid)).'\', \''.addslashes(trim($json_array['results'][$i]->mojoinc->properties->managedBy[0]->clientId)).'\', \''.addslashes(trim($json_array['results'][$i]->mojoinc->properties->managedBy[0]->id)).'\', \''.addslashes(trim($brand)).'\');';

                /* INJECT INTO THE DB */
                $conn->exec($sql);

            }//EOL

            echo "\n\n";
                echo "--- LAUNCH ---";
                echo "\n\n";

                    echo "\t";
                    echo "--- path_file -> ".$path_file." ---";
                    echo "\n";
                    echo "\t";
                    echo "--- brand -> ".$brand." ---";

                echo "\n\n";
                echo "--- DONE ---";
                echo "\n\n"; 
    }

    catch(PDOException $e) {
    echo "\n\n";
    echo  $e->getMessage();
    echo "\n\n";
    }

$conn = null;


?>