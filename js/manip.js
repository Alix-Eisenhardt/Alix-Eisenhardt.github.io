$(document).ready(function(){

	var height = 500;

	$('body').css('background-color', '#EEE');
	$('.content').css('height', height+'px');

	window.addEventListener("keydown", function(e) {
	    if([32, 37, 38, 39, 40].indexOf(e.keyCode) > -1) {
	        e.preventDefault();
	    }
	}, false);

	function scrollTo(page) {
		var speed = 500;
		$('html, body').animate( {
			scrollTop:$(page).offset().top
		}, speed);
		$('.link').removeClass('select');
		$(page+'L div').addClass('select');
	}

	$('.scroll').on('click', function() {
			var page = $(this).attr('href');
			scrollTo(page);
			return false;
		}
	);

	function getDiv(){
		var scroll = $(window).scrollTop();
		var curDiv = scroll/height;
		var curDiv = Math.floor(curDiv, 1);
		curDiv = Math.ceil(curDiv+1);
		return curDiv;
	}

	$(document).keydown(function(e) {
		var page = getDiv();
		switch(e.keyCode) {
			case 37:
			case 38:
				scrollTo('#'+(page-1));
				break;
			case 39:
			case 40:
				scrollTo('#'+(page+1));
				
				break;
			case 32:
				scrollTo('#1');
				break;
		}
		if(e.keyCode>=97 && e.keyCode<=103)
			scrollTo('#'+(e.keyCode-96));
	});		
});