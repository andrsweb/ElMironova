import Swiper, { Pagination, Navigation } from "swiper"

document.addEventListener('DOMContentLoaded', () => {
	'use strict'

	initSwiper()
})

const initSwiper = () => {

	const swiper = new Swiper('.face-swiper', {

		direction: 'horizontal',
		loop: true,
		slidesPerView: 2,
		spaceBetween: 12,

		breakpoints: {
			320: {
				slidesPerView: 1,
				spaceBetween: 20
			},
			480: {
				slidesPerView: 2,
				spaceBetween: 12
			},
			767: {
				slidesPerView: 3,
			}
		},

		modules: [Pagination, Navigation],

		pagination: {
			el: '.face-pagination',
		},

		navigation: {
			nextEl: '.face-next',
			prevEl: '.face-prev'
		}
	})
}

