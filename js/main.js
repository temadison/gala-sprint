(function (window, $) {
    'use strict';

    // Cache document for fast access.
    var document = window.document;


    function mainSlider() {
        $('.site-slider').bxSlider({
            pagerCustom: '#site-bx-pager',
            mode: 'fade',
            nextText: '',
            prevText: '',
            auto: true
        });
    }

    function eventItemSlider1() {
        $('.event-item-slider-1').bxSlider({
            pagerCustom: '#event-item-bx-pager',
            mode: 'fade',
            nextText: '',
            prevText: '',
            auto: true
        });
    }

    function eventItemSlider2() {
        $('.event-item-slider-2').bxSlider({
            pagerCustom: '#event-item-bx-pager',
            mode: 'fade',
            nextText: '',
            prevText: '',
            auto: true,
            autoDelay: 2000
        });
    }

    mainSlider();

    eventItemSlider1();

    eventItemSlider2();


    var $links = $(".bx-wrapper .bx-controls-direction a, #site-bx-pager a, #event-item-bx-pager ul li img");
    $links.click(function () {
        $(".slider-caption").removeClass('animated fadeInLeft');
        $(".slider-caption").addClass('animated fadeInLeft');
    });

    $(".bx-controls").addClass('container');
    $(".bx-next").addClass('fa fa-angle-right');
    $(".bx-prev").addClass('fa fa-angle-left');


    $('a.toggle-menu').click(function () {
        $('.responsive .main-menu').toggle();
        return false;
    });

    $('.responsive .main-menu a').click(function () {
        $('.responsive .main-menu').hide();

    });

    $('.main-menu').singlePageNav();


})(window, jQuery);

var map = '';

function initialize() {
    var mapOptions = {
        zoom: 14,
        center: new google.maps.LatLng(38.906756, -77.000214)
    };
    map = new google.maps.Map(document.getElementById('map'), mapOptions);
}

// load google map
var script = document.createElement('script');
script.type = 'text/javascript';
script.src = 'https://maps.googleapis.com/maps/api/js?v=3.exp&sensor=false&callback=initialize';
document.body.appendChild(script);