$(document).ready(function(){
    $(".clickable1").click(function(){
        $(".img11").toggle();
        $(".textclickable1").toggle();
    });
    $(".clickable2").click(function(){
        $(".img22").toggle();
        $(".textclickable2").toggle();
    });
    $(".clickable3").click(function(){
        $(".img33").toggle();
        $(".textclickable3").toggle();
    });
    $('.gallery-item').hover( function() {
        $(this).find('.img-title').fadeIn(300);
    }, function() {
        $(this).find('.img-title').fadeOut(100);
    });
});
