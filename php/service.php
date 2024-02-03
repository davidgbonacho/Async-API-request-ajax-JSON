<?php

/**
 * PHP as a service
 * @author Tizedit - David G. bonacho
 */

// retreive params (they come as JSON)
$json_data = file_get_contents("php://input");
$params = json_decode($json_data, true);

// your code here

// your response
$response = $params;

// convert to JSON
$encoded = json_encode($response, JSON_PRETTY_PRINT); // , JSON_FORCE_OBJECT   , JSON_PRETTY_PRINT
header('Content-type: application/json');

exit($encoded);
