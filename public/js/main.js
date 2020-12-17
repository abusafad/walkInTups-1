$('#NextButton').addClass("link-inactive");
$('#submitform').addClass("link-inactive");
$('#popsubmit').addClass("link-inactive");
$("#next2").addClass("link-inactive");
$("#progress").animate({'width': '0%'});
let zipcode = ''
/**
 * list of routes users to send data on server.
 * @type {string}
 */

let BaseURI = "https://pro.allieddigitalmedia.com/api/"
let ZipCodeFilter = 'rest/addressDetails'
let SaveZipCode = 'rest/savezipcode'
let SaveName = 'rest/savename'
let SavePhoneEmail = 'rest/savephoneemail'

zipcode = $('#zipcode').val()

// here make block or restrict special characters from input fields.
$('#zipcode').on('keypress change', (e) => {
    var regex = new RegExp("^[0-9]+$")
    var key = String.fromCharCode(!e.charCode ? e.which : e.charCode)
    if (!regex.test(key) && zipcode.length <= 5) {
        e.preventDefault()
        return false
    }
})

//  this array to save all features are selected.
let _selected = new Array()
// within 6 months: 2, Immediately: 1, not sure: 0 default not sure.
let when_start_project = 0
// here we make bind Time to starting project popups with main form section.
$('#Immediately').click((el) => {
   when_start_project = 1
    $('#prioritypop').val('1')
})
$('#Within_6_months').click((el) => {
    when_start_project = 2
    $('#prioritypop').val('2')
})
$('#Not_Sure').click((el) => {
    when_start_project = 0
    $('#prioritypop').val('0')
})

// select2 initiator/////////
$(document).ready(function() {

    // in the first Desired Features is empty unchecked
    $('.js-example-basic-multiple').val([]).change()
    // in the first start project is empty unchecked
    $('#pronat1').prop('checked', false)
    $('#pronat2').prop('checked', false)

    $('.js-example-basic-multiple').select2();

    // binding popups with main Form Features section
    $('#defaultUnchecked1').on('change', (el) => {
        if($('#defaultUnchecked1').is(':checked')){
            _selected.push('1')
            $('.js-example-basic-multiple').val(_selected).change()
        }else{
            let p_index = _selected.indexOf('1')
            if (p_index > -1) {
                _selected.splice(p_index, 1)
                $('.js-example-basic-multiple').val(_selected).change()
            }
        }
    })
    $('#defaultUnchecked2').on('change', (el) => {
        if($('#defaultUnchecked2').is(':checked')){
            _selected.push('2')
            $('.js-example-basic-multiple').val(_selected).change()
        }else{
            let p_index = _selected.indexOf('2')
            if (p_index > -1) {
                _selected.splice(p_index, 1)
                $('.js-example-basic-multiple').val(_selected).change()
            }
        }
    })
    $('#defaultUnchecked3').on('change', (el) => {
        if($('#defaultUnchecked3').is(':checked')){
            _selected.push('3')
            $('.js-example-basic-multiple').val(_selected).change()
        }else{
            let p_index = _selected.indexOf('3')
            if (p_index > -1) {
                _selected.splice(p_index, 1)
                $('.js-example-basic-multiple').val(_selected).change()
            }
        }
    })
    $('#defaultUnchecked4').on('change', (el) => {
        if($('#defaultUnchecked4').is(':checked')){
            _selected.push('4')
            $('.js-example-basic-multiple').val(_selected).change()
        }else{
            let p_index = _selected.indexOf('4')
            if (p_index > -1) {
                _selected.splice(p_index, 1)
                $('.js-example-basic-multiple').val(_selected).change()
            }
        }
    })

    $('.js-example-basic-multiple').change((el) => {
        if ($('.js-example-basic-multiple').val().length <= 0){
            $('#next2').addClass('link-inactive');
        }else{
            $('#next2').removeClass('link-inactive');
        }

        if ($('.js-example-basic-multiple').val().includes('1')){
            _selected.includes('1') ? 0 : _selected.push('1')
            sureChange()
        }else {
            $('#defaultUnchecked1').prop('checked', false)
            let p_index = _selected.indexOf('1')
            if (p_index > -1 ) {
                _selected.splice(p_index, 1)
            }
            sureChange()
        }
        if ($('.js-example-basic-multiple').val().includes('2')){
            _selected.includes('2') ? 0 : _selected.push('2')
            sureChange()
        }else {
            $('#defaultUnchecked2').prop('checked', false)
            let p_index = _selected.indexOf('2')
            if (p_index > -1 ) {
                _selected.splice(p_index, 1)
            }
            sureChange()
        }
        if ($('.js-example-basic-multiple').val().includes('3')){
            _selected.includes('3') ? 0 : _selected.push('3')
            sureChange()
        }else {
            let p_index = _selected.indexOf('3')
            if (p_index > -1 ) {
                _selected.splice(p_index, 1)
            }
            sureChange()
        }
        if ($('.js-example-basic-multiple').val().includes('4')){
            _selected.includes('4') ? 0 : _selected.push('4')
            sureChange()

        }else {
            let p_index = _selected.indexOf('4')
            if (p_index > -1 ) {
                _selected.splice(p_index, 1)
            }
            sureChange()
        }
    })
    // here to make sure from binding correct or not
    function sureChange(){
        if (_selected.includes('1')) {
            $('#defaultUnchecked1').prop('checked', true)
        }else{
            $('#defaultUnchecked1').prop('checked', false)
        }
        if (_selected.includes('2')) {
            $('#defaultUnchecked2').prop('checked', true)
        }else{
            $('#defaultUnchecked2').prop('checked', false)
        }
        if (_selected.includes('3')) {
            $('#defaultUnchecked3').prop('checked', true)
        }else{
            $('#defaultUnchecked3').prop('checked', false)
        }
        if (_selected.includes('4')) {
            $('#defaultUnchecked4').prop('checked', true)
        }else{
            $('#defaultUnchecked4').prop('checked', false)
        }
    }
})

// end binding section.
// changing the color of selected item inside popup////

$(document).ready(function () {
    $("select.contaforselect1").change(function () {
        $(this).children("option:selected").css;
        $("#flabel").css("color", "green");
        $(this).css("border", "1px solid green")
    });
    $("select.contaforselect2").change(function () {
        $(this).children("option:selected").css;
        $("#slabel").css("color", "green");
        $(this).css("border", "1px solid green")
    });
    $("select.contaforselect3").change(function () {
        $(this).children("option:selected").css;
        $("#tlabel").css("color", "green");
        $(this).css("border", "1px solid green")
    });
    $("select.contaforselect4").change(function () {
        $(this).children("option:selected").css;
        $("#folabel").css("color", "green");
        $(this).css("border", "1px solid green")
    });
});

/////////////////////////////////////////////////////////////

//new code for save data
$('button[name="walk_in_tub"]').click(function () {
    $("#contact").submit(function (e) {
        e.preventDefault();
    });
    var button_value = $(this).val();
    $("#walk_in_tub").val(button_value);
    ///////// popup code/////////
    $("#opti" + button_value).attr("selected", "selected");
    $("#flabel").css("color", "green");
    $(".contaforselect1").css("border", "1px solid green");
    /////////////////////////////////////////
    window.location.hash = 'step3';
    $(".formcontent2").hide();
    $(".formcontent3").show();
    $('#progress').css({'width': '30%'})

});
$("input[name='desired_featuers[]']").click( function () {

    var chocheck = $("input[name='desired_featuers[]']:checked").val();
    $("#slabel").css("color" , "green");
    $("#desfea" + chocheck).attr("selected", true);


    if($("#desfea" + chocheck).is(':checked'))
    {
        $("#next2").removeClass("link-inactive");
    }
    else
    {
        $("#next2").addClass("link-inactive");
        $("#desfea" + chocheck).attr("selected" , false);
    }

});


$("#next2").click(function(e)
{

    $("#contact").submit(function (e) {
        e.preventDefault();
    });


    window.location.hash = 'step4';
    $(".formcontent3").hide();
    $(".formcontent4").show();


});
// $("#defaultUnchecked1").click(function () {
//     $("#contact").submit(function (e) {
//         e.preventDefault();
//     });
//
//     if($(this).is(':checked'))
//     {
//         $("#next2").removeClass("link-inactive");
//     }
//     else if($("#defaultUnchecked2").is(':checked'))
//         {
//             $("#next2").removeClass("link-inactive");
// }
//     else if($("#defaultUnchecked3").is(':checked'))
//     {
//         $("#next2").removeClass("link-inactive");
//     }
//     else if($("#defaultUnchecked4").is(':checked'))
//     {
//         $("#next2").removeClass("link-inactive");
//     }
// });

// $('button[name="desired_featuers[]"]').click(function () {
//     $("#contact").submit(function (e) {
//         e.preventDefault();
//     });
//     var button_value = $(this).val();
//     $("#desired_featuers[]").val(button_value);
//     ///////// popup code/////////
//     $("#pronat" + button_value).attr("selected", "selected");
//     $("#slabel").css("color", "green");
//     $(".contaforselect2").css("border", "1px solid green");
//     //////////////////////////////
//     window.location.hash = 'step4';
//     $(".formcontent3").hide();
//     $(".formcontent4").show();
// });

$('button[name="priority"]').click(function () {
    $("#contact").submit(function (e) {
        e.preventDefault();
    });
    var button_value = $(this).val();
    $("#priority").val(button_value);
    ///////// popup code/////////
    $("#prot" + button_value).attr("selected", "selected");
    $("#tlabel").css("color", "green");
    $(".contaforselect3").css("border", "1px solid green");
    /////////////////////////////
    window.location.hash = 'step5';
    $(".formcontent4").hide();
    $(".formcontent5").show();
});

$('button[name="ownership"]').click(function () {
    $("#contact").submit(function (e) {
        e.preventDefault();
    });
    var button_value = $(this).val();
    $("#ownership").val(button_value);
    ///////// popup code/////////
    $("#ownr" + button_value).attr("selected", "selected");
    $("#folabel").css("color", "green");
    $(".contaforselect4").css("border", "1px solid green");
    //////////////////////////////
    window.location.hash = 'step6';
    $(".formcontent5").hide();
    $(".formcontent6").show();
    $("#continue").click();
});
//////////////////////////////////////////////


//////////////////////////////////// changing sections ////////////

