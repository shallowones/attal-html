"use strict";!function(t){t(function(){t(".js-scroll").on("click",function(o){o.preventDefault(),t("html, body").animate({scrollTop:t(o.currentTarget.hash).offset().top})});var o=t(".js-arrow"),n=t(window),c=function(t){o.stop().animate({opacity:t},200)};n.scroll(function(t){c(+(t.currentTarget.pageYOffset>200))}),n.scrollTop()>200&&c(1),o.on("click",function(o){o.preventDefault(),t("html, body").animate({scrollTop:0})})})}(jQuery);