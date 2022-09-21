$("body").on("click", ".tabs__item", function (t) {
	let e = $(this).index();
	$(this).hasClass("parent") && (e = $(this).parent().index()),
	$(this).hasClass("active") || ($(this).closest(".tabs").find(".tabs__item").removeClass("active"),
	$(this).addClass("active"),
	$(this).closest(".tabs").find(".tabs__content").removeClass("active").eq(e).addClass("active"),
	$(this).closest(".tabs").find(".tabs__content").length > 0 && $(this).closest(".tabs").find(".tabs__content"));
});