import Swiper, { Pagination, Navigation } from "swiper"

document.addEventListener('DOMContentLoaded', () => {
	'use strict'

	initSwiper()
})

const initSwiper = () => {

	const swiper = new Swiper( '.examples-swiper', {

		direction: 'horizontal',
		loop: true,
		slidesPerView: 2,
		spaceBetween: 12,

		modules: [ Pagination, Navigation ],

		pagination: {
			el: '.examples-pagination',
		},

		navigation: {
			nextEl: '.examples-next',
			prevEl: '.examples-prev'
		}
	} )
}

