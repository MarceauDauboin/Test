(function(n){"use strict";var i={defAnimation:"fadeInUp",scrollDuration:800,mailChimpURL:"https://facebook.us8.list-manage.com/subscribe/post?u=cdb7b577e41181934ed6a6a44&amp;id=e6957d85dc"},t=n(window),r=document.documentElement;r.setAttribute("data-useragent",navigator.userAgent);var u=function(){t.on("load",function(){n("html, body").animate({scrollTop:0},"normal");n("#loader").fadeOut("slow",function(){n("#preloader").delay(300).fadeOut("slow")})})},f=function(){n(".fluid-video-wrapper").fitVids()},e=function(){var t=n(".bricks-wrapper");t.imagesLoaded(function(){t.masonry({itemSelector:".brick",resize:!0})})},o=function(){n("#folio-wrap").lightGallery({showThumbByDefault:!1,hash:!1,selector:".item-wrap"})},s=function(){t.on("load",function(){n("#testimonial-slider").flexslider({namespace:"flex-",controlsContainer:"",animation:"slide",controlNav:!0,directionNav:!1,smoothHeight:!0,slideshowSpeed:7e3,animationSpeed:600,randomize:!1,touch:!0})})},h=function(){n(".owl-carousel").owlCarousel({nav:!1,loop:!0,margin:50,responsiveClass:!0,responsive:{0:{items:2,margin:20},400:{items:3,margin:30},600:{items:4,margin:40},1e3:{items:6}}})},c=function(){var i=n("#header-menu-trigger");t.on("scroll",function(){t.scrollTop()>150?i.addClass("opaque"):i.removeClass("opaque")})},l=function(){var t=n("#header-menu-trigger"),r=n("#menu-nav-wrap"),u=r.find(".close-button"),i=n("body"),f=n("section, footer");t.on("click",function(n){n.preventDefault();t.toggleClass("is-clicked");i.toggleClass("menu-is-open")});u.on("click",function(n){n.preventDefault();t.trigger("click")});i.on("click",function(r){n(r.target).is("#menu-nav-wrap, #header-menu-trigger, #header-menu-trigger span")||(t.removeClass("is-clicked"),i.removeClass("menu-is-open"))})},a=function(){n(".smoothscroll").on("click",function(t){var r=this.hash,u=n(r);t.preventDefault();t.stopPropagation();n("html, body").stop().animate({scrollTop:u.offset().top},i.scrollDuration,"swing").promise().done(function(){n("body").hasClass("menu-is-open")&&n("#header-menu-trigger").trigger("click");window.location.hash=r})})},v=function(){n("input, textarea, select").placeholder()},y=function(){n(".alert-box").on("click",".close",function(){n(this).parent().fadeOut(500)})},p=function(){n("html").hasClass("no-cssanimations")||n(".animate-this").waypoint({handler:function(t){var r=i.defAnimation;t!=="down"||n(this.element).hasClass("animated")||(n(this.element).addClass("item-animate"),setTimeout(function(){n("body .animate-this.item-animate").each(function(t){var i=n(this),u=i.data("animate")||null;u||(u=r);setTimeout(function(){i.addClass(u+" animated");i.removeClass("item-animate")},t*30)})},100));this.destroy()},offset:"95%"})},w=function(){t.on("load",function(){n("html").hasClass("no-cssanimations")||setTimeout(function(){n(".animate-intro").each(function(t){var u=n(this),r=u.data("animate")||null;r||(r=i.defAnimation);setTimeout(function(){u.addClass(r+" animated")},t*300)})},100)})},b=function(){n("#contactForm").validate({submitHandler:function(t){var i=n("#submit-loader");n.ajax({type:"POST",url:"inc/sendEmail.php",data:n(t).serialize(),beforeSend:function(){i.fadeIn()},success:function(t){t=="OK"?(i.fadeOut(),n("#message-warning").hide(),n("#contactForm").fadeOut(),n("#message-success").fadeIn()):(i.fadeOut(),n("#message-warning").html(t),n("#message-warning").fadeIn())},error:function(){i.fadeOut();n("#message-warning").html("Something went wrong. Please try again.");n("#message-warning").fadeIn()}})}})},k=function(){n("#mc-form").ajaxChimp({language:"es",url:i.mailChimpURL});n.ajaxChimp.translations.es={submit:"Submitting...",0:'<i class="fa fa-check"><\/i> We have sent you a confirmation email',1:'<i class="fa fa-warning"><\/i> You must enter a valid e-mail address.',2:'<i class="fa fa-warning"><\/i> E-mail address is not valid.',3:'<i class="fa fa-warning"><\/i> E-mail address is not valid.',4:'<i class="fa fa-warning"><\/i> E-mail address is not valid.',5:'<i class="fa fa-warning"><\/i> E-mail address is not valid.'}},d=function(){var i=500,r=400,u=400,t=n("#go-top");n(window).on("scroll",function(){n(window).scrollTop()>=i?t.fadeIn(r):t.fadeOut(u)})};(function(){u();f();e();o();s();h();c();l();a();v();y();p();w();b();k();d()})()})(jQuery)