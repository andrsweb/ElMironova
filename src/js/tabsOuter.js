document.addEventListener('DOMContentLoaded', () => {
	'use strict'

	tabsOuter()
})

const tabsOuter = () => {
	const tabBtns = document.querySelectorAll('.tab-btn')
	const tabContents = document.querySelectorAll('.choose-tabs-box')

	const clearActive = (element, className = 'active') => {
		element.forEach(item => item.classList.remove(`${className}`))
	}

	const setActive = (element, index, className = 'active') => {
		element[index].classList.add(`${className}`)
	}

	const checkOutTabs = (item, index) => {

		item.addEventListener('click', () => {

			if (item.classList.contains('active')) return

			clearActive(tabBtns)
			clearActive(tabContents)

			setActive(tabBtns, index)
			setActive(tabContents, index)
		})
	}

	tabBtns.forEach(checkOutTabs)

	tabContents.forEach(tab => {
		const tabBtns = tab.querySelectorAll('.choose-tab-select')
		const tabText = tab.querySelectorAll('.tab-info-text')

		tabBtns.forEach( (item, index) => {

			item.addEventListener('click', () => {

				if (item.classList.contains('active')) return

				clearActive(tabBtns)
				clearActive(tabText)

				setActive(tabBtns, index)
				setActive(tabText, index)
			})
		})
	})
}







