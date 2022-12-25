import Swiper, { Pagination, Navigation } from "swiper"

document.addEventListener('DOMContentLoaded', () => {
	'use strict'

	initSwiper()
})

const initSwiper = () => {

	const swiper = new Swiper('.examples-swiper', {

		direction: 'horizontal',
		loop: true,
		slidesPerView: 2,
		spaceBetween: 12,

		breakpoints: {
			320: {
				slidesPerView: 1,
				spaceBetween: 20
			},

			767: {
				slidesPerView: 2,
				spaceBetween: 20
			},

			992: {
				slidesPerView: 3,
				spaceBetween: 12
			}
		},

		modules: [Pagination, Navigation],

		pagination: {
			el: '.examples-pagination',
			clickable: true
		},

		navigation: {
			nextEl: '.examples-next',
			prevEl: '.examples-prev'
		}
	})
}

