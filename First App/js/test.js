$(function(){
    "use strict";  
    var scrollButton = $(".scroll-top");
    $(window).scroll(function(){
         console.log($(this).scrollTop());
        if($(this).scrollTop() >= 500){    
            scrollButton.show();      
        }else{      
            scrollButton.hide();       
        }    
        });
      scrollButton.click(function(){
        $("html,body").animate({
            scrollTop : 0
            },600);
        });
    $(".comm-show").click(function(){
        
        $(".coment").toggle();
        });
    $("html").niceScroll({
    cursorcolor:'#115656',
    cursorborder: '0'
        });
    // trigger searches
    $(".searchs").click(function(){
        $(".sear").toggle();
      });
    $(".imag .parent .container .nav .links li").click(function(){
        $(this).addClass('active').siblings().removeClass('active');
        });

    });


$(window).load(function(){

    
        $(".loading-overlay .spinner").fadeOut(1000,
        function(){
            $(this).parent().fadeOut(2000,
            function()
            {
                
               $(this).remove(); 
            });
            
            
            });
        
        
        
        
        
        // start scroll navbar
        $(".nav .links li").click(function (e) {
            
            e.preventDefault();
            $('html, body').animate({
                
                 scrollTop : $( '#' +  $(this).data('scroll')).offset().top
                },600 );
            
            
            });
        
        $(".thumbnail img").click(function(){
        
        $(this).addClass('selected').siblings().removeClass('selected');
        $(".master-img img").hide().attr('src',$(this).attr('src')).fadeIn(500);
        });
});









