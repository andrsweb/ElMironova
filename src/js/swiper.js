import Swiper, { Pagination, Navigation, Autoplay } from "swiper"

document.addEventListener('DOMContentLoaded', () => {
	'use strict'

	initSwiper( '.examples-pagination', '.examples-next', '.examples-prev' )
})

const initSwiper = ( pagination, next, prev ) => {

	const swiper = new Swiper( '.swiper', {

		direction: 'horizontal',
		loop: true,
		slidesPerView: 2,
		spaceBetween: 12,

		modules: [ Pagination, Navigation, Autoplay ],

		pagination: {
			el: pagination,
		},

		navigation: {
			nextEl: next,
			prevEl: prev
		}
	} )
}

