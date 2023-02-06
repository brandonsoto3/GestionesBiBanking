    $(document).ready(function() {
        $('#tokenMetodo').hide();
        $('#tokenMetodo').hide();
        $('#loadingsms').hide();
        $('#loadingemail').hide();    
    });


     $('#sms_token').click(function(event){
        $('#token').hide();
        $('#loadingsms').show();
        inter();
        $('#tokenMetodo').hide();
        loadit();
    });

    $('.token_ret').click(function(event){
        $('#token').show();
        $('#tokenMetodo').hide();
        $('#tokenMetodo').hide(0);
        $('#txtsms').hide();
        $('#txtemail').hide();
        reload();
    });


    $('#email_token').click(function(event){
        $('#token').hide();
        $('#loadingemail').show();
        interemail();
        $('#tokenMetodo').hide();
        loadit();
    });



    $('#generaTokenMail').click(function(event){
    	
    	       reloadZero();
 $('#tokenMetodo').hide();
        $('#loadingemail').show();
        interemail();
        $('#tokenMetodo').hide();
        loadit();
    });







     $('#generatokenMetodo').click(function(event){
     	reloadZero();
        $('#tokenMetodo').hide();
        

        $('#loadingsms').show();
        inter();
        $('#tokenMetodo').hide();
        loadit();
    });


    function interemail() {
        setTimeout(function(){
            $('#loadingemail').hide();
            $('#tokenMetodo').show();
        },1200);
    };

    function inter() {
        setTimeout(function(){
            $('#loadingsms').hide();
            $('#tokenMetodo').show();
        },1200);
    };



    function loadit() {
        $('#mask').show();
        $('#bar').animate({ 'width' : '100%' }, 300, function() {
            $('#bar2').animate({'height' : '100%' }, 300, function(){  
                $('#bar3').animate({'width' : '100%' }, 300, function(){ 
                    $('#bar4').animate({'height' : '100%' }, 300, function(){})
                })
            })
        });
    };



    function reload() {

        $('#mask').show();
        $('#bar4').animate({ 'height' : '0%' }, 100, function(){ 
            $('#bar3').animate({'width' : '0%' }, 100, function(){
                $('#bar2').animate({'height' : '0%' }, 100, function(){
                    $('#bar').animate({'width' : '0%' }, 100, function(){
                    })
                })
            })
        });
    };

        function reloadZero() {

        $('#mask').show();
        $('#bar4').animate({ 'height' : '0%' }, 0, function(){ 
            $('#bar3').animate({'width' : '0%' }, 0, function(){
                $('#bar2').animate({'height' : '0%' }, 0, function(){
                    $('#bar').animate({'width' : '0%' }, 0, function(){
                    })
                })
            })
        });
    };


      


