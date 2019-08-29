

// //=====================================================//
// //                         VIEWS                       //
// //=====================================================//
$(document).ready(function() {
    $(".switcher + #myItems").each(function() {
        var itemName = document.getElementsByClassName("itemImg");
        var names = [];
        for(var i = 0; i < itemName.length; i++) {
            names[i] = $(itemName[i]).attr("alt");
            $(".carousel-inner .carousel-item:nth-child(" + (i + 1) + ") a .carousel-caption h3").addClass("" + i + "").text(names[i]);
        }
        // console.log(names);
    });
    
    $(".switcher #grid").click(function() {
		$(".switcher + #myItems").removeClass("carousel slide").addClass("grid").attr("data-interval", "false");
		$(".switcher + #myItems .embed-responsive-item").addClass("grid-item").removeClass("carousel-item");
		$(".switcher + #myItems .carousel-inner").removeClass("embed-responsive embed-responsive-16by9");
		$(".carousel-control-prev").css("display","none");
		$(".carousel-control-next").css("display","none");
		$(".carousel-indicators").css("display","none");
    });
    $(".switcher #carousel").click(function() {
		$(".switcher + #myItems").removeClass("grid").addClass("carousel slide").attr("data-interval", "7000");
		$(".switcher + #myItems .embed-responsive-item").addClass("carousel-item").removeClass("grid-item");
		$(".switcher + #myItems .carousel-inner").addClass("embed-responsive embed-responsive-16by9");
        $(".portfolio-item").each(function() {
            $(this).removeClass("grid-item");
            $(this).addClass("carousel-item");
            $(".carousel-inner").prepend($(".portfolio-item"));
        });
        $("#myItems").addClass("carousel");
        $(".carousel-control-prev").css("display","flex");
		$(".carousel-control-next").css("display","flex");
		$(".carousel-indicators").css("display","inline-flex");
    });
});