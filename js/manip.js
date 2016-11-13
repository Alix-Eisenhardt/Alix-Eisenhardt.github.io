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
			case 48:
			case 96:
				setState(getState());
				break;
		}
		if(e.keyCode>=97 && e.keyCode<=105)
			scrollingTo('#'+(e.keyCode-96));
		else if(e.keyCode>=49 && e.keyCode<=57)
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
		var newState;
		if(state=='night') {
			newState = 'day';
			$('#state').removeClass(state);
			$('#state').addClass(newState);
			$('#main').css('background-color', '#EEE');
			$('#main, .flex div').css('color', '#2F2F2F');
			$('header').css('background-color', '#6F6F6F');
			$('.flex div').css('background-color', '#DDD');
		} else {
			newState = 'night';
			$('#state').removeClass(state);
			$('#state').addClass(newState);
			$('#main').css('background-color', '#4F4F4F');
			$('#main, .flex div').css('color', '#EEE');
			$('header').css('background-color', '#3F3F3F');
			$('.flex div').css('background-color', '#6F6F6F');
		}
		$('#state').html('Change to<br/>'+state+' mode');
		changeImg(newState);
	}

	function changeImg(state) {
		$('.data_img').each(function() {
			var id = $(this).attr('id');
			var newSrc = 'images/'+id+'_'+state+'.png';
			$(this).attr('src', newSrc);
		});
	}

	function getState() {
		var state = $('#state').attr('class');
		return state;
	}

	$('#key_open').on('click', function() {
		$('#k').css('display', 'flex');
		$('.k_img').css('display', 'initial');
	});

	$('#key_close').on('click', function() {
		$('#k').css('display', 'none');
	});
});