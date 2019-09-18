$(function(){
    $('.cost').css('display','none');
    $('.faq').bind('click',function(){
        $(this).children().slideToggle();
        return false;
    });
});