<?php

namespace App\Http\Controllers\frontEnd;

use App\Http\Controllers\Controller;
use App\Services\NeutrinoAPI;
use Illuminate\Http\Request;

class validation extends Controller
{

    public function index(Request $request){
        $this->validate($request, [
            'type' => ['required'],
            'content',
            'phoneNumber',
            'email'
        ]);
            if( isset($request['type']) ) {
                if ($request['type'] == '1') {
                    $content = '';
                    if (isset($request['content'])) {
                        $content = $request['content'];
                    }
                    $neutrinoAPI = new NeutrinoAPI();
                    $data = $neutrinoAPI->badWordFilter($content);
                    $response = 1;
                    if (isset($data['is-bad'])) {
                        if ($data['is-bad'] == 1) {
                            $response = 2;
                        }
                    }
                    if (isset($data['bad-words-total'])) {
                        if ($data['bad-words-total'] >= 1) {
                            $response = 2;
                        }
                    }
                    echo $response;
                } else if ($_POST['type'] == '2') {
                    $phoneNumber = '';
                    if (isset($request['phoneNumber'])) {
                        $phoneNumber = $request['phoneNumber'];
                    }
                    $neutrinoAPI = new NeutrinoAPI();
                    $data_phone = $neutrinoAPI->phoneValidate($phoneNumber);
                    $response = 1;
                    if (isset($data_phone['valid'])) {
                        if ($data_phone['valid'] != true) {
                            $response = 2;
                        }
                    }
                    return $response;
                    die();
                }
            }
    }

}
