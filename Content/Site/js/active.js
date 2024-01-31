(function ($) {
    'use strict';
    lazyload();
    var $window = $(window);
    if ($window.width() < 768) {
        $('a[target="_blank"]').removeAttr('target');
    }
    // :: Preloader Active Code
    $window.on('load', function () {
        $('#preloader').fadeOut('slow', function () {
            $(this).remove();
        });
    });

    // :: More Filter Active Code
    // $("#moreFilter").on('click', function () {
    //     $(".search-form-second-steps").slideToggle('1000');
    //     $("#firstsearch").toggle();
    // });

    // :: Nav Active Code
    if ($.fn.classyNav) {
        $('#darxNav').classyNav({
            theme: 'light'
        });
    }

    // :: Sticky Active Code
    if ($.fn.sticky) {
        $("#stickyHeader").sticky({
            topSpacing: 0
        });
    }

    // :: Tooltip Active Code
    if ($.fn.tooltip) {
        $('[data-toggle="tooltip"]').tooltip()
    }

    $('select').selectric();

    // :: Owl Carousel Active Code
    if ($.fn.owlCarousel) {

        var welcomeSlide = $('.hero-slides');

        welcomeSlide.owlCarousel({
            items: 1,
            margin: 0,
            loop: true,
            nav: false,
            dots: false,
            autoplay: true,
            autoplayTimeout: 5000,
            smartSpeed: 1000
        });

        welcomeSlide.on('translate.owl.carousel', function () {
            var slideLayer = $("[data-animation]");
            slideLayer.each(function () {
                var anim_name = $(this).data('animation');
                $(this).removeClass('animated ' + anim_name).css('opacity', '0');
            });
        });

        welcomeSlide.on('translated.owl.carousel', function () {
            var slideLayer = welcomeSlide.find('.owl-item.active').find("[data-animation]");
            slideLayer.each(function () {
                var anim_name = $(this).data('animation');
                $(this).addClass('animated ' + anim_name).css('opacity', '1');
            });
        });

        $("[data-delay]").each(function () {
            var anim_del = $(this).data('delay');
            $(this).css('animation-delay', anim_del);
        });

        $("[data-duration]").each(function () {
            var anim_dur = $(this).data('duration');
            $(this).css('animation-duration', anim_dur);
        });

        

        $('.underads-slides').each(function () {
            var elem = $(this);
            $(elem).owlCarousel({
                loop: $(elem).find(".single-underad").length > 1,
                center: true,
                nav: false,
                dots: false,
                autoplay: true,
                autoplayTimeout: 2000,
                smartSpeed: 1000,
                items: 2,

            });
        });
        var owl = $('.premium-elan-slider .owl-carousel');
        owl.owlCarousel({
            items: 4,
            loop: true,
            dots: true,
            autoplay: true,
            autoplayTimeout: 3000,
            autoplayHoverPause: true,
            responsive: {
                0: {
                  
                    items: 2
                },
                420: {
                  
                    items: 2
                },
                550: {
                   
                    items: 3
                },
                750: {
                    
                    items: 3
                },
                900: {
                    
                    items: 3
                },
                1000: {
                    
                    items: 4
                },
                1440: {
                    
                    
                    items: 4
                },
            }
        });
        $('.play').on('click', function () {
            owl.trigger('play.owl.autoplay', [3000])
        })
        $('.stop').on('click', function () {
            owl.trigger('stop.owl.autoplay')
        })
        var owl = $('.left-side-reklam .owl-carousel');
        owl.owlCarousel({
            items: 1,
            loop: true,
            dots: true,
            autoplay: true,
            autoplayTimeout: 2000,
            autoplayHoverPause: true,
            responsive: {
                0: {
                  
                    items: 1
                },
                420: {
                   
                    items: 1
                },
                550: {
                   
                    items: 1
                },
                750: {
                    
                    items: 1
                },
                1000: {
                    
                    items: 1
                },
                1440: {
                    
                    
                    items: 1
                },
            }
        });
        $('.play').on('click', function () {
            owl.trigger('play.owl.autoplay', [3000])
        })
        $('.stop').on('click', function () {
            owl.trigger('stop.owl.autoplay')
        })
        var owl = $('.right-side-reklam .owl-carousel');
        owl.owlCarousel({
            items: 1,
            loop: true,
            dots: true,
            autoplay: true,
            autoplayTimeout: 2000,
            autoplayHoverPause: true,
            responsive: {
                0: {
                  
                    items: 1
                },
                420: {
                   
                    items: 1
                },
                550: {
                   
                    items: 1
                },
                750: {
                    
                    items: 1
                },
                1000: {
                    
                    items: 1
                },
                1440: {
                    
                    
                    items: 1
                },
            }
        });
        $('.play').on('click', function () {
            owl.trigger('play.owl.autoplay', [3000])
        })
        $('.stop').on('click', function () {
            owl.trigger('stop.owl.autoplay')
        })
        $('.hero-area .owl-carousel').owlCarousel({
            items: 1,
            loop: true,
            dots: true,
            autoplay: true,
            autoplayTimeout: 3000,
            autoplayHoverPause: true,
            nav: true,
            navText: ['<i class="fa fa-angle-left header-prev"></i>', '<i class="fa fa-angle-right header-next"></i>'],
            responsive: {
                0: {
                  
                    items: 1
                },
                420: {
                   
                    items: 1
                },
                550: {
                   
                    items: 1
                },
                750: {
                    
                    items: 1
                },
                1000: {
                    
                    items: 1
                },
                1440: {
                    
                    
                    items: 1
                },
            }
        });
        $('.play').on('click', function () {
            owl.trigger('play.owl.autoplay', [3000])
        })
        $('.stop').on('click', function () {
            owl.trigger('stop.owl.autoplay')
        })
     

        $('.services-slides').owlCarousel({
            loop: true,
            center: true,
            nav: false,
            dots: false,
            autoplay: true,
            autoplayTimeout: 5000,
            smartSpeed: 1000,
            stagePadding: 100,
            rtl: true,
            responsive: {
                0: {
                    margin: 10,
                    stagePadding: 40,
                    items: 1
                },
                420: {
                    margin: 10,
                    stagePadding: 60,
                    items: 1
                },
                550: {
                    margin: 10,
                    stagePadding: 30,
                    items: 2
                },
                750: {
                    margin: 10,
                    stagePadding: 30,
                    items: 3
                },
                1000: {
                    margin: 10,
                    stagePadding: 50,
                    items: 4
                },
                1440: {
                    margin: 15,
                    stagePadding: 100,
                    items: 5
                },
            }
        });
        $('.professionals-slides').owlCarousel({
            loop: true,
            center: true,
            nav: false,
            dots: false,
            smartSpeed: 2000,
            stagePadding: 100,
            responsive: {
                0: {
                    margin: 10,
                    stagePadding: 40,
                    items: 1
                },
                420: {
                    margin: 10,
                    stagePadding: 60,
                    items: 1
                },
                550: {
                    margin: 10,
                    stagePadding: 30,
                    items: 2
                },
                750: {
                    margin: 10,
                    stagePadding: 30,
                    items: 3
                },
                1000: {
                    margin: 10,
                    stagePadding: 50,
                    items: 4
                },
                1440: {
                    margin: 15,
                    stagePadding: 100,
                    items: 7
                },
            }
        });


        $('.single-listings-owlsliders').owlCarousel({
            items: 1,
            margin: 0,
            loop: true,
            autoplay: true,
            autoplayTimeout: 5000,
            smartSpeed: 1000,
            nav: true,
            navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>']
        });
    }


    // :: PreventDefault a Click
    $("a[href='#']").on('click', function ($) {
        $.preventDefault();
    });

    // :: wow Active Code
    if ($window.width() > 767) {
        new WOW().init();
    }

    $('.width-to-height').each(function () {
        var width = $(this).width();
        $(this).css("height", width);
    });

    $('.underads img').each(function () {
        var width = $(this).width();
        $(this).css("height", width / 7);
    });


    $('.header-placeholder').each(function () {
        var height = $(".header-area").height();
        $(this).css("height", height);
    });

    $(".search-scroll").click(function () {
        const height = $(window).height() - 90;
        $("html, body").animate({
            scrollTop: height
        }, 300);
    });

    $(".xicon").click(function () {
        $(".modal-login").css("display", "none");
        $(".modal-signup").css("display", "none");
        $(".modal-forgotpass").css("display", "none");
        $(".modal-application").css("display", "none");
        $(".modal-payment").css("display", "none");
    });
 

    $(".forgot").click(function (e) {
        e.preventDefault();
        $(".modal-login").css("display", "none");
        $(".modal-signup").css("display", "none");
        $(".modal-forgotpass").css("display", "block");
    })
    $(".submitapplication").click(function (e) {
        e.preventDefault();
        $(".modal-login").css("display", "none");
        $(".modal-signup").css("display", "none");
        $(".modal-payment").css("display", "none");
        $(".modal-forgotpass").css("display", "none");
        $(".modal-application").css("display", "block");
    })
    $("#simplepay").click(function (e) {
        e.preventDefault();
        $(".modal-login").css("display", "none");
        $(".modal-signup").css("display", "none");
        $(".modal-forgotpass").css("display", "none");
        $(".modal-application").css("display", "none");
        $(".modal-payment").css("display", "block");
    })

    var owl = $('.owl-carousel');
    owl.owlCarousel({
        items: 2,
        loop: true,
        margin: 10,
        nav:false,
        dots:false,
        autoplay: true,
        autoplayTimeout: 3000,
        autoplayHoverPause: true,
        responsive: {
            0: {
              
                items: 1
            },
            420: {
               
                items: 1
            },
            550: {
               
                items: 2
            },
            750: {
                
                items: 2
            },
            1000: {
                
                items: 2
            },
            1440: {
                
                
                items: 2
            },
        }
    });
    $('.play').on('click', function () {
        owl.trigger('play.owl.autoplay', [3000])
    })
    $('.stop').on('click', function () {
        owl.trigger('stop.owl.autoplay')
    })

    $(".uploadIn").change(function (event) {
        var elem = this;
        var input = event.target;
        var reader = new FileReader();
        reader.onload = function () {
            var dataURL = reader.result;
            $(elem).prev("#output").attr("src", dataURL);
            $(elem).prev("#output").css("visibility", "visible");
            $(elem).next().css('visibility', "hidden");
            $(elem).siblings(".delimg").css('display', "block");
        };
        reader.readAsDataURL(input.files[0]);
    });
    $(".uploadbtn").click(function () {
        $(this).prev("input").trigger('click');
    });

    $(".delimg").click(function () {
        $(this).siblings(".uploadIn").val("");
        $(this).siblings("#output").removeAttr("src");
        $(this).siblings("#output").css("visibility", "hidden");
        $(this).siblings(".uploadbtn").css('visibility', "visible");
        $(this).css("display", "none");
    });

    $(".prosearch").keyup(function () {
        let word = $(this).val().toLowerCase();
        let pros = document.querySelectorAll(".single-pro");
        for (var i = 0; i < pros.length; i++) {
            if ($(pros[i]).attr("data-name").toLowerCase().indexOf(word) == -1) {
                $(pros[i]).fadeOut();
            } else {
                $(pros[i]).fadeIn();
            }
        }
    });

    $(".orderby").change(function () {
        $("#advanceSearch").append('<input type="hidden" name="OrderBy" value="' + $(this).val() + '" />')
        $("#advanceSearch").trigger("submit");
    })

    let error = document.querySelector("#error");
    if (error) {
        Swal.fire({
            html: $(error).val(),
            type: 'error',
            confirmButtonColor: "#b1924c"
        })
    }

    let success = document.querySelector("#success");
    if (success) {
        Swal.fire({
            html: $(success).val(),
            type: 'success',
            confirmButtonColor: "#b1924c"
        })
    }

    $(".showonmap").click(function () {
        $("#map").animate({
            height: 400,
            marginBottom: '1rem'
        }, 200);
    });


    let balance = document.getElementById("balance");
    if (balance) {
        $("#nav-acc-tab").trigger("click");
    }
})(jQuery);