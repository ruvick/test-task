// 'use strict';
// document.addEventListener('DOMContentLoaded', () => {
// });


const iconMenu = document.querySelector(".icon-menu");
const body = document.querySelector("body");
const menuBody = document.querySelector(".mob-menu");
const menuListItemElems = document.querySelector(".mob-menu__list");
const mobsearch = document.querySelector(".mob-search");
const headsearch = document.querySelector(".header__search");

//BURGER
if (iconMenu) {
	iconMenu.addEventListener("click", function () {
		iconMenu.classList.toggle("active");
		body.classList.toggle("lock");
		menuBody.classList.toggle("active");
	});
}

// Закрытие моб меню при клике на якорную ссылку
if (menuListItemElems) {
	menuListItemElems.addEventListener("click", function () {
		iconMenu.classList.toggle("active");
		body.classList.toggle("lock");
		menuBody.classList.toggle("active");
	});
}

// Строка поиска на мобилках 
if (mobsearch) {
	mobsearch.addEventListener("click", function () {
		headsearch.classList.toggle("active");
	});
}

// Закрытие моб меню при клике вне области меню 
window.addEventListener('click', e => { // при клике в любом месте окна браузера
	const target = e.target // находим элемент, на котором был клик
	if (!target.closest('.icon-menu') && !target.closest('.mob-menu') && !target.closest('.mob-search') && !target.closest('.header__search') && !target.closest('._popup-link') && !target.closest('.popup')) { // если этот элемент или его родительские элементы не окно навигации и не кнопка
		iconMenu.classList.remove('active') // то закрываем окно навигации, удаляя активный класс
		menuBody.classList.remove('active')
		body.classList.remove('lock')
		headsearch.classList.remove('active')
	}
})

// Плавная прокрутка
const smotScrollElems = document.querySelectorAll('a[href^="#"]:not(a[href="#"])');

smotScrollElems.forEach(link => {
	link.addEventListener('click', (event) => {
		event.preventDefault()
		console.log(event);

		const id = link.getAttribute('href').substring(1)
		console.log('id : ', id);

		document.getElementById(id).scrollIntoView({
			behavior: 'smooth'
		});
	})
});


// Полоса прокрутки в шапке
const scrollProgress = document.getElementById('scroll-progress');
const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;

window.addEventListener('scroll', () => {
	const scrollTop = document.body.scrollTop || document.documentElement.scrollTop;
	scrollProgress.style.width = `${(scrollTop / height) * 100}%`;
});


// Ползунок выбора цены
const priceEl = document.querySelector(".price");

function changePrice(price) {
	priceEl.innerText = price;
	console.log(price);
};


// Поочередное открытие нескольких блоков меню, табы, либо что то еще
const BarIconElems = document.querySelectorAll('.sidebar__menu-open');
const BarLinkIconElems = document.querySelectorAll('.sidebar__menu-icon');
const BarSubMenuElems = document.querySelectorAll('.sidebar__submenu');

