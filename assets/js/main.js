const buttonMenu = document.querySelector('#icon-menu')
const menu = document.querySelector('#menu')

// forma larga de hacerlo
const toggleMenu = () => {
	if (menu.classList.contains('active')) {
		menu.classList.remove('active')
	} else {
		menu.classList.add('active')
	}
}

const toggleElement = (element, nameClass) => {
	element.classList.toggle(nameClass)
}

// buttonMenu.addEventListener('click', toggleMenu)

// forma corta
buttonMenu.addEventListener('click', () => {
	toggleElement(menu, 'active')
})







const $sliders = document.querySelectorAll('.carousel-item')
const $prev = document.querySelector('#prev')
const $next = document.querySelector('#next')

const nextSlider = (sliders) => {
	const totalSliders = sliders.length - 1
	let indice

	sliders.forEach((slider, i) => {
		if (slider.classList.contains('active')) {
			slider.classList.remove('active')
			indice = i + 1
			if (indice > totalSliders) indice = 0
		}
	})

	sliders[indice].classList.add('active')
}

const prevSlider = (sliders) => {
	const totalSliders = sliders.length - 1
	let indice

	sliders.forEach((slider, i) => {
		if (slider.classList.contains('active')) {
			slider.classList.remove('active')
			indice = i - 1
			if (indice < 0) indice = totalSliders
		}
	})

	sliders[indice].classList.add('active')
}

$next.addEventListener('click', () => {
	clearInterval(runSlider)

	nextSlider($sliders)

	runSlider = setInterval(() => {
		nextSlider($sliders)
	}, 5000)
})

// izquierda
$prev.addEventListener('click', () => {
	prevSlider($sliders)
})


// derecha
$next.addEventListener('click', () => {
	nextSlider($sliders)
})

document.onload = runSlider
