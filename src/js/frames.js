document.addEventListener( 'DOMContentLoaded', () => {
	'use strict'

	playVideoByClick()
} )

const playVideoByClick = () => {
	const wrapper = document.querySelectorAll( '.live-img-wrapp' )
	const frame   = document.querySelectorAll( '.frame-before' )

	wrapper.forEach( item => {
		item.addEventListener( 'click', () => {
			console.log( frame )
			if( ! item.classList.contains( 'played' ) ) {
				item.classList.add( 'played' )
			}
		} )
	} )
}