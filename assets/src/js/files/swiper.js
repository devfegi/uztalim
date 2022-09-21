new Swiper('.intro__swiper', {
	spaceBetween: 30,
	loop: true,
	autoplay: {
		delay: 3000,
	},
	navigation: {
		nextEl: ".swiper-button-next",
		prevEl: ".swiper-button-prev",
	},
	pagination: {
		el: ".swiper-pagination",
		clickable: true
	},
});

new Swiper('.discounts__swiper', {
	slidesPerView: 1,
	spaceBetween: 30,
	loop: true,
	autoplay: {
		delay: 3000,
	},
	pagination: {
		el: ".swiper-pagination",
		clickable: true
	},
	breakpoints: {
		'991': {
			slidesPerView: 3,
		},
	},
});

new Swiper('.installment__swiper', {
	slidesPerView: 3,
	spaceBetween: 15,
	grid: {
		rows: 2,
	},
	loop: true,
	autoplay: {
		delay: 3000,
	},
	breakpoints: {
		'991': {
			slidesPerView: 7,
			spaceBetween: 30,
		},
	},
});

new Swiper('.news__swiper', {
	spaceBetween: 15,
	loop: true,
	autoplay: {
		delay: 3000,
	},
	pagination: {
		el: ".swiper-pagination",
		clickable: true
	},
});

new Swiper('.hot-promotions__swiper', {
	spaceBetween: 15,
	loop: true,
	autoplay: {
		delay: 3000,
	},
	pagination: {
		el: ".swiper-pagination",
		clickable: true
	},
});

new Swiper('.similar-news__swiper', {
	slidesPerView: 1,
	spaceBetween: 15,
	loop: true,
	autoplay: {
		delay: 3000,
	},
	pagination: {
		el: ".swiper-pagination",
		clickable: true
	},
	breakpoints: {
		'991': {
			slidesPerView: 3,
		},
	},
});