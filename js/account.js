
$(document).ready(function() {
    $('.choice').click(function() {
        var notBeActive = !$(this).hasClass('active');
        if (notBeActive) {
            $(this).html(+$(this).html() + 1);
            $(this).addClass('active');
        } else {
            $(this).html(+$(this).html() - 1);
            $(this).removeClass('active');
        }
    });
});


$('.d-block').each(function(){
    $(this).bind('click', function(){
            $('.account__pictures').css('background', "url('" + $(this).attr("src") + "')  no-repeat center / cover");
        }.bind(this)
    )});









