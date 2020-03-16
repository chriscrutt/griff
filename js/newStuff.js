$(window).on('scroll', function() {
    if ($(window).scrollTop() >= $(
            '.welcome_area').offset().top + $('.welcome_area').outerHeight() - window.innerHeight) {

        $('.home').addClass('active');
        $('.about').removeClass('active');
        $('.services').removeClass('active');
        $('.portfolio').removeClass('active');
        $('.contact').removeClass('active');

    }

    if ($(window).scrollTop() >= $(
            '.mosh-clients-area').offset().top + $('.mosh-clients-area').outerHeight() - window.innerHeight) {

        $('.home').removeClass('active');
        $('.about').addClass('active');
        $('.services').removeClass('active');
        $('.portfolio').removeClass('active');
        $('.contact').removeClass('active');

    }

    if ($(window).scrollTop() >= $(
            '#services').offset().top + $('#scroll-to3').outerHeight() - window.innerHeight) {

        $('.home').addClass('active');
        $('.about').removeClass('active');
        $('.services').removeClass('active');
        $('.portfolio').removeClass('active');
        $('.contact').removeClass('active');

    }

    if ($(window).scrollTop() >= $(
            '#portfolio').offset().top + $('#scroll-to3').outerHeight() - window.innerHeight) {

        $('.home').addClass('active');
        $('.about').removeClass('active');
        $('.services').removeClass('active');
        $('.portfolio').removeClass('active');
        $('.contact').removeClass('active');

    }

    if ($(window).scrollTop() >= $(
            '#contact').offset().top + $('#scroll-to3').outerHeight() - window.innerHeight) {

        $('.home').addClass('active');
        $('.about').removeClass('active');
        $('.services').removeClass('active');
        $('.portfolio').removeClass('active');
        $('.contact').removeClass('active');

    }

});
