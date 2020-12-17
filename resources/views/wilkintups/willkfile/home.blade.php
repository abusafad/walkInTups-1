@include('layouts.header')


{{--start form --}}

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
                        <div id="progress"></div>
                        <h2 id='title' style='text-transform:capitalize;'> Walk-In bathtubs Quote</h2>

                        <p>Enter your zipcode & receive quotes on walk-in bathtubs that meet your therapeutic or recreational needs.</p>

                        <div class="form-group">
                            <div class="input-icon-wrap">
                            <span class="input-icon">
                             <span class="fa fa-map-marker"></span></span>
                                <input type="text" id="zipcode" name="zipcode" maxlength="5" placeholder="Enter your Zip code" required="" aria-required="true" class="form-control input-lg" autofocus
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
                        <div id="progress1"></div>
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
                        <div id="progress2" style="width: 30%"></div>
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
                        <div id="progress3" style="width: 40%"></div>
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
                        <div id="progress4" style="width: 50%"></div>

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
                        <div id="progress6" style="width: 60%"></div>
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
                        <div id="progress7" style="width: 70%"></div>
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
                        <div id="progress8" style></div>
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


<section class="container text-center">
    <div class="fields1">
        <div class="row">
            <h3>Walk-In Tubs Don’t Have to Be So Expensive</h3>
            <p>We know that walk-in tubs are far too often seen as “luxury” items, and that stigma hinders most owners from ever getting approved for a unit by Medicaid/Medicare. However, you can find gems of the highest therapeutic and recreational order - at reasonable costs - that you can compare through our network of walk-in bathtub companies. To get started, follow the 3 steps:</p>

            <div class="col-xs-12 col-md-4">
                <div class="ca">
                    <div class="imgd">
                        <img src="{{ url('images/form.svg') }}" alt="form">

                    </div>

                    <div class="hdr">
                        Complete the form
                    </div>
                    <div class="textd">
                    To match you to the installer with the right catalog of walk-in tubs, select from the customizations (i.e. heater, shower, etc.) provided in the form.
                    </div>
                </div>
            </div>
            <div class="col-xs-12 col-md-4">
                <div class="ca">
                    <div class="imgd">
                        <img src="{{ url('images/match.svg') }}" alt="match">

                    </div>
                    <div class="hdr">
                    Match With an Installer

                    </div>
                    <div class="textd">
                    Local installers will contact you about the right doorway elevation for your mobility, the hydrotherapy features that you seek, and give you estimates.
                    </div>
                </div>
            </div>
            <div class="col-xs-12 col-md-4">
                <div class="ca">
                    <div class="imgd">
                        <img src="{{ url('images/bid.svg') }}" alt="bid">

                    </div>
                    <div class="hdr">
                        Install the tub

                    </div>
                    <div class="textd">
                    Upon your approval to the price and demonstration, the contractor you decide on will install the walk-in bathtub and/or shower with airtight dimensions.
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>



<section class="msec">
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-md-6">

                <img class="img-responsive" src="{{ url('images/bodyimage.jpg') }}" alt = "WalkIn Tubs Shower">

            </div>
            <div class="col-xs-12 col-md-6">
                <div class="midpicdivm">
                    <h2>How Do Walk-In Tubs Not Leak?</h2>
                    <p>Walk-in tubs are installed in the same way as regular bathtubs. The installer fits the tub within the wall enclosure or adds a separator to seal off the edges completely so that no splashing causes a hazard.</p>
                    <p>The door's edge is lined with a watertight sealer that prevents leaking. Now, this may sound counterintuitive just by looking at any of these units, but the seal is built to withstand regular use for many years, and it’s common practice for manufacturers to include a <strong>10-year warranty</strong> on this mechanism alone.</p>
                    <p>The way it works is the faucet stops filling the tub with water at a point lower than the doorway until the door is sealed shut. The door won’t open until the tub is drained which does not take as long as a regular tub because models typically come with a fast drain function, and you’ll be free to exit.</p>
                    <h2>How Much Do Walk-In Tubs Cost?</h2>
                    <p>Walk-in tubs cost anywhere between <strong>$1,300-$20,000</strong> depending on their dimensions, type, customizability, and brand. The intermittent price ranges are threefold and vary by the set of features in the unit:<strong> $1,300-$5,000 </strong>for soakers,<strong> $5,000-$7,000</strong> for hydrotherapy walk-in tubs, and <strong>$10,000</strong> for bariatric models that climb in cost the more multifaceted in features and massage options.</p>
                    <p>The higher cost of walk-in tubs than their traditional counterparts also depends on whether or not your bathroom needs plumbing or electrical modifications like renewing the water heater to one with a higher capacity.
Our partners, however, will give you a highly competitive deal on pre-installation and installation work for your walk-in tub purchase. To start, click the button and customize your soon-to-be walk-in tub.
</p>
                </div>
            </div>
        </div>
        <button class="btn btn-primary btn-block fbt myBtn" id ="myBtn">Get Quotes</button>
    </div>
</section>

