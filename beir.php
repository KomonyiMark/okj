<?php

include './ABKapcsolat.php';

$mySql = new MySqlDB();

$todo = $_POST["todo"];
$datum = $_POST["datum"]; //$_POST["datum"];
$allapot=0;
echo $todo;
print_r($_POST);

$mySql->ujRekord("okj0329", "(TODO,DATUM,ALLAPOT)", "('$todo','$datum','$allapot')");
