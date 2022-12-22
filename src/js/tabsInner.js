document.addEventListener('DOMContentLoaded', () => {
	'use strict'

	tabsInner()
})

const tabsInner = () => {
	const tabBtns = document.querySelectorAll('.choose-tab-select')
	const tabText = document.querySelectorAll('.tab-info-text')

	const clearActive = (element, className = 'opened') => {
		element.forEach(item => item.classList.remove(`${className}`))
	}

	const setActive = (element, index, className = 'opened') => {
		element[index].classList.add(`${className}`)
	}

	const checkOutTabs = (item, index) => {

		item.addEventListener('click', () => {

			if (item.classList.contains('opened')) return

			clearActive(tabBtns)
			clearActive(tabText)

			setActive(tabBtns, index)
			setActive(tabText, index)
		})
	}

	tabBtns.forEach(checkOutTabs)
}





