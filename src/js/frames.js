document.addEventListener( 'DOMContentLoaded', () => {
	'use strict'

	playVideoByClick()
} )

const playVideoByClick = () => {
	const wrapper = document.querySelectorAll( '.live-img-wrapp' )
	const frame   = document.querySelectorAll( 'iFrame' )

	wrapper.forEach( item => {
		item.addEventListener( 'click', () => {
			console.log( frame.src)
			if( ! item.classList.contains( 'played' ) ) {
				item.classList.add( 'played' )
			}
		} )
	} )
}