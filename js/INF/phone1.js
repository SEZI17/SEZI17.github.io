$(function() {
    if($(window).width() < 767) {
        $('.front').click(function(){
            $(this).css('display','none');
            $(this).next().css('display','block');
        });
    
        $('.back').click(function(){
            $(this).css('display','none');
            $(this).prev().css('display','block');
        });  
    }
});