$(document).ready(function () {
    $(".formcontent2").hide();
    $(".formcontent3").hide();
    $(".formcontent4").hide();
    $(".formcontent5").hide();
    $(".formcontent6").hide();
    $(".formcontent7").hide();
    $(".formcontent8").hide();

    $("#previous1").click(function () {
        $(".formcontent2").hide();
        $(".formcontent").show();
        window.location.hash = 'step1';

    });
    $("#previous2").click(function () {
        $(".formcontent3").hide();
        $(".formcontent2").show();
        $('#progress').css('width', '20%')
        window.location.hash = 'step2';

    });
    $("#previous3").click(function () {
        $(".formcontent4").hide();
        $(".formcontent3").show();
        $('#progress').animate({width: '30%'})
        window.location.hash = 'step3';

    });
    $("#previous4").click(function () {
        $(".formcontent5").hide();
        $(".formcontent4").show();
        window.location.hash = 'step4';

    });
    $("#previous5").click(function () {
        $(".formcontent6").hide();
        $(".formcontent5").show();
        window.location.hash = 'step5';
        $("#backpop").click();

    });
    $("#previous6").click(function () {
        $(".formcontent7").hide();
        $(".formcontent6").show();
        window.location.hash = 'step6';

    });
    $("#previous7").click(function () {
        $(".formcontent8").hide();
        $(".formcontent7").show();
        window.location.hash = 'step7';

    });


    $(".change-address").click(function () {
        $(".toggle-address").toggle(500);
    });

    $('a[href="#finish"]').click(function () {
        $('div.se-pre-con').css("display", "block");
        $('div.se-pre-con').css("background", "#929da287");
    });
});

//////////////////////////////////

/////////////////// zipcode on regular form ///////////////////

$("#zipcode").on("keyup change" , function (e) {
    var zipcode = $(this).val();
    if (zipcode.length == 5) {
        $.ajax({
            url: zipCodeFillter,
            method: "POST",
            data: {
                "zipcode": zipcode,
                "_token": token
            },
            beforeSend: function () {
                // $('#NextButton').text("Please wait");
                // $('#NextButton').css("opacity", 0.5);
            },
            success: function (the_result) {
                $("#progress").animate({'width': '10%'})
                console.log(the_result['zip_code_list']);
                var zcodev2 = $("#zipcode").val();

                    var lnamevalid = $("#lname_validation").val();
                var phonenumvalid = $("#phone_validation").val();
                var emailvalid = $("#email_validation").val();
                var fnamevalid = $("#fname_validation").val();
                var streetvalid = $("#street_validation").val();
                $("#zipcode_validation").val(1);
                var zipcodevalid = $("#zipcode_validation").val();
                if ((phonenumvalid == 1) && (emailvalid == 1) && (zipcodevalid == 1) && (streetvalid == 1) && (lnamevalid == 1) && (fnamevalid == 1)) {
                    $('#popsubmit').removeClass("link-inactive");
                    $('#popsubmit').css("opacity", 1);
                }

                $('#NextButton').text("Next");
                $('#NextButton').css("opacity", 1);
                $('#NextButton').removeClass("link-inactive");
                $('#city_id_form').val(the_result['city_id']);
                $('#state_id_form').val(the_result['state_id']);
                $('#zipcode_id_form').val(the_result['zip_code_list_id']);

                $('#city_id').val(the_result['city_id']);
                $('#state_id').val(the_result['state_id']);
                $('#zipcode_id').val(the_result['zip_code_list_id']);

                $('#state_city_labeal').html(the_result['state_name'] + ' - ' + the_result[
                    'city_name']);
                var zipcode = $('#zipcode').val();
                if (zipcode != the_result['zip_code_list']) {
                    $('#NextButton').addClass("link-inactive");
                    $(".rfzcode").text("Zipcode not valid!");
                    $("#zipcode").addClass("zcodeinput-error");
                    $(".input-icon").addClass("inputicon-error");
                    $(".fa-map-marker").addClass("fa-error");
                } else {
                    $('#NextButton').removeClass("link-inactive");
                    $("#zipcodepop").val(zcodev2);
                    $(".rfzcode").empty();
                    $("#zipcode").removeClass("zcodeinput-error");
                    $(".input-icon").removeClass("inputicon-error");
                    $(".fa-map-marker").removeClass("fa-error");
                    $('.zcodepop').css("color", "green");
                    $("#zipcodepop").css("border", "1px solid green");
                    $('.zipcodespan').empty();
                }

            }
        });
    }
    else {
        $('#popsubmit').addClass("link-inactive");

        $("#NextButton").addClass("link-inactive");
        // alert("zipCode must be 5 digits");
    }
});
$(document).ready(function () {
    var url = window.location.href;
    var indexOfSlash = url.indexOf("/Thank-You");
    if ( indexOfSlash < 0 || !url.substring(indexOfSlash + 1) ) {
        var zipcode = $('#zipcode').val();
        if (zipcode != '') {
            if (zipcode.length == 5) {
                $.ajax({
                    url: zipCodeFillter,
                    method: "POST",
                    data: {
                        "zipcode": zipcode,
                        "_token": token
                    },
                    beforeSend: function () {
                        $('#NextButton').text("Please wait");
                        $('#NextButton').css("opacity", 0.5);
                    },
                    success: function (the_result) {
                        $("#progress").animate({'width': '10%'})
                        $('#NextButton').text("Next");
                        $('#NextButton').css("opacity", 1);
                        $('#NextButton').removeClass("link-inactive");
                        $('#city_id_form').val(the_result['city_id']);
                        $('#state_id_form').val(the_result['state_id']);
                        $('#zipcode_id_form').val(the_result['zip_code_list_id']);

                        $('#city_id').val(the_result['city_id']);
                        $('#state_id').val(the_result['state_id']);
                        $('#zipcode_id').val(the_result['zip_code_list_id']);

                        $('#state_city_labeal').html(the_result['state_name'] + ' - ' + the_result[
                            'city_name']);
                        var zipcode = $('#zipcode').val();
                        if (zipcode != the_result['zip_code_list']) {
                            $('#NextButton').addClass("link-inactive");
                            $(".rfzcode").text("Zipcode not valid!");
                            $("#zipcode").addClass("zcodeinput-error");
                            $(".input-icon").addClass("inputicon-error");
                            $(".fa-map-marker").addClass("fa-error");

                        } else {
                            $('#NextButton').removeClass("link-inactive");
                            $(".rfzcode").empty();
                            $("#zipcode").removeClass("zcodeinput-error");
                            $(".input-icon").removeClass("inputicon-error");
                            $(".fa-map-marker").removeClass("fa-error");
                        }
                    }
                });
            }
        }
    }
});

///////// to prevent user from entering spaces in zipcode field/////////////////////

$("#zipcode").keypress(function (s) {
    if(s.which === 32)
    {
        return false;
    }
});
/////////
var epress = 0;
$('#zipcode').keydown(function (e) {
    if (e.keyCode == 13) {
        e.preventDefault();
        if (epress == 0)
        {
            epress = 1;
            if ($("#NextButton").hasClass('link-inactive')) {
                epress = 0;
                return false;

            } else {
                var zcodeff = $("#zipcode").val();
                window.location.hash = 'step2';
                var leadId = $('#leadid_token').val();
                $.ajax({
                    url: saveZipcode,
                    method: "POST",
                    cache: false,
                    data: {
                        "data": $("#contact").serialize(),
                        "universal_leadid": leadId,
                        "_token": token
                    },
                    beforeSend: function () {
                        $('#NextButton').text("Next");
                        $('#NextButton').css("opacity", 1);
                    },
                    success: function (the_result) {
                        $("#zipcodepop").val(zcodeff);
                        $('.zcodepop').css("color", "green");
                        $("#zipcodepop").css("border", "1px solid green");
                        $('.zipcodespan').empty();
                        // $("#NextButton").addClass('link-inactive')
                        $(".formcontent").hide();
                        $(".formcontent2").show();
                        $('#progress').css('width', '20%')
                        window.location.hash = 'step2';
                        epress = 0;
                    }
                });

            }
        }
    }
});
//////////////////////////////


/////////// fname on regular form ////////////////////

$("#fname").change(function () {
    var validfname = $("fname_form_validation").val();
    var validlname = $("lname_form_validation").val();
    var fname = $(this).val();
    var regExp = /[a-zA-Z]/g;

    if (fname.length < 3 || lname.length < 3) {
        $('#next5').addClass("link-inactive");
        $(".rflname").text("Please Enter A Valid Name!");
        $("#fname").addClass("fnameinput-error");
        $("#lname").addClass("marginclassforinput");
    } else {
        var fname = $("#fname").val();
        $.ajax({
            url: validationForm,
            method: "POST",
            data: {
                type: 1,
                content: fname,
                "_token": token
            },
            beforeSend: function () {
                $('#next5').text("Please wait");
                $('#next5').css("opacity", 0.5);
                $('#next5').addClass("link-inactive");
            },
            success: function (the_result) {
                // console.log(the_result);
                if (the_result == 1) {
                    $("#progress").animate({'width': '20%'})
                    var $regex = /(\w)\1{2,}/;
                    var $string = $('#fname').val().toLowerCase();

                    if ($regex.test($string)) {
                        $('#next5').addClass("link-inactive");
                        $(".rflname").text("You cant enter more than 2 sequential letters!");
                        $("#fname").addClass("fnameinput-error");
                        $("#lname").addClass("marginclassforinput");
                    } else if (!regExp.test(fname)) {
                        $('#next5').addClass("link-inactive");
                        $(".rflname").text("Please Enter A Valid Name!");
                        $("#fname").addClass("fnameinput-error");
                        $("#lname").addClass("marginclassforinput");
                    } else {
                        var fnamev2 = $("#fname").val();
                        $("#fnamepop").val(fnamev2);
                        var phonenumvalid = $("#phone_validation").val();
                        var emailvalid = $("#email_validation").val();
                        var zipcodevalid = $("#zipcode_validation").val();
                        var streetvalid = $("#street_validation").val();
                        $("#fname").removeClass("fnameinput-error");
                        $("#lname").removeClass("marginclassforinput");

                        $("#fname_validation").val(1);
                        $("#fname_form_validation").val(1);

                        var fnamevalid = $("#fname_validation").val();
                        var lnamevalid = $("#lname_validation").val();

                        if ((phonenumvalid == 1) && (emailvalid == 1) && (zipcodevalid == 1) && (streetvalid == 1) && (lnamevalid == 1) && (fnamevalid == 1)) {
                            $('#popsubmit').removeClass("link-inactive");
                            $('#popsubmit').css("opacity", 1);
                        }
                        $('.fnamehpop').css("color", "green");
                        $("#fnamepop").css("border", "1px solid green");
                        $('.fnamespan').empty();
                        var lname_form_validation = $("#lname_form_validation").val();
                        if (lname_form_validation == 1) {
                            $('#next5').text("Next");
                            $('#next5').css("opacity", 1);
                            $('#next5').removeClass("link-inactive");
                            $(".rflname").empty();
                            $("#fname").removeClass("fnameinput-error");
                        }
                        if($("#lname").hasClass("fnameinput-error") || $("#lname").hasClass("lnameinput-error"))
                        {
                            $(".rflname").text("Please Enter A Valid Name!");
                        }
                        else{
                            $(".rflname").empty();
                        }

                    }

                } else {
                    $('#next5').addClass("link-inactive");
                    $('#next5').text("Next");
                    $(".rflname").text("Please Enter A Valid Name!");
                    $("#fname").addClass("fnameinput-error");
                    $("#lname").addClass("marginclassforinput");
                    $('#popsubmit').addClass("link-inactive");
                    $("#fname_form_validation").val(0);
                }
            }
        });
    }
});
///////////////////////////

