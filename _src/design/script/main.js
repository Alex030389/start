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
$('[data-js="selectric"]').selectric()

// ///////////////////////////////////// block
@@include('block/__hamburger.js');
@@include('block/__tab.js');
@@include('block/__slider.js');
@@include('block/__copy-discount.js');
@@include('block/__accordion.js');
@@include('block/__modal.js');
@@include('block/__up.js');


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