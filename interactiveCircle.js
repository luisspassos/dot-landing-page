const circle = document.querySelector('.interactive .circle')

const buttons = document.querySelectorAll('.interactive button')
const [buttonYellow, buttonRed, buttonGray] = buttons

const texts = document.querySelectorAll('.interactive .circle strong')
const [textYellow, textRed, textGray] = texts

function handleColorChange(button, color, text) {

  function resetStyles() {
    circle.className = 'circle'

    for (const text of texts) {
      text.classList.remove('active')
    }

    for (const button of buttons) {
      button.classList.remove('active')

      const icon = button.firstElementChild

      icon.src = 'icones/icon-plus.svg'
    }
  }

  resetStyles()

  text.classList.add('active')
  circle.classList.add(color)
  button.classList.add('active')

  const icon = button.firstElementChild;

  icon.src = 'icones/icon-minus.svg'
}


buttonYellow.addEventListener('click', () => {
  handleColorChange(buttonYellow, undefined, textYellow)
})

buttonRed.addEventListener('click', () => {
  handleColorChange(buttonRed, 'red', textRed)
})

buttonGray.addEventListener('click', () => {
  handleColorChange(buttonGray, 'gray', textGray)
})