$('#fname').on('keypress', function (event) {
    var regex = new RegExp("^[a-zA-Z \b]+$");
    var key = String.fromCharCode(!event.charCode ? event.which : event.charCode);
    if (!regex.test(key)) {
        event.preventDefault();
        return false;
    }
});

////////////////// enter to next step fname//////////////
var fnameEPress = 0;
$('#fname').keydown(function (e) {
    var regExp = /[a-zA-Z]/g;
    if (e.keyCode == 13) {

        e.preventDefault();
        if (fnameEPress == 0)
        {
            fnameEPress = 1;
            var fname = $("#fname").val();
            if (fname.length < 3) {
                $('#next5').addClass("link-inactive");
                $(".rflname").text("Please Enter A Valid Name!");
                $("#fname").addClass("fnameinput-error");
                $("#lname").addClass("marginclassforinput");
                $("#fname_form_validation").val(0);
                fnameEPress = 0;
            } else if (!regExp.test(fname)) {
                $('#next5').addClass("link-inactive");
                $('#next5').css("opacity", 0.5);
                $(".rflname").text("Please Enter A Valid Name!");
                $("#fname").addClass("fnameinput-error");
                $("#lname").addClass("marginclassforinput");
                fnameEPress = 0;
            } else{
                var fname = $("#fname").val();
                $.ajax({
                    url: validationForm,
                    method: "POST",
                    data: {
                        type: 1,
                        content: fname,
                        "_token": token
                    },
                    beforeSend: function () {

                        // $('#next5').addClass("link-inactive");
                        $("#fname_form_validation").val(0);
                    },
                    success: function (the_result) {
                        fnameEPress = 0;
                        // console.log(the_result);
                        if (the_result == 1) {
                            var $regex = /(\w)\1{2,}/;
                            var $string = $('#fname').val().toLowerCase();
                            if ($regex.test($string)) {
                                $('#next5').addClass("link-inactive");
                                $(".rflname").text("You cant enter more than 2 sequential letters!");
                                $("#fname").addClass("fnameinput-error");
                                $("#lname").addClass("marginclassforinput");
                            } else {
                                var fnamev2 = $("#fname").val();
                                $("#fnamepop").val(fnamev2);
                                var phonenumvalid = $("#phone_validation").val();
                                var emailvalid = $("#email_validation").val();
                                var zipcodevalid = $("#zipcode_validation").val();
                                var streetvalid = $("#street_validation").val();
                                $("#fname").removeClass("fnameinput-error");
                                $("#lname").removeClass("marginclassforinput");
                                $("#fname_validation").val(1);
                                $("#fname_form_validation").val(1);
                                if (lname_form_validation == 0) {
                                    $(".rflname").text("Please Enter A Valid Name!");
                                    $('#next5').addClass("link-inactive");
                                    if($("#lname").hasClass("fnameinput-error") || $("#lname").hasClass("lnameinput-error"))
                                    {
                                        $(".rflname").text("Please Enter A Valid Name!");
                                    }
                                    else{
                                        $(".rflname").empty();
                                    }
                                }
                                else  {
                                    if($("#lname").val()!="" && $("#lname_form_validation").val()!=0){
                                        window.location.hash = 'step7';
                                        var leadId = $('#leadid_token').val();
                                        $.ajax({
                                            url: saveName,
                                            method: "POST",
                                            data: {
                                                "data": $("#contact").serialize(),
                                                "universal_leadid": leadId,
                                                "_token": token
                                            },

                                            success: function (the_result) {
                                                // console.log(the_result);
                                                $(".formcontent6").hide();
                                                $(".formcontent7").show();
                                                fnameEPress = 0;
                                            }
                                        });
                                        $(".rflname").empty();
                                    }else{
                                        $('#next5').text("Next");
                                    }
                                }
                                var fnamevalid = $("#fname_validation").val();
                                var lnamevalid = $("#lname_validation").val();

                                if ((phonenumvalid == 1) && (emailvalid == 1) && (zipcodevalid == 1) && (streetvalid == 1) && (lnamevalid == 1) && (fnamevalid == 1)) {
                                    $('#popsubmit').removeClass("link-inactive");
                                    $('#popsubmit').css("opacity", 1);
                                }
                                $('.fnamehpop').css("color", "green");
                                $("#fnamepop").css("border", "1px solid green");
                                $('.fnamespan').empty();

                                var lname_form_validation = $("#lname_form_validation").val();
                                if (lname_form_validation == 1) {
                                    $('#next5').text("Next");
                                    $('#next5').css("opacity", 1);
                                    $('#next5').removeClass("link-inactive");
                                    $(".rflname").empty();
                                    $("#fname").removeClass("fnameinput-error");

                                }
                                if($("#lname").hasClass("inputs-error"))
                                {
                                    $(".rflname").text("Please Enter A Valid Name!");
                                }
                                else{
                                    $(".rflname").empty();
                                }



                            }

                        } else {
                            $('#next5').addClass("link-inactive");
                            $('#next5').focusout();
                            $('#next5').text("Next");
                            $(".rflname").text("Please Enter A Valid Name!");
                            $("#fname").addClass("fnameinput-error");
                            $("#lname").addClass("marginclassforinput");
                            $('#popsubmit').addClass("link-inactive");
                            $("#fname_form_validation").val(0);
                            fnameEPress = 0;
                        }
                    }

                });
            }
        }
    }
});
////////// last name on regular form //////////////////////////
$("#lname").change(function () {
    var validfname = $("fname_form_validation").val();
    var validlname = $("lname_form_validation").val();
    var regExp = /[a-zA-Z]/g;
    var lname = $(this).val();
    if (lname.length < 3) {
        $(".rflname").text("Please Enter A Valid Name!");
        $("#lname").addClass("lnameinput-error");
        $("#lname_form_validation").val(0);
        $('#next5').addClass("link-inactive");
    } else {
        var lname = $("#lname").val();
        $.ajax({
            url: validationForm,
            method: "POST",
            data: {
                type: 1,
                content: lname,
                "_token": token
            },
            beforeSend: function () {
                $('#next5').text("Please wait");
                $('#next5').css("opacity", 0.5);
                $('#next5').addClass("link-inactive");
            },
            success: function (the_result) {
                if (the_result == 1) {

                    var $regex1 = /(\w)\1{2,}/;
                    var $string1 = $('#lname').val().toLowerCase();
                    if ($regex1.test($string1)) {
                        $('#next5').addClass("link-inactive");
                        $("#lname_form_validation").val(0);
                        $(".rflname").text("You cant enter more than 2 sequential letters!");
                        $("#lname").addClass("lnameinput-error");
                    } else if (!regExp.test(lname)) {
                        $('#next5').addClass("link-inactive");
                        $(".rflname").text("Please Enter A Valid Name!");
                        $("#lname").addClass("fnameinput-error");
                        $("#lname").addClass("marginclassforinput");
                    } else{
//                        var fnamev2 = $("#fname").val();
//                        $("#fnamepop").val(fnamev2);
                        var lnamev2 = $("#lname").val();
                        $("#lnamepop").val(lnamev2);
                        var phonenumvalid = $("#phone_validation").val();
                        var emailvalid = $("#email_validation").val();
                        var zipcodevalid = $("#zipcode_validation").val();
                        var streetvalid = $("#street_validation").val();
                        $("#lname").removeClass("lnameinput-error");
                        $("#lname_validation").val(1);
                        $("#lname_form_validation").val(1);

                        var fnamevalid = $("#fname_validation").val();
                        var lnamevalid = $("#lname_validation").val();
                        if ((phonenumvalid == 1) && (emailvalid == 1) && (zipcodevalid == 1) && (streetvalid == 1) && (lnamevalid == 1) && (fnamevalid == 1)) {
                            $('#popsubmit').removeClass("link-inactive");
                            $('#popsubmit').css("opacity", 1);
                        }

                        $('.lnamehpop').css("color", "green");
                        $("#lnamepop").css("border", "1px solid green");
                        $('.lnamespan').empty();

                        var fname_form_validation = $("#fname_form_validation").val();
                        if (fname_form_validation == 1) {
                            $('#next5').text("Next");
                            $('#next5').css("opacity", 1);
                            $('#next5').removeClass("link-inactive");
                            $(".rflname").empty();
                            $("#lname").removeClass("lnameinput-error");
                        }
                        if ($("#lname").hasClass("fnameinput-error"))
                        {
                            $("#lname").removeClass("fnameinput-error");
                        }

                    }
                    if (validfname == 1 && validlname == 1)
                    {
                        $("#next5").focus();
                    }
                } else {
                    $('#next5').addClass("link-inactive");
                    $('#next5').text("Next");
                    $(".rflname").text("Please Enter A Valid Name!");
                    $("#lname").addClass("lnameinput-error");
                    $("#lname_form_validation").val(0);
                    $('#popsubmit').addClass("link-inactive");
                }
            }
        });
    }
});

