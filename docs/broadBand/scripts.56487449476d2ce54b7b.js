function revSlider(){var e=jQuery;e(document).ready(function(){null==e("#rev_slider_one").revolution?revslider_showDoubleJqueryError("#rev_slider_one"):"/home"==location.pathname&&e("#rev_slider_one").show().revolution({sliderType:"standard",jsFileLocation:"plugins/revolution/js/",sliderLayout:"fullwidth",dottedOverlay:"none",delay:5e3,navigation:{keyboardNavigation:"off",keyboard_direction:"horizontal",mouseScrollNavigation:"off",mouseScrollReverse:"default",onHoverStop:"off",touch:{touchenabled:"on",touchOnDesktop:"off",swipe_threshold:75,swipe_min_touches:1,swipe_direction:"horizontal",drag_block_vertical:!1},arrows:{style:"uranus",enable:!0,hide_onmobile:!0,hide_under:600,hide_onleave:!1,tmp:"",left:{h_align:"left",v_align:"center",h_offset:0,v_offset:0},right:{h_align:"right",v_align:"center",h_offset:0,v_offset:0}}},responsiveLevels:[1200,1040,778,480],visibilityLevels:[1200,1040,778,480],gridwidth:[1200,1040,778,480],gridheight:[400,700,600,500],lazyType:"none",parallax:{type:"scroll",origo:"enterpoint",speed:400,levels:[5,10,15,20,25,30,35,40,45,50,46,47,48,49,50,55],type:"scroll"},shadow:0,spinner:"off",stopLoop:"off",stopAfterLoops:-1,stopAtSlide:-1,shuffle:"off",autoHeight:"off",hideThumbsOnMobile:"off",hideSliderAtLimit:0,hideCaptionAtLimit:0,hideAllCaptionAtLilmit:0,debugMode:!1,fallbacks:{simplifyAll:"off",nextSlideOnWindowFocus:"off",disableFocusListener:!1}})})}function mainmenu(){$(".main-menu li.dropdown ul").length&&($(".main-menu li.dropdown").append('<div class="dropdown-btn"></div>'),$(".main-menu li.dropdown .dropdown-btn").on("click",function(){$(this).prev("ul").slideToggle(500)}))}function languageSwitcher(){$("#polyglot-language-options").length&&$("#polyglotLanguageSwitcher").polyglotLanguageSwitcher({effect:"slide",animSpeed:500,testMode:!0,onChange:function(e){alert("The selected language is: "+e.selectedItem)}})}function stickyHeader(){$(".stricky").length&&($(window).scrollTop()>100?($(".stricky").addClass("stricky-fixed"),$(".scroll-to-top").fadeIn(1500)):$(this).scrollTop()<=100&&($(".stricky").removeClass("stricky-fixed"),$(".scroll-to-top").fadeOut(1500)))}function headerStyle(){if($(".main-header").length){var e=$(window).scrollTop(),t=$(".main-header"),a=$(".fixed-header .sticky-header"),n=$(".scroll-to-top");e>50?(t.addClass("fixed-header"),a.addClass("animated slideInDown"),n.fadeIn(300)):(t.removeClass("fixed-header"),a.removeClass("animated slideInDown"),n.fadeOut(300))}}function searchbox(){$(".seach-toggle").length&&$(".seach-toggle").on("click",function(){$(this).toggleClass("active"),$(this).next(".search-box").toggleClass("now-visible")})}function scrollToTop(){$(".scroll-to-target").length&&$(".scroll-to-target").on("click",function(){var e=$(this).attr("data-target");$("html, body").animate({scrollTop:$(e).offset().top},1e3)})}function prealoader(){$(".preloader").length&&$(".preloader").delay(600).fadeOut(500)}function CounterNumberChanger(){var e=$(".timer");e.length&&e.appear(function(){e.countTo()})}function singleProductTab(){$(".tabs-box").length&&$(".tabs-box .tab-buttons .tab-btn").on("click",function(e){e.preventDefault();var t=$($(this).attr("data-tab"));if($(t).is(":visible"))return!1;t.parents(".tabs-box").find(".tab-buttons").find(".tab-btn").removeClass("active-btn"),$(this).addClass("active-btn"),t.parents(".tabs-box").find(".tabs-content").find(".tab").fadeOut(0),t.parents(".tabs-box").find(".tabs-content").find(".tab").removeClass("active-tab"),$(t).fadeIn(300),$(t).addClass("active-tab")})}function priceFilter(){$(".price-ranger").length&&($(".price-ranger #slider-range").slider({range:!0,min:10,max:200,values:[11,99],slide:function(e,t){$(".price-ranger .ranger-min-max-block .min").val("$"+t.values[0]),$(".price-ranger .ranger-min-max-block .max").val("$"+t.values[1])}}),$(".price-ranger .ranger-min-max-block .min").val("$"+$(".price-ranger #slider-range").slider("values",0)),$(".price-ranger .ranger-min-max-block .max").val("$"+$(".price-ranger #slider-range").slider("values",1)))}function accordion(){$(".accordion-box").length&&$(".accordion-box").on("click",".accord-btn",function(){!0!==$(this).hasClass("active")&&$(".accordion .accord-btn").removeClass("active"),$(this).next(".accord-content").is(":visible")?($(this).removeClass("active"),$(this).next(".accord-content").slideUp(500)):($(this).addClass("active"),$(".accordion .accord-content").slideUp(500),$(this).next(".accord-content").slideDown(500))})}function cartTouchSpin(){$(".quantity-spinner").length&&$("input.quantity-spinner").TouchSpin({verticalbuttons:!0})}function datepicker(){$("#datepicker").length&&$("#datepicker").datepicker()}function timepicker(){$('input[name="time"]').ptTimeSelect()}function tooltip(){$(".tool_tip").length&&$(".tool_tip").tooltip(),$}function projectMasonaryLayout(){$(".masonary-layout").length&&$(".masonary-layout").isotope({layoutMode:"masonry"}),$(".post-filter").length&&$(".post-filter li").children("span").on("click",function(){var e=$(this),t=e.parent().attr("data-filter");return $(".post-filter li").children("span").parent().removeClass("active"),e.parent().addClass("active"),$(".filter-layout").isotope({filter:t,animationOptions:{duration:500,easing:"linear",queue:!1}}),!1}),$(".post-filter.has-dynamic-filter-counter").length&&$(".post-filter.has-dynamic-filter-counter").find("li").each(function(){var e=$(this).data("filter");console.log(e);var t=$(".gallery-content").find(e).length;$(this).children("span").append('<span class="count"><b>'+t+"</b></span>")})}function countDownTimer(){$(".time-countdown").length&&$(".time-countdown").each(function(){var e=$(this),t=e.data("countdown-time");e.countdown(t,function(e){$(this).html("<h2>"+e.strftime("%D : %H : %M : %S")+"</h2>")})}),$(".time-countdown-two").length&&$(".time-countdown-two").each(function(){var e=$(this),t=e.data("countdown-time");e.countdown(t,function(e){$(this).html('<li> <div class="box"> <span class="days">'+e.strftime("%D")+'</span> <span class="timeRef">days</span> </div> </li> <li> <div class="box"> <span class="hours">'+e.strftime("%H")+'</span> <span class="timeRef clr-1">hrs</span> </div> </li> <li> <div class="box"> <span class="minutes">'+e.strftime("%M")+'</span> <span class="timeRef clr-2">mins</span> </div> </li> <li> <div class="box"> <span class="seconds">'+e.strftime("%S")+'</span> <span class="timeRef clr-3">secs</span> </div> </li>')})})}function countryInfo(){$(".area_select").length&&$(".area_select").change(function(){var e=$(this).val();e?($(".state:not(#value"+e+")").slideUp(),$("#value"+e).slideDown()):$(".state").slideDown()})}function selectDropdown(){$(".selectmenu").length&&($(".selectmenu").selectmenu(),$(".selectmenu").selectmenu({change:function(e,t){$(this).trigger("change",t)}}))}function serviceCarousel(){$(".service-carousel").length&&$(".service-carousel").owlCarousel({dots:!0,loop:!0,margin:30,nav:!1,navText:['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],autoplayHoverPause:!1,autoplay:6e3,smartSpeed:1e3,responsive:{0:{items:1},600:{items:1},800:{items:2},1024:{items:2},1100:{items:3},1200:{items:3}}})}function testimonialCarousel(){$(".testimonial-carousel").length&&$(".testimonial-carousel").owlCarousel({dots:!0,loop:!0,margin:30,nav:!1,navText:['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],autoplayHoverPause:!1,autoplay:6e3,smartSpeed:1e3,responsive:{0:{items:1},600:{items:1},800:{items:1},1024:{items:1},1100:{items:1},1200:{items:1}}})}if($(".accordion-holder").length&&$(".accordion-holder .acc-btn").on("click",function(){!0!==$(this).hasClass("active")&&$(".accordion-holder .acc-btn").removeClass("active"),$(this).next(".acc-content").is(":visible")?($(this).removeClass("active"),$(this).next(".acc-content").slideUp(500)):($(this).addClass("active"),$(".accordion-holder .acc-content").slideUp(500),$(this).next(".acc-content").slideDown(500))}),$(".progress-levels .progress-box .bar-fill").length&&$(".progress-box .bar-fill").each(function(){$(".progress-box .bar-fill").appear(function(){var e=$(this).attr("data-percent");$(this).css("width",e+"%")})},{accY:0}),$(".count-box").length&&$(".count-box").appear(function(){var e=$(this),t=e.find(".count-text").attr("data-stop"),a=parseInt(e.find(".count-text").attr("data-speed"),10);e.hasClass("counted")||(e.addClass("counted"),$({countNum:e.find(".count-text").text()}).animate({countNum:t},{duration:a,easing:"linear",step:function(){e.find(".count-text").text(Math.floor(this.countNum))},complete:function(){e.find(".count-text").text(this.countNum)}}))},{accY:0}),$(".dial").length&&$(".dial").appear(function(){var e=$(this),t=(e.attr("data-fgColor"),e.attr("value"));e.knob({value:0,min:0,max:100,skin:"tron",readOnly:!0,thickness:.1,dynamicDraw:!1,displayInput:!1}),$({value:0}).animate({value:t},{duration:2e3,easing:"swing",progress:function(){e.val(Math.ceil(this.value)).trigger("change")}}),$(this).append(function(){})},{accY:20}),$(".mission-vision-tab-box").length&&$(".mission-vision-tab-box .tab-buttons .p-tab-btn").on("click",function(e){e.preventDefault();var t=$($(this).attr("data-tab"));if($(t).hasClass("actve-tab"))return!1;$(".mission-vision-tab-box .tab-buttons .p-tab-btn").removeClass("active-btn"),$(this).addClass("active-btn"),$(".mission-vision-tab-box .tab-content-box .single-tab-content").removeClass("active-tab"),$(t).addClass("active-tab")}),$(".hidden-bar").length){var hiddenBar=$(".hidden-bar"),hiddenBarOpener=$(".hidden-bar-opener"),hiddenBarCloser=$(".hidden-bar-closer"),navToggler=$(".nav-toggler");$(".hidden-bar-wrapper").mCustomScrollbar(),hiddenBarOpener.on("click",function(){hiddenBar.toggleClass("visible-sidebar"),navToggler.toggleClass("open")}),hiddenBarCloser.on("click",function(){hiddenBar.toggleClass("visible-sidebar"),navToggler.toggleClass("open")})}if($(".single-service-slider .bxslider").length&&$(".single-service-slider .bxslider").bxSlider({nextSelector:".single-service-slider #slider-next",prevSelector:".single-service-slider #slider-prev",nextText:'<i class="fa fa-angle-right"></i>',prevText:'<i class="fa fa-angle-left"></i>',mode:"fade",auto:"true",speed:"7000",pagerCustom:".single-service-slider .slider-pager .thumb-box"}),$(".lightbox-image").length&&$(".lightbox-image").fancybox({openEffect:"fade",closeEffect:"fade",youtube:{controls:0,showinfo:0},helpers:{media:{}}}),$(".wow").length){var wow=new WOW({boxClass:"wow",animateClass:"animated",offset:0,mobile:!1,live:!0});wow.init()}$("#contact-form").length&&$("#contact-form").validate({submitHandler:function(e){var t=$(e).find('button[type="submit"]'),a="#form-result";$(a).remove(),t.before('<div id="form-result" class="alert alert-success" role="alert" style="display: none;"></div>');var n=t.html();t.html(t.prop("disabled",!0).data("loading-text")),$(e).ajaxSubmit({dataType:"json",success:function(i){(i.status="true")&&$(e).find(".form-control").val(""),t.prop("disabled",!1).html(n),$(a).html(i.message).fadeIn("slow"),setTimeout(function(){$(a).fadeOut("slow")},6e3)}})}}),$("#add-comment-form").length&&$("#add-comment-form").validate({submitHandler:function(e){var t=$(e).find('button[type="submit"]'),a="#form-result";$(a).remove(),t.before('<div id="form-result" class="alert alert-success" role="alert" style="display: none;"></div>');var n=t.html();t.html(t.prop("disabled",!0).data("loading-text")),$(e).ajaxSubmit({dataType:"json",success:function(i){(i.status="true")&&$(e).find(".form-control").val(""),t.prop("disabled",!1).html(n),$(a).html(i.message).fadeIn("slow"),setTimeout(function(){$(a).fadeOut("slow")},6e3)}})}}),$("#appoinment-form").length&&$("#appoinment-form").validate({submitHandler:function(e){var t=$(e).find('button[type="submit"]'),a="#form-result";$(a).remove(),t.before('<div id="form-result" class="alert alert-success" role="alert" style="display: none;"></div>');var n=t.html();t.html(t.prop("disabled",!0).data("loading-text")),$(e).ajaxSubmit({dataType:"json",success:function(i){(i.status="true")&&$(e).find(".form-control").val(""),t.prop("disabled",!1).html(n),$(a).html(i.message).fadeIn("slow"),setTimeout(function(){$(a).fadeOut("slow")},6e3)}})}}),jQuery(document).on("ready",function(){jQuery,mainmenu(),languageSwitcher(),searchbox(),scrollToTop(),CounterNumberChanger(),singleProductTab(),priceFilter(),accordion(),cartTouchSpin(),selectDropdown(),datepicker(),timepicker(),tooltip(),countDownTimer(),countryInfo(),serviceCarousel(),testimonialCarousel()}),jQuery(window).on("scroll",function(){jQuery,stickyHeader(),headerStyle()}),jQuery(window).on("load",function(){jQuery,prealoader(),projectMasonaryLayout()});