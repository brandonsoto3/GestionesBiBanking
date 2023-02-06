
$(function(){
    $(document).foundation({
        abide: {
            patterns: {
                cellNumber: /^(?!\s*$)[0-9\s]{8}$/,
                  numberValidationToken: /^(?!\s*$)[0-9\s]{8}$/,
                targetNumber: /^(?!\s*$)[0-9\s]{16}$/,
                number: /^[0-9]*$/,
                 dpi: /^(?!\s*$)[0-9\s]{13}$/,
                 pin: /^[a-zA-Z0-9]{4}$/,
                 tokenNumber: /^(?!\s*$)[0-9\s]{8}$/,
            }
        }
    });
});



    $(document).foundation({
         abide: {
        
            validators: {
                myValidatorMoney: function (el, required, parent) {
                      var validRegExpMonto = /^\d+(?:\.\d{1,2})?$/;
                   
                    if (el.value.length == 0) {
                        document.getElementById('nameError').innerText = "Ingresa monto.";
                        return false;

                    } else      if (validRegExpMonto.test(el.value.trim()) == false) {
                        document.getElementById('nameError').innerText =  "Monto no válido.";
                    return false;
                    } //other rules can go here
                    return true;
                },


                              myValidatorMoney1: function (el, required, parent) {
                      var validRegExpMonto = /^\d+(?:\.\d{1,2})?$/;
                   
                    if (el.value.length == 0) {
                        document.getElementById('nameError1').innerText = "Ingresa monto.";
                        return false;

                    } else      if (validRegExpMonto.test(el.value.trim()) == false) {
                        document.getElementById('nameError1').innerText =  "Monto no válido.";
                    return false;
                    } //other rules can go here
                    return true;
                },


                                           myValidatorMoneyGeneral2: function (el, required, parent) {
                      var validRegExpMonto = /^\d+(?:\.\d{1,2})?$/;
                   
                    if (el.value.length == 0) {
                        document.getElementById('nameError2').innerText = "Ingresa monto.";
                        return false;

                    } else      if (validRegExpMonto.test(el.value.trim()) == false) {
                        document.getElementById('nameError2').innerText =  "Monto no válido.";
                    return false;
                    } //other rules can go here
                    return true;
                },


                                           myValidatorMoneyGeneral3: function (el, required, parent) {
                      var validRegExpMonto = /^\d+(?:\.\d{1,2})?$/;
                   
                    if (el.value.length == 0) {
                        document.getElementById('nameError3').innerText = "Ingresa monto.";
                        return false;

                    } else      if (validRegExpMonto.test(el.value.trim()) == false) {
                        document.getElementById('nameError3').innerText =  "Monto no válido.";
                    return false;
                    } //other rules can go here
                    return true;
                },


  myValidatorMoneyGeneral4: function (el, required, parent) {
                      var validRegExpMonto = /^\d+(?:\.\d{1,2})?$/;
                   
                    if (el.value.length == 0) {
                        document.getElementById('nameError4').innerText = "Ingresa monto.";
                        return false;

                    } else      if (validRegExpMonto.test(el.value.trim()) == false) {
                        document.getElementById('nameError4').innerText =  "Monto no válido.";
                    return false;
                    } //other rules can go here
                    return true;
                },



  myValidatorMoneyGeneral5: function (el, required, parent) {
                      var validRegExpMonto = /^\d+(?:\.\d{1,2})?$/;
                   
                    if (el.value.length == 0) {
                        document.getElementById('nameError5').innerText = "Ingresa monto.";
                        return false;

                    } else      if (validRegExpMonto.test(el.value.trim()) == false) {
                        document.getElementById('nameError5').innerText =  "Monto no válido.";
                    return false;
                    } //other rules can go here
                    return true;
                },

                 myValidatorMoneyGeneral6: function (el, required, parent) {
                      var validRegExpMonto = /^\d+(?:\.\d{1,2})?$/;
                   
                    if (el.value.length == 0) {
                        document.getElementById('nameError6').innerText = "Ingresa monto.";
                        return false;

                    } else      if (validRegExpMonto.test(el.value.trim()) == false) {
                        document.getElementById('nameError6').innerText =  "Monto no válido.";
                    return false;
                    } //other rules can go here
                    return true;
                },


                                 myValidatorMoneyGeneral7: function (el, required, parent) {
                      var validRegExpMonto = /^\d+(?:\.\d{1,2})?$/;
                   
                    if (el.value.length == 0) {
                        document.getElementById('nameError7').innerText = "Ingresa monto.";
                        return false;

                    } else      if (validRegExpMonto.test(el.value.trim()) == false) {
                        document.getElementById('nameError7').innerText =  "Monto no válido.";
                    return false;
                    } //other rules can go here
                    return true;
                },


                                 myValidatorMoneyGeneral8: function (el, required, parent) {
                      var validRegExpMonto = /^\d+(?:\.\d{1,2})?$/;
                   
                    if (el.value.length == 0) {
                        document.getElementById('nameError8').innerText = "Ingresa monto.";
                        return false;

                    } else      if (validRegExpMonto.test(el.value.trim()) == false) {
                        document.getElementById('nameError8').innerText =  "Monto no válido.";
                    return false;
                    } //other rules can go here
                    return true;
                }

,


                                 myValidatorMoneyGeneral9: function (el, required, parent) {
                      var validRegExpMonto = /^\d+(?:\.\d{1,2})?$/;
                   
                    if (el.value.length == 0) {
                        document.getElementById('nameError9').innerText = "Ingresa monto.";
                        return false;

                    } else      if (validRegExpMonto.test(el.value.trim()) == false) {
                        document.getElementById('nameError9').innerText =  "Monto no válido.";
                    return false;
                    } //other rules can go here
                    return true;
                }
            
        }
    }
    });



$('.someDate').fdatepicker({
    format: 'dd/mm/yyyy',
    disableDblClickSelection: true,
    todayBtn: "linked",
    language: "es",
    autoclose: true,
    todayHighlight: true
   


});


$(".someDate").attr('maxlength','10');
$(".someToken").attr('maxlength','8');
$(".someCel").attr('maxlength','8');
$(".somePin").attr('maxlength','4');
$('.someDate').attr('autocomplete','off');

$(".numberValidationToken").attr('maxlength','8');




  $('.default-action').click(function(){
            $('input, div, form, select').removeAttr('data-invalid'); 
            $('input, div, form, select').removeAttr('required');             
            $('input, div, form, select').removeClass('error');
        });




