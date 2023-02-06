    $(document).ready(function() {
        $('#tokensms').hide();
        $('#tokenemail').hide();
        $('#loadingsms').hide();
        $('#loadingemail').hide();    
    });


     $('#sms_token').click(function(event){
        $('#token').hide();
        $('#loadingsms').show();
        inter();
        $('#tokenemail').hide();
        loadit();
    });

    $('.token_ret').click(function(event){
        $('#token').show();
        $('#tokenemail').hide();
        $('#tokensms').hide(0);
        reload();
    });


    $('#email_token').click(function(event){
        $('#token').hide();
        $('#loadingemail').show();
        interemail();
        $('#tokensms').hide();
        loadit();
    });



    $('#generaTokenMail').click(function(event){
    	
    	       reloadZero();
 $('#tokenemail').hide();
        $('#loadingemail').show();
        interemail();
        $('#tokensms').hide();
        loadit();
    });







     $('#generaTokenSMS').click(function(event){
     	reloadZero();
        $('#tokensms').hide();
        $('#loadingsms').show();
        inter();
        $('#tokenemail').hide();
        loadit();
    });


    function interemail() {
        setTimeout(function(){
            $('#loadingemail').hide();
            $('#tokenemail').show();
        },1200);
    };

    function inter() {
        setTimeout(function(){
            $('#loadingsms').hide();
            $('#tokensms').show();
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


      


