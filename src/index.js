import * as css from './style.css'

const body = document.querySelector('#container')

const button = document.createElement('button')
button.textContent = "click me"

body.appendChild(button)

button.addEventListener('click', () => {
    const div = document.createElement('div')
    div.textContent = 'Hello World'
    body.appendChild(div)
})