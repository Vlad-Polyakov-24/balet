import $ from 'jquery';
window.$ = $;
window.jquery = $;
window.jQuery = $;

import objectFitImages from 'object-fit-images';
import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock/lib/bodyScrollLock.es6';

require('@fancyapps/fancybox');
require('@fancyapps/fancybox/dist/jquery.fancybox.css');

$('[data-fancybox="gallery"]').fancybox({
	// Options will go here
});

/*BURGER*/
function mobileMenu() {
	let burgerBtn = document.getElementById('header__burger-btn');
	let navMenu = document.querySelector('.header__menu');
	let navMenuList = document.querySelector('.header__menu-list');
	let state = false;
	burgerBtn.addEventListener('click', () => {
		if (state === false) {
			openMenu();
		} else {
			closeMenu();
		}
	});
	navMenuList.addEventListener('click', function (e) {
		let target = e.target;
		if (target.closest('.header__menu-list li')) {
			closeMenu();
		}

	});

	function openMenu() {
		disableBodyScroll(navMenu);
		state = true;
		burgerBtn.classList.add('active');
		navMenu.classList.add('active');
	}


	function closeMenu() {
		enableBodyScroll(navMenu);
		state = false;
		burgerBtn.classList.remove('active');
		navMenu.classList.remove('active');

	}
}
/*=========*/

/*CONTACTS*/
let input = document.querySelectorAll('.input');
for (let i = 0; i < input.length; i++) {
	input[i].addEventListener('focus', function () {

		input[i].parentElement.classList.add('active');

	});
	input[i].addEventListener('blur', function () {

		if (input[i].value === '') {
			input[i].parentElement.classList.remove('active');
		}

	});
}
/*=======*/

/*preloader*/
window.onload = function () {
	window.setTimeout(function () {
		document.body.classList.add('loaded');
	}, 500);
};
/*=======*/

objectFitImages();
mobileMenu();