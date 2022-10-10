$(window).on('load', function() {
    "use strict";

    /*----------------------------------------------------*/
    /*    Preloader
    /*----------------------------------------------------*/

    $("#loader").delay(100).fadeOut();
    $("#loader-wrapper").delay(100).fadeOut("fast");

    $(window).stellar({});

});

$(window).on('scroll', function() {
    "use strict";

    /*----------------------------------------------------*/
    /*    Navigtion Menu Scroll
    /*----------------------------------------------------*/

    var b = $(window).scrollTop();

    if( b > 72 ){
        $(".navbar").addClass("scroll");
    } else {
        $(".navbar").removeClass("scroll");
    }

});

$(document).ready(function() {
    "use strict"


    /*----------------------------------------------------*/
    /*    Animated Scroll To Anchor
    /*----------------------------------------------------*/

    $('.header a[href^="#"], .page a.btn[href^="#"], .page a.internal-link[href^="#"]').on('click', function (e) {

        e.preventDefault();

        var target = this.hash,
            $target = jQuery(target);

        $('html, body').stop().animate({
            'scrollTop': $target.offset().top - 60 // - 200px (nav-height)
        }, 'slow', 'easeInSine', function () {
            window.location.hash = '1' + target;
        });

    });


    /*----------------------------------------------------*/
    /*    ScrollUp
    /*----------------------------------------------------*/

    $.scrollUp = function (options) {

        // Defaults
        var defaults = {
            scrollName: 'scrollUp', // Element ID
            topDistance: 600, // Distance from top before showing element (px)
            topSpeed: 800, // Speed back to top (ms)
            animation: 'fade', // Fade, slide, none
            animationInSpeed: 200, // Animation in speed (ms)
            animationOutSpeed: 200, // Animation out speed (ms)
            scrollText: '', // Text for element
            scrollImg: false, // Set true to use image
            activeOverlay: false // Set CSS color to display scrollUp active point, e.g '#00FFFF'
        };

        var o = $.extend({}, defaults, options),
            scrollId = '#' + o.scrollName;

        // Create element
        $('<a/>', {
            id: o.scrollName,
            href: '#top',
            title: o.scrollText
        }).appendTo('body');

        // If not using an image display text
        if (!o.scrollImg) {
            $(scrollId).text(o.scrollText);
        }

        // Minium CSS to make the magic happen
        $(scrollId).css({'display':'none','position': 'fixed','z-index': '2147483647'});

        // Active point overlay
        if (o.activeOverlay) {
            $("body").append("<div id='"+ o.scrollName +"-active'></div>");
            $(scrollId+"-active").css({ 'position': 'absolute', 'top': o.topDistance+'px', 'width': '100%', 'border-top': '1px dotted '+o.activeOverlay, 'z-index': '2147483647' });
        }

        // Scroll function
        $(window).on('scroll', function(){
            switch (o.animation) {
            case "fade":
                $( ($(window).scrollTop() > o.topDistance) ? $(scrollId).fadeIn(o.animationInSpeed) : $(scrollId).fadeOut(o.animationOutSpeed) );
                break;
            case "slide":
                $( ($(window).scrollTop() > o.topDistance) ? $(scrollId).slideDown(o.animationInSpeed) : $(scrollId).slideUp(o.animationOutSpeed) );
                break;
            default:
                $( ($(window).scrollTop() > o.topDistance) ? $(scrollId).show(0) : $(scrollId).hide(0) );
            }
        });

        // To the top
        $(scrollId).on('click', function(event){
            $('html, body').animate({scrollTop:0}, o.topSpeed);
            event.preventDefault();
        });

    };

    $.scrollUp();


    /*----------------------------------------------------*/
    /*    Video Link #1 Lightbox
    /*----------------------------------------------------*/

    $('.video-popup1').magnificPopup({
        type: 'iframe',
        iframe: {
            patterns: {
                youtube: {
                    index: 'youtube.com',
                    src: 'https://www.youtube.com/embed/SZEflIVnhH8'
                }
            }
        }
    });


    /*----------------------------------------------------*/
    /*    Video Link #2 Lightbox
    /*----------------------------------------------------*/

    $('.video-popup2').magnificPopup({
        type: 'iframe',
        iframe: {
            patterns: {
                youtube: {
                    index: 'youtube.com',
                    src: 'https://www.youtube.com/embed/7e90gBu4pas'
                }
            }
        }
    });


    /*----------------------------------------------------*/
    /*    Statistic Counter
    /*----------------------------------------------------*/

    $('.count-element').each(function () {
        $(this).appear(function() {
            $(this).prop('Counter',0).animate({
                Counter: $(this).text()
            }, {
                duration: 4000,
                easing: 'swing',
                step: function (now) {
                    $(this).text(Math.ceil(now));
                }
            });
        },{accX: 0, accY: 0});
    });


    /*----------------------------------------------------*/
    /*    Testimonials Rotator
    /*----------------------------------------------------*/

    var owl = $('.reviews-holder');
    owl.owlCarousel({
        items: 3,
        loop:true,
        autoplay:true,
        navBy: 1,
        autoplayTimeout: 4500,
        autoplayHoverPause: false,
        smartSpeed: 1500,
        responsive:{
            0:{
                items:1
            },
            767:{
                items:1
            },
            768:{
                items:2
            },
            991:{
                items:3
            },
            1000:{
                items:3
            }
        }
    });


    /*----------------------------------------------------*/
    /*    Reviews Grid
    /*----------------------------------------------------*/

    $('.grid-loaded').imagesLoaded(function () {
        var $grid = $('.masonry-wrap').isotope({
            itemSelector: '.review-2',
            percentPosition: true,
            transitionDuration: '0.7s',
            masonry: {
                columnWidth: '.review-2',
            }
        });
    });


    /*----------------------------------------------------*/
    /*    Brands Logo Rotator
    /*----------------------------------------------------*/

    var owl = $('.brands-carousel');
    owl.owlCarousel({
        items: 6,
        loop:true,
        autoplay:true,
        navBy: 1,
        autoplayTimeout: 4000,
        autoplayHoverPause: false,
        smartSpeed: 2000,
        responsive:{
            0:{
                items:2
            },
            550:{
                items:3
            },
            767:{
                items:3
            },
            768:{
                items:4
            },
            991:{
                items:4
            },
            1000:{
                items:6
            }
        }
    });


    /*----------------------------------------------------*/
    /*    Hero Form Validation
    /*----------------------------------------------------*/

    $(".hero-form").validate({
        rules:{
            name:{
                required: true,
                minlength: 2,
                maxlength: 16,
            },
            email:{
                required: true,
                email: true,
            },
            phone:{
                required: true,
                digits: true,
            },
            subject:{
                required: true,
                minlength: 2,
            }
        },
        messages:{
            name:{
                required: "Please enter no more than (1) characters"
            },
            email:{
                required: "We need your email address to contact you",
                email: "Your email address must be in the format of name@domain.com"
            },
            phone:{
                required: "Please enter only digits",
                digits: "Please enter a valid number"
            },
            subject:{
                required: "Please enter no more than (1) characters"
            },
        }
    });


    /*----------------------------------------------------*/
    /*    Register Form Validation
    /*----------------------------------------------------*/

    $(".register-form").validate({
        rules:{
            name:{
                required: true,
                minlength: 2,
                maxlength: 16,
            },
            email:{
                required: true,
                email: true,
            }
        },
        messages:{
            name:{
                required: "Please enter no more than (1) characters"
            },
            email:{
                required: "We need your email address to contact you",
                email: "Your email address must be in the format of name@domain.com"
            },
        }
    });


    /*----------------------------------------------------*/
    /*    Contact Form Validation
    /*----------------------------------------------------*/

    $(".contact_-form").validate({
        rules:{
            name:{
                required: true,
                minlength: 1,
                maxlength: 16,
            },
            email:{
                required: true,
                email: true,
            },
            message:{
                required: true,
                minlength: 2,
            }
        },
        messages:{
            name:{
                required: "Please enter no more than (1) characters"
            },
            email:{
                required: "We need your email address to contact you",
                email: "Your email address must be in the format of name@domain.com"
            },
            message:{
                required: "Please enter no more than (2) characters"
            },
        }
    });


    /*----------------------------------------------------*/
    /*    Comment Form Validation
    /*----------------------------------------------------*/

    $(".comment-form").validate({
        rules:{
            name:{
                required: true,
                minlength: 1,
                maxlength: 16,
            },
            email:{
                required: true,
                email: true,
            },
            message:{
                required: true,
                minlength: 2,
            }
        },
        messages:{
            name:{
                required: "Please enter no more than (1) characters"
            },
            email:{
                required: "We need your email address to contact you",
                email: "Your email address must be in the format of name@domain.com"
            },
            message:{
                required: "Please enter no more than (2) characters"
            },
        }
    });


    /*----------------------------------------------------*/
    /*    Sticky Bottom Quick
    /*----------------------------------------------------*/

    $('.nb-form').hover(function(){
        $(this).toggleClass("open");
    });


});

