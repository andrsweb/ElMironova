document.addEventListener('DOMContentLoaded', () => {
	'use strict'

	tabsOuter()
})

const tabsOuter = () => {
	const tabBtns        = document.querySelectorAll('.tab-btn')
	const tabContentLeft = document.querySelectorAll('.choose-tabs-box')

	const clearActive = (element, className = 'active') => {
		element.forEach(item => item.classList.remove(`${className}`))
	}

	const setActive = (element, index, className = 'active') => {
		element[index].classList.add(`${className}`)
	}

	const checkOutTabs = (item, index) => {

		item.addEventListener('click', () => {

			if( item.classList.contains( 'active' ) ) return

			clearActive( tabBtns )
			clearActive( tabContentLeft )

			setActive( tabBtns, index)
			setActive(tabContentLeft, index)
		})
	}

	tabBtns.forEach(checkOutTabs)
}





