$("#feature-slider").owlCarousel({
        //autoPlay: 5000, //Set AutoPlay to 5 seconds
        autoplay: true,
        //smartSpeed: 2000, // Default is 250
        items: 4, //Set Testimonial items
        loop: false,
        margin: 10,
        singleItem: false,
        touchDrag: false,
        mouseDrag: false,
        pagination: false,
        nav: false,
        dots: true,
        navText: ["<i class='fal fa-long-arrow-left'></i>", "<i class='fal fa-long-arrow-right'></i>"],
    responsiveClass:true,
    responsive:{
        0:{
            items:2,
         singleItem: true,
        touchDrag: true,
        mouseDrag: true,
        },
        480:{
            items:2,
            singleItem: true,
        touchDrag: true,
        mouseDrag: true,
        },
        568:{
            items:2,
            singleItem: true,
        touchDrag: true,
        mouseDrag: true,
        },
        600:{
            items:2,
        },
        667:{
            items:2,
        },
        1000:{
            items:4
        }
    }   
        
    });


$("#rankings-slider").owlCarousel({
        //autoPlay: 5000, //Set AutoPlay to 5 seconds
        autoplay: true,
        //smartSpeed: 2000, // Default is 250
        items: 3, //Set Testimonial items
        loop: false,
        margin: 15,
        singleItem: false,
        touchDrag: false,
        mouseDrag: false,
        pagination: false,
        nav: false,
        dots: true,
        navText: ["<i class='fal fa-long-arrow-left'></i>", "<i class='fal fa-long-arrow-right'></i>"],
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
         singleItem: true,
        touchDrag: true,
        mouseDrag: true,
        },
        480:{
            items:1,
            singleItem: true,
        touchDrag: true,
        mouseDrag: true,
        },
        568:{
            items:1,
            singleItem: true,
        touchDrag: true,
        mouseDrag: true,
        },
        600:{
            items:2,
        },
        667:{
            items:2,
        },
        1000:{
            items:3
        }
    }   
        
    });

$("#recruiters-slider").owlCarousel({
        //autoPlay: 5000, //Set AutoPlay to 5 seconds
        autoplay: true,
        //smartSpeed: 2000, // Default is 250
        items: 6, //Set Testimonial items
        loop: false,
        margin: 0,
        singleItem: true,
        touchDrag: true,
        mouseDrag: true,
        pagination: false,
        nav: false,
        dots: true,
        navText: ["<i class='fal fa-long-arrow-left'></i>", "<i class='fal fa-long-arrow-right'></i>"],
    responsiveClass:true,
    responsive:{
        0:{
            items:2,
        },
        480:{
            items:2,
        },
        568:{
            items:2,
        },
        600:{
            items:2,
        },
        667:{
            items:2,
        },
        1000:{
            items:6
        }
    }   
        
    });

//alumni-slider
$("#testimonial-slider").owlCarousel({
        autoplay: true,
        autoplayTimeout: 2000,
        smartSpeed: 2000, // Default is 250
        items: 2, //Set Testimonial items
        loop: false,
        margin: 30,
        singleItem: true,
        touchDrag: true,
        mouseDrag: true,
        pagination: false,
        nav: true,
        dots: true,
        navText: ["<i class='fal fa-angle-left'></i>", "<i class='fal fa-angle-right'></i>"],
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
        },
        480:{
            items:1,
        },
        568:{
            items:1,
        },
        600:{
            items:1,
        },
        667:{
            items:2,
        },
        1000:{
            items:2
        }
    }   
        
    });

//alumni-slider
$("#education-slider").owlCarousel({
        autoplay: true,
        autoplayTimeout: 1200,
        //smartSpeed: 2000, // Default is 250
        items: 1, //Set Testimonial items
        loop: true,
        margin: 30,
        singleItem: true,
        touchDrag: true,
        mouseDrag: true,
        pagination: false,
        nav: true,
        dots: false,
        navText: ["<i class='fal fa-angle-left'></i>", "<i class='fal fa-angle-right'></i>"],
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
        },
        480:{
            items:1,
        },
        568:{
            items:1,
        },
        600:{
            items:1,
        },
        667:{
            items:1,
        },
        1000:{
            items:1
        }
    }   
        
    });


/* -------------------------------  
         WOW ANIMATED JS START
/* ----------------------------- */

// Elements Animation
    if($('.wow').length){
        var wow = new WOW(
          {
            boxClass:     'wow',      // animated element css class (default is wow)
            animateClass: 'animated', // animation css class (default is animated)
            offset:       0,          // distance to the element when triggering the animation (default is 0)
            mobile:       true,       // trigger animations on mobile devices (default is true)
            live:         true       // act on asynchronously loaded content (default is true)
          }
        );
        wow.init();
    }


/* -------------------------------	
		INPUT PLACEHOLDER
/* ----------------------------- */

$('input,textarea').focus(function(){

   $(this).data('placeholder',$(this).attr('placeholder'))

          .attr('placeholder','');

}).blur(function(){

   $(this).attr('placeholder',$(this).data('placeholder'));

});

/* ---------------------	
		back-top
/* --------------------- */

if ($('#back-top').length) {

    var scrollTrigger = 100, // px

        backToTop = function () {

            var scrollTop = $(window).scrollTop();

            if (scrollTop > scrollTrigger) {

                $('#back-top').addClass('show');

            } else {

                $('#back-top').removeClass('show');

            }

        };

    backToTop();

    $(window).on('scroll', function () {

        backToTop();

    });

    $('#back-top').on('click', function (e) {

        e.preventDefault();

        $('html,body').animate({

            scrollTop: 0

        }, 700);

    });

}


var stickyNavTop = $('#header').offset().top;
var stickyNav = function(){
var scrollTop = $(window).scrollTop();
if (scrollTop > stickyNavTop) { 

    $('#header').addClass('sticky');

} else {

    $('#header').removeClass('sticky'); 

}

};

stickyNav();

 

$(window).scroll(function() {

    stickyNav();

});

$('a[href^="#applyBox"]').on('click', function(event) {
    var target = $(this.getAttribute('href'));
    if( target.length ) {
        event.preventDefault();
        $('html, body').stop().animate({
            scrollTop: target.offset().top
        }, 1000);
    }
});

$(document).scroll(function () {
    var y = $(this).scrollTop();
    if (y > 300) {
        $('#sideNavi').fadeIn();
    } else {
        $('#sideNavi').fadeOut();
    }

});