/**
 * Telr.io (Vue.js) Application
 */
window.telrApp = new Vue({
    el: '#app',
    data: {
        fullName_: '',
        contact_: '',
    },
    computed: {
        contact: {
            get: function () {
                return this.contact_
            },
            set: function (_newVal) {
                /* Update main app. */
                this.contact_ = _newVal

                /* Update modal. */
                demoModal.contact_ = _newVal
            },
        },
        fullName: {
            get: function () {
                return this.fullName_
            },
            set: function (_newVal) {
                /* Update main app. */
                this.fullName_ = _newVal

                /* Update modal. */
                demoModal.fullName_ = _newVal
            },
        },
    },
    methods: {
        joinSlack: function () {
            alert('Please send a request to support@modenero.com')
        },
    },
    mounted: function () {
        console.log('Telr is mounted!')
    },
})

/**
 * Request Demo Modal
 */
window.demoModal = new Vue({
    el: '#requestDemoModal',
    data: {
        heading: 'Request A Live Demo',
        fullName_: '',
        contact_: '',
    },
    computed: {
        contact: {
            get: function () {
                return this.contact_
            },
            set: function (_newVal) {
                /* Update modal. */
                this.contact_ = _newVal

                /* Update main app. */
                telrApp.contact_ = _newVal
            },
        },
        fullName: {
            get: function () {
                return this.fullName_
            },
            set: function (_newVal) {
                /* Update modal. */
                this.fullName_ = _newVal

                /* Update main app. */
                telrApp.fullName_ = _newVal
            },
        },
    },
    methods: {
        sendRequest: async function () {
            /* Validate full name. */
            if (!this.fullName) {
                return alert('Please enter your first and last name.')
            } else {
                /* Parse name parts. */
                const nameParts = this.fullName.split(' ')

                /* Validate name parts. */
                if (nameParts.length < 2) {
                    return alert('Please enter BOTH your first AND last name.')
                }
            }

            /* Validate contact. */
            if (!this.contact) {
                return alert('Please enter a contact (email or mobile) for us to send an invitation.')
            }

            const url = 'https://api.telr.io/v1/slack/invite'

            const data = {
                action: 'Requesting invitation to #telr slack channel.',
                fullName: this.fullName_,
                contact: this.contact_
            }

            const response = await fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            })

            // console.log('RESPONSE', response)

            alert(`Thank you ${this.fullName.split(' ')[0]}!\nYour request has been sent to [ ${this.contact} ]\n\nCheck your INBOX or MESSAGES shortly for an invite\nto our "official" #TELR channel on Slack.`)

            $('#requestDemoModal').modal('hide')
        },
    },
    mounted: function () {
        console.log('Modal is mounted!')
    },
})
