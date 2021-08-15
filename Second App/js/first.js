$(function(){
    "use strict";
    //start thumbnail
    
    $(".gallery .thumbnails img").on('click',function(){
        
        $(this).addClass("active").siblings().removeClass("active");
        $(".master-img img").attr('src', $(this).attr('src'));
        
        });
    
    
    
     //  start progress
   $(".skills .pro span").each(function(){
    $(this).animate({
        width: $(this).attr('data-progress') + '%'
        
        },19000);
    
    });
    
    
    
    });