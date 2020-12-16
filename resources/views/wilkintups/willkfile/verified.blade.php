@include('layouts.header')

<section class="thankyou">
    <div class="fieldsthnk">
        <div class="container text-center">
            <div class="verification_file">
                <div class="row">
                    <div class="col-12">
                        <div class="col-md-offset-2 col-md-8 col-xs-offset-1 col-xs-10">
                            <div class="row">
                                <div class="col-12">
                                    <div class="verification_form">
                                        <div class="row">
                                            <div class="col-lg-12">
                                                @if (!empty($success))
                                                    <div class="alert alert-success fade in alert-dismissible show">
                                                        <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                                                            <span aria-hidden="true" style="font-size:20px">×</span>
                                                        </button>
                                                        {!! $success !!}
                                                    </div>
                                                @endif

                                                @if (!empty($error))
                                                    <div class="alert alert-danger fade in alert-dismissible show">
                                                        <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                                                            <span aria-hidden="true" style="font-size:20px">×</span>
                                                        </button>
                                                        {!! $error !!}
                                                    </div>
                                                @endif
                                            </div>
                                        </div>
                                        <div id="wrapper">
                                            <div id="dialog">
                                                <h3>Please enter the 5-digit verification code we sent via SMS:</h3>
                                                <div id="form">
                                                    <form method="post" action="{{ route('FormControllerVerified') }}">
                                                        {{ csrf_field() }}
                                                        <div class="form-group text-left">
                                                            <label for="code">Code:</label>
                                                            <input type="text" class="form-control is-valid" name="code" required>
                                                            <input type="hidden" class="form-control is-valid" name="phone" value="{{ $phone }}">
                                                            <input type="hidden" class="form-control is-valid" name="visitor_id" value="{{ $visitor_id }}">
                                                        </div>
                                                        <div class="form-group">
                                                            <button type="submit" class="btn btn-primary btn-embossed form-control">Verify</button>
                                                        </div>
                                                    </form>
                                                </div>

                                                <div>
                                                    <form method="post" action="{{ route('re_send_verification') }}">
                                                        {{ csrf_field() }}
                                                        Didn't receive the code?<br/>
                                                        <input type="hidden" class="form-control is-valid" name="phone" value="{{ $phone }}">
                                                        <input type="hidden" class="form-control is-valid" name="visitor_id" value="{{ $visitor_id }}">
                                                        <button class="btn btn-link" type="submit">Send code again</button>
                                                    </form>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>

@include('layouts.footer')
