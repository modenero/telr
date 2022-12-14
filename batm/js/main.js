$(window).on("load", function() {
    "use strict";
    $("#loader").delay(100).fadeOut(), $("#loader-wrapper").delay(100).fadeOut("fast"), $(window).stellar({})
}), $(window).on("scroll", function() {
    "use strict";
    72 < $(window).scrollTop() ? $(".navbar").addClass("scroll") : $(".navbar").removeClass("scroll")
}), $(document).ready(function() {
    "use strict";
    $(window).width() < 769 && $(".navbar-nav li.nav-item.nl-simple").on("click", function() {
        $("#navbarSupportedContent").css("height", "1px").removeClass("in").addClass("collapse"), $("#navbarSupportedContent").removeClass("show")
    }), $('.header a[href^="#"], .page a.btn[href^="#"], .page a.internal-link[href^="#"], .page p a.internal-link[href^="#"]').on("click", function(e) {
        e.preventDefault();
        var a = this.hash,
            t = jQuery(a);
        $("html, body").stop().animate({
            scrollTop: t.offset().top - 110
        }, "slow", "easeInSine", function() {
            window.location.hash = "1" + a
        })
    }), $.scrollUp = function(e) {
        var a = $.extend({}, {
                scrollName: "scrollUp",
                topDistance: 600,
                topSpeed: 800,
                animation: "fade",
                animationInSpeed: 200,
                animationOutSpeed: 200,
                scrollText: "",
                scrollImg: !1,
                activeOverlay: !1
            }, e),
            t = "#" + a.scrollName;
        $("<a/>", {
            id: a.scrollName,
            href: "#top",
            title: a.scrollText
        }).appendTo("body"), a.scrollImg || $(t).text(a.scrollText), $(t).css({
            display: "none",
            position: "fixed",
            "z-index": "2147483647"
        }), a.activeOverlay && ($("body").append("<div id='" + a.scrollName + "-active'></div>"), $(t + "-active").css({
            position: "absolute",
            top: a.topDistance + "px",
            width: "100%",
            "border-top": "1px dotted " + a.activeOverlay,
            "z-index": "2147483647"
        })), $(window).on("scroll", function() {
            switch (a.animation) {
            case "fade":
                $($(window).scrollTop() > a.topDistance ? $(t).fadeIn(a.animationInSpeed) : $(t).fadeOut(a.animationOutSpeed));
                break;
            case "slide":
                $($(window).scrollTop() > a.topDistance ? $(t).slideDown(a.animationInSpeed) : $(t).slideUp(a.animationOutSpeed));
                break;
            default:
                $($(window).scrollTop() > a.topDistance ? $(t).show(0) : $(t).hide(0))
            }
        }), $(t).on("click", function(e) {
            $("html, body").animate({
                scrollTop: 0
            }, a.topSpeed), e.preventDefault()
        })
    }, $.scrollUp(), $(".video-popup1").magnificPopup({
        type: "iframe",
        iframe: {
            patterns: {
                youtube: {
                    index: "youtube.com",
                    src: "https://www.youtube.com/embed/SZEflIVnhH8"
                }
            }
        }
    }), $(".video-popup2").magnificPopup({
        type: "iframe",
        iframe: {
            patterns: {
                youtube: {
                    index: "youtube.com",
                    src: "https://www.youtube.com/embed/7e90gBu4pas"
                }
            }
        }
    }), $(".screens-carousel").slick({
        infinite: !0,
        autoplay: !0,
        centerMode: !0,
        dots: !0,
        autoplaySpeed: 3500,
        speed: 1e3,
        slidesToShow: 5,
        slidesToScroll: 1,
        variableWidth: !0,
        responsive: [{
            breakpoint: 769,
            settings: {
                slidesToShow: 3
            }
        }, {
            breakpoint: 480,
            settings: {
                dots: !1,
                slidesToShow: 1,
                variableWidth: !1,
                fade: !0,
                cssEase: "linear"
            }
        }]
    }), $("#reviews-1 .center").slick({
        centerMode: !0,
        autoplay: !0,
        centerPadding: "0px",
        speed: 800,
        slidesToShow: 3,
        dots: !0,
        responsive: [{
            breakpoint: 1199,
            settings: {
                arrows: !1,
                centerMode: !0,
                centerPadding: "0px",
                slidesToShow: 3
            }
        }, {
            breakpoint: 991,
            settings: {
                arrows: !1,
                centerMode: !0,
                centerPadding: "0px",
                slidesToShow: 3
            }
        }, {
            breakpoint: 800,
            settings: {
                arrows: !1,
                centerMode: !0,
                centerPadding: "0px",
                slidesToShow: 1
            }
        }, {
            breakpoint: 767,
            settings: {
                arrows: !1,
                centerMode: !0,
                centerPadding: "0px",
                slidesToShow: 1
            }
        }, {
            breakpoint: 648,
            settings: {
                arrows: !1,
                centerMode: !0,
                centerPadding: "0px",
                slidesToShow: 1
            }
        }]
    }), $(".grid-loaded").imagesLoaded(function() {
        $(".masonry-wrap").isotope({
            itemSelector: ".review-3",
            percentPosition: !0,
            transitionDuration: "0.7s",
            masonry: {
                columnWidth: ".review-3"
            }
        })
    }), $(".grid-loaded").imagesLoaded(function() {
        $(".masonry-wrap1").isotope({
            itemSelector: ".question-category",
            percentPosition: !0,
            transitionDuration: "0.7s",
            masonry: {
                columnWidth: ".question-category"
            }
        })
    }), $(".count-element").each(function() {
        $(this).appear(function() {
            $(this).prop("Counter", 0).animate({
                Counter: $(this).text()
            }, {
                duration: 4e3,
                easing: "swing",
                step: function(e) {
                    $(this).text(Math.ceil(e))
                }
            })
        }, {
            accX: 0,
            accY: 0
        })
    }), $(".brands-logo-holder").owlCarousel({
        items: 6,
        loop: !0,
        autoplay: !0,
        navBy: 1,
        autoplayTimeout: 4e3,
        autoplayHoverPause: !1,
        smartSpeed: 1500,
        responsive: {
            0: {
                items: 2
            },
            640: {
                items: 3
            },
            767: {
                items: 3
            },
            768: {
                items: 4
            },
            991: {
                items: 4
            },
            1e3: {
                items: 5
            }
        }
    }), $(".register-form").validate({
        rules: {
            name: {
                required: !0,
                minlength: 2,
                maxlength: 16
            },
            email: {
                required: !0,
                email: !0
            },
            phone: {
                required: !0,
                digits: !0
            }
        },
        messages: {
            name: {
                required: "Please enter no more than (1) characters"
            },
            email: {
                required: "We need your email address to contact you",
                email: "Your email address must be in the format of name@domain.com"
            },
            phone: {
                required: "Please enter only digits",
                digits: "Please enter a valid number"
            }
        }
    }), $(".contact-form").validate({
        rules: {
            name: {
                required: !0,
                minlength: 1,
                maxlength: 16
            },
            email: {
                required: !0,
                email: !0
            },
            phone: {
                required: !0,
                digits: !0
            },
            message: {
                required: !0,
                minlength: 2
            }
        },
        messages: {
            name: {
                required: "Please enter no more than (1) characters"
            },
            email: {
                required: "We need your email address to contact you",
                email: "Your email address must be in the format of name@domain.com"
            },
            phone: {
                required: "Please enter only digits",
                digits: "Please enter a valid number"
            },
            message: {
                required: "Please enter no more than (2) characters"
            }
        }
    }), $(".comment-form").validate({
        rules: {
            name: {
                required: !0,
                minlength: 1,
                maxlength: 16
            },
            email: {
                required: !0,
                email: !0
            },
            message: {
                required: !0,
                minlength: 2
            }
        },
        messages: {
            name: {
                required: "Please enter no more than (1) characters"
            },
            email: {
                required: "We need your email address to contact you",
                email: "Your email address must be in the format of name@domain.com"
            },
            message: {
                required: "Please enter no more than (2) characters"
            }
        }
    }), $(".newsletter-form").ajaxChimp({
        language: "cm",
        url: "https://dsathemes.us3.list-manage.com/subscribe/post?u=af1a6c0b23340d7b339c085b4&id=344a494a6e"
    }), $.ajaxChimp.translations.cm = {
        submit: "Submitting...",
        0: "We have sent you a confirmation email",
        1: "Please enter your email address",
        2: "An email address must contain a single @",
        3: "The domain portion of the email address is invalid (the portion after the @: )",
        4: "The username portion of the email address is invalid (the portion before the @: )",
        5: "This email address looks fake or invalid. Please enter a real email address"
    }
});

