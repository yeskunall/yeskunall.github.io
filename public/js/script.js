$(document).ready(function () {

    //Sticky nav magic goes here

    $('.js--about').waypoint(function (direction) {
        if (direction == "down") {
            $('nav').addClass('sticky-nav');
        } else {
            $('nav').removeClass('sticky-nav');
        }
    }, {
        offset: '150px;'
    });

    //Click on button and woosh!

    $('.js--scroll-to-about').click(function () {

        $('html, body').animate({
            scrollTop: $('.js--about').offset().top
        }, 2000);

    });

    $('.js--scroll-to-contact').click(function () {

        $('html, body').animate({
            scrollTop: $('.js--contact').offset().top
        }, 2000);
    });

    //nav scroll magic taken from css tricks

    $(function () {
        $('a[href*=#]:not([href=#])').click(function () {
            if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                if (target.length) {
                    $('html,body').animate({
                        scrollTop: target.offset().top
                    }, 1000);
                    return false;
                }
            }
        });
    });
});