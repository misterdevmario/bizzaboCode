$(document).ready(function() {
	// Accordion JS
	$(".accordion_header").click(function() {
        // Remove `acc_active` and hide all accordion contents
        $(".accordion-item").not($(this).parents('.accordion-item')).removeClass("acc_active");
        $(".accordion_content").not($(this).next(".accordion_content")).slideUp();


        // Toggle the clicked accordion's active state and content
        $(this).parents('.accordion-item').toggleClass("acc_active");
        $(this).next(".accordion_content").stop().slideToggle();
    });


    // Mobile Trigger JS
    function initMobileMenu() {
	    if (window.matchMedia("(max-width: 992px)").matches) {
	        $(".mobile_trigger").off("click").on("click", function () {
	            $(this).toggleClass("open");
	            $(this).next(".header_menu").stop().slideToggle();
	        });


	        $(".up .header_menu ul > li > a").off("click").on("click", function () {
	            $(".mobile_trigger").removeClass("open");
	            $(".header_menu").stop().slideUp();
	        });
	    } else {
	        // Optional: Remove event listeners if the screen is larger
	        $(".mobile_trigger").off("click");
	        $(".up .header_menu ul > li > a").off("click");
	    }
	}


	// Run on page load
	initMobileMenu();


	// Re-run when the window is resized
	window.addEventListener("resize", initMobileMenu);


    




	// Banner Height
    var banner_height = function(){
	    var headerHeight = $('header').outerHeight(); // Adjust this selector to match your header
	    var bannerHeight = $(window).height() - headerHeight;
	    $('.banner_sec').css('height', bannerHeight);


	    // Add margin-top to sticky_wrapper
    	$('.sticky_wrapper').css('margin-top', headerHeight - 1 + 'px');
	}


	banner_height();


	$(window).on('load resize', function(){
	    banner_height();
	});


    // Equal Height
    equalheight = function(container){


	var currentTallest = 0,
	     currentRowStart = 0,
	     rowDivs = new Array(),
	     $el,
	     topPosition = 0;
	 $(container).each(function() {


	   $el = $(this);
	   $($el).height('auto')
	   topPostion = $el.position().top;


	   if (currentRowStart != topPostion) {
	     for (currentDiv = 0 ; currentDiv < rowDivs.length ; currentDiv++) {
	       rowDivs[currentDiv].height(currentTallest);
	     }
	     rowDivs.length = 0; // empty the array
	     currentRowStart = topPostion;
	     currentTallest = $el.height();
	     rowDivs.push($el);
	   } else {
	     rowDivs.push($el);
	     currentTallest = (currentTallest < $el.height()) ? ($el.height()) : (currentTallest);
	  }
	   for (currentDiv = 0 ; currentDiv < rowDivs.length ; currentDiv++) {
	     rowDivs[currentDiv].height(currentTallest);
	   }
	 });
	}


	$(window).load(function() {
	  equalheight('.up .four_col_item .text_col > h3');
	});




	$(window).resize(function(){
	  equalheight('.up .four_col_item .text_col > h3');
	});


	// Smooth Scroll
	$(function() {
	    var headerHeight = $('header').outerHeight(); // Get the fixed header height
	    
	    $('a[href*=#]:not([href=#])').click(function() {
	        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {


	            var target = $(this.hash);
	            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
	            
	            if (target.length) {
	                $('html,body').animate({
	                    scrollTop: target.offset().top - headerHeight // Subtract header height
	                }, 600);
	                return false;
	            }
	        }
	    });
	});


	// Sticky JS
	// $(window).on('scroll', function() {
	//     // Get the position of the section
	//     var sectionTop = $('#intro').offset().top;
	//     var windowHeight = $(window).height();
	//     var windowScroll = $(window).scrollTop();


	//     // Check if the section is in the viewport
	//     if (windowScroll + windowHeight > sectionTop + 50 ) {
	//         // Add class to sticky button
	//         $('.sticky_btn').addClass('active');
	//     } else {
	//         // Remove class from sticky button
	//         $('.sticky_btn').removeClass('active');
	//     }
	// });


	// Delay load
	setTimeout(function() {
        const content = document.querySelectorAll('body.up');
        content.forEach(function(element) {
            element.style.opacity = '1';
        });
    }, 2000);




});

