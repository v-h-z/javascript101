// Du javascript ici

$(document).ready(function() {
	$('p').on('click', function() {
		//if ($(this).hasClass('red')) {
			//$(this).removeClass('red');
		//} else {
		//$(this).addClass('red');
		//}

		$(this).toggleClass('red');
	})
});
