<?php

require './ABKapcsolat.php';


if ($_SERVER['REQUEST_METHOD'] === "DELETE") {


    $mySql = new MySqlDB();
    $id = $_GET['id'];
    $mySql->torol("okj0329", "ID=" . $id);
    
}