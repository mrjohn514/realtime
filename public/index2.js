const socket = io()

socket.on('dataUpdate', (data) => {
  const displayElement = document.getElementById('displayElement')
  let displayHTML = ''

  Object.keys(data).forEach((key, index) => {
    displayHTML += `<p> Textbox number: ${key.match(/\d+/)}</p>`
    displayHTML += `<p>Data is:${data[key]}</p>`
  })

  displayElement.innerHTML = displayHTML
})
