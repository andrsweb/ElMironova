import Swiper, { Pagination, Navigation } from "swiper"

document.addEventListener('DOMContentLoaded', () => {
	'use strict'

	initSwiper()
})

const initSwiper = () => {

	const swiper = new Swiper('.brow-swiper', {

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
			el: '.brow-pag',
			clickable: true
		},

		navigation: {
			nextEl: '.brow-next',
			prevEl: '.brow-prev'
		}
	})
}

