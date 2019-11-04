<?php

$date = $_REQUEST["date"];
$loadedChallenge = $_REQUEST["loadedChallenge"];

echo $date;
echo $loadedChallenge;

trial();

function trial() {

echo "trial accessed";

$dateCheck = fopen("newtest.txt", "w");

$yesterdayDate = "insert json template wit h v alues here";
echo $yesterdayDate;
fwrite($dateCheck, $yesterdayDate);
flose($dateCheck);
};

?>
