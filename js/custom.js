/* -------------------------------------------------------

01. ScrollIt
02. Logo & Menu scroll sticky
03. Menu Navigation
04. Sub Menu 
05. Sections background image from data background 
06. Animations
07. YouTubePopUp
08. Rooms 1 owlCarousel
09. Rooms 2 owlCarousel
10. Rooms 4 owlCarousel
11. Rooms Details 1 owlCarousel
12. Rooms Details 2 owlCarousel
13. Amenities owlCarousel
14. Services 2 owlCarousel
15. Blog Home owlCarousel
16. Testimonials owlCarousel 
17. Client 
18. Accordion Box (for Faqs)
19. Accordion Menu
20. MagnificPopup Gallery
21. Smooth Scrolling
22. Scroll back to top
23. Select2
24. Datepicker
25. Slider
26. Preloader
27. Contact Form

------------------------------------------------------- */
$(function () {
    "use strict";
    var wind = $(window);
    
    // ScrollIt
    $.scrollIt({
        upKey: 38, // key code to navigate to the next section
        downKey: 40, // key code to navigate to the previous section
        easing: 'swing', // the easing function for animation
        scrollTime: 600, // how long (in ms) the animation takes
        activeClass: 'active', // class given to the active nav element
        onPageChange: null, // function(pageIndex) that is called when page is changed
        topOffset: -70 // offste (in px) for fixed top navigation
    });
    
    // Logo & Menu scroll sticky
    $(window).scroll(function () {
        var $this = $(this)
            , st = $this.scrollTop()
            , navbar = $('.patara-header')
            , logo = $(".patara-header .patara-logo> img");
        if (st > 150) {
            if (!navbar.hasClass('scrolled')) {
                navbar.addClass('scrolled');
                logo.attr('src', 'img/SANDYS TOWER FINAL-02.png');
            }
        }
        if (st < 150) {
            if (navbar.hasClass('scrolled')) {
                navbar.removeClass('scrolled sleep')
                logo.attr('src', 'img/SANDYS TOWER-01.png');
            }
        }
        if (st > 350) {
            if (!navbar.hasClass('awake')) {
                navbar.addClass('awake');
            }
        }
        if (st < 350) {
            if (navbar.hasClass('awake')) {
                navbar.removeClass('awake');
                navbar.addClass('sleep');
            }
        }
    });

    // Menu Navigation    
    $('.patara-js-patara-nav-toggle').on('click', function (e) {
        var $this = $(this);
        e.preventDefault();
        if ($('body').hasClass('menu-open')) {
            $this.removeClass('active');
            $('.patara-wrap .patara-wrap-inner > ul > li').each(function (i) {
                var that = $(this);
                setTimeout(function () {
                    that.removeClass('open');
                }, i * 100);
            });
            setTimeout(function () {
                $('.patara-wrap').removeClass('patara-wrap-show');
            }, 300);
            $('body').removeClass('menu-open');
        }
        else {
            $('.patara-wrap').addClass('patara-wrap-show');
            $this.addClass('active');
            $('body').addClass('menu-open');
            setTimeout(function () {
                $('.patara-wrap .patara-wrap-inner > ul > li').each(function (i) {
                    var that = $(this);
                    setTimeout(function () {
                        that.addClass('open');
                    }, i * 100);
                });
            }, 200);
        }
    });
     
    // Sub Menu 
    $('.patara-menu li.patara-menu-sub>a').on('click', function () {
        $(this).removeAttr('href');
        var element = $(this).parent('li');
        if (element.hasClass('open')) {
            element.removeClass('open');
            element.find('li').removeClass('open');
            element.find('ul').slideUp();
        }
        else {
            element.addClass('open');
            element.children('ul').slideDown();
            element.siblings('li').children('ul').slideUp();
            element.siblings('li').removeClass('open');
            element.siblings('li').find('li').removeClass('open');
            element.siblings('li').find('ul').slideUp();
        }
    });
    $('.patara-menu>ul>li.patara-menu-sub>a').append('<span class="holder"></span>');

    // Sections background image from data background
    var pageSection = $(".bg-img, section");
    pageSection.each(function (indx) {
        if ($(this).attr("data-background")) {
            $(this).css("background-image", "url(" + $(this).data("background") + ")");
        }
    });
    
    // Animations
    var contentWayPoint = function () {
        var i = 0;
        $('.animate-box').waypoint(function (direction) {
            if (direction === 'down' && !$(this.element).hasClass('animated')) {
                i++;
                $(this.element).addClass('item-animate');
                setTimeout(function () {
                    $('body .animate-box.item-animate').each(function (k) {
                        var el = $(this);
                        setTimeout(function () {
                            var effect = el.data('animate-effect');
                            if (effect === 'fadeIn') {
                                el.addClass('fadeIn animated');
                            } else if (effect === 'fadeInLeft') {
                                el.addClass('fadeInLeft animated');
                            } else if (effect === 'fadeInRight') {
                                el.addClass('fadeInRight animated');
                            } else {
                                el.addClass('fadeInUp animated');
                            }
                            el.removeClass('item-animate');
                        }, k * 200, 'easeInOutExpo');
                    });
                }, 100);
            }
        }, {
            offset: '85%'
        });
    };
    $(function () {
        contentWayPoint();
    });
    // Initiate the wowjs
    new WOW().init();
    
    // YouTubePopUp
    $("a.vid").YouTubePopUp();
    
    // Rooms 1 owlCarousel
    if ($(".rooms1-carousel").length) {
        $(".rooms1-carousel").owlCarousel({
            loop: true,
            margin: 30,
            autoHeight: false,
            autoplayTimeout: 5000,
            dots: false,
            nav: true,
            navText: ['<i class="ti-angle-left" aria-hidden="true"></i>', '<i class="ti-angle-right" aria-hidden="true"></i>'],
            responsiveClass: true,
            responsive: {
                0: {
                    dots: false,
                    items: 1,
                },
                600: {
                    dots: false,
                    items: 1,
                },
                1000: {
                    dots: false,
                    items: 1,
                }
            }
        });
    }
    
    // Rooms 2 owlCarousel
    $('.rooms2 .owl-carousel').owlCarousel({
        loop: true,
        margin: 30,
        mouseDrag: true,
        autoplay: false,
        dots: true,
        nav: true,
        navText: ["<span class='lnr ti-angle-left'></span>", "<span class='lnr ti-angle-right'></span>"],
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
            },
            600: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    });
    
    // Rooms 4 owlCarousel 
    $('.room4 .owl-carousel').owlCarousel({
        loop: true,
        margin: 30,
        mouseDrag: true,
        autoplay: false,
        dots: true,
        autoplayHoverPause: true,
        nav: false,
        navText: ["<span class='lnr ti-angle-left'></span>", "<span class='lnr ti-angle-right'></span>"],
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
            },
            600: {
                items: 2
            },
            1000: {
                items: 3
            }
        }
    });
    
    // Rooms Details owlCarousel 
    $('.room-details1 .owl-carousel').owlCarousel({
        loop: true,
        margin: 30,
        mouseDrag: true,
        autoplay: true,
        dots: true,
        nav: true,
        navText: ["<span class='lnr ti-angle-left'></span>", "<span class='lnr ti-angle-right'></span>"],
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
            },
            600: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    });
    
    // Room Details 2 owlCarousel
    $('.room-details2 .owl-carousel').owlCarousel({
        loop: true,
        margin: 30,
        mouseDrag: true,
        autoplay: true,
        dots: true,
        nav: true,
        navText: ["<span class='lnr ti-angle-left'></span>", "<span class='lnr ti-angle-right'></span>"],
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
            },
            600: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    });
    
    // Amenities owlCarousel 
    $('.amenities .owl-carousel').owlCarousel({
        loop: true,
        margin: 30,
        mouseDrag: true,
        autoplay: false,
        dots: true,
        autoplayHoverPause: true,
        nav: false,
        navText: ["<span class='lnr ti-angle-left'></span>", "<span class='lnr ti-angle-right'></span>"],
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
            },
            600: {
                items: 2
            },
            1000: {
                items: 3
            }
        }
    });
    
    // Services 2 owlCarousel
    $('.services2 .owl-carousel').owlCarousel({
        loop: true,
        margin: 30,
        mouseDrag: true,
        autoplay: false,
        dots: true,
        nav: false,
        navText: ["<span class='lnr ti-angle-left'></span>", "<span class='lnr ti-angle-right'></span>"],
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
            },
            600: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    });
    
    // Blog Home owlCarousel 
    $('.blog-home .owl-carousel').owlCarousel({
        loop: true,
        margin: 30,
        mouseDrag: true,
        autoplay: false,
        dots: true,
        autoplayHoverPause: true,
        nav: false,
        navText: ["<span class='lnr ti-angle-left'></span>", "<span class='lnr ti-angle-right'></span>"],
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
            },
            600: {
                items: 2
            },
            1000: {
                items: 3
            }
        }
    });
    
    // Testimonials owlCarousel 
    $('.testimonials .owl-carousel').owlCarousel({
        loop: true,
        margin: 30,
        mouseDrag: true,
        autoplay: false,
        autoplayTimeout: 7000,
        dots: false,
        nav: false,
        navText: ["<span class='lnr ti-angle-left'></span>", "<span class='lnr ti-angle-right'></span>"],
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
            },
            600: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    });
    
    // Clients owlCarousel *
    $('.clients .owl-carousel').owlCarousel({
        loop: true,
        margin: 30,
        mouseDrag: true,
        autoplay: true,
        dots: false,
        nav: false,
        navText: ["<span class='lnr ti-angle-left'></span>","<span class='lnr ti-angle-right'></span>"],
        responsiveClass: true,
        responsive: {
            0: {
                margin: 10,
                items: 3
            },
            600: {
                items: 3
            },
            1000: {
                items: 6
            }
        }
    });
    
    // Accordion Box (for Faqs)
    if ($(".accordion-box").length) {
        $(".accordion-box").on("click", ".acc-btn", function () {
            var outerBox = $(this).parents(".accordion-box");
            var target = $(this).parents(".accordion");
            if ($(this).next(".acc-content").is(":visible")) {
                //return false;
                $(this).removeClass("active");
                $(this).next(".acc-content").slideUp(300);
                $(outerBox).children(".accordion").removeClass("active-block");
            } else {
                $(outerBox).find(".accordion .acc-btn").removeClass("active");
                $(this).addClass("active");
                $(outerBox).children(".accordion").removeClass("active-block");
                $(outerBox).find(".accordion").children(".acc-content").slideUp(300);
                target.addClass("active-block");
                $(this).next(".acc-content").slideDown(300);
            }
        });
    }
    
    // Accordion Menu
    if ($(".accordion-menu").length) {
        $(".accordion-menu").on("click", ".acc-btn", function () {
            var outerBox = $(this).parents(".accordion-menu");
            var target = $(this).parents(".accordion");
            if ($(this).next(".acc-content").is(":visible")) {
                //return false;
                $(this).removeClass("active");
                $(this).next(".acc-content").slideUp(300);
                $(outerBox).children(".accordion").removeClass("active-block");
            } else {
                $(outerBox).find(".accordion .acc-btn").removeClass("active");
                $(this).addClass("active");
                $(outerBox).children(".accordion").removeClass("active-block");
                $(outerBox).find(".accordion").children(".acc-content").slideUp(300);
                target.addClass("active-block");
                $(this).next(".acc-content").slideDown(300);
            }
        });
    }
    
    // MagnificPopup Gallery
    $('.gallery').magnificPopup({
        delegate: '.popimg',
        type: 'image',
        gallery: {
            enabled: true
        }
    });
    $(".img-zoom").magnificPopup({
        type: "image",
        closeOnContentClick: !0,
        mainClass: "mfp-fade",
        gallery: {
            enabled: !0,
            navigateByImgClick: !0,
            preload: [0, 1]
        }
    })
    $('.magnific-youtube, .magnific-vimeo, .magnific-custom').magnificPopup({
        disableOn: 700,
        type: 'iframe',
        mainClass: 'mfp-fade',
        removalDelay: 300,
        preloader: false,
        fixedContentPos: false
    });
    $('.image-popup-vertical-fit').magnificPopup({
        type: 'image',
        closeOnContentClick: true,
        mainClass: 'mfp-img-mobile',
        image: {
            verticalFit: true
        }
    });

    // Smooth Scrolling
    $('a[href*="#"]')
    // Remove links that don't actually link to anything
    .not('[href="#"]').not('[href="#0"]').click(function (event) {
            // On-page links
            if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
                // Figure out element to scroll to
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                // Does a scroll target exist?
                if (target.length) {
                    // Only prevent default if animation is actually gonna happen
                    event.preventDefault();
                    $('html, body').animate({
                        scrollTop: target.offset().top
                    }, 1000, function () {
                        // Callback after animation
                        // Must change focus!
                        var $target = $(target);
                        $target.focus();
                        if ($target.is(":focus")) { // Checking if the target was focused
                            return false;
                        } else {
                            $target.attr('tabindex', '-1'); // Adding tabindex for elements not focusable
                            $target.focus(); // Set focus again
                        };
                    });
                }
            }
        });
    
    // Scroll back to top
    var progressPath = document.querySelector('.progress-wrap path');
    var pathLength = progressPath.getTotalLength();
    progressPath.style.transition = progressPath.style.WebkitTransition = 'none';
    progressPath.style.strokeDasharray = pathLength + ' ' + pathLength;
    progressPath.style.strokeDashoffset = pathLength;
    progressPath.getBoundingClientRect();
    progressPath.style.transition = progressPath.style.WebkitTransition = 'stroke-dashoffset 10ms linear';
    var updateProgress = function () {
        var scroll = $(window).scrollTop();
        var height = $(document).height() - $(window).height();
        var progress = pathLength - (scroll * pathLength / height);
        progressPath.style.strokeDashoffset = progress;
    }
    updateProgress();
    $(window).scroll(updateProgress);
    var offset = 150;
    var duration = 550;
    jQuery(window).on('scroll', function () {
        if (jQuery(this).scrollTop() > offset) {
            jQuery('.progress-wrap').addClass('active-progress');
        } else {
            jQuery('.progress-wrap').removeClass('active-progress');
        }
    });
    jQuery('.progress-wrap').on('click', function (event) {
        event.preventDefault();
        jQuery('html, body').animate({
            scrollTop: 0
        }, duration);
        return false;
    })
    
    // Select2
    $('.select2').select2({
        minimumResultsForSearch: Infinity,
    });
    
    // Datepicker
    $(".datepicker").datepicker({
        orientation: "top"
    });
    
});