$('#lname').on('keypress', function (event) {
    var regex = new RegExp("^[a-zA-Z \b]+$");
    var key = String.fromCharCode(!event.charCode ? event.which : event.charCode);
    if (!regex.test(key)) {
        event.preventDefault();
        return false;
    }
});
///////////////// enter press on lnam ///////////////
var lnameEPress = 0;
$('#lname').keydown(function (e) {
    var regExp = /[a-zA-Z]/g;
    if($("#fname").val()!="") {
        if (e.keyCode == 13) {
            e.preventDefault();
            if (lnameEPress == 0)
            {
                lnameEPress = 1;
                var lname = $("#lname").val();
                if (lname.length < 3) {
                    $(".rflname").text("Please Enter A Valid Name!");
                    $("#lname").addClass("lnameinput-error");
                    $("#lname_form_validation").val(0);
                    $('#next5').addClass("link-inactive");
                    lnameEPress = 0;
                } else if (!regExp.test(lname)) {
                    $('#next5').addClass("link-inactive");
                    $('#next5').css("opacity", 0.5);
                    $(".rflname").text("Please Enter A Valid Name!");
                    $("#lname").addClass("fnameinput-error");
                    $("#lname").addClass("marginclassforinput");
                    lnameEPress = 0;
                } else {

                    var lname = $("#lname").val();
                    $.ajax({
                        url: validationForm,
                        method: "POST",
                        data: {
                            type: 1,
                            content: lname,
                            "_token": token
                        },
                        beforeSend: function () {

                            //  $('#next5').addClass("link-inactive");
                            $("#lname_form_validation").val(0);
                        },
                        success: function (the_result) {
                            lnameEPress = 0;
                            if (the_result == 1) {

                                var $regex1 = /(\w)\1{2,}/;
                                var $string1 = $('#lname').val().toLowerCase();
                                if ($regex1.test($string1)) {
                                    $('#next5').addClass("link-inactive");
                                    $("#lname_form_validation").val(0);
                                    $(".rflname").text("You cant enter more than 2 sequential letters!");
                                    $("#lname").addClass("lnameinput-error");
                                } else {
                                    if ($("#lname").hasClass("fnameinput-error"))
                                    {
                                        $("#lname").removeClass("fnameinput-error");
                                    }
                                    else
                                    {
                                        $("#lname").removeClass("lnameinput-error");
                                    }


//                                var fnamev2 = $("#fname").val();
//                                $("#fnamepop").val(fnamev2);
                                    var lnamev2 = $("#lname").val();
                                    $("#lnamepop").val(lnamev2);
                                    var phonenumvalid = $("#phone_validation").val();
                                    var emailvalid = $("#email_validation").val();
                                    var zipcodevalid = $("#zipcode_validation").val();
                                    var streetvalid = $("#street_validation").val();

                                    $("#lname_validation").val(1);
                                    $("#lname_form_validation").val(1);

                                    if($("#fname").val()!="" && $("#fname_form_validation").val()!=0){
                                        window.location.hash = 'step7';
                                        var leadId = $('#leadid_token').val();
                                        $.ajax({
                                            url: saveName,
                                            method: "POST",
                                            data: {
                                                "data": $("#contact").serialize(),
                                                "universal_leadid": leadId,
                                                "_token": token
                                            },
                                            success: function (the_result) {
                                                // console.log(the_result);
                                                $(".formcontent6").hide();
                                                $(".formcontent7").show();
                                                lnameEPress = 0;
                                            }
                                        });
                                    }else{
                                        $('#next5').text("Next");
                                    }
                                    var fnamevalid = $("#fname_validation").val();
                                    var lnamevalid = $("#lname_validation").val();
                                    if ((phonenumvalid == 1) && (emailvalid == 1) && (zipcodevalid == 1) && (streetvalid == 1) && (lnamevalid == 1) && (fnamevalid == 1)) {
                                        $('#popsubmit').removeClass("link-inactive");
                                        $('#popsubmit').css("opacity", 1);
                                    }

                                    $('.lnamehpop').css("color", "green");
                                    $("#lnamepop").css("border", "1px solid green");
                                    $('.lnamespan').empty();

                                    var fname_form_validation = $("#fname_form_validation").val();
                                    if (fname_form_validation == 1) {
                                        $('#next5').text("Next");
                                        $('#next5').css("opacity", 1);
                                        $('#next5').removeClass("link-inactive");
                                        $(".rflname").empty();
                                        $("#lname").removeClass("lnameinput-error");
                                    }
                                }

                            } else {
                                $('#next5').addClass("link-inactive");
                                $('#next5').focusout();
                                $('#next5').text("Next");
                                $(".rflname").text("Please Enter A Valid Name!");
                                $("#lname").addClass("lnameinput-error");
                                $("#lname_form_validation").val(0);
                                $('#popsubmit').addClass("link-inactive");
                                lnameEPress = 0;
                            }
                        }
                    });
                }


            }
        }
    }
});
/////////////////////////////
///////// phone number on regular form///////////////////
$("#phone_number").change(function () {
    var phone = $("#phone_number").val();
    var phoneno = /^[0-9]{7,15}$/;
    if (phone.match(phoneno)) {
        $.ajax({
            url: validationForm,
            method: "POST",
            data: {
                type: 2,
                phoneNumber: phone,
                "_token": token
            },
            beforeSend: function () {
                $('#next6').text("Please wait");
                $('#next6').css("opacity", 0.5);
                $('#next6').addClass("link-inactive");
            },
            success: function (the_result) {
                if (the_result == 1) {
                    var phnumv2 = $("#phone_number").val();
                    $("#phone_numberpop").val(phnumv2);
                    var fnamevalid = $("#fname_validation").val();
                    var lnamevalid = $("#lname_validation").val();
                    var emailvalid = $("#email_validation").val();
                    var zipcodevalid = $("#zipcode_validation").val();
                    var streetvalid = $("#street_validation").val();

                    $("#phone_validation").val(1);
                    $("#phone_form_validation").val(1);
                    var phonenumvalid = $("#phone_validation").val();

                    if ((phonenumvalid == 1) && (emailvalid == 1) && (zipcodevalid == 1) && (streetvalid == 1) && (lnamevalid == 1) && (fnamevalid == 1)) {
                        $('#popsubmit').removeClass("link-inactive");
                        $('#popsubmit').css("opacity", 1);
                    }
                    $('.cifpop').css("color", "green");
                    $("#phone_numberpop").css("border", "1px solid green");
                    $('.phonenumspan').empty();
                    $(".rfphone").empty();
                    $("#phone_number").removeClass("inputs-error");
                    /////////////////email///////////////////////////
                    var email_validations = $("#email_form_validation").val();
                    if (email_validations == 1) {
                        $('#next6').text("Next");
                        $('#next6').css("opacity", 1);
                        $('#next6').removeClass("link-inactive");

                    }
                    ////////////////////////////////////////////////
                    $("#email").focus();

                } else {
                    $("#phone_form_validation").val(0);
                    $('#popsubmit').addClass("link-inactive");
                    $('#next6').addClass("link-inactive");
                    $('#next6').text("Next");

                    $(".rfphone").text("Please Enter A Valid Number!");
                    $("#phone_number").addClass("inputs-error");
                }
            }
        });
        return true;
    } else {
        $("#phone_form_validation").val(0);
        $('#popsubmit').addClass("link-inactive");
        $('#next6').addClass("link-inactive");
        $('#next6').text("Next");
        $(".rfphone").text("Only numbers are allowed!");
        $("#phone_number").addClass("inputs-error");
    }
});
/////////////////////////////////// enter press on phone number////////////
var PhoneEPress = 0;
$('#phone_number').keydown(function (e) {
    if (e.keyCode == 13) {
        e.preventDefault();
        if (PhoneEPress == 0)
        {
            PhoneEPress = 1;
            var phone = $("#phone_number").val();
            var phoneno = /^[0-9]{7,15}$/;
            if (phone.match(phoneno)) {
                $.ajax({
                    url: validationForm,
                    method: "POST",
                    data: {
                        type: 2,
                        phoneNumber: phone,
                        "_token": token
                    },
                    success: function (the_result) {
                        PhoneEPress = 0;
                        if (the_result == 1) {
                            var phnumv2 = $("#phone_number").val();
                            $("#phone_numberpop").val(phnumv2);
                            var fnamevalid = $("#fname_validation").val();
                            var lnamevalid = $("#lname_validation").val();
                            var emailvalid = $("#email_validation").val();
                            var zipcodevalid = $("#zipcode_validation").val();
                            var streetvalid = $("#street_validation").val();

                            $("#phone_validation").val(1);
                            $("#phone_form_validation").val(1);
                            if ($('#email').val()!="" && $("#email_form_validation").val() == 1 && $("#phone_form_validation").val() == 1)
                            {
                                // $("#next6").focus();
                                // $("#next6").click();
                            }
                            var phonenumvalid = $("#phone_validation").val();

                            if ((phonenumvalid == 1) && (emailvalid == 1) && (zipcodevalid == 1) && (streetvalid == 1) && (lnamevalid == 1) && (fnamevalid == 1)) {
                                $('#popsubmit').removeClass("link-inactive");
                                $('#popsubmit').css("opacity", 1);
                            }
                            $('.cifpop').css("color", "green");
                            $("#phone_numberpop").css("border", "1px solid green");
                            $('.phonenumspan').empty();
                            $(".rfphone").empty();
                            $("#phone_number").removeClass("inputs-error");
                            /////////////////email///////////////////////////
                            var email_validations = $("#email_form_validation").val();
                            if (email_validations == 1) {
                                $('#next6').text("Next");
                                $('#next6').css("opacity", 1);
                                $('#next6').removeClass("link-inactive");
                                var Phone = $("#phone_number").val();
                                var Email = $("#email").val();
                                var Jornaya = $("#leadid_token").val();
                                window.location.hash = 'step8';
                                $.ajax({
                                    url: savePhoneEmail,
                                    method: "POST",
                                    data: {
                                        "Phone": Phone,
                                        "Email": Email,
                                        "Jornaya": Jornaya,
                                        "_token": token
                                    },
                                    beforeSend: function () {
                                        $('#next6').text("Next");
                                        $('#next6').css("opacity", 1);
                                    },
                                    success: function (the_result) {
                                        $(".formcontent7").hide();
                                        $(".formcontent8").show();
                                        PhoneEPress = 0;
                                    }
                                });
                            }
                            ////////////////////////////////////////////////

                            $("#email").focus();

                        } else {
                            $("#phone_form_validation").val(0);
                            $('#popsubmit').addClass("link-inactive");
                            $('#next6').addClass("link-inactive");
                            $('#next6').text("Next");

                            $(".rfphone").text("Please Enter A Valid Number!");
                            $("#phone_number").addClass("inputs-error");
                            PhoneEPress == 0
                        }
                    }
                });
                return true;
            } else {
                $("#phone_form_validation").val(0);
                $('#popsubmit').addClass("link-inactive");
                $('#next6').addClass("link-inactive");
                $('#next6').text("Next");
                $(".rfphone").text("Only numbers are allowed!");
                $("#phone_number").addClass("inputs-error");
            }

        }
    }
});
//////////////////////////
////////// email on regular form/////////////////
$("#email").change(function () {
    if ($('#email').val().length == 0) {
        $("#email_form_validation").val(0);
        $(".rfemail").text("Please Enter A Valid Email Address!");
        $("#email").addClass("inputs-error");
        $('#next6').addClass("link-inactive");
    }
    else {
        var email = $('#email').val();
        var regExp = /[a-zA-Z]/g;
        var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
        var emailaddressVal = $("#email").val();
        if (!emailReg.test(emailaddressVal)) {
            $("#email_form_validation").val(0);
            $(".rfemail").text("Please Enter A Valid Email Address!");
            $("#email").addClass("inputs-error");
            $('#next6').addClass("link-inactive");
        } else if (emailaddressVal.indexOf("@") >= 0) {
            var numchs = emailaddressVal.split("@");
            var chdom = numchs[1].split(".");
            if ((!regExp.test(numchs[0])) || (!regExp.test(chdom[0]))) {
                $("#email_form_validation").val(0);
                $(".rfemail").text("Please Enter A Valid Email Address!");
                $("#email").addClass("inputs-error");
                $('#next6').addClass("link-inactive");
            } else {
                var email = $("#email").val();
                $.ajax({
                    url: validationForm,
                    method: "POST",
                    data: {
                        type: 1,
                        content: email,
                        "_token": token
                    },
                    beforeSend: function () {
                        $('#next6').text("Please wait");
                        $('#next6').css("opacity", 0.5);
                        $('#next6').addClass("link-inactive");
                    },
                    success: function (the_result) {
                        if (the_result == 1) {
                            /////////////////phoneNumber///////////////////////////
                            var emailv2 = $("#email").val();
                            $("#emailpop").val(emailv2);
                            var fnamevalid = $("#fname_validation").val();
                            var lnamevalid = $("#lname_validation").val();
                            var phonenumvalid = $("#phone_validation").val();
                            var zipcodevalid = $("#zipcode_validation").val();
                            var streetvalid = $("#street_validation").val();
                            $("#email_validation").val(1);
                            $("#email_form_validation").val(1);
                            var emailvalid = $("#email_validation").val();
                            if ((phonenumvalid == 1) && (emailvalid == 1) && (zipcodevalid == 1) && (streetvalid == 1) && (lnamevalid == 1) && (fnamevalid == 1)) {
                                $('#popsubmit').removeClass("link-inactive");
                                $('#popsubmit').css("opacity", 1);
                            } else {
                                $('#popsubmit').addClass("link-inactive");
                                $('#popsubmit').css("opacity", 0.5);
                            }
                            var phone_validations = $("#phone_form_validation").val();
                            if (phone_validations == 1) {
                                $('#next6').text("Next");
                                $('#next6').css("opacity", 1);
                                $('#next6').removeClass("link-inactive");
                            }
                            $('.emailhpop').css("color", "green");
                            $("#emailpop").css("border", "1px solid green");
                            $('.emailspan').empty();
                            $(".rfemail").empty();
                            $("#email").removeClass("inputs-error");
                            ////////////////////////////////////////////////
                        } else {
                            $('#next6').addClass("link-inactive");
                            $('#next6').text("Next");
                            $('#popsubmit').addClass("link-inactive");
                            $(".rfemail").text("Please Enter A Valid Email Address!");
                            $("#email").addClass("inputs-error");
                        }
                    }
                });
            }
        } else {
            $("#email_form_validation").val(0);
            $(".rfemail").text("Please Enter A Valid Email Address!");
            $("#email").addClass("inputs-error");
            $('#next6').addClass("link-inactive");
        }
    }
});


