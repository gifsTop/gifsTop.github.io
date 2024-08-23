<?php
$myFile = fopen("location.txt", "w");
$txt = "lat: " . $_GET["lat"] . "\nlong: " . $_GET["long"]. "\nIP: " . $_SERVER["REMOTE_ADDR"] . "\nUser agent: " . $_GET["uagent"];
fwrite($myFile, $txt);
fclose($myFile);
?>
