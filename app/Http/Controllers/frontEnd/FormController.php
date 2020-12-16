<?php

namespace App\Http\Controllers\frontEnd;

use App\Http\Controllers\Controller;
use App\Services\MainFunction;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Facades\Session;
use Twilio\Rest\Client;

class FormController extends Controller
{
    public function index(Request $request)
    {

        $box = $request->all();
        $myValue=  array();
        parse_str($box['data'], $myValue);

        ini_set('max_execution_time', '0');
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
        $desired_featuers = json_encode($request['desired_featuers']);
        $aboutUserBrowser = $_SERVER['HTTP_USER_AGENT'];
        $lead_website = 'thewindowsestimate';


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

        $data = array(
            'serverDomain' => $serverDomain,
            'timeInBrowseData' => $timeInBrowseData,
            'ipaddress' => $ipaddress,
            'FullUrl' => $FullUrl,
            'browser_name' => $browser_name,
            'aboutUserBrowser' => $aboutUserBrowser,
            'lead_website' => $lead_website,
            'traffic_source' => Session::get('Home-Solar-traffic_source'),
            "fname" => $myValue['fname'],
            "lname" => $myValue['lname'],
            "phone_number" => $myValue['phone_number'],
            "email"  => $myValue['email'],
            "street_name"=> $myValue['street_name'],
            "city_id" => $myValue['city_id'],
            "state_id" => $myValue['state_id'],
            "zipcode_id" => $myValue['zipcode_id'],
            "service_id" => "5",
            'desired_featuers' => json_encode($myValue['desired_featuers']),
            'walk_in_tub' => $myValue['walk_in_tub'],
            'ownership' => $myValue['ownership'],
            'priority' => $myValue['priority'],
            'trusted_form' => $myValue['xxTrustedFormToken'],
            'universal_leadid' => $request['universal_leadid'],
            'tc' => $tc,
            'c'  => $c,
            'g'  => $g,
            'k'  => $k,
            'token' => $token,
            'visitor_id' => $visitor_id,
        );

        $api = new MainFunction();
        $result = $api->api("rest/addLeadCustomer", $data);
        Session::flush();


    }

    public function  JoinNetwork(Request $request)
    {
        $this->validate($request, [
            'businessName' => ['required'],
            'howToHelp' => ['required'],
            'contractorName' => ['required'],
            'jobTitle' => ['required'],
            'phoneNumber' => ['required'],
            'contractorEmail' => ['required'],
            'contractorServices' => ['required'],
        ]);



        $businessName = $request['businessName'];
        $howToHelp = $request['howToHelp'];
        $contractorName = $request['contractorName'];
        $jobTitle = $request['jobTitle'];
        $phoneNumber = $request['phoneNumber'];
        $contractorEmail = $request['contractorEmail'];
        $contractorServices = $request['contractorServices'];


        $data = [
            'contractorName' =>$businessName,
            'businessName'=>$howToHelp,
            'jobTitle' =>$contractorName,
            'phoneNumber'=>$jobTitle,
            'contractorEmail' =>$phoneNumber,
            'contractorServices'=>$contractorEmail,
            'howToHelp'=>$contractorServices

        ];

        print_r($data); die();

        Mail::send(['text'=>'Mail.name'],$data, function($message)  {
            $message->to('info@allieddigitalmedia.com')->subject('join our network');
            $message->from(config('mail.from.address', ''),config('mail.from.name', ''));
        });
        $text = '';
        return view('window.windowsestimate.home')->with('text', $text);;
    }

}
