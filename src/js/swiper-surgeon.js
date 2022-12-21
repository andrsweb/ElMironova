import Swiper, { Pagination, Navigation } from "swiper"

document.addEventListener('DOMContentLoaded', () => {
	'use strict'

	initSwiper()
})

const initSwiper = () => {

	const swiper = new Swiper( '.surgeon-swiper', {

		direction: 'horizontal',
		loop: true,
		slidesPerView: 5,
		spaceBetween: 12,

		modules: [ Pagination, Navigation ],

		pagination: {
			el: '.surgeon-pagination',
		},

		navigation: {
			nextEl: '.surgeon-next',
			prevEl: '.surgeon-prev'
		}
	} )
}

