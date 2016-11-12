$(document).ready(function(){

	var currentHour = (new Date).getHours();
	if((currentHour<20)&&(currentHour>8)) {
		setState('night');
	} else {
		setState('day')
	}
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
		$('html, body').animate( {
			scrollTop:$(page).offset().top
		}, 250);
	}

	function scrollingMenu(page) {
		$('.link').removeClass('select');
		$(page+'L div').addClass('select');
	}

	function getPage(){
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
		var page = parseInt(getPage());
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
        var page = getPage();
        scrollingMenu('#'+page);
    });

    $('#night').on('click', function() {
			var state = getState();
			state = setState(state);
		}
	);
	function setState(state) {
		if(state=='night') {
			$('#state').removeClass('night');
			$('#state').addClass('day');
			$('#state').html('Change to<br/>night mode');
			$('#main').css('background-color', '#EEE');
			$('#main').css('color', '#2F2F2F');
			$('header').css('background-color', '#6F6F6F');
		} else {
			$('#state').removeClass('day');
			$('#state').addClass('night');
			$('#state').html('Change to<br/>day mode');
			$('#main').css('background-color', '#4F4F4F');
			$('#main').css('color', '#EEE');
			$('header').css('background-color', '#3F3F3F');
		}
	}

	function getState() {
		var state = $('#state').attr('class');
		return state;
	}

	$('#key-index').on('click', function() {
		$('#k').css('display', 'block');
		$(document).on('click', function() {
			$('#k').css('display', 'none');	
		});
	});
});