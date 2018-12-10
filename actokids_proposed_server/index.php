<?php      
    header("Content-Type: application/json");
           
    $method = $_SERVER['REQUEST_METHOD'];
    $request = explode("/", substr(@$_SERVER['PATH_INFO'], 1));
    
    //echo "Hello";

    switch ($method) {
      case 'GET':
        //echo "get";
        json_query();  
        break;
    case 'POST':
        //echo "POST";
        submit_info();  
        break;
      default:
        echo "Error has occured."; 
        http_response_code(500);
        break;
    }
        
       // load_csv(); 
        //assembleQuery();
        ?>
<?php 

function connection(){
    try {
        $conn = new PDO("sqlsrv:server = tcp:actotestdb.database.windows.net,1433; Database = acto_test_db", "acto", "B@n1shthem");
        $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    }
    catch (PDOException $e) {
        print("Error connecting to SQL Server.");
        die(print_r($e));
    }
    
    return $conn;
    
}


function submit_info(){
          
    $insert_location_query = "INSERT INTO Location(loc_name, loc_phone, loc_email, loc_address, street, city, zip, state)
                   OUTPUT inserted.location_id
                   VALUES(:loc_name, :loc_phone, :loc_email, :loc_address, :street, :city, :zip, :state)";
    
    $select_location_query = "SELECT location_id
                              FROM Location
                              WHERE loc_name LIKE :loc_name AND street LIKE :street";
    
    $insert_contact_query = "INSERT INTO contact (cont_name, cont_phone, cont_email)
                        OUTPUT inserted.contact_id
                       VALUES(:cont_name, :cont_phone, :cont_email)";
    
    $select_contact_query = "SELECT contact_id
                            FROM Contact 
                            WHERE cont_name LIKE :cont_name AND cont_phone = :cont_phone";
    
    $insert_url_query = "INSERT INTO urls (url_link)
                        OUTPUT inserted.url_id
                        VALUES(:url_link)";
    
    $select_url_query = "SELECT url_id
                        FROM urls
                        WHERE url_link LIKE :url_link";
    
    $org_name = $_REQUEST['org_name'];
    $org_desc = $_REQUEST['org_desc'];
    $url_link = $_REQUEST['url_link'];
            
    $insert_location_bindings = array(":loc_name", ":loc_phone", ":loc_email", 
                    ":loc_address", ":street", ":city", ":zip", ":state");
    
    $insert_location_info = array($_REQUEST['loc_name'], $_REQUEST['loc_phone'],
        $_REQUEST['loc_email'], $_REQUEST['loc_address'], $_REQUEST['street'],
        $_REQUEST['city'], $_REQUEST['zip'], $_REQUEST['state']);
   
    $insert_contact_bindings = array(":cont_name", ":cont_phone", ":cont_email");
    
    $insert_contact_info = array($_REQUEST['cont_name'], $_REQUEST['cont_phone'], 
        $_REQUEST['cont_email']);   
    

    $loc_id = run_insert_query($select_location_query, array(":loc_name", ":street"), array($insert_location_info[0], $insert_location_info[4]), "location_id");
    if($loc_id == null || $loc_id == ""){
        $loc_id = run_insert_query($insert_location_query, $insert_location_bindings, $insert_location_info, "LOCATION_ID");
    }    
    echo $loc_id;
    
    $contact_id = run_insert_query($select_contact_query, array(":cont_name", ":cont_phone"), array($insert_contact_info[0], $insert_contact_info[1]), "contact_id");
    if($contact_id == null || $contact_id == ""){
        $contact_id = run_insert_query($insert_contact_query, $insert_contact_bindings, $insert_contact_info, "contact_id");
    }   
    echo $contact_id;
    
    $url_id = run_insert_query($select_url_query, array(":url_link"), array($url_link), "url_id");
    if($url_id == null || $url_id == ""){
        $url_id = run_insert_query($insert_url_query, array(":url_link"), array($url_link), "url_id");
    }   
    echo $url_id;
    
    $insert_organization_bindings = array(":loc_id", ":org_name", ":url_id", ":org_desc");
    
    $insert_organization_info = array($loc_id, $org_name, $url_id, $org_desc);
    

    
    /*$insert_organization_query = "INSERT INTO Org (location_id, org_name, url_id, org_desc)
                        OUTPUT inserted.org_id
                        VALUES(($select_location_query), :org_name, ($select_url_query), :org_desc)";
    
    $insert_activity_query = "INSERT INTO Activity(location_id, org_id, contact_id, pic_id, url_id, act_name, act_date, cost, act_desc, lowest_age, highest_age, CHILDRATIO, WHEELCHAIRACCESSIBLE, WHEELCHAIRACCESSIBLERESTROOM, duration)
                        OUTPUT inserted.act_id
                        VALUES(($select_location_query), ($select_organization_query), ($select_contact_query), 1, ($select_url_query), :act_name, :act_date, :cost, :act_desc, :lowest_age, :highest_age, :childratio, :wheelchairraccess, :wheelchairrestroom, :duration)";*/
    
    $insert_organization_query = "INSERT INTO Org (location_id, org_name, url_id, org_desc)
                        OUTPUT inserted.org_id
                        VALUES(:loc_id, :org_name, :url_id, :org_desc)";
    
    $select_organization_query = "SELECT org_id
                                  FROM Org JOIN urls ON Org.url_id = urls.url_id
                                  WHERE org_name LIKE :org_name AND url_link LIKE :url_link"; 
    
    $org_id = run_insert_query($select_organization_query, array(":org_name", ":url_link"), array($org_name, $url_link), "org_id");
    if($org_id == null || $org_id == ""){
        $org_id = run_insert_query($insert_organization_query, $insert_organization_bindings, $insert_organization_info, "org_id");
    }   
    echo $org_id;
    
    
    
    $insert_activity_bindings = array(
        ":loc_id", 
        ":org_id", 
        ":contact_id", 
        ":url_id",
        ":act_name", 
        ":act_date", 
        ":cost", 
        ":act_desc", 
        ":lowest_age", 
        ":highest_age", 
        ":childratio",
        ":wheelchairraccess",
        ":wheelchairrestroom",
        ":duration");
    
    $insert_activity_info = array(
        $loc_id, 
        $org_id, 
        $contact_id,
        $url_id,
        $_REQUEST['act_name'], 
        $_REQUEST['act_date'], 
        $_REQUEST['cost'], 
        $_REQUEST['act_desc'], 
        $_REQUEST['lowest_age'], 
        $_REQUEST['highest_age'],
        $_REQUEST['childratio'],
        $_REQUEST['wheelchairraccess'],
        $_REQUEST['wheelchairrestroom'],
        $_REQUEST['duration']);
    
    $insert_activity_query = "INSERT INTO Activity(location_id, org_id, contact_id, pic_id, url_id, act_name, act_date, cost, act_desc, lowest_age, highest_age, CHILDRATIO, WHEELCHAIRACCESSIBLE, WHEELCHAIRACCESSIBLERESTROOM, duration)
                    OUTPUT inserted.act_id
                    VALUES(:loc_id, :org_id, :contact_id, 1, :url_id, :act_name, :act_date, :cost, :act_desc, :lowest_age, :highest_age, :childratio, :wheelchairraccess, :wheelchairrestroom, :duration)";

    $return_id = run_insert_query($insert_activity_query, $insert_activity_bindings, $insert_activity_info, "act_id");
    
    $place_comma = false;
    
    
    $insert_type_query = "INSERT INTO Act_Type (act_id, type_id) VALUES";
    $insert_disability_query = "INSERT INTO Act_Access (act_id, access_id) VALUES";
    
    //echo run_insert_query($select_location_query, array(":loc_name", ":street"), array("Emerald City Gymnastics", "17969 NE 65th Street"), "location_id");
    
    
    if(isset($_REQUEST['Sports'])){
        if($place_comma){
            $insert_type_query = $insert_type_query . ',';
        }
        $insert_type_query = $insert_type_query . "($return_id , 1)";
        $place_comma = true;
    }
    if(isset($_REQUEST['Outdoors & Nature'])){
        if($place_comma){
            $insert_type_query = $insert_type_query . ',';
        }
        $insert_type_query = $insert_type_query . "($return_id , 16)";
        $place_comma = true;
    }
    if(isset($_REQUEST['Music'])){
        if($place_comma){
            $insert_type_query = $insert_type_query . ',';
        }
        $insert_type_query = $insert_type_query . "($return_id , 3)";
        $place_comma = true;
    }
    if(isset($_REQUEST['Zoo'])){
        if($place_comma){
            $insert_type_query = $insert_type_query . ',';
        }
        $insert_type_query = $insert_type_query . "($return_id , 4)";
        $place_comma = true;
    }
    if(isset($_REQUEST['Art'])){
        if($place_comma){
            $insert_type_query = $insert_type_query . ',';
        }
        $insert_type_query = $insert_type_query . "($return_id , 2)";
        $place_comma = true;
    }
    if(isset($_REQUEST['Camp'])){
        if($place_comma){
            $insert_type_query = $insert_type_query . ',';
        }
        $insert_type_query = $insert_type_query . "($return_id , 6)";
        $place_comma = true;
    }
    if(isset($_REQUEST['Museum'])){
        if($place_comma){
            $insert_type_query = $insert_type_query . ',';
        }
        $insert_type_query = $insert_type_query . "($return_id , 5)";
        $place_comma = true;
    }
    if(isset($_REQUEST['ActOthers'])){
        if($place_comma){
            $insert_type_query = $insert_type_query . ',';
        }
        $insert_type_query = $insert_type_query . "($return_id , 15)";
        $place_comma = true;
    }
    
    $place_comma = false;
    
    if(isset($_REQUEST['Cognitive'])){
        if($place_comma){
            $insert_disability_query = $insert_disability_query . ',';
        }
        $insert_disability_query = $insert_disability_query . "($return_id , 1)";
        $place_comma = true;
    }
    if(isset($_REQUEST['Mobility'])){
        if($place_comma){
            $insert_disability_query = $insert_disability_query . ',';
        }
        $insert_disability_query = $insert_disability_query . "($return_id , 2)";
        $place_comma = true;
    }
    if(isset($_REQUEST['Hearing'])){
        if($place_comma){
            $insert_disability_query = $insert_disability_query . ',';
        }
        $insert_disability_query = $insert_disability_query . "($return_id , 3)";
        $place_comma = true;
    }
    if(isset($_REQUEST['Vision'])){
        if($place_comma){
            $insert_disability_query = $insert_disability_query . ',';
        }
        $insert_disability_query = $insert_disability_query . "($return_id , 4)";
        $place_comma = true;
    }
    if(isset($_REQUEST['Sensory'])){
        if($place_comma){
            $insert_disability_query = $insert_disability_query . ',';
        }
        $insert_disability_query = $insert_disability_query . "($return_id , 5)";
        $place_comma = true;
    }
    if(isset($_REQUEST['Other'])){
        if($place_comma){
            $insert_disability_query = $insert_disability_query . ',';
        }
        $insert_disability_query = $insert_disability_query . "($return_id , 6)";
        $place_comma = true;
    }
    
    simple_insert_query($insert_type_query);
    simple_insert_query($insert_disability_query);
    
    http_response_code(200);
 
    //echo $insert_location_info[0];
   
}

