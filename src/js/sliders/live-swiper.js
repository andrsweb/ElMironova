import Swiper, { Pagination, Navigation } from "swiper"

document.addEventListener('DOMContentLoaded', () => {
	'use strict'

	initSwiper()
})

const initSwiper = () => {

	const swiper = new Swiper('.live-swiper', {

		direction: 'horizontal',
		loop: true,
		slidesPerView: 1,

		modules: [Pagination, Navigation],

		pagination: {
			el: '.live-pagination',
			clickable: true
		},

		navigation: {
			nextEl: '.live-next',
			prevEl: '.live-prev'
		}
	})
}

