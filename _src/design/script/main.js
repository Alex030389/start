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
@@include('block/__buttons-blur.js');
// @@include('block/__hamburger.js');
// @@include('block/__tab.js');
// @@include('block/__slider.js');
// @@include('block/__copy-discount.js');
// @@include('block/__accordion.js');
// @@include('block/__modal.js');
@@include('block/__scroll-to.js');
@@include('block/__up.js');
@@include('block/__stick-footer.js');
