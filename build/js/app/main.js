"use strict";!function(e){e(function(){e(".js-scroll").on("click",function(t){t.preventDefault(),e("html, body").animate({scrollTop:e(t.currentTarget.hash).offset().top})});var t=e(".js-arrow"),o=e(window),n=function(e){t.stop().animate({opacity:e},200)};o.scroll(function(e){n(+(e.currentTarget.pageYOffset>200))}),o.scrollTop()>200&&n(1),t.on("click",function(t){t.preventDefault(),e("html, body").animate({scrollTop:0})}),e(".swiper-container").swiper({slidesPerView:"auto"}),e("#menu-icon").on("click",function(t){t.preventDefault();var o=e(t.currentTarget),n=e(o.val());o.toggleClass("open"),n.slideToggle()});var r=e(window),s=e(".menu"),a=s.offset().top,c=e(".header");r.bind("scroll",function(e){e.currentTarget.pageYOffset>=a?c.addClass("fixed").css({"padding-bottom":s.css("height")}):c.removeClass("fixed").removeAttr("style")})})}(jQuery);