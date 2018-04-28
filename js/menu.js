

$(document).ready(function() {
    $('.menu__item').click(function() {
        $('.menu__item').removeClass('active1');
        $(this).addClass('active1');
        $(this).location.href = url.value;
        return false;
    });

});



