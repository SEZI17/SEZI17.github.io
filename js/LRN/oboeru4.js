$(document).ready(function(){

    // 체크리스트 작성
    checkList();
    // 급수별
    $('#check1').click(function(){
        checkList();
    })
    $('#check2').click(function(){
        checkList();
    })
    $('#check3').click(function(){
        checkList();
    })
    $('#check4').click(function(){
        checkList();
    })
    $('#check5').click(function(){
        checkList();
    })

    // 품사별
    $('#all').click(function(){
        checkList();
    })
    $('#meishi').click(function(){
        checkList();
    })
    $('#daimeishi').click(function(){
        checkList();
    })
    $('#doushi').click(function(){
        checkList();
    })
    $('#jyoshi').click(function(){
        checkList();
    })
    $('#keiyoushi').click(function(){
        checkList();
    })

    // 전체 버튼
    $('#all').click(function() {
        if(allCheck()){
            $('#meishi, #daimeishi, #doushi, #jyoshi, #keiyoushi').prop('checked',false);
            for(var i = 1; i < 6; i++)
                $('#check' + i).prop('checked',false);
        }else{
            $('#meishi, #daimeishi, #doushi, #jyoshi, #keiyoushi').prop('checked',true);
            for(var i = 1; i < 6; i++)
                $('#check' + i).prop('checked',true);
        }
        checkList();
    });
    function checkBtnAll(){
        checkButton($('#check1'));
        checkButton($('#check2'));
        checkButton($('#check3'));
        checkButton($('#check4'));
        checkButton($('#check5'));
        checkButton($('#meishi'));
        checkButton($('#daimeishi'));
        checkButton($('#doushi'));
        checkButton($('#jyoshi'));
        checkButton($('#keiyoushi'));
    }
    function checkButton($var){
        if($var.is(':checked'))
            $var.parent().css({'background-color':'#AF8672;',});
        else
            $var.parent().css({'background-color':'#512B37;'});
            $('#all').css({'background-color':'#AF8672;'});
    }
    function allCheck(){
        var returnVal = true;
        if(!$('#check1').is(':checked'))
            returnVal = false;
        if(!$('#check2').is(':checked'))
            returnVal = false;
        if(!$('#check3').is(':checked'))
            returnVal = false;
        if(!$('#check4').is(':checked'))
            returnVal = false;
        if(!$('#check5').is(':checked'))
            returnVal = false;
        if(!$('#meishi').is(':checked'))
            returnVal = false;
        if(!$('#daimeishi').is(':checked'))
            returnVal = false;
        if(!$('#doushi').is(':checked'))
            returnVal = false;
        if(!$('#jyoshi').is(':checked'))
            returnVal = false;
        if(!$('#keiyoushi').is(':checked'))
            returnVal = false;
        return returnVal;
    }

    // 체크리스트 구동
    function checkList(){

        checkBtnAll();
        // 1급 버튼
        if($('#check1').is(':checked')) {
            if($('#meishi').is(':checked')){
                $('.meishi[class*=n1]').stop().show(500);
            } else {
                $('.meishi').stop().hide(500);
            }
            if($('#daimeishi').is(':checked')){
                $('.daimeishi[class*=n1]').stop().show(500);
            } else {
                $('.daimeishi').stop().hide(500);
            }
            if($('#doushi').is(':checked')){
                $('.doushi[class*=n1]').stop().show(500);
            } else {
                $('.doushi').stop().hide(500);
            }
            if($('#jyoshi').is(':checked')){
                $('.jyoshi[class*=n1]').stop().show(500);
            } else {
                $('.jyoshi').stop().hide(500);
            }
            if($('#keiyoushi').is(':checked')){
                $('.keiyoushi[class*=n1]').stop().show(500);
            } else {
                $('.keiyoushi').stop().hide(500);
            }
        } else {
            $('.n1').stop().hide(500);
        }

        // 2급 버튼
        if($('#check2').is(':checked')) {
            if($('#meishi').is(':checked')){
                $('.meishi[class*=n2]').stop().show(500);
            } else {
                $('.meishi').stop().hide(500);
            }
            if($('#daimeishi').is(':checked')){
                $('.daimeishi[class*=n2]').stop().show(500);
            } else {
                $('.daimeishi').stop().hide(500);
            }
            if($('#doushi').is(':checked')){
                $('.doushi[class*=n2]').stop().show(500);
            } else {
                $('.doushi').stop().hide(500);
            }
            if($('#jyoshi').is(':checked')){
                $('.jyoshi[class*=n2]').stop().show(500);
            } else {
                $('.jyoshi').stop().hide(500);
            }
            if($('#keiyoushi').is(':checked')){
                $('.keiyoushi[class*=n2]').stop().show(500);
            } else {
                $('.keiyoushi').stop().hide(500);
            }
        } else {
            $('.n2').stop().hide(500);
        }

        // 3급 버튼
        if($('#check3').is(':checked')) {
            if($('#meishi').is(':checked')){
                $('.meishi[class*=n3]').stop().show(500);
            } else {
                $('.meishi').stop().hide(500);
            }
            if($('#daimeishi').is(':checked')){
                $('.daimeishi[class*=n3]').stop().show(500);
            } else {
                $('.daimeishi').stop().hide(500);
            }
            if($('#doushi').is(':checked')){
                $('.doushi[class*=n3]').stop().show(500);
            } else {
                $('.doushi').stop().hide(500);
            }
            if($('#jyoshi').is(':checked')){
                $('.jyoshi[class*=n3]').stop().show(500);
            } else {
                $('.jyoshi').stop().hide(500);
            }
            if($('#keiyoushi').is(':checked')){
                $('.keiyoushi[class*=n3]').stop().show(500);
            } else {
                $('.keiyoushi').stop().hide(500);
            }
        } else {
            $('.n3').stop().hide(500);
        }

        // 4급 버튼
        if($('#check4').is(':checked')) {
            if($('#meishi').is(':checked')){
                $('.meishi[class*=n4]').stop().show(500);
            } else {
                $('.meishi').stop().hide(500);
            }
            if($('#daimeishi').is(':checked')){
                $('.daimeishi[class*=n4]').stop().show(500);
            } else {
                $('.daimeishi').stop().hide(500);
            }
            if($('#doushi').is(':checked')){
                $('.doushi[class*=n4]').stop().show(500);
            } else {
                $('.doushi').stop().hide(500);
            }
            if($('#jyoshi').is(':checked')){
                $('.jyoshi[class*=n4]').stop().show(500);
            } else {
                $('.jyoshi').stop().hide(500);
            }
            if($('#keiyoushi').is(':checked')){
                $('.keiyoushi[class*=n4]').stop().show(500);
            } else {
                $('.keiyoushi').stop().hide(500);
            }
        } else {
            $('.n4').stop().hide(500);
        }

        // 5급 버튼
        if($('#check5').is(':checked')) {
            if($('#meishi').is(':checked')){
                $('.meishi[class*=n5]').stop().show(500);
            } else {
                $('.meishi').stop().hide(500);
            }
            if($('#daimeishi').is(':checked')){
                $('.daimeishi[class*=n5]').stop().show(500);
            } else {
                $('.daimeishi').stop().hide(500);
            }
            if($('#doushi').is(':checked')){
                $('.doushi[class*=n5]').stop().show(500);
            } else {
                $('.doushi').stop().hide(500);
            }
            if($('#jyoshi').is(':checked')){
                $('.jyoshi[class*=n5]').stop().show(500);
            } else {
                $('.jyoshi').stop().hide(500);
            }
            if($('#keiyoushi').is(':checked')){
                $('.keiyoushi[class*=n5]').stop().show(500);
            } else {
                $('.keiyoushi').stop().hide(500);
            }
        } else {
            $('.n5').stop().hide(500);
        }


    }

})