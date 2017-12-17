<?php header('Content-Type: text/html; charset=utf-8'); ?>
<head>
    <title>launch_phpcli_parse_and_insert</title>
    
</head>

<body>
<?php
/* To take the json files */
$files = array(
'dump_generated_1.json',
'dump_generated_2.json',
'dump_generated_3.json'
);
        /* Values */
        define(_FILE_LAUNCH_,'parse_and_insert.php');
        define(_BRAND_NAME_,'FAKER_INC_1');
        
                echo ('<textarea rows="20" cols="200">');
                
                for ($i=0;$i<count($files); $i++) {
 				/* MODEL php launch_phpcli_parse_and_insert.php dump_generated_1.json FAKER_INC_1 */
                echo ('php ');
                echo (''._FILE_LAUNCH_.' '.$files[$i].' '._BRAND_NAME_.'');
                 echo "\n\n";
                 /* In bash script a separator */
                echo ('echo "$STRING_SEP"');
                echo "\n\n";

        }//EOL

                echo ('</textarea>');

?>