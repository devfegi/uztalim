let isMobile = {
	Android: function () {
		return navigator.userAgent.match(/Android/i);
	},
	BlackBerry: function () {
		return navigator.userAgent.match(/BlackBerry/i);
	},
	iOS: function () {
		return navigator.userAgent.match(/iPhone|iPad|iPod/i);
	},
	Opera: function () {
		return navigator.userAgent.match(/Opera Mini/i);
	},
	Windows: function () {
		return navigator.userAgent.match(/IEMobile/i) || navigator.userAgent.match(/WPDesktop/i);
	},
	any: function () {
		return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
	}
};

const mobile = document.querySelectorAll('.btn__download-js');

let appStoreText = 'Скачать в AppStore'
let googlePlayText = 'Скачать в GooglePlay'

const url = new URL(window.location.href);

if (url.pathname.includes('/uz/')) {
	appStoreText = 'AppStore dan yuklab olish'
	googlePlayText = 'GooglePlay dan yuklab olish'
}

mobile.forEach(m => {
	if (isMobile.iOS()) {
		m.textContent = appStoreText

		m.href = 'https://apps.apple.com/ru/app/joykis-grand-tour/id1590745859'

		console.log('app');

	} else {
		m.textContent = googlePlayText

		m.href = 'https://play.google.com/store/apps/details?id=com.artnationcorp.joykisgt'

		console.log('google');
	}
});