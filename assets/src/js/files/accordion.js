$(".faq__title").on("click", function () {
	$(this).toggleClass("active").next(".faq__body").slideToggle();
});

$(".menu__arrow").on("click", function () {
	$(this).toggleClass("active").next(".body-header__sub").slideToggle();
});