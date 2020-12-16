@include('layouts.header')

<div class="page">
    <form name="leadForm" id="contact" action="{{ route('FormController') }}" method="post">
        {{ csrf_field() }}
        <section class="">
            <div class="container">
                <div class="row">
                    <div class="col-xs-12 col-md-6 text-for-form">
                        <h1 class="main-title">Get Walk-In Tubs & Showers Deals.</h1>
                        <p class="text-font color-w">
                            Get matched with walk-in tub & shower installers with costs that meet your budget.<br>
                            Fill out the form and get quotes from local walk-in tub pros!
                        </p>
                    </div>
                    {{--section 1--}}
                    <div class="col-xs-12 col-md-6 formdiv formcontent">
                        <h2 id='title' style='text-transform:capitalize;'> Walk-In bathtubs Quote</h2>

                        <p>Enter your zipcode & receive quotes on walk-in bathtubs that meet your therapeutic or recreational needs.</p>

                        <div class="form-group">
                            <div class="input-icon-wrap">
                            <span class="input-icon">
                             <span class="fa fa-map-marker"></span></span>
                                <input type="text" id="zipcode" name="zipcode" maxlength="5" placeholder="Enter your Zip code" required="" aria-required="true" class="form-control input-lg"
                                <?php
                                    if (isset (request()->zipcode))
                                    {
                                        $zipcode = request()->zipcode ;
                                        echo "value=$zipcode";
                                    }
                                    ?>
                                >
                            </div>
                            <span class="rfzcode"></span>

                        </div>
                        <button type="submit" id="NextButton" class="btn btn-primary btn-block">Next</button>
                    </div>
                    {{--section 2--}}
                    <div class="col-xs-12 col-md-6 formdivww formcontent2 text-center">
                        <div class="form-group">
                            <h2 id="title">Why Do You Want A Walk-In Tub?</h2>
                            <div class="row radio">
                                <div class="col-12">

                                    <button type="submit" value="1" name="walk_in_tub" id="walk_in_tub1">Safety</button>
                                </div>
                                <div class="col-12">

                                    <button type="submit" value="2" name="walk_in_tub" id="walk_in_tub2">Therapeutic</button>
                                </div>
                                <div class="col-12">

                                    <button type="submit" value="3" name="walk_in_tub" id="walk_in_tub3">Others</button>
                                </div>
                            </div>
                            <input type="hidden" id="walk_in_tub" name="walk_in_tub" value="">
                        </div>
                        <a id="previous1" class="btn btn-secondary col-xs-6 ">Previous</a>
                        {{--<a id="next1" class="btn btn-primary col-xs-6">Next</a>--}}
                    </div>

                    {{--section 3--}}

                    <div class="col-xs-12 col-md-6 formdivwn formcontent3 text-center">
                        <div class="form-group">
                            <h2 class="title2">What Are The Desired Features?</h2>
                            <div class="row">
                                <div class="checkBox2">
                                    <div class="form-group col-xs-12">
                                        <input type="checkbox" name="desired_featuers[]" id="defaultUnchecked1" value="1"/>
                                        <div class="btn-group">
                                            <label for="defaultUnchecked1" class="btn btn-primary">
                                                <span>✔</span>
                                                <span></span>
                                            </label>
                                            <label for="defaultUnchecked1" class="btn btn-default active">
                                                Whirlpool
                                            </label>
                                        </div>
                                    </div>
                                    <div class="form-group col-xs-12">
                                        <input type="checkbox" name="desired_featuers[]" id="defaultUnchecked2" value="2" />
                                        <div class="btn-group">
                                            <label for="defaultUnchecked2" class="btn btn-primary">
                                                <span>✔</span>
                                                <span></span>
                                            </label>
                                            <label for="defaultUnchecked2" class="btn btn-default active">
                                                Quick Water Release
                                            </label>
                                        </div>
                                    </div>
                                    <div class="form-group col-xs-12">
                                        <input type="checkbox" name="desired_featuers[]" id="defaultUnchecked3" value="3" />
                                        <div class="btn-group">
                                            <label for="defaultUnchecked3" class="btn btn-primary">
                                                <span>✔</span>
                                                <span></span>
                                            </label>
                                            <label for="defaultUnchecked3" class="btn btn-default active">
                                                Soaking
                                            </label>
                                        </div>
                                    </div>
                                    <div class="form-group col-xs-12">
                                        <input type="checkbox" name="desired_featuers[]" id="defaultUnchecked4" value="4" />
                                        <div class="btn-group">
                                            <label for="defaultUnchecked4" class="btn btn-primary">
                                                <span>✔</span>
                                                <span></span>
                                            </label>
                                            <label for="defaultUnchecked4" class="btn btn-default active">
                                                Air/Hydro Massager
                                            </label>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                        <button type="submit" id="next2" class="btn btn-primary col-xs-6">Next</button>
                        <a id="previous2" class="btn btn-secondary col-xs-6 ">Previous</a>

                    </div>

                    {{--section 4--}}

                    <div class="col-xs-12 col-md-6 formdivttp formcontent4 text-center">
                        <div class="form-group">
                            <h2 class="ttp">Time to start project?</h2>
                            <div class="row radio">
                                <div class="col-12">

                                    <button type="submit" value="1" name="priority" id="Immediately">Immediately</button>
                                </div>
                                <div class="col-12">

                                    <button type="submit" value="2" name="priority" id="Within_6_months">Within 6 months</button>
                                </div>
                                <div class="col-12">

                                    <button type="submit" value="3" name="priority" id="Not_Sure">Not Sure</button>
                                </div>
                            </div>
                            <input type="hidden" id="priority" name="priority" value="">
                        </div>
                        <a id="previous3" class="btn btn-secondary col-xs-6 ">Previous</a>
                        {{--<a id="next3" class="btn btn-primary col-xs-6">Next</a>--}}
                    </div>
                    {{--section 5--}}
                    <div class="col-xs-12 col-md-6 formdivdoh formcontent5 text-center">
                        <div class="form-group">
                            <h2 class="ownp">Do you own your home?</h2>
                            <div class="row radio">
                                <div class="col-12">

                                    <button type="submit" value="1" name="ownership" id="ownership_1">Yes</button>
                                </div>
                                <div class="col-12">

                                    <button type="submit" value="2" name="ownership" id="ownership_2">No</button>
                                </div>
                                <div class="col-12">

                                    <button type="submit" value="3" name="ownership" id="ownership_3">No, But Authorized to Make Changes</button>
                                </div>
                            </div>
                            <input type="hidden" id="ownership" name="ownership" value="">
                        </div>
                        <a id="previous4" class="btn btn-secondary col-xs-6 ">Previous</a>
                        {{--<a id="next4" class="btn btn-primary col-xs-6">Next</a>--}}
                    </div>
                    {{--section 6--}}
                    <div class="col-xs-12 col-md-6 formdivn formcontent6 text-center">
                        <div class="form-group">
                            <div class="sp">
                                <h2 class="flname">What is your name?</h2>
                                <input type="Text" class="input-lg fname" name="fname" id="fname" minlength="3" placeholder="First Name"/>
                                <div class="validationspan">
                                    <span class="rffname"></span>
                                </div>
                                <input type = "hidden" value = "0" id="fname_form_validation">
                                <input type="Text" class="input-lg lname" name="lname" id="lname" minlength="3" placeholder="Last Name"/>
                                <div class="validationspan">
                                    <span class="rflname"></span>
                                </div>
                                <input type = "hidden" value = "0" id="lname_form_validation">
                            </div>
                            <input type="hidden" id="service_id" name="service_id" value="5">
                            <button type="submit" id="next5" class="btn btn-primary col-xs-6 link-inactive">Next</button>
                            <a id="previous5" class="btn btn-secondary col-xs-12 ">Previous</a>

                        </div>
                    </div>
                    {{--section 7--}}
                    <div class="col-xs-12 col-md-6 formdivtc formcontent7 text-center">
                        <div class="form-group">
                            <h2 class="cif">What’s Your Contact Information?</h2>
                            <h6>We highly respect your privacy</h6>

                            <input type="tel" class="input-lg tel" name="phone_number" id="phone_number" minlength="7" maxlength="10" placeholder="Phone Number">
                            <div class="validationspan">
                                <span class="rfphone"></span>
                            </div>
                            <input type="email" class="input-lg em" name="email" id="email" placeholder="Email">
                            <div class="validationspan">
                                <span class="rfemail"></span>
                            </div>
                            <input type="hidden" value="0" id="phone_form_validation">
                            <input type="hidden" value="0" id="email_form_validation">
                            <!--TCPA-->
                            <label>
                                <p class="lead">By submitting this form, you hereby agree to the <a href="{{ route('privacy-policy') }}" target="_blank">Privacy Policy</a>. You also hereby consent to receive marketing communications via automated telephone dialing system and/or pre-recorded calls, text messages, and/or emails from our <a href="{{ route('our-partners') }}" target="_blank">Premiere Partners and marketing partners</a> at the phone number, physical address and email address provided above, even if you are on any State and/or Federal Do Not Call list. Consent is not a condition of purchase and may be revoked at any time. Message and data rates may apply. <a href="{{ route('privacy-policy') }}" target="_blank">California Residents</a>.</p>
                            </label>
                            <!--TCPA-->
                        </div>
                        <button type="submit" id="next6" class="btn btn-primary col-xs-6 link-inactive">Next</button>
                        <a id="previous6" class="btn btn-secondary col-xs-12 ">Previous</a>

                    </div>
                    {{--section 8--}}
                    <div class="col-xs-12 col-md-6 formdivst formcontent8 text-center">
                        <div class="form-group">
                            <h2 class="stad">Street Address</h2>
                            <h6>We highly respect your privacy</h6>
                            <input type="Text" class="input-lg st street_name" name="street_name" id="street_name" placeholder="St." autocomplete="disabled">
                            <div class="validationspan">
                                <span class="rfstreet"></span>
                            </div>
                            <input type="hidden" class="form-control required" name="city_id" id="city_id_form" required>
                            <input type="hidden" class="form-control required" name="state_id" id="state_id_form" required>
                            <input type="hidden" value="" name="zipcode_id" id="zipcode_id_form" placeholder="Zipcode" required>

                            <h6 id="state_city_labeal" class="text-left">We highly respect your privacy</h6>
                        </div>
                        <input type="submit" id="submitform" class="btn btn-primary col-xs-6" value="Finish">

                        <button class="buttonload btn btn-primary col-xs-6" disabled>
                            <i class="fa fa-refresh fa-spin" id="lodingGf"></i>Loading
                        </button>
                        <a id="previous7" class="btn btn-secondary col-xs-12 ">Previous</a>

                    </div>


                </div>
            </div>
        </section>


    {{--<!--Jornaya Tolken Input-->--}}
    {{--<input id="leadid_token" name="universal_leadid" type="hidden" value=""/>--}}

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
    </form>
</div>


@include('layouts.footer')
