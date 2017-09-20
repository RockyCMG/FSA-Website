$(function () {


    /********************** CLICK EVENTS ************************/

    $('.header-button').click(function (e) {
        e.preventDefault();
        scrollToElement($(this).attr('href'));
    });

    $('.header-button-full').click(function (e) {
        e.preventDefault();
        scrollToElement($(this).attr('href'));
    });

    $('.job-button').on('click', function () {
        $(this).siblings('.job-list').slideToggle();
    })

    $('.nav-icon').on('click', function () {
        spinHeaderToggle();
        $('.header-button-panel').slideToggle('slow');
    });

    $('.header-button').on('click', function () {
        spinHeaderToggle();
        $('.header-button-panel').slideToggle('slow');
    });

    $('.scroll-to-top').on('click', function () {
        scrollToTop();
    });


    /********************** HOVER EVENTS ************************/

    $('.solution-box').hover(function () {
        $(this).children('.solution-box-front').slideToggle();
    });

    $('.image-box').hover(function () {
        $(this).children('.image-box-info').slideToggle();
    });

    $('.exec-img').hover(function () {
        $(this).children(".exec-info-background").fadeToggle('fast');
        $(this).children('.exec-info').slideToggle('fast');
    });


    /********************** SCROLL EVENTS ************************/

    $(document).scroll(function () {
        let triggerPos = $('#culture').position().top;
        let screenPos = $(window).scrollTop();
        let $scrollButton = $('.scroll-to-top');

        if (screenPos > triggerPos) {
            $scrollButton.fadeIn('fast');
        }

        if (screenPos < triggerPos) {
            $scrollButton.fadeOut('fast');
        }
    });


    /********************** FORM SUBMIT ************************/

    const URL = 'https://fsaventures.com/mail/contact.php';

    $('#contact-form').submit(function (e) {

        e.preventDefault();

        const data = {
            name: $('#name').val(),
            email: $('#email').val(),
            phone: $('#phone').val(),
            subject: $('#subject').val(),
            message: $('#message').val()
        };

        $.ajax({
            type: 'POST',
            url: URL,
            dataType: 'json',
            contentType: 'application/json',
            data: JSON.stringify(data),
            success: function () {
                alert("Email has been successfully sent");
            },
            error: function () {
                alert("Error Occurred Email was not Sent");
            }
        })
    })

});

function scrollToElement(destination) {
    $('body,html').animate({scrollTop: $(destination).offset().top}, "slow");
}

function scrollToTop() {
    $("html, body").animate({scrollTop: 0}, "fast");
}

function spinHeaderToggle() {
    let element = $('.nav-icon');

    if (element.hasClass('active-drop-down')) {
        element.removeClass('active-drop-down');
        element.addClass('de-active-drop-down')
    } else {
        element.addClass('active-drop-down');
        element.removeClass('de-active-drop-down');
    }
}
