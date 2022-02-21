const buttonMenu = document.querySelector('#icon-menu')
const menu = document.querySelector('#menu')

const toggleElement = (element, nameClass) => {
	element.classList.toggle(nameClass)
}

// forma corta
buttonMenu.addEventListener('click', () => {
	toggleElement(menu, 'active')
})


// segundo menu
const buttonMenu2 = document.querySelector('#icon-menu-testimonials')
const menu2 = document.querySelector('#menu-testimonial')



// forma corta
buttonMenu2.addEventListener('click', () => {
	toggleElement(menu2, 'active2')
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

	// bloqueo 
	sliders.forEach((slider, i) => {
		if (slider.classList.contains('active')& i>0) {
			slider.classList.remove('active')
			indice = i - 1
			if (indice < 0) indice = totalSliders
		}
	})

	sliders[indice].classList.add('active')
}

// izquierda
$prev.addEventListener('click', () => {
	prevSlider($sliders)
})


// derecha
$next.addEventListener('click', () => {
	nextSlider($sliders)
})

document.onload = runSlider






const $sliders2 = document.querySelectorAll('profine')
const $prev2 = document.querySelector('#prev-testimonial')
const $next2 = document.querySelector('#next-testimonial')
const nextSlider2 = (sliders2) => {
	const totalSliders2 = sliders2.length - 1
	let indice
	sliders2.forEach((sliderr, i) => {
		if (sliderr.classList.contains('active')) {
			sliderr.classList.remove('active')
			indice = i + 1
			if (indice > totalSliders2) indice = 0
		}
	})
	sliders2[indice].classList.add('active')
}
const prevSlider2 = (sliders2) => {
	const totalSliders2 = sliders2.length - 1
	let indice
	// bloqueo 
	sliders2.forEach((sliderr, i) => {
		if (sliderr.classList.contains('active')& i>0) {
			sliderr.classList.remove('active')
			indice = i - 1
			if (indice < 0) indice = totalSliders2
		}
	})
	sliders2[indice].classList.add('active')
}
// izquierda
$prev2.addEventListener('click', () => {
	prevSlider2($sliders2)
})
// derecha
$next2.addEventListener('click', () => {
	nextSlider2($sliders2)
})
document.onload = runSliderr