function run_insert_query($query, $binding, $info, $return_label){
    $conn = connection();
    $statement = $conn->prepare($query);
    $return_id = null;
    
    //echo($query);
   
    
    for($i = 0; $i < count($binding); $i++){
        //echo($binding[$i] . " -> " . $info[$i] . "<br>");
        $statement->bindValue($binding[$i], $info[$i]);
    }
    try{
        $statement->execute();
        $results = $statement->fetchAll(PDO::FETCH_ASSOC); 
        $return_id = $results[0][$return_label];
    }catch(Exception $e) {
        echo 'Exception -> ';
        var_dump($e->getMessage());
    }
    echo("END");
    $conn = null;
    return $return_id;
}

function check_database($query, $bindings, $params, $return_label){
    $conn = connection();
    $statement = $conn->prepare($query);
    $return_id = null;
    
    for($i = 0; $i < count($binding); $i++){
        //echo($binding[$i] . " -> " . $info[$i] . "<br>");
        $statement->bindValue($binding[$i], $info[$i]);
    }
    
    try{
        $statement->execute();
        $results = $statement->fetchAll(PDO::FETCH_ASSOC); 
        $return_id = $results[0][$return_label];
    }catch(Exception $e) {
        echo 'Exception -> ';
        var_dump($e->getMessage());
    }
    $conn = null;
    return $return_id;
}

