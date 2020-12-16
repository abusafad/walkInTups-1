<?php

namespace App\Http\Controllers\frontEnd;

use App\Http\Controllers\Controller;
use App\Services\MainFunction;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Session;

class SaveData extends Controller
{
    public function saveZipCode(Request $request)
    {
        $box = $request->all();
        $myValue=  array();
        parse_str($box['data'], $myValue);

        if(!isset($myValue['tc']))
        {
            $tc = "";
        } else {
            $tc = $myValue['tc'];
        }

        if(!isset($myValue['c']))
        {
            $c = "";
        } else {
            $c = $myValue['c'];
        }

        if(!isset($myValue['g']))
        {
            $g = "";
        } else {
            $g = $myValue['g'];
        }

        if(!isset($myValue['k']))
        {
            $k = "";
        } else {
            $k = $myValue['k'];
        }

        if(!isset($myValue['token']))
        {
            $token = "";
        } else {
            $token = $myValue['token'];
        }

        if(!isset($myValue['visitor_id']))
        {
            $visitor_id = "";
        } else {
            $visitor_id = $myValue['visitor_id'];
        }

        $serverDomain = $_SERVER['SERVER_NAME'];

        $timeInBrowseData = $_SERVER['REQUEST_TIME'] - Session::get('Home-Solar-TimeInWindo');
        $ipaddress = '';
        if (getenv('HTTP_CLIENT_IP'))
            $ipaddress = getenv('HTTP_CLIENT_IP');
        else if(getenv('HTTP_X_FORWARDED_FOR'))
            $ipaddress = getenv('HTTP_X_FORWARDED_FOR');
        else if(getenv('HTTP_X_FORWARDED'))
            $ipaddress = getenv('HTTP_X_FORWARDED');
        else if(getenv('HTTP_FORWARDED_FOR'))
            $ipaddress = getenv('HTTP_FORWARDED_FOR');
        else if(getenv('HTTP_FORWARDED'))
            $ipaddress = getenv('HTTP_FORWARDED');
        else if(getenv('REMOTE_ADDR'))
            $ipaddress = getenv('REMOTE_ADDR');
        else
            $ipaddress = 'UNKNOWN';


        $FullUrl = Session::get('FullUrl');

        $browser_name = '';
        if(strpos($_SERVER['HTTP_USER_AGENT'], 'MSIE') !== FALSE)
            $browser_name = 'Internet explorer';
        elseif(strpos($_SERVER['HTTP_USER_AGENT'], 'Trident') !== FALSE) //For Supporting IE 11
            $browser_name =  'Internet explorer';
        elseif(strpos($_SERVER['HTTP_USER_AGENT'], 'Firefox') !== FALSE)
            $browser_name =  'Mozilla Firefox';
        elseif(strpos($_SERVER['HTTP_USER_AGENT'], 'Chrome') !== FALSE)
            $browser_name =  'Google Chrome';
        elseif(strpos($_SERVER['HTTP_USER_AGENT'], 'Opera Mini') !== FALSE)
            $browser_name =  "Opera Mini";
        elseif(strpos($_SERVER['HTTP_USER_AGENT'], 'Opera') !== FALSE)
            $browser_name =  "Opera";
        elseif(strpos($_SERVER['HTTP_USER_AGENT'], 'Safari') !== FALSE)
            $browser_name =  "Safari";
        else
            $browser_name =  'Something else';

        $aboutUserBrowser = $_SERVER['HTTP_USER_AGENT'];
        $lead_website = 'thewalkintubspros';

        $data = array(
            'serverDomain' => $serverDomain,
            'timeInBrowseData' => $timeInBrowseData,
            'ipaddress' => $ipaddress,
            'FullUrl' => $FullUrl,
            'browser_name' => $browser_name,
            'aboutUserBrowser' => $aboutUserBrowser,
            'lead_website' => $lead_website,
            'traffic_source' => Session::get('Home-Solar-traffic_source'),
            'zipcode_id' => $myValue['zipcode_id'],
            'state_id'=>$myValue['state_id'],
            'city_id'=>$myValue['city_id'],
            'universal_leadid' => $request['universal_leadid'],
            'tc' => $tc,
            'c'  => $c,
            'g'  => $g,
            'k'  => $k,
            'token' => $token,
            'visitor_id' => $visitor_id,
        );

        $api = new MainFunction();
        $result = $api->api("rest/savezipcode", $data);

        print_r($result); die();
        Session::flush();
    }


    public function saveName(Request $request)
    {
        $box = $request->all();
        $myValue=  array();
        parse_str($box['data'], $myValue);
        $timeInBrowseData = $_SERVER['REQUEST_TIME'] - Session::get('Home-Solar-TimeInWindo');
        $desired_featuers = json_encode($request['desired_featuers']);
        $data = array(

            "fname" => $myValue['fname'],
            "lname" => $myValue['lname'],
            "service_id" => '5',
            'timeInBrowseData' => $timeInBrowseData,
            'desired_featuers' => json_encode($myValue['desired_featuers']),
            'walk_in_tub' => $myValue['walk_in_tub'],
            'ownership' => $myValue['ownership'],
            'priority' => $myValue['priority'],
            'universal_leadid' => $request['universal_leadid'],
            'xxTrustedFormCertUrl' => $myValue['xxTrustedFormCertUrl']
        );

        $api = new MainFunction();
        $result = $api->api("rest/savename", $data);

        print_r($result); die();
        Session::flush();
    }



    public function savePhoneEmail(Request $request)
    {
        $this->validate($request, [
            'Phone' => ['required'],
            'Email' => ['required'],
            'Jornaya' => ['required']
        ]);

        $Phone = $request['Phone'];
        $Email = $request['Email'];
        $Jornaya = $request['Jornaya'];
        $timeInBrowseData = $_SERVER['REQUEST_TIME'] - Session::get('Home-Solar-TimeInWindo');
        $data = array(
            'phone_number' => $Phone,
            'email' => $Email,
            'universal_leadid' => $Jornaya,
            'timeInBrowseData' => $timeInBrowseData,
        );

         $api = new MainFunction();
        $result = $api->api("rest/savephoneemail", $data);

        print_r($result); die();
        Session::flush();

    }



}




