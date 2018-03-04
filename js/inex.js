$(document).ready(function() {
    
    $(".golden").on("click", function() {
        if($(this).hasClass("active")){
            
            $(this).removeClass("active");
            $(this).css("color","white");
            
            return;
            
        } else {
            
            if($(".golden").hasClass("active")){
                
                $(".golden").removeClass("active");
                $(".golden").css("color","white");
                
            }
            
            $(this).addClass("active");
            $(this).css("color","gold");
            
        }
        
    });
    
});