function simple_insert_query($query){
    $conn = connection();
    $statement = $conn->prepare($query);

    try{
        $statement->execute();
    }catch(Exception $e) {
        echo 'Exception -> ';
        var_dump($e->getMessage());
    }
    $conn = null;
}


function json_query(){
    try {
        $conn = new PDO("sqlsrv:server = tcp:actotestdb.database.windows.net,1433; Database = acto_test_db", "acto", "B@n1shthem");
        $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    }
    catch (PDOException $e) {
        print("Error connecting to SQL Server.");
        die(print_r($e));
    }   

    if(isset($_GET['org_id'])){
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
    }else if(isset($_GET['act_name'])){
        $act_name = $_GET['act_name'];
        $query = "SELECT act_name, act_date, cost, org_name, Activity.org_id, loc_name, loc_address, ZIP, cont_name, pic_url, act_desc, lowest_age, highest_age, duration
                FROM Activity JOIN Org ON Activity.org_id = Org.org_id
                    JOIN Location ON Activity.location_id = Location.location_id
                    JOIN Contact ON Activity.contact_id = Contact.contact_id
                    JOIN Picture ON Activity.pic_id = Picture.pic_id
                WHERE act_name LIKE '%$act_name%';";
        $statement = $conn->prepare($query);
        $statement->execute();
        $results = $statement->fetchAll(PDO::FETCH_ASSOC);                   
        $resultz = json_encode($results, JSON_UNESCAPED_SLASHES);
        //var_dump($resultz);
        http_response_code(200);
        echo $resultz;
    }else if(isset($_GET['org_name'])){
        $org_name = $_GET['org_name'];
        $query = "SELECT act_name, act_date, cost, org_name, Activity.org_id, loc_name, loc_address, ZIP, cont_name, pic_url, act_desc, lowest_age, highest_age, duration
                    FROM Activity JOIN Org ON Activity.org_id = Org.org_id
                    JOIN Location ON Activity.location_id = Location.location_id
                    JOIN Contact ON Activity.contact_id = Contact.contact_id
                    JOIN Picture ON Activity.pic_id = Picture.pic_id
                    WHERE org_name LIKE '%$org_name%'";
        $statement = $conn->prepare($query);
        $statement->execute();
        $results = $statement->fetchAll(PDO::FETCH_ASSOC);                   
        $resultz = json_encode($results, JSON_UNESCAPED_SLASHES);
        //var_dump($resultz);
        http_response_code(200);
        echo $resultz;
        
    }else if(isset($_GET['act_id'])){
        $act_id = $_GET['act_id'];
        $query = "SELECT access_name
                FROM Activity JOIN Act_Access ON Activity.act_id = Act_Access.act_id
                JOIN Accessibility ON Act_Access.access_id = Accessibility.access_id
                WHERE Activity.act_id = $act_id";
        $statement = $conn->prepare($query);
        $statement->execute();
        $results = $statement->fetchAll(PDO::FETCH_ASSOC);                   
        $resultz = json_encode($results, JSON_UNESCAPED_SLASHES);
        //var_dump($resultz);
        http_response_code(200);
        echo $resultz;
    }else if(isset($_GET['filter'])){

        assembleQuery($conn);

    }else{
        $query = "SELECT act_id, act_desc, act_name, act_date, cost, org_name, org_desc, WHEELCHAIRACCESSIBLE, WHEELCHAIRACCESSIBLERESTROOM, CHILDRATIO, Activity.org_id, loc_name, loc_address, ZIP, cont_name, cont_phone, cont_email, pic_url, act_desc, lowest_age, highest_age, duration
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

function assembleQuery($conn){
    $disabilitysubquery = 'Activity.act_id IN (SELECT Activity.act_id
                                                FROM Activity JOIN Act_Access ON Activity.act_id = Act_Access.act_id
                                                JOIN Accessibility ON Act_Access.access_id = Accessibility.access_id
                                                WHERE';
    
    $typesubquery = 'Activity.act_id IN (SELECT Activity.act_id
                           FROM Activity JOIN Act_Type ON Activity.act_id = Act_Type.act_id
                                         JOIN Type ON Act_Type.type_id = Type.type_id
                           WHERE';
    
                $enabledisabilitysubquery = false;
                $enabletypesubquery = false;

                $city = $_GET['city'];
                $zip = $_GET['zip'];
               
                if(isset($_GET['Cognitive'])){
                    $enabledisabilitysubquery = true;
                    $disabilitysubquery = $disabilitysubquery . " (access_name LIKE 'Cognitive')";
                }
                if(isset($_GET['Mobility'])){
                    if($enabledisabilitysubquery){
                        $disabilitysubquery = $disabilitysubquery . ' OR';
                    }
                    $enabledisabilitysubquery = true;
                    $disabilitysubquery = $disabilitysubquery . " (access_name LIKE 'Mobility')";
                }
                if(isset($_GET['Hearing'])){
                    if($enabledisabilitysubquery){
                        $disabilitysubquery = $disabilitysubquery . ' OR';
                    }
                    $enabledisabilitysubquery = true;
                    $disabilitysubquery = $disabilitysubquery . " (access_name LIKE 'Hearing')";
                }
                if(isset($_GET['Vision'])){
                    if($enabledisabilitysubquery){
                        $disabilitysubquery = $disabilitysubquery . ' OR';
                    }
                    $enabledisabilitysubquery = true;
                    $disabilitysubquery = $disabilitysubquery . " (access_name LIKE 'Vision')";
                }
                if(isset($_GET['Sensory'])){
                    if($enabledisabilitysubquery){
                        $disabilitysubquery = $disabilitysubquery . ' OR';
                    }
                    $enabledisabilitysubquery = true;
                    $disabilitysubquery = $disabilitysubquery . " (access_name LIKE 'Sensory')";
                }
                if(isset($_GET['Others'])){
                    if($enabledisabilitysubquery){
                        $disabilitysubquery = $disabilitysubquery . ' OR';
                    }
                    $enabledisabilitysubquery = true;
                    $disabilitysubquery = $disabilitysubquery . " (access_name LIKE 'Others')";
                }
                
                if(isset($_GET['Sports'])){
                    $enabletypesubquery = true;
                    $typesubquery = $typesubquery . " (type_name LIKE 'Sports')";
                }
                if(isset($_GET['Art'])){
                    if($enabletypesubquery){
                        $typesubquery = $typesubquery . ' OR';
                    }
                    $enabletypesubquery = true;
                    $typesubquery = $typesubquery . " (type_name LIKE 'Art')";
                }
                if(isset($_GET['Music'])){
                    if($enabletypesubquery){
                        $typesubquery = $typesubquery . ' OR';
                    }
                    $enabletypesubquery = true;
                    $typesubquery = $typesubquery . " (type_name LIKE 'Music')";
                }
                if(isset($_GET['Zoo'])){
                    if($enabletypesubquery){
                        $typesubquery = $typesubquery . ' OR';
                    }
                    $enabletypesubquery = true;
                    $typesubquery = $typesubquery . " (type_name LIKE 'Zoo')";
                }
                if(isset($_GET['Museum'])){
                    if($enabletypesubquery){
                        $typesubquery = $typesubquery . ' OR';
                    }
                    $enabletypesubquery = true;
                    $typesubquery = $typesubquery . " (type_name LIKE 'Museum')";
                }
                if(isset($_GET['Camp'])){
                    if($enabletypesubquery){
                        $typesubquery = $typesubquery . ' OR';
                    }
                    $enabletypesubquery = true;
                    $typesubquery = $typesubquery . " (type_name LIKE 'Camp')";
                }
                if(isset($_GET['TypeOthers'])){
                    if($enabletypesubquery){
                        $typesubquery = $typesubquery . ' OR';
                    }
                    $enabletypesubquery = true;
                    $typesubquery = $typesubquery . " (type_name LIKE 'Others')";
                }
                if(isset($_GET['Outdoors'])){
                    if($enabletypesubquery){
                        $typesubquery = $typesubquery . ' OR';
                    }
                    $enabletypesubquery = true;
                    $typesubquery = $typesubquery . " (type_name LIKE 'Outdoors & Nature')";
                }
                
                
                $query = "SELECT act_id, act_desc, act_name, act_date, cost, org_name, org_desc, WHEELCHAIRACCESSIBLE, WHEELCHAIRACCESSIBLERESTROOM, CHILDRATIO, Activity.org_id, loc_name, loc_address, ZIP, cont_name, cont_phone, cont_email, pic_url, act_desc, lowest_age, highest_age, duration
                            FROM Activity JOIN Org ON Activity.org_id = Org.org_id
                            JOIN Location ON Activity.location_id = Location.location_id
                            JOIN Contact ON Activity.contact_id = Contact.contact_id
                            JOIN Picture ON Activity.pic_id = Picture.pic_id
                            WHERE city LIKE '%$city%' AND ZIP LIKE '%$zip%'"; 
                if($enabledisabilitysubquery){
                    $query = $query . 'AND (' . $disabilitysubquery . '))';
                }
                if($enabletypesubquery){
                    $query = $query . 'AND (' . $typesubquery . '))';
                }
                
                $statement = $conn->prepare($query);
                $statement->execute();
                $results = $statement->fetchAll(PDO::FETCH_ASSOC);                   
                $resultz = json_encode($results, JSON_UNESCAPED_SLASHES);
                //var_dump($resultz);
                http_response_code(200);
                echo $resultz;
}

?>