BarIconElems.forEach((btn, index) => {
	btn.addEventListener('click', () => {

		if (!btn.classList.contains('sidebar__menu-icon_active')) {

			BarSubMenuElems.forEach((BarSubMenuElem) => {
				BarSubMenuElem.classList.remove('active')
			});
			BarIconElems.forEach((BarIconElem) => {
				BarIconElem.classList.remove('sidebar__menu-icon_active')
			});
			BarLinkIconElems.forEach((BarLinkIconElem) => {
				BarLinkIconElem.classList.remove('sidebar__menu-icon_active')
			});

			BarSubMenuElems[index].classList.add('active')
			BarLinkIconElems[index].classList.add('sidebar__menu-icon_active')
			btn.classList.add('sidebar__menu-icon_active')
		} else {
			BarSubMenuElems[index].classList.remove('active')
			BarLinkIconElems[index].classList.remove('sidebar__menu-icon_active')
			btn.classList.remove('sidebar__menu-icon_active')
		}
	})
})



	// Маска телефона на JS
	// function setCursorPosition(pos, elem) {
	// 	elem.focus();
	// 	if (elem.setSelectionRange) elem.setSelectionRange(pos, pos);
	// 	else if (elem.createTextRange) {
	// 		var range = elem.createTextRange();
	// 		range.collapse(true);
	// 		range.moveEnd("character", pos);
	// 		range.moveStart("character", pos);
	// 		range.select()
	// 	}
	// }
	// function mask(event) {
	// 	var matrix = "+7 (___) ___ ____",
	// 		i = 0,
	// 		def = matrix.replace(/\D/g, ""),
	// 		val = this.value.replace(/\D/g, "");
	// 	if (def.length >= val.length) val = def;
	// 	this.value = matrix.replace(/./g, function (a) {
	// 		return /[_\d]/.test(a) && i < val.length ? val.charAt(i++) : i >= val.length ? "" : a
	// 	});
	// 	if (event.type == "blur") {
	// 		if (this.value.length == 2) this.value = ""
	// 	} else setCursorPosition(this.value.length, this)
	// };
	// var input = document.querySelector("#tel");
	// input.addEventListener("input", mask, false);
	// input.addEventListener("focus", mask, false);
	// input.addEventListener("blur", mask, false);

	// var inputTel = document.querySelector("#tel2");
	// inputTel.addEventListener("input", mask, false);
	// inputTel.addEventListener("focus", mask, false);
	// inputTel.addEventListener("blur", mask, false);

	// var inputTelpopup = document.querySelector("#tel3");
	// inputTelpopup.addEventListener("input", mask, false);
	// inputTelpopup.addEventListener("focus", mask, false);
	// inputTelpopup.addEventListener("blur", mask, false);

	// var inputTelpopup = document.querySelector("#tel4");
	// inputTelpopup.addEventListener("input", mask, false);
	// inputTelpopup.addEventListener("focus", mask, false);
	// inputTelpopup.addEventListener("blur", mask, false);


	//BodyLock для Popup на JS
	// function body_lock(delay) {
	// 	let body = document.querySelector("body");
	// 	if (body.classList.contains('lock')) {
	// 		body_lock_remove(delay);
	// 	} else {
	// 		body_lock_add(delay);
	// 	}
	// }
	// function body_lock_remove(delay) {
	// 	let body = document.querySelector("body");
	// 	if (unlock) {
	// 		let lock_padding = document.querySelectorAll("._lp");
	// 		setTimeout(() => {
	// 			for (let index = 0; index < lock_padding.length; index++) {
	// 				const el = lock_padding[index];
	// 				el.style.paddingRight = '0px';
	// 			}
	// 			body.style.paddingRight = '0px';
	// 			body.classList.remove("lock");
	// 		}, delay);

	// 		unlock = false;
	// 		setTimeout(function () {
	// 			unlock = true;
	// 		}, delay);
	// 	}
	// }
	// function body_lock_add(delay) {
	// 	let body = document.querySelector("body");
	// 	if (unlock) {
	// 		let lock_padding = document.querySelectorAll("._lp");
	// 		for (let index = 0; index < lock_padding.length; index++) {
	// 			const el = lock_padding[index];
	// 			el.style.paddingRight = window.innerWidth - document.querySelector('.wrapper').offsetWidth + 'px';
	// 		}
	// 		body.style.paddingRight = window.innerWidth - document.querySelector('.wrapper').offsetWidth + 'px';
	// 		body.classList.add("lock");

	// 		unlock = false;
	// 		setTimeout(function () {
	// 			unlock = true;
	// 		}, delay);
	// 	}
	// }

	// Popup JS
	// let unlock = true;
	// let popup_link = document.querySelectorAll('._popup-link');
	// let popups = document.querySelectorAll('.popup');
	// for (let index = 0; index < popup_link.length; index++) {
	// 	const el = popup_link[index];
	// 	el.addEventListener('click', function (e) {
	// 		if (unlock) {
	// 			let item = el.getAttribute('href').replace('#', '');
	// 			let video = el.getAttribute('data-video');
	// 			popup_open(item, video);
	// 		}
	// 		e.preventDefault();
	// 	})
	// }
	// for (let index = 0; index < popups.length; index++) {
	// 	const popup = popups[index];
	// 	popup.addEventListener("click", function (e) {
	// 		if (!e.target.closest('.popup__body')) {
	// 			popup_close(e.target.closest('.popup'));
	// 		}
	// 	});
	// }
	// function popup_open(item, video = '') {
	// 	let activePopup = document.querySelectorAll('.popup._active');
	// 	if (activePopup.length > 0) {
	// 		popup_close('', false);
	// 	}
	// 	let curent_popup = document.querySelector('.popup_' + item);
	// 	if (curent_popup && unlock) {
	// 		if (video != '' && video != null) {
	// 			let popup_video = document.querySelector('.popup_video');
	// 			popup_video.querySelector('.popup__video').innerHTML = '<iframe src="https://www.youtube.com/embed/' + video + '?autoplay=1"  allow="autoplay; encrypted-media" allowfullscreen></iframe>';
	// 		}
	// 		if (!document.querySelector('.menu__body._active')) {
	// 			body_lock_add(500);
	// 		}
	// 		curent_popup.classList.add('_active');
	// 		history.pushState('', '', '#' + item);
	// 	}
	// }
	// function popup_close(item, bodyUnlock = true) {
	// 	if (unlock) {
	// 		if (!item) {
	// 			for (let index = 0; index < popups.length; index++) {
	// 				const popup = popups[index];
	// 				let video = popup.querySelector('.popup__video');
	// 				if (video) {
	// 					video.innerHTML = '';
	// 				}
	// 				popup.classList.remove('_active');
	// 			}
	// 		} else {
	// 			let video = item.querySelector('.popup__video');
	// 			if (video) {
	// 				video.innerHTML = '';
	// 			}
	// 			item.classList.remove('_active');
	// 		}
	// 		if (!document.querySelector('.menu__body._active') && bodyUnlock) {
	// 			body_lock_remove(500);
	// 		}
	// 		history.pushState('', '', window.location.href.split('#')[0]);
	// 	}
	// }
	// let popup_close_icon = document.querySelectorAll('.popup__close,._popup-close');
	// if (popup_close_icon) {
	// 	for (let index = 0; index < popup_close_icon.length; index++) {
	// 		const el = popup_close_icon[index];
	// 		el.addEventListener('click', function () {
	// 			popup_close(el.closest('.popup'));
	// 		})
	// 	}
	// }
	// document.addEventListener('keydown', function (e) {
	// 	if (e.code === 'Escape') {
	// 		popup_close();
	// 	}
	// });


