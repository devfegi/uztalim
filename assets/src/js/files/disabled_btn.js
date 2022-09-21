$('.check-js').click(function () {
	if (!$(this).is(':checked')) {
		$('.btn').attr("disabled", "disabled");
	} else
		$('.btn').removeAttr('disabled');
});