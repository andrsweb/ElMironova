import lazyframe from "lazyframe"

document.addEventListener( 'DOMContentLoaded', () => {
	'use strict'

	let elements = document.querySelectorAll( '.frame-before' )

	lazyframe(elements, {
		debounce: 1000,
		lazyload: true,
		autoplay: true
	})
} )



