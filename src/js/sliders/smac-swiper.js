import Swiper, { Pagination, Navigation } from "swiper"

document.addEventListener('DOMContentLoaded', () => {
	'use strict'

	initSwiper()
})

const initSwiper = () => {

	const swiper = new Swiper('.smac-swiper', {

		direction: 'horizontal',
		loop: true,
		slidesPerView: 2,
		spaceBetween: 15,

		breakpoints: {
			320: {
				slidesPerView: 1,
			},

			993: {
				slidesPerView: 2,
			}
		},

		modules: [Pagination, Navigation],

		pagination: {
			el: '.smac-pag',
			clickable: true
		},

		navigation: {
			nextEl: '.smac-next',
			prevEl: '.smac-prev'
		}
	})
}

