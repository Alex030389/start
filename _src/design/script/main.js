'use strict';

svg4everybody();

// ///////////////////////////////////// polifill inicialize
// objectFitImages();

// ///////////////////////////////////// plagin inicialize
// lazyLoad
// const lazyLoadInstance = new LazyLoad({
// 	elements_selector: ".lazy"
// });

// selectric
$('[data-js="selectric"]').selectric({
	nativeOnMobile: false,
});

// ///////////////////////////////////// block
@@include('block/_hamburger.js');
@@include('block/_tab.js');
@@include('block/_slider.js');
@@include('block/_copy-discount.js');
@@include('block/_accordion.js');
@@include('block/_modal.js');
@@include('block/_up.js');


// ///////////////////////////////////////////////////// stick footer
(function () {
	let isIE11 = !!window.MSInputMethodContext && !!document.documentMode;

	let stickFooter = function () {
		let FOOTER = document.querySelector('footer');
		let MAIN = document.querySelector('main');
		let BODY = document.querySelector('body');
		let footerHeight = FOOTER.offsetHeight;
		BODY.style.position = 'relative';
		MAIN.style.marginBottom = footerHeight + 'px';
		FOOTER.style.position = 'absolute';
		FOOTER.style.bottom = '0';
		FOOTER.style.left = '0';
		FOOTER.style.width = '100%';
	};

	if (isIE11) {
		stickFooter();
		window.addEventListener('resize', stickFooter);
	};
})();
