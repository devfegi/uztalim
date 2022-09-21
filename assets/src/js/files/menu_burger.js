// меню бургер
const iconMenu = document.querySelector('.menu__icon');
const menuBody = document.querySelector('.menu__body');
const wrapperAdmin = document.querySelector('.wrapper-admin');
	if (iconMenu) {
		iconMenu.addEventListener("click", function (e) {
			document.body.classList.toggle('lock');
			iconMenu.classList.toggle('active');
			menuBody.classList.toggle('active');
			wrapperAdmin.classList.toggle('active');
		});
	}

	const menuLink = document.querySelectorAll('.menu__link');
	const iconMenuRemove = document.querySelector('.menu__icon');
	const menuBodyRemove = document.querySelector('.menu__body');

	menuLink.forEach(function (entry) {
		entry.addEventListener("click", function (event) {
			event.preventDefault();
			document.body.classList.remove('lock');
			iconMenuRemove.classList.remove('active');
			menuBodyRemove.classList.remove('active');
		});
	});