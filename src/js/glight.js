import GLightbox from 'glightbox'
import { Zoom } from 'swiper';

document.addEventListener( 'DOMContentLoaded', () => {
	'use strict'

} )

const lightbox = GLightbox({
    touchNavigation: true,
    loop: true,
	openEffect: Zoom,
	closeEffect: Zoom,
	closeButton: true,
	closeOnOutsideClick: true,
} )