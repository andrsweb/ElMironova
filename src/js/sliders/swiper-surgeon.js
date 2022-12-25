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

		breakpoints: {
			320: {
				slidesPerView: 1,
			},

			576: {
				slidesPerView: 2,
			},

			1200: {
				slidesPerView: 5,
			},
		},

		modules: [ Pagination, Navigation ],

		pagination: {
			el: '.surgeon-pagination',
			clickable: true
		},

		navigation: {
			nextEl: '.surgeon-next',
			prevEl: '.surgeon-prev'
		}
	} )
}