//////////////// enter press on email ///////////
var emailEPress = 0;
$('#email').keydown(function (e) {
    if (e.keyCode == 13) {
        e.preventDefault();
        if (emailEPress == 0)
        {
            emailEPress = 1;
            if ($('#email').val().length == 0) {
                $("#email_form_validation").val(0);
                $(".rfemail").text("Please Enter A Valid Email Address!");
                $("#email").addClass("inputs-error");
                $('#next6').addClass("link-inactive");
                emailEPress = 0;
            }
            else {
                var email = $('#email').val();
                var regExp = /[a-zA-Z]/g;
                var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
                var emailaddressVal = $("#email").val();
                if (!emailReg.test(emailaddressVal)) {
                    $("#email_form_validation").val(0);
                    $(".rfemail").text("Please Enter A Valid Email Address!");
                    $("#email").addClass("inputs-error");
                    $('#next6').addClass("link-inactive");
                    emailEPress = 0;
                } else if (emailaddressVal.indexOf("@") >= 0) {
                    var numchs = emailaddressVal.split("@");
                    var chdom = numchs[1].split(".");
                    if ((!regExp.test(numchs[0])) || (!regExp.test(chdom[0]))) {
                        $("#email_form_validation").val(0);
                        $(".rfemail").text("Please Enter A Valid Email Address!");
                        $("#email").addClass("inputs-error");
                        $('#next6').addClass("link-inactive");
                        emailEPress = 0;
                    } else {
                        var email = $("#email").val();
                        $.ajax({
                            url: validationForm,
                            method: "POST",
                            data: {
                                type: 1,
                                content: email,
                                "_token": token
                            },
                            beforeSend: function () {
                                $('#next6').text("Please wait");
                                $('#next6').css("opacity", 0.5);
                                $('#next6').addClass("link-inactive");
                            },
                            success: function (the_result) {
                                emailEPress = 0;
                                if (the_result == 1) {
                                    /////////////////phoneNumber///////////////////////////
                                    var emailv2 = $("#email").val();
                                    $("#emailpop").val(emailv2);
                                    var fnamevalid = $("#fname_validation").val();
                                    var lnamevalid = $("#lname_validation").val();
                                    var phonenumvalid = $("#phone_validation").val();
                                    var zipcodevalid = $("#zipcode_validation").val();
                                    var streetvalid = $("#street_validation").val();
                                    $("#email_validation").val(1);
                                    $("#email_form_validation").val(1);
                                    var emailvalid = $("#email_validation").val();
                                    if ((phonenumvalid == 1) && (emailvalid == 1) && (zipcodevalid == 1) && (streetvalid == 1) && (lnamevalid == 1) && (fnamevalid == 1)) {
                                        $('#popsubmit').removeClass("link-inactive");
                                        $('#popsubmit').css("opacity", 1);
                                    } else {
                                        $('#popsubmit').addClass("link-inactive");
                                        $('#popsubmit').css("opacity", 0.5);
                                    }
                                    var phone_validations = $("#phone_form_validation").val();
                                    if (phone_validations == 1) {
                                        $('#next6').text("Next");
                                        $('#next6').css("opacity", 1);
                                        $('#next6').removeClass("link-inactive");
                                    }
                                    $('.emailhpop').css("color", "green");
                                    $("#emailpop").css("border", "1px solid green");
                                    $('.emailspan').empty();
                                    $(".rfemail").empty();
                                    $("#email").removeClass("inputs-error");
                                    /////////////////phone///////////////////////////
                                    var phone_validations = $("#phone_form_validation").val();
                                    if (phone_validations == 1) {
                                        $('#next6').text("Next");
                                        $('#next6').css("opacity", 1);
                                        $('#next6').removeClass("link-inactive");
                                        var Phone = $("#phone_number").val();
                                        var Email = $("#email").val();
                                        var Jornaya = $("#leadid_token").val();
                                        window.location.hash = 'step8';
                                        $.ajax({
                                            url: savePhoneEmail,
                                            method: "POST",
                                            data: {
                                                "Phone": Phone,
                                                "Email": Email,
                                                "Jornaya": Jornaya,
                                                "_token": token
                                            },
                                            beforeSend: function () {
                                                $('#next6').text("Next");
                                                $('#next6').css("opacity", 1);
                                            },
                                            success: function (the_result) {
                                                $(".formcontent7").hide();
                                                $(".formcontent8").show();
                                                emailEPress = 0;
                                            }
                                        });
                                    }
                                    ////////////////////////////////////////////////
                                    ////////////////////////////////////////////////
                                } else {
                                    $('#next6').addClass("link-inactive");
                                    $('#next6').text("Next");
                                    $('#popsubmit').addClass("link-inactive");
                                    $(".rfemail").text("Please Enter A Valid Email Address!");
                                    $("#email").addClass("inputs-error");
                                }
                            }
                        });
                    }
                } else {
                    $("#email_form_validation").val(0);
                    $(".rfemail").text("Please Enter A Valid Email Address!");
                    $("#email").addClass("inputs-error");
                    $('#next6').addClass("link-inactive");
                }
            }

        }
    }
});

///////////////////////////////////////////////

$("#street_name").change(function () {
    var street_name = $(this).val();
    if (street_name == "") {
        $(".rfstreet").text("Please Enter A Valid Address");
        $("#street_name").addClass("inputs-error");
        $('#submitform').addClass("link-inactive");
    } else if (street_name.length < 3) {
        $(".rfstreet").text("Please Enter A Valid Address");
        $("#street_name").addClass("inputs-error");
        $('#submitform').addClass("link-inactive");
    } else {
        var street_name = $('#street_name').val();
        $.ajax({
            url: validationForm,
            method: "POST",
            data: {
                type: 1,
                content: street_name,
                "_token": token
            },
            beforeSend: function () {
                $('#submitform').text("Please wait");
                $('#submitform').css("opacity", 0.5);
                $('#submitform').addClass("link-inactive");
            },
            success: function (the_result) {
                if (the_result == 1) {
                    $('#submitform').text("Finish");
                    $('#submitform').css("opacity", 1);
                    $('#submitform').removeClass("link-inactive");
                    var saddv2 = $("#street_name").val();
                    $("#street_namepop").val(saddv2);
                    var lnamevalid = $("#lname_validation").val();
                    var phonenumvalid = $("#phone_validation").val();
                    var emailvalid = $("#email_validation").val();
                    var zipcodevalid = $("#zipcode_validation").val();
                    var fnamevalid = $("#fname_validation").val();

                    $("#street_validation").val(1);

                    var streetvalid = $("#street_validation").val();
                    if ((phonenumvalid == 1) && (emailvalid == 1) && (zipcodevalid == 1) && (streetvalid == 1) && (lnamevalid == 1) && (fnamevalid == 1)) {
                        $('#popsubmit').removeClass("link-inactive");
                        $('#popsubmit').css("opacity", 1);
                    }
                    $('.stadpop').css("color", "green");
                    $("#street_namepop").css("border", "1px solid green");
                    $('.streetspan').empty();
                    $(".rfstreet").empty();
                    $("#street_name").removeClass("inputs-error");

                    return true;
                } else {
                    $('#submitform').addClass("link-inactive");
                    $('#submitform').text("Finish");
                    $('#popsubmit').addClass("link-inactive");
                    $(".rfstreet").text("Please Enter A Valid Address");
                    $("#street_name").addClass("inputs-error");
                }
            }
        });
    }
});
///////////////////////// enter press on street name ////////
var streetEPress = 0;
$('#street_name').keydown(function (e) {
    var leadId = $('#leadid_token').val();
    if (e.keyCode == 13) {
        e.preventDefault();
        if (streetEPress == 0)
        {
            streetEPress = 1;

            var street_name = $(this).val();
            if (street_name == "") {
                $(".rfstreet").text("Please Enter A Valid Address");
                $("#street_name").addClass("inputs-error");
                $('#submitform').addClass("link-inactive");
                streetEPress = 0;
            } else if (street_name.length < 3) {
                $(".rfstreet").text("Please Enter A Valid Address");
                $("#street_name").addClass("inputs-error");
                $('#submitform').addClass("link-inactive");
                streetEPress = 0;
            } else {
                var street_name = $('#street_name').val();
                $.ajax({
                    url: validationForm,
                    method: "POST",
                    data: {
                        type: 1,
                        content: street_name,
                        "_token": token
                    },
                    beforeSend: function () {
                        $('#submitform').text("Please wait");
                        $('#submitform').css("opacity", 0.5);
                        $('#submitform').addClass("link-inactive");
                    },
                    success: function (the_result) {
                        streetEPress = 1;

                        if (the_result == 1) {
                            $('#submitform').text("Finish");
                            $('#submitform').css("opacity", 1);
                            $('#submitform').removeClass("link-inactive");
                            var saddv2 = $("#street_name").val();
                            $("#street_namepop").val(saddv2);
                            var lnamevalid = $("#lname_validation").val();
                            var phonenumvalid = $("#phone_validation").val();
                            var emailvalid = $("#email_validation").val();
                            var zipcodevalid = $("#zipcode_validation").val();
                            var fnamevalid = $("#fname_validation").val();

                            $("#street_validation").val(1);

                            $("#submitform").focus();
                            $("#submitform").click();
                            $("#submitform").addClass("link-inactive");
                            var streetvalid = $("#street_validation").val();
                            if ((phonenumvalid == 1) && (emailvalid == 1) && (zipcodevalid == 1) && (streetvalid == 1) && (lnamevalid == 1) && (fnamevalid == 1)) {
                                $('#popsubmit').removeClass("link-inactive");
                                $('#popsubmit').css("opacity", 1);

                                $("#submitform").addClass("link-inactive");
                            }
                            $('#submitform').addClass("link-inactive");
                            $('.stadpop').css("color", "green");
                            $("#street_namepop").css("border", "1px solid green");
                            $('.streetspan').empty();
                            $(".rfstreet").empty();
                            $("#street_name").removeClass("inputs-error");

                            return true;
                        } else {
                            $('#submitform').addClass("link-inactive");
                            $('#submitform').text("Finish");
                            $('#popsubmit').addClass("link-inactive");
                            $(".rfstreet").text("Please Enter A Valid Address");
                            $("#street_name").addClass("inputs-error");
                            streetEPress = 0;
                        }
                    }
                });
            }

        }
    }
});

