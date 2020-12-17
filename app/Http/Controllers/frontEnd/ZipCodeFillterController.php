<?php

namespace App\Http\Controllers\frontEnd;

use App\Http\Controllers\Controller;
use App\Services\MainFunction;
use Illuminate\Http\Request;

class ZipCodeFillterController extends Controller
{
    public function index(Request $request)
    {
        $this->validate($request, [
            'zipcode' => ['required']
        ]);


        $zipcode = $request['zipcode'];

        $data = array(
                'zipcode' => $zipcode
        );

        $api = new MainFunction();
        $result = $api->api("rest/addressDetails", $data);
        $address = array();
        if (isset($result['address'])) {
            $address = $result['address'];
        }

        return $address;

    }
}
