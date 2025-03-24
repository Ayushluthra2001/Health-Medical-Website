!function(a){"use strict";a(window).load(function(){a(".preloader").fadeOut(1e3)}),
a(".navbar-collapse a").on("click",function(){a(".navbar-collapse").collapse("hide")}),
a(".owl-carousel").owlCarousel({animateOut:"fadeOut",items:1,loop:!0,autoplay:!0}),a.stellar(),
a(function(){a(".navbar-default a, #home a, footer a").on("click",function(o){var t=a(this);
a("html, body").stop().animate({scrollTop:a(t.attr("href")).offset().top-49},1e3),
o.preventDefault()})}),new WOW({mobile:!1}).init()}(jQuery);