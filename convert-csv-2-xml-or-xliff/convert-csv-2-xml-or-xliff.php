<?php
// CONFIGURATION
/* The source file */
define('SOURCE_EXTENSION', 'csv');


// ---- File output
/* For symfony, do not put full extension, just put what is behind the dot (.) eg .xliff it becomes xliff */
/*
define('TARGET_EXTENSION', 'xliff');
define('TARGET_TEMPLATE', __DIR__.'/template/xliff_sf/template.xml');
define('TARGET_SUB_TEMPLATE', __DIR__.'/template/xliff_sf/transunit.xml');
*/

/* For mobile, do not put full extension, just put what is behind the dot (.) eg .xml it becomes xml */
// define('TARGET_EXTENSION', 'xml');
// define('TARGET_TEMPLATE', __DIR__.'/template/xml_mobile/template.xml');
// define('TARGET_SUB_TEMPLATE', __DIR__.'/template/xml_mobile/transunit.xml');

/* For mobile iOS, do not put full extension, just put what is behind the dot (.) eg .strings it becomes strings */
define('TARGET_EXTENSION', 'strings');
define('TARGET_TEMPLATE', __DIR__.'/template/ios_string_mobile/template.xml');
define('TARGET_SUB_TEMPLATE', __DIR__.'/template/ios_string_mobile/transunit.xml');


// ---- Reading the CSV
define('SOURCE_DELIMITER', ',');
// ---- choose the column for the key
define('SOURCE_KEY_COL', 1);
// ---- choose the column for the value
define('SOURCE_VALUE_COL', 3);


// ---- Other values
define('SOURCE_DIR', __DIR__.'/'.SOURCE_EXTENSION);
define('TARGET_DIR', __DIR__.'/dest');

// FUNCTIONS
function csv2arr($sourceFile, $delimiter) {
    if (($handle = fopen(SOURCE_DIR.'/'.$sourceFile, "r")) !== FALSE) {
        $i = 0; 
        while (($lineArray = fgetcsv($handle, 4000, $delimiter)) !== FALSE) {
            for ($j=0; $j<count($lineArray); $j++) {
                $arr[$i][$j] = $lineArray[$j];
            }
            $i++;
        }
        fclose($handle);
    }
    return $arr;
}

function arr2xml($arr, $sourceFile, $transunitTemplate, $transTemplate) {
    $transunits = array();
    foreach($arr as $line => $data) {
        if ($arr[$line][SOURCE_KEY_COL] == ''/* || $arr[$line][SOURCE_VALUE_COL] == ''*/) {
            continue;
        }
        $subtrans = array(
            '{ID}'      => sha1(uniqid()),
            '{RESNAME}' => $arr[$line][SOURCE_KEY_COL],
            '{KEY}'     => $arr[$line][SOURCE_KEY_COL],
            '{VALUE}'   => $arr[$line][SOURCE_VALUE_COL]
        );
        $S = $T = array();
        foreach($subtrans as $s => $t) {
            $S[] = $s;
            $T[] = $t;
        }
        $transunits[] = str_replace($S, $T, $transunitTemplate);
    }
    $translated = str_replace('{TRANSUNIT}', implode("\n", $transunits), $transTemplate);
    //print_r($translated); die();
    file_put_contents(TARGET_DIR.'/'.pathinfo($sourceFile, PATHINFO_FILENAME).'.'.TARGET_EXTENSION, $translated);
}

function loopSourceDir($sourceFiles) {
    $transunitTemplate = file_get_contents(TARGET_SUB_TEMPLATE);
    $transTemplate = file_get_contents(TARGET_TEMPLATE);
    foreach($sourceFiles as $sourceFile) {
        if (!is_file(SOURCE_DIR.'/'.$sourceFile)) {
            continue;
        }
        $sourceFileExtension = pathinfo(SOURCE_DIR.'/'.$sourceFile, PATHINFO_EXTENSION);
        if ($sourceFileExtension != SOURCE_EXTENSION) {
            continue;
        }
        $arr = csv2arr($sourceFile, SOURCE_DELIMITER);
        arr2xml($arr, $sourceFile, $transunitTemplate, $transTemplate);
    }
}

// EXECUTION
$sourceFiles = scandir(SOURCE_DIR);
loopSourceDir($sourceFiles);

?>