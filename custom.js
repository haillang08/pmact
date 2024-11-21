$(function ($) {
    "use strict";

    $(document).ready(function () {

        // pre_loader
        $("#pre_loader").delay(300).animate({
            "opacity": "0"
        }, 500, function () {
            $("#pre_loader").css("display", "none");
        });


        // On SCROLL actions
        var scroll_offset = 120;
        $(window).scroll(function () {
            var $this = $(window);
            if ($('.header_top').length) {
                if ($this.scrollTop() > scroll_offset) {
                    $('.header_top').addClass('nav_fixed');
                } else {
                    $('.header_top').removeClass('nav_fixed');
                }
            }
        });

        // active section menu
        const sections = document.querySelectorAll('section');
        const navLi = document.querySelectorAll('nav ul li a');

        window.addEventListener("scroll", ()=> {

            let current = "";
            sections.forEach(section => {
                const sectionTop = section.offsetTop;
                const sectionHeight = section.clientHeight; 
                if(pageYOffset >= sectionTop - (sectionHeight)/3) {
                    current = section.getAttribute('id');
                    console.log(current);
                }
            })
            navLi.forEach(li => {

                li.classList.remove('active'); 
                if (li.classList.contains(current)) {
                    li.classList.add('active');
                }
            })
        });

        // navbar-collapse
        $('.navbar-nav>li>a').on('click', function () {
            $('.navbar-collapse').collapse('hide');
        });


            // Scroll Top
            $(window).scroll(function () {
                if ($(window).scrollTop() > 500) {
                    $('.scrollToTop').addClass('topActive');
                }
                else {
                    $('.scrollToTop').removeClass('topActive');
                }
            });

            // hero_swiper
            var swiper = new Swiper(".hero_swiper", {
                slidesPerView: 1,
                spaceBetween: 40,
                freeMode: true,
                loop: true,
                effect: "fade",
                autoplay: {
                    delay: 3000,
                    disableOnInteraction: false,
                },
                pagination: {
                    el: ".swiper_pagination_hero",
                    clickable: true,
                },
            });

            
            // client_company
            var swiper = new Swiper(".client_company", {
                slidesPerView: '2',
                spaceBetween: 24,
                freeMode: true,
                autoplay: {
                    delay:1,
                    disableOnInteraction: false,
                },
                speed: 6000,
                breakpoints: { 
                    480: {
                    slidesPerView: 2,
                    },
                    576: {
                    slidesPerView: 3,
                    },
                    768: {
                    slidesPerView: 4,
                    },
                    992: {
                    slidesPerView: 5,
                    },
                    1200: {
                    slidesPerView: 6,
                    },
                },
            });

            // client_review
            var swiper = new Swiper(".client_review_swiper", {
                slidesPerView: 1,
                spaceBetween: 24,
                freeMode: true,
                autoplay: {
                    delay: 3000,
                    disableOnInteraction: false,
                },
                navigation: {
                    nextEl: ".swiper-button-next",
                    prevEl: ".swiper-button-prev",
                },
                breakpoints: {
                    768: {
                        slidesPerView: 2,
                    },
                    992: {
                        slidesPerView: 2,
                    },
                },
            });

            // Countdown
            window.onload = () => {
                // $(selector).countMe(delay,speed)
                $("#num1").countMe(75, 20);
                $("#num2").countMe(50, 15);
                $("#num3").countMe(100, 300);
            };

            // gridGallery
            $('.popup_img').magnificPopup({
                type: 'image',
                gallery: {
                    enabled: true
                }
            });

            // ajax
            // Email Subscribe
            jQuery('#frmSubscribe').on('submit', function (e) {
                var emailSubscribe = jQuery("input[name='sMail']").val();
                jQuery('#subscribeMsg').html('');
                jQuery('#emailSubscribe').html('Please wait....');
                jQuery('#emailSubscribe').attr('disabled', true);
                jQuery.ajax({
                    url: 'mail.php',
                    type: 'POST',
                    data: {
                        'subscribes': '',
                        'emailSubscribe': emailSubscribe
                    },
                    success: function (result) {
                        jQuery('#subscribeMsg').html(result);
                        jQuery('#emailSubscribe').html('Subscribe');
                        jQuery('#emailSubscribe').attr('disabled', false);
                        jQuery('#frmSubscribe')[0].reset();

                        setTimeout(function () {
                            $('.alert-dismissible').fadeOut('slow', function () {
                                $(this).remove();
                            });
                        }, 3000);
                    }
                });
                e.preventDefault();
            });
        });
    });


