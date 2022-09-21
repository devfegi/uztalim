$(window).scroll(function () {
	let height = $(window).scrollTop();
	if (height > 1) {
		$('header').addClass('active');
	} else {
		$('header').removeClass('active');
	}
});