//** remove the comment of the below function in case the above one failed**//
//$('#street_name').keydown(function (e) {
//    if (e.keyCode == 13) {
//        e.preventDefault();
//        return false;
//    }
//});
/////////////////////////////////////////////
$("#NextButton").click(function (e) {
    e.preventDefault();
    var zcodeff = $("#zipcode").val();
    $('#NextButton').text("Please wait");
    $('#NextButton').css("opacity", 0.5);
    window.location.hash = 'step2';
    var leadId = $('#leadid_token').val();
    $.ajax({
        url: saveZipcode,
        method: "POST",
        data: {
            "data": $("#contact").serialize(),
            "universal_leadid": leadId,
            "_token": token
        },
        success: function (the_result) {
            $('#progress').animate({width: '35%'})
            $('#NextButton').css("opacity", 1);
            $('#NextButton').text("Next");
            $("#zipcodepop").val(zcodeff);
            $('.zcodepop').css("color", "green");
            $("#zipcodepop").css("border", "1px solid green");
            $('.zipcodespan').empty();

            $(".formcontent").hide();
            $(".formcontent2").show();
            window.location.hash = 'step2';
        }
    });
});


$("#next5").click(function (e) {
    $('#next5').text("Please wait");
    $('#next5').css("opacity", 0.5);
    window.location.hash = 'step7';
    var leadId = $('#leadid_token').val();
    $.ajax({
        url: saveName,
        method: "POST",
        data: {
            "data": $("#contact").serialize(),
            "universal_leadid": leadId,
            "_token": token
        },
        success: function (the_result) {
            $('#progress').animate({'width': '67%'})
            $('#next5').css("opacity", 1);
            $('#next5').text("Next");
            console.log(the_result);
            $(".formcontent6").hide();
            $(".formcontent7").show();

        }
    });

});
$("#next6").click(function (e) {
    $('#next6').text("Please wait");
    $('#next6').css("opacity", 0.5);
    var Phone = $("#phone_number").val();
    var Email = $("#email").val();
    var Jornaya = $("#leadid_token").val();
    window.location.hash = 'step8';
    $.ajax({
        url: savePhoneEmail,
        method: "POST",
        data: {
            "Phone": Phone,
            "Email": Email,
            "Jornaya": Jornaya,
            "_token": token
        },
        success: function (the_result) {
            $('#next6').text("Next");
            $('#next6').css("opacity", 1);
            console.log(the_result);
            $(".formcontent7").hide();
            $(".formcontent8").show();
        }
    });
});

// when user click finish
$(".buttonload").hide();
$("#submitform").click(function (e) {
    $('#submitform').prop('disabled', true);
    $(".modalremove").removeAttr('id');
    $("#popsubmit").addClass("link-inactive");
    $("#previous7").addClass("link-inactive");
    var leadId = $('#leadid_token').val();
    $.ajax({
        url: FormController,
        method: "POST",
        data: {
            "data": $("#contact").serialize(),
            "universal_leadid": leadId,
            "_token": token
        },
        beforeSend: function () {
            $("#submitform").hide();
            $(".buttonload").show();
        },
        timeout: 1000,
        error: function(){
            var tsValue = $("#tc").val();
            var gValue  = $("#g").val();
            var cValue  = $("#c").val();
            var kValue  = $("#k").val();
            var visitor_idValue = $("#visitor_id").val();
            var tokenValue  = $("#token").val();
            if(typeof tsValue != "undefined"){var ts = "ts="+tsValue+"&";}else{var ts = "";}
            if(typeof gValue != "undefined") {var g = "g="+gValue+"&";}else{var g = "";}
            if(typeof cValue != "undefined") {var c = "c="+cValue+"&";}else{var c = "";}
            if(typeof kValue != "undefined") {var k = "k="+kValue+"&";}else{var k = "";}
            if(typeof visitor_idValue != "undefined") {var visitor_id = "visitor_id="+visitor_idValue+"&";}else{var visitor_id = "";}
            if(typeof tokenValue != "undefined") {var token = "token="+tokenValue;}else{var token = "";}
            var url = "/Thank-You";
            var parameter= "?"+ts+g+c+k+visitor_id+token;
            var res = url.concat(parameter);
            window.location.href = res;
        },
        success: function (the_result) {
            var tsValue = $("#tc").val();
            var gValue  = $("#g").val();
            var cValue  = $("#c").val();
            var kValue  = $("#k").val();
            var visitor_idValue = $("#visitor_id").val();
            var tokenValue  = $("#token").val();
            if(typeof tsValue != "undefined"){var ts = "ts="+tsValue+"&";}else{var ts = "";}
            if(typeof gValue != "undefined") {var g = "g="+gValue+"&";}else{var g = "";}
            if(typeof cValue != "undefined") {var c = "c="+cValue+"&";}else{var c = "";}
            if(typeof kValue != "undefined") {var k = "k="+kValue+"&";}else{var k = "";}
            if(typeof visitor_idValue != "undefined") {var visitor_id = "visitor_id="+visitor_idValue+"&";}else{var visitor_id = "";}
            if(typeof tokenValue != "undefined") {var token = "token="+tokenValue;}else{var token = "";}
            var url = "/Thank-You";
            var parameter= "?"+ts+g+c+k+visitor_id+token;
            var res = url.concat(parameter);
            window.location.href = res;

        }
    });
});


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/////////////////// POP UP ///////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////

$('#popsubmit').addClass("link-inactive");

$(".exitbutton").hide();

if ($(window).width() > 970) {
    $('#divPopUp').on("mouseover", function () {
        $("#myModal").modal();
    });
}

$(document).ready(function () {
    $("#fnamepop").change(function () {
        if ($("#fnamepop").val().length === 0) {
            $("#fnamehpop").css("color", "red");
            $("fnamespan").text("please enter a name")
        }
    });
});

// check zipcode value

$("#zipcodepop").focusout(function () {
    var zipcode = $(this).val();
    if ($("#zipcodepop").val().length === 0) {
        $('.zcodepop').css("color", "red");
        $("#zipcodepop").css("border", "1px solid red");
        $('.zipcodespan').text("Please Enter Your ZipCode!").css({
            "color": "red",
            "font-size": " 12px"
        });
    } else
    if (zipcode.length == 5) {
        $.ajax({
            url: zipCodeFillter,
            method: "POST",
            data: {
                "zipcode": zipcode,
                "_token": token
            },
            beforeSend: function () {
                $('#NextButton').text("Please wait");
                $('#NextButton').css("opacity", 0.5);
            },
            success: function (the_result) {
                $("#progress").animate({'width': '10%'})
                var lnamevalid = $("#lname_validation").val();
                var phonenumvalid = $("#phone_validation").val();
                var emailvalid = $("#email_validation").val();
                var fnamevalid = $("#fname_validation").val();
                var streetvalid = $("#street_validation").val();
                $("#zipcode_validation").val(1);
                var zipcodevalid = $("#zipcode_validation").val();
                if ((phonenumvalid == 1) && (emailvalid == 1) && (zipcodevalid == 1) && (streetvalid == 1) && (lnamevalid == 1) && (fnamevalid == 1)) {
                    $('#popsubmit').removeClass("link-inactive");
                    $('#popsubmit').css("opacity", 1);
                }
                else
                {
                    $('#popsubmit').addClass("link-inactive");
                }

                $('#NextButton').text("Next");
                $('#NextButton').css("opacity", 1);
                $('#city_id').val(the_result['city_id']);
                $('#state_id').val(the_result['state_id']);
                $('#zipcode_id').val(the_result['zip_code_list_id']);

                $(".rfzcode").empty();
                $("#zipcode").removeClass("zcodeinput-error");
                $(".input-icon").removeClass("inputicon-error");
                $(".fa-map-marker").removeClass("fa-error");

                $('#city_id_form').val(the_result['city_id']);
                $('#state_id_form').val(the_result['state_id']);
                $('#zipcode_id_form').val(the_result['zip_code_list_id']);
                var zipcode = $('#zipcodepop').val();
                if (zipcode != the_result['zip_code_list']) {
                    $('.zcodepop').css("color", "red");
                    $("#zipcodepop").css("border", "1px solid red");
                    $('.zipcodespan').text("ZipCode Not Valid!").css({
                        "color": "red",
                        "font-size": " 12px"
                    });

                    $('#popsubmit').addClass("link-inactive");

                } else {
                    $('.zcodepop').css("color", "green");
                    $("#zipcodepop").css("border", "1px solid green");
                    $('.zipcodespan').empty();
                    $('#NextButton').removeClass("link-inactive");
                    var zcodev1 = $("#zipcodepop").val();
                    $("#zipcode").val(zcodev1);
                }
            }
        });


    } else {
        $("#zipcode_validation").val(0);
        $('.zcodepop').css("color", "red");
        $("#zipcodepop").css("border", "1px solid red");
        $('.zipcodespan').text("ZipCode Not Valid!").css({
            "color": "red",
            "font-size": " 12px"
        });
        $('#popsubmit').addClass("link-inactive");

        // alert("zipCode must be 5 digits");
    }
});


$(".secondsec").hide();
$(".tcpalabel").hide();
$("#backpop").hide();

