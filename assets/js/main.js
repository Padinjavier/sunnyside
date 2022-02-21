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





const $sliders1 = document.querySelectorAll('.carousel-item')
const $prev1 = document.querySelector('#prev')
const $next1 = document.querySelector('#next')

const nextSlider1 = (sliders1) => {
	const totalSliders1 = sliders1.length - 1
	let indice
	sliders1.forEach((slider1, i) => {
		if (slider1.classList.contains('active')) {
			slider1.classList.remove('active')
			indice = i + 1
			if (indice > totalSliders1) indice = 0
		}
	})

	sliders1[indice].classList.add('active')
}
const prevSlider1 = (sliders1) => {
	const totalSliders1 = sliders1.length - 1
	let indice
	// bloqueo 
	sliders1.forEach((slider1, i) => {
		if (slider1.classList.contains('active')& i>0) {
			slider1.classList.remove('active')
			indice = i - 1
			if (indice < 0) indice = totalSliders1
		}
	})
	sliders1[indice].classList.add('active')
}
// izquierda
$prev1.addEventListener('click', () => {
	prevSlider1($sliders1)
})
// derecha
$next1.addEventListener('click', () => {
	nextSlider1($sliders1)
})





const $sliders2 = document.querySelectorAll('.profile')
const $prev2 = document.querySelector('#prev-testimonial')
const $next2 = document.querySelector('#next-testimonial')

const nextSlider2 = (sliders2) => {
	const totalsliders2 = sliders2.length - 1
	let indice
	sliders2.forEach((slider2, i) => {
		if (slider2.classList.contains('active')) {
			slider2.classList.remove('active')
			indice = i + 1
			if (indice > totalsliders2) indice = 0
		}
	})

	sliders2[indice].classList.add('active')
}
const prevSlider2 = (sliders2) => {
	const totalsliders2 = sliders2.length - 1
	let indice
	// bloqueo 
	sliders2.forEach((slider2, i) => {
		if (slider2.classList.contains('active')& i>0) {
			slider2.classList.remove('active')
			indice = i - 1
			if (indice < 0) indice = totalsliders2
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
document.onload = runSlider2
