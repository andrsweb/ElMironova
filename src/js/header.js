document.addEventListener( 'DOMContentLoaded', () => {
	'use strict'

	toogleBurgerMenu()
} )

const toogleBurgerMenu = () => {
	const burgerButton  = document.querySelector( '.burger-button' )
	const burgerMenu    = document.querySelector( '.burger-menu' )

	burgerButton.addEventListener( 'click', () => {

		if( ! burgerButton && ! burgerMenu ) return

		if( ! burgerMenu.classList.contains( 'opened' ) ) {
			burgerMenu.classList.add( 'opened' )
			burgerButton.classList.add( 'opened' )

		} else {
			burgerMenu.classList.remove( 'opened' )
			burgerButton.classList.remove( 'opened' )
		}
	} )
}