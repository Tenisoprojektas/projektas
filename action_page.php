<?php
/**
 * Created by PhpStorm.
 * User: Vita
 * Date: 12/26/2017
 * Time: 2:10 PM
 */
try {
    $db = new PDO('mysql:host=localhost:3306;dbname=zinutes;charset=utf8mb4', 'root', '');

//    Is kontaktu formos ivedami duomenys i duomenu baze

    $Vardas = $_POST['Vardas'];
    $Pavarde = $_POST['Pavarde'];
    $Telefonas = $_POST['Telefonas'];
    $Elpastas = $_POST['Elpastas'];
    $Lytis = $_POST['Lytis'];
//
    $sql_query = "INSERT INTO `zinutes` (`id`, `Vardas`, `Pavarde`, `Telefonas`, `Elpastas`, `Lytis`) VALUES (NULL, '$Vardas', '$Pavarde', '$Telefonas', '$Elpastas', '$Lytis')";
//
    $result = $db->exec($sql_query);
    $insertId = $db->lastInsertId();
    echo "Sveikiname, esate užregistruotas.";
    echo " Nr: " . $insertId;
    echo "</br>";
    echo "Su jumis susisieksime.";
    echo "</br>";
    echo "</br>";
    echo ' <a href="http://mtenisas.lt/naujienos.html">Grįžti atgal į mūsų svetainę</a>';


    // var_dump(getData($db));


} catch (\PDOException $e) {
    echo "Gavom klaida: " . $e->getMessage();
};

//function getData($db)
//{
//    $query = "SELECT * FROM `zinutes` ";
//    try {
//        $stmt = $db->prepare($query);
//        $stmt->execute();
//        $stmt->setFetchMode(PDO::FETCH_ASSOC);
//        $result = $stmt->fetch();
//    }
//    catch(PDOException $e){
//        echo $e->getMessage();
//    }
//    die( "<br />Result: ".print_r($result) );
//}
