<html>

<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Walk-In Tubs Pros</title>
    <link rel="icon" href="{{ url('/images/WalkInTubs-icon.png') }}">
    @include('include.include_css')
<?php
if (request()->ts == "email" || request()->ts == "Email"|| request()->ts == "Sms" || request()->ts == "sms")
{ ?>
<!-- Google Tag Manager -->
    <script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
                new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
        })(window,document,'script','dataLayer','GTM-PKJNGTP');</script>
    <!-- End Google Tag Manager -->
    <?php
    }
    ?>
</head>

<body>
<?php
if (request()->ts == "email" || request()->ts == "Email"|| request()->ts == "Sms" || request()->ts == "sms")
{ ?>
    <!-- Google Tag Manager (noscript) -->
<noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-PKJNGTP"
height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
<!-- End Google Tag Manager (noscript) -->
<?php
}
?>
@if( !Route::is("thank_you_page") )
    <div id="divPopUp"></div>
@endif
<nav class="navbar">
    <div class="container">
        <div class="row">

            <div class="col-xs-6">
                <a href="{{route('wilkHome')}}">
                <img class="img-responsive LogoImage" src="{{ url('/images/logo.png') }}" alt="Walk-In Tubs Pros">
                </a>
            </div>
            <div class="col-6 pull-right">
                <img class="img-responsive trusted-form" src="{{ url('/images/unnamed.png') }}" alt="trusted form">
            </div>
        </div>
    </div>
</nav>

