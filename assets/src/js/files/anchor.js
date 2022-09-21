// Плавная прокрутка страницы до якоря
const anchors = document.querySelectorAll('a[href*="#"]');

for (let anchor of anchors) {
	anchor.addEventListener('click', function (e) {
		e.preventDefault();

		const blockId = anchor.getAttribute('href').substr(1);

		document.getElementById(blockId).scrollIntoView({
			behavior: 'smooth',
			block: 'start'
		});
	});
}