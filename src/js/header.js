document.addEventListener( 'DOMContentLoaded', () => {
	'use strict'

	headerScroll()
	toggleBurgerMenu()
} )

const toggleBurgerMenu = () => {
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

	document.addEventListener( 'click', e => {
		e.stopPropagation()

		const target = e.target

		if (
			! target.className ||
			target.classList.contains( 'burger-menu' ) ||
			target.classList.contains( 'burger-button' )
		) return

		burgerMenu.classList.remove( 'opened' )
		burgerButton.classList.remove( 'opened' )
	} )
}

const headerScroll = () => {
    window.addEventListener('scroll', () => {
        const scrollTop = window.scrollY
        const header = document.querySelector( '.header' )

        if ( scrollTop > 600 ) {
            if ( ! header.classList.contains( 'scrolled' ) )
                header.classList.add( 'scrolled' )
		}   else {
            if ( header.classList.contains( 'scrolled' ) )
            header.classList.remove( 'scrolled' )
        }
    })
}

