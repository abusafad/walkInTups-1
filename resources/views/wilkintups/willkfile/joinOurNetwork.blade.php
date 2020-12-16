@include('layouts.header')

<section class="hero no-bg pt-xs-40 pb-xs-40">
    <div class="container w-80">
        <div class="form-wrapper pl-xs-5 pr-xs-5 pt-xs-0 pb-xs-0">
            <div class="row join-us">
                <div class="col-xs-12 col-sm-12 col-md-12">

                    <h3>Kindly fill in the below:</h3>
                    <hr>

                    <form class="new_contractor" action="{{ route('JoinNetworkForm') }}"  method="post">
                        {{ csrf_field() }}
                        <div class="form-group">
                            <label for="businessName">Business name</label>
                            <input class="form-control" placeholder="Business name" type="text" name="businessName" id="businessName" required>
                        </div>
                        <div class="form-group textarea-group">
                            <label for="howToHelp">How can we help you?</label>
                            <textarea class="form-control" rows="7" cols="40" name="howToHelp" id="howToHelp"></textarea>
                        </div>
                        <div class="form-group">
                            <label for="contractorName">Your Name</label>
                            <input class="form-control" placeholder="Your name" type="text" name="contractorName" id="contractorName" required>
                        </div>
                        <div class="form-group">
                            <label for="jobTitle">Job Title</label>
                            <input class="form-control" placeholder="Job title" type="text" name="jobTitle" id="jobTitle" required>
                        </div>
                        <div class="form-group">
                            <label for="phoneNumber">Phone</label>
                            <input class="form-control" type="tel" name="phoneNumber" id="phoneNumber" required>
                        </div>
                        <div class="form-group">
                            <label for="contractorEmail">Email</label>
                            <input class="form-control" placeholder="Email Address" type="email" name="contractorEmail" id="contractorEmail" required>
                        </div>
                        <div class="form-group">
                            <label for="contractorServices">What service your company provide:</label>
                            <input class="form-control" placeholder="Services" type="text" name="contractorServices" id="contractorServices" required>
                        </div>
                        <div class="form-group final-row-table">
                            <button name="button" type="submit" class="btn btn-md btn-info">
                                Submit<i class="fa fa-paper-plane"></i>
                            </button>

                            <p class="tcpa">By clicking the Submit button, I hereby consent to receive autodialed and/or pre-recorded telemarketing calls from or on behalf of our contractors at the telephone number provided above, including my wireless number, if applicable. I understand that consent is not a condition of purchase.</p>
                        </div>


                    </form>    </div>

                <div class="col-xs-12 col-sm-12 col-md-12">
                    <div class="well">
                        <h4>Why Us?</h4>
                        <p>Real time Leads</p>
                        <p>No Contracts</p>
                        <p>No Monthly Subscription</p>
                        <p>User-friendly dashboard</p>
                        <p>Leave any time with no penalty</p>
                    </div>

                    <div class="well well-right">
                        <h4>How this  Works?</h4>
                        <p class="small">On our comprehensive website network, guests complete a quick survey that includes their contact details. After we rigorously check their details, we send leads to you in timely manner via email , SMS, CRM or any way you like.</p>
                        <hr/>
                        <p class="small">The service is free for customers but in return for the lead details we charge a small fee to contractors.</p>
                        <hr/>
                        <p class="small">Since 2017 we have been producing leads and we would be pleased to include you in our valued contractors community. Fill out this form now.</p>

                    </div>
                </div>

            </div>
        </div>
</section>


@include('layouts.footer')