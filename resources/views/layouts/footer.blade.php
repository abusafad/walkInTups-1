<!--Jornaya Script-->
<script id="LeadiDscript" type="text/javascript">
    (function() {
        var s = document.createElement('script');
        s.id = 'LeadiDscript_campaign';
        s.type = 'text/javascript';
        s.async = true;
        s.src = '//create.lidstatic.com/campaign/6219adce-ca9c-41d7-f78c-21e68fcf4f46.js?snippet_version=2';
        var LeadiDscript = document.getElementById('LeadiDscript');
        LeadiDscript.parentNode.insertBefore(s, LeadiDscript);
    })();
</script>
<noscript><img src='//create.leadid.com/noscript.gif?lac=27c94b3f-338d-43b6-b881-02bf972941ba&lck=6219adce-ca9c-41d7-f78c-21e68fcf4f46&snippet_version=2' /></noscript>
<!--End Jornaya Script-->

<script type="text/javascript">
    (function () {
        var field = 'xxTrustedFormCertUrl';
        var provideReferrer = false;
        var invertFieldSensitivity = false;
        var tf = document.createElement('script');
        tf.type = 'text/javascript';
        tf.async = true;
        tf.src = 'http' + ('https:' == document.location.protocol ? 's' : '') +
            '://api.trustedform.com/trustedform.js?provide_referrer=' + escape(provideReferrer) + '&field=' + escape(
                field) + '&l=' + new Date().getTime() + Math.random() + '&invert_field_sensitivity=' +
            invertFieldSensitivity;
        var s = document.getElementsByTagName('script')[0];
        s.parentNode.insertBefore(tf, s);
    })();
</script>
<noscript>
    <img src="http://api.trustedform.com/ns.gif" />
</noscript>



<footer class="footer fixed-bottom text-left">
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-md-6 text-center">
                <p class="lead">&copy;2020. All rights reserved. thewalkintubspros.com</p>
            </div>

            <div class="col-xs-12 col-md-6">
                <div class="linksdiv">
                    <a href="{{ route('privacy-policy') }}" target="_blank">
                        Privacy Policy
                    </a>
                    <a href="{{ route('our-partners') }}" target="_blank">
                        Our Partners
                    </a>
                    <a href="{{ route('joinOurNetwork') }}" target="_blank">
                        Join Our Network
                    </a>

                </div>
            </div>

        </div>
    </div>
</footer>
@include('include.include_js')

</body>

</html>
