$(function(){
    $('#haru_LRN').mouseenter(function(){        
        $('#haru_LRN').css({"background":"#444", "transition-duration":"0.3s"});
        $('#haru_LRN_dropdown').stop().slideDown();
    });
    $('.dropLRN a').mouseenter(function(){
        $('#haru_LRN').css({"background":"#666"});
        $('#haru_LRN_dropdown').stop().slideDown();
    });
    $('.dropLRN').mouseout(function(){
        $('#haru_LRN').css({"background":"#AF8672","transition-duration":"0.3s"});
        $('#haru_LRN_dropdown').stop().slideUp();
    });
    
    $('#haru_COM').mouseenter(function(){        
        $('#haru_COM').css({"background":"#444", "transition-duration":"0.3s"});
        $('#haru_COM_dropdown').stop().slideDown();
    });
    $('.dropCOM a').mouseenter(function(){
        $('#haru_COM').css({"background":"#666"});
        $('#haru_COM_dropdown').stop().slideDown();
    });
    $('.dropCOM').mouseout(function(){
        $('#haru_COM').css({"background":"#AF8672","transition-duration":"0.3s"});
        $('#haru_COM_dropdown').stop().slideUp();
    });


    $('#haru_MYP').mouseenter(function(){        
        $('#haru_MYP').css({"background":"#444", "transition-duration":"0.3s"});
        $('#haru_NYP_dropdown').stop().slideDown();
    });
    $('.dropMYP a').mouseenter(function(){
        $('#haru_MYP').css({"background":"#666"});
        $('#haru_MYP_dropdown').stop().slideDown();
    });
    $('.dropMYP').mouseout(function(){
        $('#haru_MYP').css({"background":"#AF8672","transition-duration":"0.3s"});
        $('#haru_MYP_dropdown').stop().slideUp();
    });


    $('#haru_INF').mouseenter(function(){        
        $('#haru_INF').css({"background":"#444", "transition-duration":"0.3s"});
        $('#haru_INF_dropdown').stop().slideDown();
    });
    $('.dropINF a').mouseenter(function(){
        $('#haru_INF').css({"background":"#666"});
        $('#haru_INF_dropdown').stop().slideDown();
    });
    $('.dropINF').mouseout(function(){
        $('#haru_INF').css({"background":"#AF8672","transition-duration":"0.3s"});
        $('#haru_INF_dropdown').stop().slideUp();
    });
});