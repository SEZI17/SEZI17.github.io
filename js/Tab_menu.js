
$(function(){

    // 탭 버튼 작동
    $('.gyou:eq(0)').click(function(){
        $('.tab:eq(0)').toggle('slow');
    });

    $('.gyou:eq(1)').click(function(){
        $('.tab:eq(1)').toggle('slow');
    });

    $('.gyou:eq(2)').click(function(){
        $('.tab:eq(2)').toggle('slow');
    });

    // 탭 버튼 모양

    $('.gyou').css('font-size',50)

    $('.gyou:eq(0)').text('あ')
    $('.gyou:eq(1)').text('か')
    $('.gyou:eq(2)').text('さ')
    $('.gyou:eq(3)').text('た')
    $('.gyou:eq(4)').text('な')
    $('.gyou:eq(5)').text('は')
    $('.gyou:eq(6)').text('ま')
    $('.gyou:eq(7)').text('や')
    $('.gyou:eq(8)').text('ら')
    $('.gyou:eq(9)').text('わ')

});