import Swiper, { Pagination, Navigation } from "swiper"

document.addEventListener('DOMContentLoaded', () => {
	'use strict'

	initSwiper()
})

const initSwiper = () => {

	const swiper = new Swiper('.before-swiper', {

		direction: 'horizontal',
		loop: true,
		slidesPerView: 1,

		modules: [Pagination, Navigation],

		pagination: {
			el: '.before-pagination',
		},

		navigation: {
			nextEl: '.before-next',
			prevEl: '.before-prev'
		}
	})
}

