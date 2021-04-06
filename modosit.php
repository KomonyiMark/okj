<?php

require './ABKapcsolat.php';

parse_str(file_get_contents('php://input'), $adatom);
print_r($adatom);


$mySql = new MySqlDB();
$id = $adatom[ID];
$allapot = $adatom[ALLAPOT];

//$updatestring = "id='" . $id . "',nev='" . $todo . "',tel='" . $datum . "',kep='" . $allapot . "'";
$sor=$adat->fetch_assoc();
$mySql->frissit("okj0329", "ALLAPOT=1", "ID=" . $id);