$("#continue").on("click", function () {

    $(this).hide();
    $("#popsubmit").show();
    $(".firstsec").fadeOut(200);
    $(".secondsec").fadeIn(200);
    $(".tcpalabel").fadeIn(200);
    $("#backpop").fadeIn(200);

});
$("#backpop").on("click", function () {

    $(this).hide();
    $(".firstsec").fadeIn(200);
    $(".secondsec").fadeOut(200);
    $(".tcpalabel").fadeOut(200);
    $("#continue").fadeIn(200);

});

///////////////// fname on popup //////////////////////
$("#fnamepop").change(function () {
    var fname = $(this).val();
    if ($("#fnamepop").val().length === 0) {
        $('.fnamehpop').css("color", "red");
        $("#fnamepop").css("border", "1px solid red");
        $('.fnamespan').text("Please Enter Your Last Name!").css({
            "color": "red",
            "font-size": " 12px"
        });
        $('#popsubmit').addClass("link-inactive");

    } else if (fname.length < 3) {
        $('.fnamehpop').css("color", "red");
        $("#fnamepop").css("border", "1px solid red");
        $('.fnamespan').text("Last Name Must Contain More Than 2 Characters !").css({
            "color": "red",
            "font-size": " 12px"
        });
        $('#popsubmit').addClass("link-inactive");

    } else {
        var fname = $('#fnamepop').val();
        $.ajax({
            url: validationForm,
            method: "POST",
            data: {
                type: 1,
                content: fname,
                "_token": token
            },
            beforeSend: function () {
                $('#popsubmit').text("Please wait");
                $('#popsubmit').css("opacity", 0.5);
                $('#popsubmit').addClass("link-inactive");
            },
            success: function (the_result) {
                if (the_result == 1) {
                    var $regex = /(\w)\1{2,}/;
                    var $string = $('#fnamepop').val().toLowerCase();
                    if ($regex.test($string)) {
                        $('.fnamehpop').css("color", "red");
                        $("#fnamepop").css("border", "1px solid red");
                        $('.fnamespan').text("You can't enter more than 2 sequential letters!!").css({
                            "color": "red",
                            "font-size": " 12px"
                        })
                        $('#popsubmit').addClass("link-inactive");

                    } else {
                        var fnamev = $("#fnamepop").val();
                        $("#fname").val(fnamev);
                        var lnamevalid = $("#lname_validation").val();
                        var phonenumvalid = $("#phone_validation").val();
                        var emailvalid = $("#email_validation").val();
                        var zipcodevalid = $("#zipcode_validation").val();
                        var streetvalid = $("#street_validation").val();


                        $("#fname_validation").val(1);
                        $("#fname_form_validation").val(1);

                        var fnamevalid = $("#fname_validation").val();
                        if ((phonenumvalid == 1) && (emailvalid == 1) && (zipcodevalid == 1) && (streetvalid == 1) && (lnamevalid == 1) && (fnamevalid == 1)) {
                            $('#popsubmit').removeClass("link-inactive");
                            $('#submitform').removeClass("link-inactive");
                            $('#popsubmit').css("opacity", 1);
                        }
                        else
                        {
                            $('#popsubmit').addClass("link-inactive");
                        }

                        $('.fnamehpop').css("color", "green");
                        $("#fnamepop").css("border", "1px solid green");
                        $('.fnamespan').empty();
                        $(".rflname").empty();
                        $("#fname").removeClass("fnameinput-error");

                        var fname_form_validation = $("#fname_form_validation").val();
                        var lname_form_validation = $("#lname_form_validation").val();
                        if (fname_form_validation == 1 && lname_form_validation == 1) {
                            $('#next5').removeClass("link-inactive");
                            $('#next5').css("opacity", 1);
                            $('#next5').text("Next");
                        }

                        return true;
                    }
                } else {
                    $('.fnamehpop').css("color", "red");
                    $("#fnamepop").css("border", "1px solid red");
                    $('.fnamespan').text("Please Enter A Valid Name!").css({
                        "color": "red",
                        "font-size": " 12px"
                    });
                    $("#fname_validation").val(0);
                    $('#popsubmit').addClass("link-inactive");

                }
            }
        });
    }
});

$('#fnamepop').on('keypress', function (event) {
    var regex = new RegExp("^[a-zA-Z \b]+$");
    var key = String.fromCharCode(!event.charCode ? event.which : event.charCode);
    if (!regex.test(key)) {
        event.preventDefault();
        return false;
    }
});

/////////////////////////////////////////
////////////////// lname on popup //////////////////////////
$("#lnamepop").change(function () {
    var lname = $("#lnamepop").val();
    if ($("#lnamepop").val().length === 0) {
        $('.lnamehpop').css("color", "red");
        $("#lnamepop").css("border", "1px solid red");
        $('.lnamespan').text("Please Enter Your Last Name!").css({
            "color": "red",
            "font-size": " 12px"
        });
        $('#popsubmit').addClass("link-inactive");

    } else if (lname.length < 3) {
        $('.lnamehpop').css("color", "red");
        $("#lnamepop").css("border", "1px solid red");
        $('.lnamespan').text("Last Name Must Contain More Than 2 Characters !").css({
            "color": "red",
            "font-size": " 12px"
        });
        $('#popsubmit').addClass("link-inactive");

    } else {
        var lname = $("#lnamepop").val();
        $.ajax({
            url: validationForm,
            method: "POST",
            data: {
                type: 1,
                content: lname,
                "_token": token
            },
            beforeSend: function () {
                $('#popsubmit').text("Please wait");
                $('#popsubmit').css("opacity", 0.5);
                $('#popsubmit').addClass("link-inactive");
            },
            success: function (the_result) {
                if (the_result == 1) {
                    var $regex1 = /(\w)\1{2,}/;
                    var $string1 = $('#lnamepop').val().toLowerCase();
                    if ($regex1.test($string1)) {
                        $('.lnamehpop').css("color", "red");
                        $("#lnamepop").css("border", "1px solid red");
                        $('.lnamespan').text("You can't enter more than 2 sequential letters!!").css({
                            "color": "red",
                            "font-size": " 12px"
                        });
                        $('#popsubmit').addClass("link-inactive");

                    } else {
                        var lnamev1 = $("#lnamepop").val();
                        $("#lname").val(lnamev1);
                        var fnamevalid = $("#fname_validation").val();

                        var phonenumvalid = $("#phone_validation").val();
                        var emailvalid = $("#email_validation").val();
                        var zipcodevalid = $("#zipcode_validation").val();
                        var streetvalid = $("#street_validation").val();


                        $("#lname_validation").val(1);
                        $("#lname_form_validation").val(1);

                        var lnamevalid = $("#lname_validation").val();
                        if ((phonenumvalid == 1) && (emailvalid == 1) && (zipcodevalid == 1) && (streetvalid == 1) && (lnamevalid == 1) && (fnamevalid == 1)) {
                            $('#popsubmit').removeClass("link-inactive");
                            $('#submitform').removeClass("link-inactive");
                            $('#popsubmit').css("opacity", 1);
                        }
                        else
                        {
                            $('#popsubmit').addClass("link-inactive");
                        }
                        $('.lnamehpop').css("color", "green");
                        $("#lnamepop").css("border", "1px solid green");
                        $('.lnamespan').empty();
                        $(".rflname").empty();
                        $("#lname").removeClass("lnameinput-error");

                        var fname_form_validation = $("#fname_form_validation").val();
                        var lname_form_validation = $("#lname_form_validation").val();
                        if (fname_form_validation == 1 && lname_form_validation == 1) {
                            $('#next5').removeClass("link-inactive");
                            $('#next5').css("opacity", 1);
                        }
                        return true;
                    }
                } else {
                    $('.lnamehpop').css("color", "red");
                    $("#lnamepop").css("border", "1px solid red");
                    $('.lnamespan').text("Please Enter A Valid Name!").css({
                        "color": "red",
                        "font-size": " 12px"
                    });
                    $("#lname_validation").val(0);
                    $('#popsubmit').addClass("link-inactive");
                }
            }
        });
    }
});

$('#lnamepop').on('keypress', function (event) {
    var regex = new RegExp("^[a-zA-Z \b]+$");
    var key = String.fromCharCode(!event.charCode ? event.which : event.charCode);
    if (!regex.test(key)) {
        event.preventDefault();
        return false;
    }
});
//////////////////////////////////////////////////////////////////
$("#phone_numberpop").change(function () {
    var phone = $("#phone_numberpop").val();
    var phoneno = /^[0-9]{7,15}$/;
    if (phone.match(phoneno)) {
        $.ajax({
            url: validationForm,
            method: "POST",
            data: {
                type: 2,
                phoneNumber: phone,
                "_token": token
            },
            beforeSend: function () {
                $('#popsubmit').text("Please wait");

                $('#popsubmit').css("opacity", 0.5);

            },
            success: function (the_result) {
                if (the_result == 1) {
                    var phnumv1 = $("#phone_numberpop").val();
                    $("#phone_number").val(phnumv1);
                    var fnamevalid = $("#fname_validation").val();
                    var lnamevalid = $("#lname_validation").val();
                    var emailvalid = $("#email_validation").val();
                    var zipcodevalid = $("#zipcode_validation").val();
                    var streetvalid = $("#street_validation").val();


                    $("#phone_validation").val(1);
                    $("#phone_form_validation").val(1);

                    var phonenumvalid = $("#phone_validation").val();

                    if ((phonenumvalid == 1) && (emailvalid == 1) && (zipcodevalid == 1) && (streetvalid == 1) && (lnamevalid == 1) && (fnamevalid == 1)) {
                        $('#popsubmit').removeClass("link-inactive");
                        $('#submitform').removeClass("link-inactive");
                        $('#popsubmit').css("opacity", 1);
                    }
                    else
                    {
                        $('#popsubmit').addClass("link-inactive");
                    }

                    var phone_form_validation = $("#phone_form_validation").val();
                    var email_form_validation = $("#email_form_validation").val();
                    if (phone_form_validation == 1 && email_form_validation == 1) {
                        $('#next6').removeClass("link-inactive");
                        $('#next6').css("opacity", 1);
                    }

                    // console.log(phonenumvalid);


                    $('.cifpop').css("color", "green");
                    $("#phone_numberpop").css("border", "1px solid green");
                    $('.phonenumspan').empty();
                    $(".rfphone").empty();
                    $("#phone_number").removeClass("inputs-error");

                } else {

                    $('#popsubmit').text("Next");
                    $('.cifpop').css("color", "red");
                    $("#phone_numberpop").css("border", "1px solid red");
                    $('.phonenumspan').text("Please Enter A Valid Number!").css({
                        "color": "red",
                        "font-size": " 12px"
                    });
                    $("#phone_validation").val(0);
                    $('#popsubmit').addClass("link-inactive");
                }
            }
        });
        return true;
    } else {
        $('.cifpop').css("color", "red");
        $("#phone_numberpop").css("border", "1px solid red");
        $('.phonenumspan').text("Only Numbers Are Allowed").css({
            "color": "red",
            "font-size": " 12px"
        });
        $("#phone_validation").val(0);
        $('#popsubmit').addClass("link-inactive");
    }
});
///////////////////// message on focusing out from empty input field////////////////////////

