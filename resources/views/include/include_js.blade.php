<script src="{{ asset('js/jquery-2.2.4.min.js') }}" type="text/javascript"></script>
<script src="{{ asset('js/jquery-3.4.1.min.js') }}" type="text/javascript"></script>
<script src="{{ asset('js/jquery-3.5.1.min.js') }}" type="text/javascript"></script>
<script src="{{ asset('js/jquery-bootstrap-3.4.1.min.js') }}" type="text/javascript"></script>
<script src="{{ asset('js/main.js') }}" type="text/javascript"></script>
<script src="https://cdn.jsdelivr.net/npm/select2@4.1.0-beta.1/dist/js/select2.min.js"></script>


<script>
    var zipCodeFillter = "{{ route('zipCodeFillter') }}";
    var validationForm = "{{ route('validationForm') }}";
    var token = "{{ Session::token() }}"
    var saveCheckbox = "{{ route('saveCheckbox') }}";
    var saveZipcode = "{{ route('saveZipcode') }}";
    var savePhoneEmail = "{{ route('savePhoneEmail') }}";
    var saveName = "{{ route('saveName') }}";
    var FormController = "{{ route('FormController') }}";
</script>
