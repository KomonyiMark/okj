<?php

include './ABKapcsolat.php';

$mySql = new MySqlDB();

$todo = $_GET["todo"];
$datum = $_GET["datum"]; //$_POST["datum"];
$allapot=0;
echo $todo;
print_r($_GET);

$mySql->ujRekord("okj0329", "(TODO,DATUM,ALLAPOT)", "('$todo','$datum','$allapot')");
