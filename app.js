

// //=====================================================//
// //                         VIEWS                       //
// //=====================================================//
// // $(document).on("click", "#portfolio", function() {
// //     var pageHeight = $("body").height();
// //     $(".full-size").height(pageHeight);
// //     console.log(pageHeight);
// //     var carouselHeight = $("#portfolio-item .carousel-img").height();
// //     $(".carousel-controls").height(carouselHeight);
// // });
$(document).ready(function() {
    $(".carousel-indicators > li").click(function() {
		var slideNum = $(this).attr("data-slide-to");
		console.log(slideNum);
	});
});
// $(document).ready(function() {
//     var pageHeight;
//     var carouselHeight;
//     if($(window).width() > 798) {
//         carouselHeight = $("#portfolio-item .carousel-img").height();
//         $(".carousel-controls span").height(400);
//         console.log('carousel height: ' + carouselHeight);
//     }
//     $(window).resize(function() {
//         pageHeight = $("body").height();
//         $(".full-size").height(pageHeight);
//         carouselHeight = $("#portfolio-item .carousel-img").height();
//         $(".carousel-controls span").height(carouselHeight);
//         var testHeight = $('#portfolio-item img').height();
//         console.log('test height: ' + testHeight);
//     }).resize();
// });

$(document).ready(function() {
	var gridCol = 3;
    $(".switcher #grid").click(function() {
		console.log(gridCol);
        // $(window).resize(function() {
			$(".switcher + #myItems").removeClass("carousel slide").addClass("grid").attr("data-interval", "false");
			$(".switcher + #myItems .embed-responsive-item").addClass("grid-item").removeClass("carousel-item");
			$(".switcher + #myItems .carousel-inner").removeClass("embed-responsive embed-responsive-16by9");
			// embed-responsive embed-responsive-16by9
            $(".portfolio-item").each(function() {
                $(this).removeClass("carousel-item");
                $(this).addClass("grid-item");
                // $(".grid").html($(".portfolio-item"));
            
                // const portfolioRows = $(".portfolio-item");
                // const portfolioItems = portfolioRows.length;
                console.log(portfolioItems);
                if($(window).width() > 767) {
				for(var i = 0; i < portfolioRows.length; i += 3) {
					$(this).each(function() {
						$(this).addClass("lg-grid-size");
						$(this).removeClass("md-grid-size");
						$(this).removeClass("mobile-size");
					});
				}
			};
				if (portfolioRows.length % 3 != 0) {
					console.log(portfolioRows.length % 3);
					$(".grid").append("<div class='portfolio-item'></div>");
				}
            });
			$(".carousel-control-prev").css("display","none");
			$(".carousel-control-next").css("display","none");
            $(".carousel-indicators").css("display","none");
        // }).resize();
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


// /* change carousel item with arrow keys */
// /* close any open modals */
// $(document).keydown(function(e) {
//     if (e.keyCode === 37) {
//        // Previous
//        $(".carousel-control-prev").click();
//        $(".modal").modal("hide");
//        return false;
//     }
//     if (e.keyCode === 39) {
//        // Next
//        $(".carousel-control-next").click();
//        $(".modal").modal("hide");
//        return false;
//     }
// });
// // $(document).ready(function() {
// //     $('.carousel').carousel( {
// //         interval: false
// //     });
// // });
