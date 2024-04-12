﻿"use strict";

!function(s) {
    function e(e) {
        "success" === e.result ? (s(".mailchimp-success").html("" + e.msg).fadeIn(900),
            s(".mailchimp-error").fadeOut(400)) : "error" === e.result && s(".mailchimp-error").html("" + e.msg).fadeIn(900);
    }
    function a() {
        t.width() <= 991 ? (s(".category-menu .menu-item-has-children > a").prepend('<span class="expand menu-expand">+</span>'),
            s(".category-menu .menu-item-has-children ul").slideUp()) : (s(".category-menu .menu-item-has-children > a .menu-expand").remove(),
            s(".category-menu .menu-item-has-children ul").slideDown());
    }
    var t = s(window);
    t.on("scroll", function() {
        t.scrollTop() < 300 ? s(".sticky").removeClass("is-sticky") : s(".sticky").addClass("is-sticky");
    }), s('[data-toggle="tooltip"]').tooltip(), s(".bg-img").each(function(e, a) {
        var t = s(a), n = t.data("bg");
        t.css("background-image", "url(" + n + ")");
    }), s(".search-trigger").on("click", function() {
        s("body").addClass("fix"), s(".offcanvas-search-inner").addClass("show");
    }), s(".offcanvas-close").on("click", function() {
        s("body").removeClass("fix"), s(".offcanvas-search-inner").removeClass("show");
    }), s(".mobile-menu-btn").on("click", function() {
        s("body").addClass("fix"), s(".off-canvas-wrapper").addClass("open");
    }), s(".btn-close-off-canvas,.off-canvas-overlay").on("click", function() {
        s("body").removeClass("fix"), s(".off-canvas-wrapper").removeClass("open");
    });
    var n = s(".mobile-menu"), i = n.find(".dropdown");
    i.parent().prepend('<span class="menu-expand"><i></i></span>'), i.slideUp(), n.on("click", "li a, li .menu-expand", function(e) {
        var a = s(this);
        a.parent().attr("class").match(/\b(menu-item-has-children|has-children|has-sub-menu)\b/) && ("#" === a.attr("href") || a.hasClass("menu-expand")) && (e.preventDefault(),
            a.siblings("ul:visible").length ? (a.parent("li").removeClass("active"), a.siblings("ul").slideUp()) : (a.parent("li").addClass("active"),
                a.closest("li").siblings("li").removeClass("active").find("li").removeClass("active"),
                a.closest("li").siblings("li").find("ul:visible").slideUp(), a.siblings("ul").slideDown()));
    }), s(".hero-slider-active").slick({
        fade: !0,
        speed: 1e3,
        autoplay: !1,
        prevArrow: '<button type="button" class="slick-prev"><i class="fa fa-angle-left"></i></button>',
        nextArrow: '<button type="button" class="slick-next"><i class="fa fa-angle-right"></i></button>',
        responsive: [ {
            breakpoint: 992,
            settings: {
                arrows: !1,
                dots: !0
            }
        } ]
    }), s(".product-carousel--4").slick({
        speed: 1e3,
        slidesToShow: 4,
        adaptiveHeight: !0,
        prevArrow: '<button type="button" class="slick-prev"><i class="fa fa-angle-left"></i></button>',
        nextArrow: '<button type="button" class="slick-next"><i class="fa fa-angle-right"></i></button>',
        responsive: [ {
            breakpoint: 992,
            settings: {
                slidesToShow: 3
            }
        }, {
            breakpoint: 768,
            settings: {
                slidesToShow: 2,
                arrows: !1
            }
        }, {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                arrows: !1
            }
        } ]
    }), s(".product-carousel-4_2").slick({
        speed: 1e3,
        slidesToShow: 4,
        rows: 2,
        adaptiveHeight: !0,
        prevArrow: '<button type="button" class="slick-prev"><i class="fa fa-angle-left"></i></button>',
        nextArrow: '<button type="button" class="slick-next"><i class="fa fa-angle-right"></i></button>',
        responsive: [ {
            breakpoint: 992,
            settings: {
                slidesToShow: 3
            }
        }, {
            breakpoint: 768,
            settings: {
                slidesToShow: 2,
                arrows: !1,
                rows: 1
            }
        }, {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                arrows: !1,
                rows: 1
            }
        } ]
    }), s(".testimonial-carousel").slick({
        speed: 1e3,
        arrows: !1,
        autoplay: !0
    }), s(".brand-logo-carousel").slick({
        speed: 1e3,
        slidesToShow: 5,
        adaptiveHeight: !0,
        prevArrow: '<button type="button" class="slick-prev"><i class="fa fa-angle-left"></i></button>',
        nextArrow: '<button type="button" class="slick-next"><i class="fa fa-angle-right"></i></button>',
        responsive: [ {
            breakpoint: 1200,
            settings: {
                slidesToShow: 4
            }
        }, {
            breakpoint: 992,
            settings: {
                slidesToShow: 3,
                arrows: !1
            }
        }, {
            breakpoint: 768,
            settings: {
                slidesToShow: 2,
                arrows: !1
            }
        }, {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                arrows: !1
            }
        } ]
    }), s(".blog-carousel-active").slick({
        speed: 1e3,
        slidesToShow: 2,
        rows: 2,
        adaptiveHeight: !0,
        prevArrow: '<button type="button" class="slick-prev"><i class="fa fa-angle-left"></i></button>',
        nextArrow: '<button type="button" class="slick-next"><i class="fa fa-angle-right"></i></button>',
        responsive: [ {
            breakpoint: 992,
            settings: {
                slidesToShow: 2,
                arrows: !1,
                rows: 1
            }
        }, {
            breakpoint: 768,
            settings: {
                slidesToShow: 1,
                arrows: !1,
                rows: 1
            }
        } ]
    }), s(".blog-carousel-2").slick({
        speed: 1e3,
        dots: !0,
        arrows: !1
    }), s(".deals-content-carousel").slick({
        fade: !0,
        arrows: !1,
        asNavFor: ".deals-nav-carousel"
    }), s(".deals-nav-carousel").slick({
        slidesToShow: 4,
        vertical: !0,
        asNavFor: ".deals-content-carousel",
        focusOnSelect: !0,
        arrows: !1,
        responsive: [ {
            breakpoint: 992,
            settings: {
                vertical: !1
            }
        }, {
            breakpoint: 480,
            settings: {
                vertical: !1,
                slidesToShow: 3
            }
        } ]
    }), s(".catagory-carousel-active").slick({
        speed: 1e3,
        arrows: !1,
        slidesToShow: 3,
        responsive: [ {
            breakpoint: 992,
            settings: {
                slidesToShow: 2
            }
        }, {
            breakpoint: 576,
            settings: {
                slidesToShow: 1
            }
        } ]
    }), s(".group-carousel--3").slick({
        speed: 1e3,
        rows: 3,
        arrows: !1,
        adaptiveHeight: !0
    }), s(".special-product-carousel").slick({
        speed: 1e3,
        prevArrow: '<button type="button" class="slick-prev"><i class="fa fa-angle-left"></i></button>',
        nextArrow: '<button type="button" class="slick-next"><i class="fa fa-angle-right"></i></button>',
        slidesToShow: 2,
        adaptiveHeight: !0,
        responsive: [ {
            breakpoint: 768,
            settings: {
                slidesToShow: 1
            }
        } ]
    }), s(".product-gallery-3").slick({
        speed: 1e3,
        slidesToShow: 3,
        adaptiveHeight: !0,
        prevArrow: '<button type="button" class="slick-prev"><i class="fa fa-angle-left"></i></button>',
        nextArrow: '<button type="button" class="slick-next"><i class="fa fa-angle-right"></i></button>',
        responsive: [ {
            breakpoint: 992,
            settings: {
                slidesToShow: 2,
                arrows: !1
            }
        }, {
            breakpoint: 768,
            settings: {
                slidesToShow: 1,
                arrows: !1
            }
        }, {
            breakpoint: 576,
            settings: {
                slidesToShow: 2,
                arrows: !1
            }
        }, {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                arrows: !1
            }
        } ]
    }), s(".product-large-slider").slick({
        fade: !0,
        arrows: !1,
        asNavFor: ".pro-nav"
    }), s(".pro-nav").slick({
        slidesToShow: 4,
        asNavFor: ".product-large-slider",
        centerMode: !0,
        arrows: !1,
        centerPadding: 0,
        focusOnSelect: !0,
        responsive: [ {
            breakpoint: 576,
            settings: {
                slidesToShow: 3
            }
        } ]
    }), s("select").niceSelect(), s(".img-zoom").zoom(), s(".minicart-btn").on("click", function() {
        s("body").addClass("fix"), s(".minicart-inner").addClass("show");
    }), s(".offcanvas-close, .minicart-close,.offcanvas-overlay").on("click", function() {
        s("body").removeClass("fix"), s(".minicart-inner").removeClass("show");
    }), s("[data-countdown]").each(function() {
        var e = s(this), a = s(this).data("countdown");
        e.countdown(a, function(s) {
            e.html(s.strftime('<div class="single-countdown"><span class="single-countdown__time">%D</span><span class="single-countdown__text">Days</span></div><div class="single-countdown"><span class="single-countdown__time">%H</span><span class="single-countdown__text">Hours</span></div><div class="single-countdown"><span class="single-countdown__time">%M</span><span class="single-countdown__text">Mins</span></div><div class="single-countdown"><span class="single-countdown__time">%S</span><span class="single-countdown__text">Secs</span></div>'));
        });
    }), s(".pro-qty").prepend('<span class="dec qtybtn">-</span>'), s(".pro-qty").append('<span class="inc qtybtn">+</span>'),
        s(".qtybtn").on("click", function() {
            var e = s(this), a = e.parent().find("input").val();
            if (e.hasClass("inc")) var t = parseFloat(a) + 1; else if (a > 0) var t = parseFloat(a) - 1; else t = 0;
            e.parent().find("input").val(t);
        }), s(".product-view-mode a").on("click", function(e) {
        e.preventDefault();
        var a = s(".shop-product-wrap"), t = s(this).data("target");
        s(".product-view-mode a").removeClass("active"), s(this).addClass("active"), a.removeClass("grid-view list-view").addClass(t);
    });
    var o = s(".price-range"), l = s("#amount"), r = o.data("min"), c = o.data("max");
    o.slider({
        range: !0,
        min: r,
        max: c,
        values: [ r, c ],
        slide: function(s, e) {
            l.val("$" + e.values[0] + " - $" + e.values[1]);
        }
    }), l.val(" $" + o.slider("values", 0) + " - $" + o.slider("values", 1)), s("#create_pwd").on("change", function() {
        s(".account-create").slideToggle("100");
    }), s("#ship_to_different").on("change", function() {
        s(".ship-to-different").slideToggle("100");
    }), s('input[name="paymentmethod"]').on("click", function() {
        var e = s(this).attr("value");
        s(".payment-method-details").slideUp(), s('[data-method="' + e + '"]').slideDown();
    }), s(window).on("scroll", function() {
        s(this).scrollTop() > 600 ? s(".scroll-top").removeClass("not-visible") : s(".scroll-top").addClass("not-visible");
    }), s(".scroll-top").on("click", function(e) {
        s("html,body").animate({
            scrollTop: 0
        }, 1e3);
    }), s(".search-trigger").on("click", function() {
        s(".header-search-box").toggleClass("search-box-open");
    }),
        s("#mc-form").ajaxChimp({
        language: "en",
        callback: e,
        url: "https://devitems.us11.list-manage.com/subscribe/post?u=6bbb9b6f5827bd842d9640c82&amp;id=05d85f18ef"
    }),
        s(".banner-statistics-area").imagesLoaded(function() {
        s(".banner-grid").masonry({
            itemSelector: ".col-md-4",
            columnWidth: 1
        });
    });
    var d = (s(".category-toggle-wrap"), s(".category-toggle")), p = s(".category-menu");
    s(window).on({
        load: function() {
            a();
        },
        resize: function() {
            a();
        }
    }), d.on("click", function() {
        p.slideToggle();
    }), s(".category-menu").on("click", "li a, li a .menu-expand", function(e) {
        var a = s(this).hasClass("menu-expand") ? s(this).parent() : s(this);
        if (a.parent().hasClass("menu-item-has-children") && ("#" === a.attr("href") || s(this).hasClass("menu-expand")) && (a.siblings("ul:visible").length > 0 ? a.siblings("ul").slideUp() : (s(this).parents("li").siblings("li").find("ul:visible").slideUp(),
            a.siblings("ul").slideDown())), s(this).hasClass("menu-expand") || "#" === a.attr("href")) return e.preventDefault(),
            !1;
    });
}(jQuery);