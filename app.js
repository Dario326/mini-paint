$(document).ready(function() 
    var color = "white";
    var colors = "red blue yellow white green";
    var isDragging = false;
    $(".box").on("mousedown", function(){
    if(isDragging){
        $(this).addClass(color);
    }
})
$(".box").on("mousemove", function(){
    if(isDragging){
        $(this).addClass(color);
    }
})
   $(".box").on("click", function(){
      $(this).addClass(color);
       isDragging = false;
   }); 
    
    $(".box").on("dblclick", function(){
       $(this).removeClass(colors); 
        isDragging = true;
    });
    
    $("#reset").on("click", function(){
        $(".box").removeClass(colors);
    })
    
    $("#red").on("click", function(){
        color = "red"; 
    });
    $("#blue").on("click", function(){
        color = "blue"; 
    });
    $("#yellow").on("click", function(){
        color = "yellow"; 
    });
    $("#green").on("click", function(){
        color = "green"; 
    });
    $("#white").on("click", function(){
        color = "white"; 
    });
   
    
});