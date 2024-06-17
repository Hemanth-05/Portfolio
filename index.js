$(".project").on("mouseenter", function(){
    $(this).find(".projectImage").addClass("moveLeft");
});

$(".project").on("mouseleave", function(){
    $(this).find(".projectImage").removeClass("moveLeft");
});
