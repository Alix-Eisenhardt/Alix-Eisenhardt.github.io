$(document).ready(function(){

	$('body').css('background-color', '#EEE');
	$('.content').css('height', '500px');
	$('#1L div').addClass('select');

	window.addEventListener("keydown", function(e) {
	    if([32, 37, 38, 39, 40].indexOf(e.keyCode) > -1) {
	        e.preventDefault();
	    }
	}, false);

	$('.scroll').on('click', function() {
			var page = $(this).attr('href');
			scrollingTo(page);
			return false;
		}
	);

	function scrollingTo(page) {
		var speed = 500;
		$('html, body').animate( {
			scrollTop:$(page).offset().top
		}, speed);
	}

	function scrollingMenu(page) {
		$('.link').removeClass('select');
		$(page+'L div').addClass('select');
	}

	function getDiv(){
		var scroll = $(window).scrollTop();
		var page = 0;
		$('.content').each(function() {
            if ($(this).offset().top <= scroll) {
                page = $(this).attr('id');
            }
        });
		return page;
	}

	$(document).keydown(function(e) {
		var page = parseInt(getDiv());
		console.log(e.keyCode);
		switch(e.keyCode) {
			case 37:
			case 38:
				scrollingTo('#'+(page-1));
				break;
			case 39:
			case 40:
				scrollingTo('#'+(page+1));
				break;
			case 32:
				scrollingTo('#1');
				break;
		}
		if(e.keyCode>=97 && e.keyCode<=104)
			scrollingTo('#'+(e.keyCode-96));
		else if(e.keyCode>=49 && e.keyCode<=56)
			scrollingTo('#'+(e.keyCode-48));
	});	

    $(window).scroll(function() {
        var page = getDiv();
        scrollingMenu('#'+page);
    });
});