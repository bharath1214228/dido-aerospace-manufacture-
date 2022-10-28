(function ($) {
 "use strict";
 
$(window).load(function() {
	runcameraslider();
});

//=================================== CAMERA SLIDER ===================================//
function runcameraslider(){
	if($('#slideritems').length){
		$('#slideritems').camera({
			height: 'auto', /* to set the slider height */
			fx: 'simpleFade', /* to set the slider effect */
			autoAdvance: true,
			pagination: false,
			navigation:true,
			navigationHover: false,
			mobileNavHover: true,
			playPause: false,
			thumbnails: false,
			loader: 'none',
			imagePath: '../images/'
		});
	}
}

$(document).ready(function(){	
	//testimonials Carousel
	$("#testi-carousel").owlCarousel({
		autoPlay: false, //Set AutoPlay to 5 seconds
		stopOnHover : true,
		items : 1,
		singleItem : true,
		navigationText: false,
		navigation:true,
		pagination : false,
		autoHeight : true,

	});
});


})(jQuery);

