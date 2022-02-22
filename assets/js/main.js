const buttonMenu = document.querySelector('#icon-menu')
const menu = document.querySelector('#menu')

const toggleElement = (element, nameClass) => {
	element.classList.toggle(nameClass)
}
// forma corta
buttonMenu.addEventListener('click', () => {
	toggleElement(menu, 'active')
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


// testimonios
const test1 = document.querySelector('#test1')
const test2 = document.querySelector('#test2')
const test3 = document.querySelector('#test3')

const testimoni1 = document.querySelector('#profile1')
const testimoni2 = document.querySelector('#profile2')
const testimoni3 = document.querySelector('#profile3')

const txt1 = document.querySelector('#text-1')
const txt2 = document.querySelector('#text-2')
const txt3 = document.querySelector('#text-3')

test1.addEventListener('click', () => {
	test1.classList.add('active')
	testimoni1.classList.add('active')
	txt1.classList.add('active')
	if(test2.classList.contains('active')||
		test3.classList.contains('active')){

		test2.classList.remove('active')
		testimoni2.classList.remove('active')
		txt2.classList.remove('active')

		test3.classList.remove('active')
		testimoni3.classList.remove('active')
		txt3.classList.remove('active')
	}
})

test2.addEventListener('click', () => {
		test2.classList.add('active')
		testimoni2.classList.add('active')
		txt2.classList.add('active')
	if(test1.classList.contains('active')||
		test3.classList.contains('active')){

		test1.classList.remove('active')
		testimoni1.classList.remove('active')
		txt1.classList.remove('active')

		test3.classList.remove('active')
		testimoni3.classList.remove('active')
		txt3.classList.remove('active')
	}
})

test3.addEventListener('click', () => {
	test3.classList.add('active')
	testimoni3.classList.add('active')
	txt3.classList.add('active')
	if(test1.classList.contains('active')||
		test2.classList.contains('active')){

		test1.classList.remove('active')
		testimoni1.classList.remove('active')
		txt1.classList.remove('active')

		test2.classList.remove('active')
		testimoni2.classList.remove('active')
		txt2.classList.remove('active')
	}
})