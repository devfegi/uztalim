// маска для телефона
$(function () {
	$.mask.definitions["9"] = null;
	$.mask.definitions["^"] = "[0-9]";
	$(".phone-mask").mask("+998 ^^ ^^^-^^-^^");
});