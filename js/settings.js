
$('.setting__button').each(function(){
    $(this).bind('click', function(){
            $('.wrapper1').css('background', "url('" + $(this).attr("name") + "')  no-repeat center / cover");
        }.bind(this)
    )});