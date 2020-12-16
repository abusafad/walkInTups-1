<?php

namespace App\Http\Controllers\frontEnd;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Session;

class WilkTupsController extends Controller
{
    public function wilkintups($text='')
    {
        $traffic_source= '';
        if (isset($_SERVER['HTTP_REFERER'])) {
            $traffic_source = $_SERVER['HTTP_REFERER'];
        }
        Session::put(['wilkintups-estimate-traffic_source'], $traffic_source);
        Session::put(['wilkintups-estimate-TimeInWindo'], $_SERVER['REQUEST_TIME']);
        Session::put(['wilkintups-estimate-FullDomainUrl'], "https://" . $_SERVER['SERVER_NAME'] . $_SERVER['PHP_SELF']);

        return view('wilkintups.willkfile.home')->with('text', $text);
    }

    public function FormWilkintups($text='')
    {
        $traffic_source= '';
        if (isset($_SERVER['HTTP_REFERER'])) {
            $traffic_source = $_SERVER['HTTP_REFERER'];
        }
        Session::put(['wilkintups-estimate-traffic_source'], $traffic_source);
        Session::put(['wilkintups-estimate-TimeInWindo'], $_SERVER['REQUEST_TIME']);
        Session::put(['wilkintups-estimate-FullDomainUrl'], "https://" . $_SERVER['SERVER_NAME'] . $_SERVER['PHP_SELF']);

        return view('wilkintups.willkfile.form')->with('text', $text);
    }

    public function privacypolicy()
    {
        $traffic_source= '';
        if (isset($_SERVER['HTTP_REFERER'])) {
            $traffic_source = $_SERVER['HTTP_REFERER'];
        }
        Session::put(['wilkintups-estimate-traffic_source'], $traffic_source);
        Session::put(['wilkintups-estimate-TimeInWindo'], $_SERVER['REQUEST_TIME']);
        Session::put(['wilkintups-estimate-FullDomainUrl'], "https://" . $_SERVER['SERVER_NAME'] . $_SERVER['PHP_SELF']);

        return view('wilkintups.willkfile.privacypolicy');
    }
    public function ourpartners()
    {
        $traffic_source= '';
        if (isset($_SERVER['HTTP_REFERER'])) {
            $traffic_source = $_SERVER['HTTP_REFERER'];
        }
        Session::put(['wilkintups-estimate-traffic_source'], $traffic_source);
        Session::put(['wilkintups-estimate-TimeInWindo'], $_SERVER['REQUEST_TIME']);
        Session::put(['wilkintups-estimate-FullDomainUrl'], "https://" . $_SERVER['SERVER_NAME'] . $_SERVER['PHP_SELF']);

        return view('wilkintups.willkfile.ourpartners');
    }

    public function joinOurNetwork()
    {
        $traffic_source= '';
        if (isset($_SERVER['HTTP_REFERER'])) {
            $traffic_source = $_SERVER['HTTP_REFERER'];
        }
        Session::put(['wilkintups-estimate-traffic_source'], $traffic_source);
        Session::put(['wilkintups-estimate-TimeInWindo'], $_SERVER['REQUEST_TIME']);
        Session::put(['wilkintups-estimate-FullDomainUrl'], "https://" . $_SERVER['SERVER_NAME'] . $_SERVER['PHP_SELF']);

        return view('wilkintups.willkfile.joinOurNetwork');
    }
    public function TermsandConditions()
    {
        $traffic_source= '';
        if (isset($_SERVER['HTTP_REFERER'])) {
            $traffic_source = $_SERVER['HTTP_REFERER'];
        }
        Session::put(['wilkintups-estimate-traffic_source'], $traffic_source);
        Session::put(['wilkintups-estimate-TimeInWindo'], $_SERVER['REQUEST_TIME']);
        Session::put(['wilkintups-estimate-FullDomainUrl'], "https://" . $_SERVER['SERVER_NAME'] . $_SERVER['PHP_SELF']);

        return view('wilkintups.willkfile.termsAndConditions');
    }

    public function Verified()
    {
        $phone = session()->get( 'phone' );
        $visitor_id = session()->get( 'visitor_id' );
        $success = session()->get( 'success' );
        $error = session()->get( 'error' );
        return view('wilkintups.willkfile.verified', compact('phone', 'visitor_id', 'success', 'error'));
    }
    
     public function thank_you(){
        return view('wilkintups.willkfile.thankyou');
    }
}
