import Swiper, { Pagination, Navigation } from "swiper"

document.addEventListener('DOMContentLoaded', () => {
	'use strict'

	initSwiper()
})

const initSwiper = () => {

	const swiper = new Swiper('.body-swiper', {

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
				spaceBetween: 12
			}
		},

		modules: [Pagination, Navigation],

		pagination: {
			el: '.body-pagination',
			clickable: true
		},

		navigation: {
			nextEl: '.body-next',
			prevEl: '.body-prev'
		}
	})
}

