<?php

require './ABKapcsolat.php';

parse_str(file_get_contents('php://input'), $adatom);
print_r($adatom);


$mySql = new MySqlDB();
$id = $adatom[ID];
$todo = $adatom[TODO];
$datum = $adatom[DATUM];
$allapot = $adatom[ALLAPOT];

$updatestring = "id='" . $id . "',nev='" . $todo . "',tel='" . $datum . "',kep='" . $allapot . "'";
$mySql->frissit("0329", $updatestring, "ID=" . $id);

