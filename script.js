$(function() {

    $('.solution-box').hover(function() {
        $(this).children('.solution-box-front').slideToggle();
    });

    $('.image-box').hover(function() {
        $(this).children('.image-box-info').slideToggle();
    });

    $('.header-button').click(function(e) {
        e.preventDefault();

        var destination = $(this).attr('href');
        $('body,html').animate({scrollTop: $(destination).offset().top}, 500);
    });

    $('.job-button').on('click', function() {
        $(this).siblings('.job-list').slideToggle();
    })

    $('.nav-icon').on('click', function() {
        spinHeaderToggle();
        $('.header-button-panel').slideToggle('slow');
    });

    $('.header-button').on('click', function() {
        spinHeaderToggle();
        $('.header-button-panel').slideToggle('slow');
    });

    $('.exec-img').hover(function() {
        $(this).children(".exec-info-background").fadeToggle('fast');
        $(this).children('.exec-info').slideToggle('fast');

    });


});

function spinHeaderToggle() {
    var element = $('.nav-icon');

    if(element.hasClass('active-drop-down')) {
        element.removeClass('active-drop-down');
        element.addClass('de-active-drop-down')
    } else {
        element.addClass('active-drop-down');
        element.removeClass('de-active-drop-down');
    }
}