// Slider  
$(document).ready(function () {
    var owl = $('.header .owl-carousel');
    // Slider owlCarousel - (Inner Page Slider)
    $('.slider .owl-carousel').owlCarousel({
        items: 1,
        loop: true,
        dots: false,
        margin: 0,
        autoplay: false,
        autoplayTimeout: 5000,
        nav: true,
        navText: ['<i class="ti-angle-left" aria-hidden="true"></i>', '<i class="ti-angle-right" aria-hidden="true"></i>'],
        responsiveClass: true,
        responsive: {
            0: {
                dots: false,
            },
            600: {
                dots: false,
            },
            1000: {
                dots: false,
            }
        }
    });
    // Slider owlCarousel (Homepage Slider)
    $('.slider-fade .owl-carousel').owlCarousel({
        items: 1,
        loop: true,
        dots: false,
        margin: 0,
        autoplay: true,
        autoplayTimeout: 5000,
        animateOut: 'fadeOut',
        nav: true,
        navText: ['<i class="ti-angle-left" aria-hidden="true"></i>', '<i class="ti-angle-right" aria-hidden="true"></i>'],
        responsiveClass: true,
        responsive: {
            0: {
                dots: false
            },
            600: {
                dots: false
            },
            1000: {
                dots: false
            }
        }
    });
    owl.on('changed.owl.carousel', function (event) {
        var item = event.item.index - 2; // Position of the current item
        $('span').removeClass('animated fadeInUp');
        $('h4').removeClass('animated fadeInUp');
        $('h1').removeClass('animated fadeInUp');
        $('p').removeClass('animated fadeInUp');
        $('.butn-light').removeClass('animated fadeInUp');
        $('.butn-dark').removeClass('animated fadeInUp');
        $('.owl-item').not('.cloned').eq(item).find('span').addClass('animated fadeInUp');
        $('.owl-item').not('.cloned').eq(item).find('h4').addClass('animated fadeInUp');
        $('.owl-item').not('.cloned').eq(item).find('h1').addClass('animated fadeInUp');
        $('.owl-item').not('.cloned').eq(item).find('p').addClass('animated fadeInUp');
        $('.owl-item').not('.cloned').eq(item).find('.butn-light').addClass('animated fadeInUp');
        $('.owl-item').not('.cloned').eq(item).find('.butn-dark').addClass('animated fadeInUp');
    });
});

// Preloader
$("#preloader").fadeOut(700);
$(".preloader-bg").delay(700).fadeOut(700);
var wind = $(window);

// Contact Form
var form = $('.contact__form'),
message = $('.contact__msg'),
form_data;
// success function
function done_func(response) {
    message.fadeIn().removeClass('alert-danger').addClass('alert-success');
    message.text(response);
    setTimeout(function () {
        message.fadeOut();
    }, 2000);
    form.find('input:not([type="submit"]), textarea').val('');
}
// fail function
function fail_func(data) {
    message.fadeIn().removeClass('alert-success').addClass('alert-success');
    message.text(data.responseText);
    setTimeout(function () {
        message.fadeOut();
    }, 2000);
}
form.submit(function (e) {
    e.preventDefault();
    form_data = $(this).serialize();
    $.ajax({
        type: 'POST',
        url: form.attr('action'),
        data: form_data
    }).done(done_func).fail(fail_func);
});

