<?php

$date = $_REQUEST["date"];
$loadedChallenge = $_REQUEST["loadedChallenge"];

  $yesterdayInfo = array($date, $loadedChallenge);

echo $yesterdayInfo;

  $dateCheck = fopen("dateAndChallengeData.json", "w");
  fwrite($dateCheck, json_encode($yesterdayInfo));
  fclose($dateCheck);


?>
