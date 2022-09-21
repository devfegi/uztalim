// смена языка - хедер
let lang = document.querySelector('.lang');
let langItem = document.querySelector('.lang__item');

if (langItem) {
	langItem.addEventListener('click', function (e) {
		lang.classList.toggle('active');
	});

	document.documentElement.addEventListener('click', function (e) {
		if (!e.target.closest('.lang')) {
			lang.classList.remove('active');
		}
	});
}

let langPartner = document.querySelector('.lang-partners');
let langPartnerItem = document.querySelector('.lang-partners__item');

if (langPartnerItem) {
	langPartnerItem.addEventListener('click', function (e) {
		langPartner.classList.toggle('active');
	});

	document.documentElement.addEventListener('click', function (e) {
		if (!e.target.closest('.lang-partners')) {
			langPartner.classList.remove('active');
		}
	});
}

// каталог
let headerCatalog = document.querySelector('.header__catalog');
let headerCatalogBtn = document.querySelector('.header__catalog-btn');

if (headerCatalogBtn) {
	headerCatalogBtn.addEventListener('click', function (e) {
		headerCatalog.classList.toggle('active');
	});

	document.documentElement.addEventListener('click', function (e) {
		if (!e.target.closest('.header__catalog')) {
			headerCatalog.classList.remove('active');
		}
	});
}

// аккаунт
let headerAccount = document.querySelector('.header__account');
let headerAccountBtn = document.querySelector('.header__account');

if (headerAccountBtn) {
	headerAccountBtn.addEventListener('click', function (e) {
		headerAccount.classList.toggle('active');
	});

	document.documentElement.addEventListener('click', function (e) {
		if (!e.target.closest('.header__account')) {
			headerAccount.classList.remove('active');
		}
	});
}