document.addEventListener( 'DOMContentLoaded', () => {
	'use strict'

	playVideoByClick()
} )

const playVideoByClick = () => {
	const wrapper = document.querySelectorAll( '.live-img-wrapp' )

	wrapper.forEach( item => {
		item.addEventListener( 'click', () => {
			if( ! item.classList.contains( 'played' ) ) {
				item.classList.add( 'played' )
			}
		} )
	} )
}