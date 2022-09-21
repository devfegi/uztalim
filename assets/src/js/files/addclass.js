let headerNotifyBell = document.querySelector('.header__box-icon--bell');
let headerNotifyContent = document.querySelector('.header__content');
let headerNotifyClose = document.querySelector('.header__notify-close');

if (headerNotifyBell) {
	headerNotifyBell.addEventListener('click', function (e) {
		headerNotifyContent.classList.toggle('active');
	});

	headerNotifyClose.addEventListener('click', function (e) {
		headerNotifyContent.classList.remove('active');
	});
}