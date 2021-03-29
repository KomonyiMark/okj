<?php

require_once './ABKapcsolat.php';

$okj = array();
//okj0329
//0329
    
$MySql = new MySqlDB();
//$adatok = $MySql->lekerdez("lista", "allapot = 0");

$result = $MySql->lekerdez("0329", "allapot = 1");
    
if(isset($result)){
    
    while($adat = mysqli_fetch_assoc($result)){
        array_push($okj, $adat);
        
    }
}
    


echo json_encode($okj);

mysqli_free_result($result);
