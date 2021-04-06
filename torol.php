<?php

require './ABKapcsolat.php';


if (isset($_GET["ID"])) {
    $mySql = new MySqlDB();
    $id=$_GET['ID'];
    $mySql->torol("okj0329","ID=".$id);
}