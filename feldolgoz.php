<?php

require './MySqlDB.php';

$mySql = new MySqlDB();

$OKJ = array();
$result = $mySql->lekerdez("okj0329");


if ($result->num_rows > 0) {
    // output data of each row
    while ($row = $result->fetch_assoc()) {

        $OKJ[] = $row;
    }
    echo json_encode($OKJ);
} else {
    echo "0 results";
}