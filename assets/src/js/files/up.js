// UP
$(window).scroll(function () {
	var w = $(window).width();
	if ($(window).scrollTop() > 800) {
		$('#up-js').fadeIn(300);
	} else {
		$('#up-js').fadeOut(300);
	}
});
$('#up-js').click(function (event) {
	$('body,html').animate({
		scrollTop: 0
	}, 300);
});