<div class="modal fade" id="myModal" role="dialog">
    <div class="modal-dialog">

        <!-- Modal content-->
        <div class="modal-content simc">
            <div class="modal-header">
                <h4 class="modal-title text-center mdltitle">Get Your Quote By Filling The Form Below!</h4>
            </div>
            <div class="modal-body mdlbgc">
                <section class="content">
                    <div class="popupheadcont">

                    </div>
                    <form name="popForm" action="{{route('FormController')}}" id="contactpop" method="post">
                        <section class="firstsec">
                            <div class="form-group">

                                <label for="walk_in_tub" id="flabel">Why Do You Want A Walk-In Tub?</label>
                                <select name="walk_in_tub" id="walk_in_tubpop" class="form-control contaforselect1">
                                    <option value="1" id="opti1" selected>Safety</option>
                                    <option value="2" id="opti2">Therapeutic</option>
                                    <option value="3" id="opti3">Others</option>

                                </select>

                            </div>

                            <div class="form-group">
                                <label for="desired_featuers" id="slabel">What Are The Desired Features?</label>
                                    <select name="desired_featuers[]" id="desired_featuerspop" class=" form-control contaforselect2 js-example-basic-multiple" multiple="multiple">

                                    <option value="1" id = "desfea1">Whirlpool</option>
                                    <option value="2" id = "desfea2"> Quick Water Release</option>
                                    <option value="3" id = "desfea3">Soaking</option>
                                    <option value="4" id = "desfea4">Air/Hydro Massager</option>
                                </select>


                            </div>

                            <div class="form-group">
                                <label for="priority" id="tlabel">Time to start project?</label>
                                <select name="priority" id="prioritypop" class="form-control contaforselect3">
                                    <option value="1" id="pronat1" selected>Immediately</option>
                                    <option value="2" id="pronat2">Within 6 months</option>
                                    <option value="3" id="pronat3">Not Sure</option>
                                </select>

                            </div>



                            <div class="form-group">
                                <label for="ownership" id="folabel">Do You Own Your Home?</label>
                                <select name="ownership" id="ownershippop" class="form-control contaforselect4">
                                    <option value="1" id="ownr1" selected>Yes</option>
                                    <option value="2" id="ownr2">No</option>
                                    <option value="3" id="ownr3">No, But Authorized to Make Changes</option>
                                </select>

                            </div>
                        </section>

                        <button type="button" id="continue" class="btn btn-primary btn-block">continue</button>

                        <section class="secondsec">
                            <div class="form-group">

                                <div class="form-group">
                                    <h2 class="fnamehpop">First Name:</h2>
                                    <input type="Text" class="form-control" name="fname" id="fnamepop" minlength="3" placeholder="First Name" />
                                    <span class="fnamespan"></span>
                                    <input type="hidden" value="0" id="fname_validation">
                                </div>
                                <div class="form-group">
                                    <h2 class="lnamehpop">Last Name:</h2>
                                    <input type="Text" class="form-control" name="lname" id="lnamepop" minlength="3" placeholder="Last Name" />
                                    <span class="lnamespan"></span>
                                    <input type="hidden" value="0" id="lname_validation">
                                </div>
                            </div>

                            <div class="form-group">
                                <div class="form-group">
                                    <h2 class="cifpop">Phone Number:</h2>
                                    <input type="tel" class="form-control" name="phone_number" id="phone_numberpop" minlength="7" maxlength="10" placeholder="Phone Number">
                                    <span class="phonenumspan"></span>
                                    <input type="hidden" value="0" id="phone_validation">
                                </div>
                                <div class="form-group">
                                    <h2 class="emailhpop">Email:</h2>
                                    <input type="email" class="form-control" name="email" id="emailpop" placeholder="Email">
                                    <span class="emailspan"></span>
                                    <input type="hidden" value="0" id="email_validation">
                                </div>
                            </div>

                            <div class="form-group">
                                <h2 class="zcodepop">Enter your zipcode:</h2>

                                <input type="text" id="zipcodepop" name="zipcode" maxlength="5" placeholder="Enter your Zip code" required="" aria-required="true" class="form-control">
                                <span class="zipcodespan"></span>
                                <input type="hidden" value="0" id="zipcode_validation">
                            </div>
                            <div class="form-group">
                                <h2 class="stadpop">Street Address</h2>
                                <input type="Text" class="form-control street_name" name="street_name" id="street_namepop" placeholder="St." autocomplete="disabled">
                                <span class="streetspan"></span>
                                <input type="hidden" value="0" id="street_validation">
                            </div>

                            <input type="hidden" class="form-control required" name="city_id" id="city_id" required>
                            <input type="hidden" class="form-control required" name="state_id" id="state_id" required>
                            <input type="hidden" value="" name="zipcode_id" id="zipcode_id" placeholder="Zipcode" required>

                            <div class="form-group">
                                <input type="submit" id="popsubmit" class="btn btn-primary col-xs-12" value="Finish">
                                <button class="buttonloadpop btn btn-primary col-xs-12" disabled>
                                    <i class="fa fa-refresh fa-spin" id="lodingGf"></i>Loading
                                </button>
                            </div>


                            <!--Jornaya Tolken Input-->
                            <input id="leadid_token" class="leadid_tokenPOP" name="universal_leadid" type="hidden" value="" />

                        <?php
                        $FullUrl = Request::fullUrl() ;
                        Session::put('FullUrl', $FullUrl);
                        if (isset (request()->w))
                        {
                            $tc = request()->w ;
                            echo "  <input id='tc' name='tc' type='hidden' value='$tc'/> ";
                        }
                        if (isset (request()->x))
                        {
                            $c = request()->x ;
                            echo "  <input id='c' name='c' type='hidden' value='$c'/> ";
                        }
                        if (isset (request()->y))
                        {
                            $g = request()->y ;
                            echo "  <input id='g' name='g' type='hidden' value='$g'/> ";
                        }
                        if (isset (request()->z))
                        {
                            $k = request()->z ;
                            echo "  <input id='k' name='k' type='hidden' value='$k'/> ";
                        }
                        if (isset (request()->ts))
                        {
                            $tc = request()->ts ;
                            echo "  <input id='tc' name='tc' type='hidden' value='$tc'/> ";
                        }
                        if (isset (request()->c))
                        {
                            $c = request()->c ;
                            echo "  <input id='c' name='c' type='hidden' value='$c'/> ";
                        }
                        if (isset (request()->g))
                        {
                            $g = request()->g ;
                            echo "  <input id='g' name='g' type='hidden' value='$g'/> ";
                        }
                        if (isset (request()->k))
                        {
                            $k = request()->k ;
                            echo "  <input id='k' name='k' type='hidden' value='$k'/> ";
                        }
                        if (isset (request()->visitor_id))
                        {
                            $visitor_id = request()->visitor_id ;
                            echo "  <input id='visitor_id' name='visitor_id' type='hidden' value='$visitor_id'/> ";
                        }
                        if (isset (request()->s))
                        {
                            $visitor_id = request()->s ;
                            echo "  <input id='visitor_id' name='visitor_id' type='hidden' value='$visitor_id'/> ";
                        }
                        if (isset (request()->token))
                        {
                            $token = request()->token ;
                            echo "  <input id='token' name='token' type='hidden' value='$token'/> ";
                        }
                        ?>
                        <!--End Jornaya Tolken Input-->

                        </section>
                        <!--TCPA-->
                        <label class="tcpalabel">
                            <p class="lead">By submitting this form, you hereby agree to the <a href="{{ route('privacy-policy') }}" target="_blank">Privacy Policy</a>. You also hereby consent to receive marketing communications via automated telephone dialing system and/or pre-recorded calls, text messages, and/or emails from our <a href="{{ route('our-partners') }}" target="_blank">“Premiere Partners” and marketing partners</a> at the phone number, physical address and email address provided above, even if you are on any State and/or Federal Do Not Call list. Consent is not a condition of purchase and may be revoked at any time. Message and data rates may apply. <a href="{{ route('privacy-policy') }}" target="_blank">California Residents</a>.</p>
                        </label>
                        <!--TCPA-->
                        <div class="modal-footer">
                            <button type="button" id="backpop" class="btn btn-secondary">Back</button>
                        </div>
                    </form>
                </section>
            </div>

        </div>

    </div>
</div>
