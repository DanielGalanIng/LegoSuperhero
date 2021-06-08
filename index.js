const modal = document.querySelector('.modal')
const button_spidey = document.querySelector('#button-spidey')
const button_robin = document.querySelector('#button-robin')
const button_batman = document.querySelector('#button-batman')
const close = document.querySelector('.modal__content-close')

button_spidey.addEventListener('click', () => {
    modal.classList.remove('hidden')
    modal.classList.add('visible')
})
button_robin.addEventListener('click', () => {
    modal.classList.remove('hidden')
    modal.classList.add('visible')
})
button_batman.addEventListener('click', () => {
    modal.classList.remove('hidden')
    modal.classList.add('visible')
})
close.addEventListener('click', () => {
    modal.classList.remove('visible')
    modal.classList.add('hidden')
})