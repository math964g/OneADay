<?php

$myFile = "data.json";
$arr_data = array(); // create empty array

try {

if (file_put_contents($myFile, $jsondata)) {
        echo 'Data successfully saved';
    }

   else
        echo "error";
}


 ?>