<section class="middivs text-center">
    <div class="container">
        <div class="row">

            <h2 class="bold">Find Walk-In Tub Installers Near You</h2>
            <div class="col-xs-12 col-md-4">
                <img src="{{ url('images/affordable-projects.svg') }}" alt="affordable projects">
                <h6 class="bold">Complete the Form</h6>
                <p>Load up on features that cater to your mobility, bariatric, or recreational needs by submitting the form. We ask for your contact information to connect you with installers.</p>
            </div>
            <div class="col-xs-12 col-md-4">
                <img src="{{ url('images/fast-results.svg') }}" alt="fast-results">
                <h6 class="bold">Save Time</h6>
                <p>Without wasting time or making a valiant effort to find a walk-in tub that’s remotely within your budget, get contacted instantly to compare quotes once you fill out the form.</p>
            </div>
            <div class="col-xs-12 col-md-4">
                <img src="{{ url('images/vetted-contractors.svg') }}" alt="vetted-contractors">
                <h6 class="bold">Meet Qualified Pros</h6>
                <p>Our installers go through a screening process before we partner up with them. To uphold our promise of quality, we look for BBB ratings, product reviews, customer testimonials, and relative affordability.</p>
            </div>
            <div class="col-xs-12 col-md-4">

                <img src="{{ url('images/no-obligation.svg') }}" alt="no-obligation">
                <h6 class="bold">Improve Home Equity</h6>
                <p>You can increase home equity by substantiating your already high-end bathroom when purchasing a walk-in shower equipped with multileveled shower heads.</p>
            </div>
            <div class="col-xs-12 col-md-4">

                <img src="{{ url('images/free-quotes.svg') }}" alt="free-quotes">
                <h6 class="bold">Get a Bargain</h6>
                <p>Get one two extra grab bars, a bonus rain showerhead, all within a wider enclosure for the same price of the lacking alternative that you would have gotten elsewhere.</p>
            </div>
            <div class="col-xs-12 col-md-4">

                <img src="{{ url('images/quality-products.svg') }}" alt="quality-products">
                <h6 class="bold">Quality Products</h6>
                <p>In light of any disabilities you may have, your installer will ensure that the unit is accredited with a combination of the UL, IAMPO, ETL, ANSI, or ADA certifications.</p>
            </div>

        </div>

    </div>
</section>


<section class="btsec text-center">
    <div class="fileds22">
        <div class="container">
            <h2>Walk-In Tubs as Seen on TV</h2>
            <p>Safe Step, Ella’s Bubbles, American Standard, Jacuzzi, and Kohler aren’t the only high-end producers of walk-in tubs out there. Our range of installers holds product lines of the same build quality only with a bigger bang for your buck. Click the button below to pair up with a provider near you.</p>
            <button class="btn btn-primary btn-block fbt myBtn" id ="myBtn">Get Quotes</button>
        </div>
    </div>
</section>

<section class="btsec2">
    <div class="container">
        <div class="row">


            <div class="col-xs-12 col-md-12 col-xs-12 col-md-12 text-center">
                <h2>Why Walk-In Tubs Are Worth It?</h2>
            </div>
            <div class="col-xs-12 col-md-6">
                <h3>Undeniably Safer</h3>
                <p>The bathing experience is supposed to be a relaxing affair, but unfortunately, splashes and hazards are unavoidable if the proper precautions such as extra handrails, low-threshold bathtub enclosures, and anti-slip surfaces aren’t accounted for.a little over <strong>83%</strong> of falls happen in bathrooms, and <strong>70%</strong> of those happen in bathtubs, upon entry or exit, or while showering or bathing. </p>
<p>Our muscles atrophy as we get older, so a second look at how the bathroom is organized for mobility is needed. Walk-in tubs instantly turn the bathroom into a safer zone, and especially on to its own. With the ability to add as many grab bars as you’d like and the choice as to the right height of the doorway, you can at least be certain that it’s almost impossible to slip in what is commonly known to be the most hazardous place in the home.</p>
                <h3>Functionality
                </h3>
                <p>Just how fast do walk-in tubs drain, anyway? The answer to that depends on the brand, model, capacity (around <strong>60</strong> gallons or more), water pressure, piping width (with ¾ inches being better than ½ inches), and a strong water pump. Across the board, you’ll find units that drain within the superfast <strong>60-120</strong> seconds range, <strong>2-6</strong> minutes range, <strong>6-10</strong> minutes, and the slowest of them all, <strong>10-15</strong> minutes. Therefore, it’s important to ask your installer to check the plumbing and piping, because if those are compromised, they may hold back the speed and strength at which the water fills and drains, respectively. </p>
<p>Apart from the fact that it prevents a leaking hazard, the seal on the door is very reliable. You’ll only need to wait for the water to drain within the time mentioned before you’re able to open the door for a safe exit.</p>
                <h3>Comfort</h3>
                <p>The door handles, grab bars, seat, backrest, and footrest are mostly ergonomically designed for a comfortable bathing experience. Through research, the therapeutic benefits of soaking alone are proven to enhance blood circulation, reduce blood pressure, purify the skin, ease headaches and anxiety, moisturize the skin, and fight the flu. </p>
    <p>The air massage feature detoxifies the skin from dead cells; calms arthritis, stress, and cramps. Water massage, on the other hand, applies the right pressure to the joints as well as counter the effects of aging for healthier, younger-looking skin.</p>
    <p>The massagers don’t work alone – the heated backrest is there to make you feel right as rain and keep you company as the water drains, so you don’t have to wait in the cold upon exit.</p>
            </div>
            <div class="col-xs-12 col-md-6">

                <img class="img-responsive limg" src="{{ url('images/final-content.png') }}" alt ="WalkIn Tubs HealthCare">

            </div>
        </div>
    </div>
</section>


<section class="lastsec text-center">

    <div class="fields33">
        <div class="container">
            <h2 class="bold hdrr">Therapy Built to Last </h2>
            <p>Ready to embark on a carefree journey designed for your mobility limitations & comfort? You can start by filling out the form to get costs from installers near you.</p>
            <button class="btn btn-primary btn-block fbt myBtn" id ="myBtn">Get Quotes</button>
        </div>
    </div>
</section>

@include('layouts.footer')
