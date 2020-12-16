<?php

namespace App\Services;


class MainFunction {

    public function api($url , $data)
    {
        $username = "";
        $password = "";
   // $host    = "http://107.180.24.41/api/" . $url;   /*for testing localhost F*/
   // $host    = "https://127.0.0.1:8000/api/" . $url;   /*for testing localhost T*/
        $host = "https://pro.allieddigitalmedia.com/api/" . $url;      /*on live server*/

        $additionalHeaders = "Basic BASE64";
        $campaign_id = "A1LL20I20ED199";
        $campaign_key = "A1LL20I20ED199dig4ita44lmedi44a";
        $data['campaign_id'] = $campaign_id;
        $data['campaign_key'] = $campaign_key;

        $httpheader = array(
            "cache-control: no-cache",
            "Accept: application/json",
            "content-type: application/json"
        );

        $data_string = json_encode($data);

        $process = curl_init($host);
        curl_setopt($process, CURLOPT_HTTPHEADER,$httpheader );
        curl_setopt($process, CURLOPT_HEADER, 1);
        curl_setopt($process, CURLOPT_USERPWD, $username . ":" . $password);
        curl_setopt($process, CURLOPT_TIMEOUT, 600);
        curl_setopt($process, CURLOPT_POST, 1);
        curl_setopt($process, CURLOPT_POSTFIELDS, $data_string);
        curl_setopt($process, CURLOPT_RETURNTRANSFER, TRUE);
        $return = curl_exec($process);

        $httpcode = curl_getinfo($process, CURLINFO_HTTP_CODE);
        $header_size = curl_getinfo($process, CURLINFO_HEADER_SIZE);
        $header = substr($return, 0, $header_size);
        $response = substr($return, $header_size);
        curl_close($process);
        $jsonArray = json_decode($response, true);
        return $jsonArray;
    }

}
