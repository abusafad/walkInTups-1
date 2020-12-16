<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/
Route::get('/', 'frontEnd\WilkTupsController@wilkintups')->name('wilkHome');
Route::get('/city/{text}', 'frontEnd\WilkTupsController@FormWilkintups')->name('wilkForm');
Route::get('/generic/{text}', 'frontEnd\WilkTupsController@FormWilkintups')->name('wilkForm');
Route::get('/sitelink/{text}', 'frontEnd\WilkTupsController@FormWilkintups')->name('wilkForm');
Route::get('/brands/{text}', 'frontEnd\WilkTupsController@FormWilkintups')->name('wilkForm');



Route::get('/city', 'frontEnd\WilkTupsController@FormWilkintups')->name('wilkForm');
Route::get('/generic', 'frontEnd\WilkTupsController@FormWilkintups')->name('wilkForm');
Route::get('/sitelink', 'frontEnd\WilkTupsController@FormWilkintups')->name('wilkForm');

Route::get('/brands', 'frontEnd\WilkTupsController@FormWilkintups')->name('wilkForm');


Route::post('/zipCodeFillter', 'frontEnd\ZipCodeFillterController@index')->name('zipCodeFillter');


Route::get('/Thank-You', 'frontEnd\WilkTupsController@thank_you')->name('thank_you_page');

Route::get('/Verified', 'frontEnd\WilkTupsController@verified')->name('FormControllerVerifiedGet');
Route::post('/Verified', 'frontEnd\FormController@verified')->name('FormControllerVerified');
Route::post('/Resend', 'frontEnd\FormController@re_send_verification')->name('re_send_verification');

Route::post('/validationForm', 'frontEnd\validation@index')->name('validationForm');

Route::get('/privacy-policy', 'frontEnd\WilkTupsController@privacypolicy')->name('privacy-policy');

Route::get('/our-partners', 'frontEnd\WilkTupsController@ourpartners')->name('our-partners');

//Route::get('/Terms-And-Conditions', 'frontEnd\WilkTupsController@TermsandConditions')->name('TermsAndConditions');

Route::get('/joinOurNetwork', 'frontEnd\WilkTupsController@joinOurNetwork')->name('joinOurNetwork');

Route::post('/JoinNetwork', 'frontEnd\FormController@JoinNetwork')->name('JoinNetworkForm');
// new code for new save data
Route::post('/saveZipcode', 'frontEnd\SaveData@saveZipCode')->name('saveZipcode');
Route::post('/saveCheckbox', 'frontEnd\SaveData@saveCheckbox')->name('saveCheckbox');
Route::post('/savePhoneEmail', 'frontEnd\SaveData@savePhoneEmail')->name('savePhoneEmail');
Route::post('/saveName', 'frontEnd\SaveData@saveName')->name('saveName');
Route::post('/saveForm', 'frontEnd\FormController@index')->name('FormController');