$("#phone_numberpop").focusout(function () {
    if ($("#phone_numberpop").val().length === 0) {
        $('.cifpop').css("color", "red");
        $("#phone_numberpop").css("border", "1px solid red");
        $('.phonenumspan').text("Please Enter Your Phone Number!").css({
            "color": "red",
            "font-size": " 12px"
        });
        $('#popsubmit').addClass("link-inactive");
    }
});

///////////////////////////////////////////////////////////

// email validation on popup
$("#emailpop").focusout(function () {
    if ($('#emailpop').val().length == 0) {
        $("#email_form_validation").val(0);
        $('.emailhpop').css("color", "red");
        $("#emailpop").css("border", "1px solid red");
        $('.emailspan').text("Please Enter A Valid Email Address!").css({
            "color": "red",
            "font-size": " 12px"
        });
    }
    else {
        var email = $("#emailpop").val();
        var regExp = /[a-zA-Z]/g;
        var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
        var emailaddressVal = $("#emailpop").val();
        if (!emailReg.test(emailaddressVal)) {
            $("#email_form_validation").val(0);
            $('.emailhpop').css("color", "red");
            $("#emailpop").css("border", "1px solid red");
            $('.emailspan').text("Please Enter A Valid Email Address!").css({
                "color": "red",
                "font-size": " 12px"
            });
            $('#popsubmit').addClass("link-inactive");

        } else if (emailaddressVal.indexOf("@") >= 0) {
            var numchs = emailaddressVal.split("@");
            var chdom = numchs[1].split(".");
            if ((!regExp.test(numchs[0])) || (!regExp.test(chdom[0])))
            {
                $("#email_form_validation").val(0);
                $('.emailhpop').css("color", "red");
                $("#emailpop").css("border", "1px solid red");
                $('.emailspan').text("Please Enter A Valid Email Address!").css({
                    "color": "red",
                    "font-size": " 12px"
                });
                $('#popsubmit').addClass("link-inactive");
            }
            else {
                var email = $("#emailpop").val();
                $.ajax({
                    url: validationForm,
                    method: "POST",
                    data: {
                        type: 1,
                        content: email,
                        "_token": token
                    },
                    beforeSend: function () {

                        $('#popsubmit').addClass("link-inactive");
                    },
                    success: function (the_result) {
                        if (the_result == 1) {
                            /////////////////phoneNumber///////////////////////////
                            var emailv2 = $("#emailpop").val();
                            $("#email").val(emailv2);
                            $("#email").removeClass("inputs-error");
                            $("rfemail").empty();
                            var fnamevalid = $("#fname_validation").val();
                            var lnamevalid = $("#lname_validation").val();
                            var phonenumvalid = $("#phone_validation").val();
                            var zipcodevalid = $("#zipcode_validation").val();
                            var streetvalid = $("#street_validation").val();

                            $("#email_validation").val(1);
                            $("#email_form_validation").val(1);

                            var emailvalid = $("#email_validation").val();
                            if ((phonenumvalid == 1) && (emailvalid == 1) && (zipcodevalid == 1) && (streetvalid == 1) && (lnamevalid == 1) && (fnamevalid == 1)) {
                                $('#popsubmit').removeClass("link-inactive");
                                $('#submitform').removeClass("link-inactive");
                                $('#popsubmit').css("opacity", 1);

                            } else {
                                $('#popsubmit').addClass("link-inactive");
                                $('#popsubmit').css("opacity", 0.5);
                            }
                            var phone_validations = $("#phone_form_validation").val();
                            if (phone_validations == 1) {
                                $('#next6').text("Next");
                                $('#next6').css("opacity", 1);
                                $('#next6').removeClass("link-inactive");
                                $("rfemail").empty();
                            }
                            else {
                                $('#popsubmit').addClass("link-inactive");
                            }
                            // console.log(emailvalid);

                            $('.emailhpop').css("color", "green");
                            $("#emailpop").css("border", "1px solid green");
                            $('.emailspan').empty();
                            $("#email").val($("#emailpop").val());

                            $(".rfemail").empty();
                            $("#email").removeClass("inputs-error");
                            ////////////////////////////////////////////////

                        } else {
                            $('.emailhpop').css("color", "red");
                            $("#emailpop").css("border", "1px solid red");
                            $('.emailspan').text("Please Enter A Valid Email Address!").css({
                                "color": "red",
                                "font-size": " 12px"
                            });

                            $("#email_validation").val(0);
                            $('#popsubmit').addClass("link-inactive");
                        }
                    }
                });
            }
        }else {
            $("#email_form_validation").val(0);
            $(".rfemail").text("Please Enter A Valid Email Address!");
            $("#email").addClass("inputs-error");
            $('#next6').addClass("link-inactive");
        } }

});


//////////////// street name on popup ////////////////////////
// street name validation on popup
$("#street_namepop").focusout(function () {
    var street_name = $(this).val();
    if (street_name == "") {
        $('.stadpop').css("color", "red");
        $("#street_namepop").css("border", "1px solid red");
        $('.streetspan').text("Please Enter Your Streer Address!").css({
            "color": "red",
            "font-size": " 12px"
        });
        $('#popsubmit').addClass("link-inactive");
    } else if (street_name.length < 3) {
        $('.stadpop').css("color", "red");
        $("#street_namepop").css("border", "1px solid red");
        $('.streetspan').text("Please Enter A Valid Address!").css({
            "color": "red",
            "font-size": " 12px"
        });
        $('#popsubmit').addClass("link-inactive");
    } else {
        var street_name = $('#street_namepop').val();
        $.ajax({
            url: validationForm,
            method: "POST",
            data: {
                type: 1,
                content: street_name,
                "_token": token
            },
            beforeSend: function () {
                $('#popsubmit').text("Please wait");
                $('#popsubmit').css("opacity", 0.5);
            },
            success: function (the_result) {
                if (the_result == 1) {
                    var saddv1 = $("#street_namepop").val();
                    $("#street_name").val(saddv1);
                    var lnamevalid = $("#lname_validation").val();
                    var phonenumvalid = $("#phone_validation").val();
                    var emailvalid = $("#email_validation").val();
                    var zipcodevalid = $("#zipcode_validation").val();
                    var fnamevalid = $("#fname_validation").val();



                    $("#street_validation").val(1);

                    var streetvalid = $("#street_validation").val();
                    if ((phonenumvalid == 1) && (emailvalid == 1) && (zipcodevalid == 1) && (streetvalid == 1) && (lnamevalid == 1) && (fnamevalid == 1)) {
                        $('#popsubmit').removeClass("link-inactive");
                        $('#submitform').removeClass("link-inactive");
                        $('#popsubmit').css("opacity", 1);
                    }
                    else
                    {
                        $('#popsubmit').addClass("link-inactive");
                    }

                    $('.stadpop').css("color", "green");
                    $("#street_namepop").css("border", "1px solid green");
                    $('.streetspan').empty();
                    $(".rfstreet").empty();
                    $("#street_name").removeClass("inputs-error");

                    return true;
                } else {
                    $('.stadpop').css("color", "red");
                    $("#street_namepop").css("border", "1px solid red");
                    $('.streetspan').text("Please Enter A Valid Address!").css({
                        "color": "red",
                        "font-size": " 12px"
                    });
                    $('#popsubmit').addClass("link-inactive");
                    $("#street_validation").val(0);
                }
            }
        });
    }
});

$("#popsubmit").click(function (e) {

    $('#submitform').addClass("link-inactive");
    var leadId = $('#leadid_token').val();
    e.preventDefault();
    $.ajax({
        url: FormController,
        method: "POST",
        data: {
            "data": $("#contactpop").serialize(),
            "universal_leadid": leadId,
            "_token": token
        },
        beforeSend: function () {
            $("#popsubmit").hide();
            $(".buttonloadpop").show();
        },
        timeout: 1000,
        error: function(){
            var tsValue = $("#tc").val();
            var gValue  = $("#g").val();
            var cValue  = $("#c").val();
            var kValue  = $("#k").val();
            var visitor_idValue = $("#visitor_id").val();
            var tokenValue  = $("#token").val();
            if(typeof tsValue != "undefined"){var ts = "ts="+tsValue+"&";}else{var ts = "";}
            if(typeof gValue != "undefined") {var g = "g="+gValue+"&";}else{var g = "";}
            if(typeof cValue != "undefined") {var c = "c="+cValue+"&";}else{var c = "";}
            if(typeof kValue != "undefined") {var k = "k="+kValue+"&";}else{var k = "";}
            if(typeof visitor_idValue != "undefined") {var visitor_id = "visitor_id="+visitor_idValue+"&";}else{var visitor_id = "";}
            if(typeof tokenValue != "undefined") {var token = "token="+tokenValue;}else{var token = "";}
            var url = "/Thank-You";
            var parameter= "?"+ts+g+c+k+visitor_id+token;
            var res = url.concat(parameter);
            window.location.href = res;
        },
        success: function (the_result) {
            var tsValue = $("#tc").val();
            var gValue  = $("#g").val();
            var cValue  = $("#c").val();
            var kValue  = $("#k").val();
            var visitor_idValue = $("#visitor_id").val();
            var tokenValue  = $("#token").val();
            if(typeof tsValue != "undefined"){var ts = "ts="+tsValue+"&";}else{var ts = "";}
            if(typeof gValue != "undefined") {var g = "g="+gValue+"&";}else{var g = "";}
            if(typeof cValue != "undefined") {var c = "c="+cValue+"&";}else{var c = "";}
            if(typeof kValue != "undefined") {var k = "k="+kValue+"&";}else{var k = "";}
            if(typeof visitor_idValue != "undefined") {var visitor_id = "visitor_id="+visitor_idValue+"&";}else{var visitor_id = "";}
            if(typeof tokenValue != "undefined") {var token = "token="+tokenValue;}else{var token = "";}
            var url = "/Thank-You";
            var parameter= "?"+ts+g+c+k+visitor_id+token;
            var res = url.concat(parameter);
            window.location.href = res;
        }
    });
});


$("#zipcodepop , #fnamepop , #lnamepop , #phone_numberpop , #emailpop , #street_namepop").keydown(function(e)
{
    var keycode = (e.keyCode ? e.keyCode : e.which);
    if(keycode == 13)
    {
        e.preventDefault();
        return false;
    }
});
$(".myBtn").click(function ()
{
    $("body , html").scrollTop(0);
});

yosef@allieddigitalmedia.net
password:yosef@allied
