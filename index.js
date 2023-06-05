const express = require('express')
const socketIO = require('socket.io')

const app = express()
app.use(express.json())

app.use(express.urlencoded({ extended: true }))
app.use(express.static('public'))

const http = require('http')
const server = http.createServer(app)
const io = socketIO(server)

io.on('connection', (socket) => {
  socket.on('dataUpdate', (data) => {
    io.emit('dataUpdate', data)
  })
})

app.get('/ziggy1', (req, res) => {
  res.sendFile(__dirname + '/public/index.html')
})

app.get('/ziggy2', (req, res) => {
  res.sendFile(__dirname + '/public/index2.html')
})

const port = 3000
server.listen(port, () => {
  console.log(`Server is running on port ${port}`)
})
