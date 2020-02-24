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

    $("form").submit(function(){
        var name = $("#formGroupExampleInput1").val();
        var email = $("#formGroupExampleInput2").val();
        var message = $("#exampleFormControlTextarea1").val();

        alert(name+ '  we have received your message. Thank you fro reaching out to us.')
        $("form").trigger('reset');
    })
});