/**
 * BATM.Cash (Vue.js) Application
 */
window.batmCash = new Vue({
    el: '#app',
    data: {
        greeting: 'Can Your Bitcoin<br />ATM Do Cash?',
        phoneNum_: '',
    },
    computed: {
        phoneNum: {
            get: function () {
                return this.phoneNum_
            },
            set: function (_newVal) {
                /* Update main app. */
                this.phoneNum_ = _newVal

                /* Update modal. */
                demoModal.phoneNum_ = _newVal
            },
        }
    },
    methods: {
        openDemo: function () {
            $('#requestDemoModal').modal('show')
        },
        sendDemo: function () {
            alert('demo sent!')
        },
    },
    mounted: function () {
        console.log('BATM.Cash is mounted!')
    },
})

/**
 * Request Demo Modal
 */
window.demoModal = new Vue({
    el: '#requestDemoModal',
    data: {
        heading: 'Request A Live Demo',
        phoneNum_: '',
    },
    computed: {
        phoneNum: {
            get: function () {
                return this.phoneNum_
            },
            set: function (_newVal) {
                /* Update modal. */
                this.phoneNum_ = _newVal

                /* Update main app. */
                batmCash.phoneNum_ = _newVal
            },
        }
    },
    methods: {
        sendRequest: function () {
            $('#requestDemoModal').modal('hide')
        },
    },
    mounted: function () {
        console.log('Modal is mounted!')
    },
})
