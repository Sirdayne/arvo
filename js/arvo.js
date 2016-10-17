$(document).ready(function(){        
    
    /******************************
     BOTTOM SCROLL TOP BUTTON
     ******************************/

    // declare variable
    var scrollTop = $(".scrollTop");

        $(window).scroll(function(){
            // declare variable
            var topPos = $(this).scrollTop();

            /* 
            //if user scrolls down - show scroll to top button
            if(topPos > 100){
                $(scrollTop).removeClass('slideOutRightBig');
                $(scrollTop).addClass('slideInRightBig');


            }else{
                $(scrollTop).removeClass('slideInRightBig');
                $(scrollTop).addClass('slideOutRightBig');

            }
            */

        }); // scroll END

        //Click event to scroll to top
        $(scrollTop).click(function(){
            $('html, body').animate({scrollTop : 0},800);
            return false;

        });
    
    
    
    $('.nav-burger').click(function() {
        $('.navigation').removeClass('slideOutLeft');
        $('.navigation').addClass('slideInLeft');
        
        $('.modal-back').fadeIn('fast');
        
        $('.navigation').slideDown('fast');
        
    });
    
    $('.modal-back').click(function() {
        $('.navigation').removeClass('slideInLeft');
        $('.navigation').addClass('slideOutLeft');
        
        $('.modal-back').fadeOut('fast');
        
        $('.navigation').slideUp('slow');
    });

    var telephone = $('#telephone');
    
    if ($(window).width() > 800) {
    
    $('.nav-waypoint').waypoint({
        handler: function(direction) {
            
            if (direction === 'down') {
                $('.navigation').addClass('navigation-active');
                $('.nav').addClass('nav-active');
                $('.nav-logo').addClass('nav-logo-active');
                
                $(scrollTop).removeClass('slideOutRightBig');
                $(scrollTop).addClass('slideInRightBig');

            } 
            
            else {
                $('.navigation').removeClass('navigation-active');
                $('.nav').removeClass('nav-active');
                $('.nav-logo').removeClass('nav-logo-active');
                
                $(scrollTop).removeClass('slideInRightBig');
                $(scrollTop).addClass('slideOutRightBig');
            }
        },
        
        offset: 0
    });
        
    }
    
 

});

