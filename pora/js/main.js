/* Template: Pora - Insurance Agency HTML Landing Page Template*/
(function ($) {
	"use strict";

//AOS Animatjon
	AOS.init({	
		offset: 0, // offset (in px) from the original trigger point
		delay: 0, // values from 0 to 3000, with step 50ms
		duration: 900, // values from 0 to 3000, with step 50ms
		easing: 'ease-in-out', // default easing for AOS animations
		once: false, // whether animation should happen only once - while scrolling down
		mirror: false, // whether elements should animate out while scrolling past them
		anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation
	  
	  });

//Owl-Carousel - Home hero brands
$(window).on("load", function () {
	$('.oc-clients').owlCarousel({		
		nav: false,
		dots: false,		 
		autoplay: true,
		loop: true,      
		margin: 30,
		autoplayTimeout: 3500,
		autoplayHoverPause: true,
		autoHeight: true,
		smartSpeed: 2000,   
	    responsive: {
		0: {
		  items: 2
		},
		520: {
		  items: 2
		},
		768: {
		  items: 3
		},
		1200: {
		  items: 4
		},
		1400: {
		  items: 5
		},
		1600: {
		  items: 5
		},
	  }
	});
  });


//Owl-Carousel -RTL Home hero brands
$(window).on("load", function () {
	$('.oc-clients-rtl').owlCarousel({
		rtl:true,	
		nav: false,
		dots: false,		 
		autoplay: true,
		loop: true,      
		margin: 30,
		autoplayTimeout: 3500,
		autoplayHoverPause: true,
		autoHeight: true,
		smartSpeed: 2000,   
	    responsive: {
		0: {
		  items: 2
		},
		520: {
		  items: 2
		},
		768: {
		  items: 3
		},
		1200: {
		  items: 4
		},
		1400: {
		  items: 5
		},
		1600: {
		  items: 5
		},
	  }
	});
  });
 

//Owl-Carousel - Home hero review
$(window).on("load", function () {
	$('.owl-review').owlCarousel({		
		nav: false,
		dots: false,		 
		autoplay: true,
		loop: true,      
		margin: 30,
		autoplayTimeout: 3500,
		autoplayHoverPause: true,
		autoHeight: true,
		smartSpeed: 2000,   
	    responsive: {
		0: {
		  items: 1
		},
		520: {
		  items: 1
		},
		768: {
		  items: 2
		},
		1200: {
		  items: 3
		},
		1400: {
		  items: 3
		},
		1600: {
		  items: 3
		},
	  }
	});
  });


//Owl-Carousel - RTL Home hero review
$(window).on("load", function () {
	$('.owl-review-rtl').owlCarousel({
		rtl:true,	
		nav: false,
		dots: false,		 
		autoplay: true,
		loop: true,      
		margin: 30,
		autoplayTimeout: 3500,
		autoplayHoverPause: true,
		autoHeight: true,
		smartSpeed: 2000,   
	    responsive: {
		0: {
		  items: 1
		},
		520: {
		  items: 1
		},
		768: {
		  items: 2
		},
		1200: {
		  items: 3
		},
		1400: {
		  items: 3
		},
		1600: {
		  items: 3
		},
	  }
	});
  });


//Owl-Carousel - Home 3 review
$(window).on("load", function () {
	$('.reviews-block').owlCarousel({
		items: 1,
		nav: false,
		dots: false,		 
		autoplay: true,
		loop: true,      
		margin: 30,
		autoplayTimeout: 3500,
		autoplayHoverPause: true,
		autoHeight: true,
		smartSpeed: 2000,  
	    
	});
  });


//Owl-Carousel -RTL Home 3 review
$(window).on("load", function () {
	$('.reviews-block-rtl').owlCarousel({
		items: 1,
		rtl:true,	
		nav: false,
		dots: false,		 
		autoplay: true,
		loop: true,      
		margin: 30,
		autoplayTimeout: 3500,
		autoplayHoverPause: true,
		autoHeight: true,
		smartSpeed: 2000,  
	    
	});
  });

		
	//Sticky Header 
	function updateScroll() {
		if ($(window).scrollTop() >= 80) {
			$(".navbar").addClass('sticky');
		} else {
			$(".navbar").removeClass("sticky");
		}
	}
	$(function () {
		$(window).scroll(updateScroll);
		updateScroll();
	});


//NAVBAR Scroll		
		var aScroll = $('.nav-item .nav-link'),
		$navbarCollapse = $('.navbar-collapse');
		aScroll.on('click', function (event) {
			var target = $($(this).attr('href'));
			$(this).parent(".nav-item").siblings().removeClass('active');
			$(this).parent('.nav-item').addClass('active');
	
			if (target.length > 0) {
				event.preventDefault();
				$('html, body').animate({
					scrollTop: target.offset().top - 70
				}, 1000);
			}
				// If click link and navabr is show
				if ($('.navbar-collapse').hasClass('show')) {
					$('.navbar-collapse').toggleClass('show');
					$('.navbar-toggler-icon').toggleClass('active');
					$('.navbar-toggler').toggleClass('collapsed');
				}
			});
			

  // Background Image
  $("[data-background]").each(function () {
  	$(this).css("background-image", "url(" + $(this).attr("data-background") + ")")
  })


})(jQuery);