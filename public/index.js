const socket = io()

function sendData() {
  const data = {}

  const checkboxes = document.querySelectorAll('input[type="checkbox"]')
  const textboxes = document.querySelectorAll('input[type="text"]')

  checkboxes.forEach((checkbox, index) => {
    if (checkbox.checked) {
      data[`textbox${index + 1}`] = textboxes[index].value
    }
  })

  socket.emit('dataUpdate', data)
}

const checkboxes = document.querySelectorAll('input[type="checkbox"]')
checkboxes.forEach((checkbox) => {
  checkbox.addEventListener('change', sendData)
})
