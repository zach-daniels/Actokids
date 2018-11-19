<?php      
        json_query();
       // load_csv();        
        ?>
<?php 
header("Content-Type: application/json");
        function json_query(){
            try {
                $conn = new PDO("sqlsrv:server = tcp:actotestdb.database.windows.net,1433; Database = acto_test_db", "acto", "B@n1shthem");
                $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
            }
            catch (PDOException $e) {
                print("Error connecting to SQL Server.");
                die(print_r($e));
            }      
            
            if(isset($_GET['city']))
            {
                $city = $_GET['city'];
                $query = "SELECT act_name, act_date, cost, org_name, Activity.org_id, loc_name, loc_address, ZIP, cont_name, pic_url, act_desc, lowest_age, highest_age
                        FROM Activity JOIN Org ON Activity.org_id = Org.org_id
                            JOIN Location ON Activity.location_id = Location.location_id
                            JOIN Contact ON Activity.contact_id = Contact.contact_id
                            JOIN Picture ON Activity.pic_id = Picture.pic_id
                        WHERE city LIKE '$city';";
                $statement = $conn->prepare($query);
                $statement->execute();
                $results = $statement->fetchAll(PDO::FETCH_ASSOC);                   
                $resultz = json_encode($results, JSON_UNESCAPED_SLASHES);
                //var_dump($resultz);
                http_response_code(200);
                echo $resultz;
            }else if(isset($_GET['org_id'])){
                $organizationID = $_GET['org_id'];
                $query = "SELECT org_id, Org.location_id, org_name, url_link, loc_phone, loc_email
                            FROM Org JOIN Location ON Org.location_id = Location.location_id
                                    JOIN urls ON Org.url_id = urls.url_id
                            WHERE org_id = $organizationID";
                $statement = $conn->prepare($query);
                $statement->execute();
                $results = $statement->fetchAll(PDO::FETCH_ASSOC);                   
                $resultz = json_encode($results, JSON_UNESCAPED_SLASHES);
                //var_dump($resultz);
                http_response_code(200);
                echo $resultz;
            }else{
                $query = "SELECT act_name, act_date, cost, org_name, Activity.org_id, loc_name, loc_address, ZIP, cont_name, pic_url, act_desc, lowest_age, highest_age
                FROM Activity JOIN Org ON Activity.org_id = Org.org_id
                JOIN Location ON Activity.location_id = Location.location_id
                JOIN Contact ON Activity.contact_id = Contact.contact_id
                JOIN Picture ON Activity.pic_id = Picture.pic_id";
                $statement = $conn->prepare($query);
                $statement->execute();
                $results = $statement->fetchAll(PDO::FETCH_ASSOC);                   
                $resultz = json_encode($results, JSON_UNESCAPED_SLASHES);
                //var_dump($resultz);
                http_response_code(200);
                echo $resultz;
            }
            
  
        }      
function load_csv(){
    $csvFile = file('actolist.csv');
    $data = [];
    $csv = array_map('str_getcsv', $csvFile);
    $keys = $csv[0];
    /*foreach ($csvFile as $line) {
        $data[] = str_getcsv($line);
    }*/
    
    for ($pointer = 1; $pointer < 49; $pointer++){
        //$data[] = str_getcsv($csvFile[$pointer]);
        $data[$pointer] = array($keys[0]=>$csv[$pointer][0], $keys[1]=>$csv[$pointer][1], 
            $keys[2]=>String2Int($csv[$pointer][2]), $keys[3]=>$csv[$pointer][3], $keys[4]=>String2Int($csv[$pointer][4]));
    }
    //var_dump($data);
    
    try {
        $conn = new PDO("sqlsrv:server = tcp:actotestdb.database.windows.net,1433; Database = acto_test_db", "acto", "B@n1shthem");
        $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    }
    catch (PDOException $e) {
        print("Error connecting to SQL Server.");
        die(print_r($e));
    }
    
    
    for ($pointer = 1; $pointer < 49; $pointer++){
        
        //$url = $data[$pointer]["Website"];
        $org = "DUDE";
        //$phone = $data[$pointer]["Phone Number"];
        //$city = $data[$pointer]["City"];
        //$zip = $data[$pointer]["zip code"];
        //var_dump($data[$pointer]);
            
        foreach($data[$pointer] as $temp=>$temp_value){
            //echo "<br>Key = " . $temp. ", Value= " . $temp_value . " </br>";
            if (strcmp($temp, "Website") != 0 && strcmp($temp, "Phone Number") != 0 &&
                    strcmp($temp, "City") != 0 && strcmp($temp, "zip code") != 0){
                $org = $temp_value;
            }
        }
        
        /*if ($phone == "" && $city == "" && $zip == ""){
            echo "<br> BOGO </br>";
        }else{
            $query = "INSERT INTO Location (loc_phone, city, ZIP) VALUES ('$phone', '$city', '$zip')";
            echo "<br> '$pointer' . '  ' . '$query' </br>";
            
            //$statement = $conn->prepare($query);
            //$statement->execute();
        }*/
        //$query = "INSERT INTO urls (url_link) VALUES ('$url')";
        $query = "INSERT INTO Org (org_name, location_id, url_id) VALUES ('$org', '1','1')";
        echo "<br> '$pointer' . '  ' . '$query' </br>";
        
        //$statement = $conn->prepare($query);
        //$statement->execute();
    }
    
    echo "<h1> Jinzo</h1>";
    
}
function String2Int($String2Int){
    //echo "<br> '$String2Int' </br>";
    $String2Int = (str_replace("-", "", $String2Int));
    $String2Int = (str_replace("(", "", $String2Int));
    $String2Int = (str_replace(")", "", $String2Int));
    $String2Int = (str_replace(" ", "", $String2Int));
    $String2Int = (str_replace(".", "", $String2Int));
    //echo "<br> '$String2Int' </br>";
    //$output = (Int)$String2Int;
    //echo "<br> '$output' </br>";
    return $String2Int;
}

?>