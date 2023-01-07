import Swiper, { Pagination, Navigation } from "swiper"

document.addEventListener('DOMContentLoaded', () => {
	'use strict'

	initSwiper()
})

const initSwiper = () => {

	const swiper = new Swiper('.down-swiper', {

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
			el: '.down-pag',
			clickable: true
		},

		navigation: {
			nextEl: '.down-next',
			prevEl: '.down-prev'
		}
	})
}

