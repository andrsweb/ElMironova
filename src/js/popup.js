import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock'
import { setTargetElement, getTargetElement } from './common/global'


document.addEventListener( 'DOMContentLoaded', () => {
	'use strict'

	showPopup()
} )

const showPopup = () => {
	const popupWrapper    = document.querySelector( '.bust .popup-wrapper' )
	const addPopupWrapper = document.querySelector( '.add-popup-wrapper' )
	const closeButton     = document.querySelector( '.popup-close' )
	const addCloseButton  = document.querySelector( '.add-popup-close' )
	const popButton       = document.querySelector( '.popup-btn' )
	const body            = document.querySelector( 'header')
	const benBtn          = document.querySelectorAll( '.benefit-button' )
	setTargetElement( document.querySelector( '#body-lock' ) )

	if( ! popupWrapper ) return

	body.addEventListener( 'mouseleave', e => {
		const mouseY = e.clientY

		if(  mouseY <= 0 ) {

			if(  ! localStorage.getItem( 'showed' ) && ! popupWrapper.classList.contains( 'showed' ) ) {
				// localStorage.setItem( 'showed', 1 )
				popupWrapper.classList.add( 'showed' )
				disableBodyScroll( getTargetElement(), { reserveScrollBarGap: true } )
			}
		}
	} )

	closeButton.addEventListener( 'click', () => {
		popupWrapper.classList.remove( 'showed' )
		enableBodyScroll( getTargetElement() )
	} )

	addCloseButton.addEventListener( 'click', () => {
		addPopupWrapper.classList.remove( 'showed' )
		enableBodyScroll( getTargetElement() )
	} )

	popupWrapper.addEventListener( 'click', e => {
		e.stopPropagation()

		const target = e.target

		if ( target.className && target.classList.contains( 'popup-wrapper' ) ) {
			popupWrapper.classList.remove( 'showed' )
			enableBodyScroll( getTargetElement() )
		}
	} )

	popButton.addEventListener( 'click', () => {
		addPopupWrapper.classList.add( 'showed' )
	})

	benBtn.forEach( button => {
		button.addEventListener( 'click', () => {
			setTimeout( () => location.href = 'https://api.whatsapp.com/send?phone=9163669144&text=ГРУДЬ', 2000 )
		} )
	} )
}