const socketio = require('socket.io')
const parSetringAsArray = require('./utils/parseStringAsArray')
const calculateDistance = require('./utils/calculateDistance')

let io
const connections = []

exports.setupWebSocket = server => {
  io = socketio(server)

  io.on('connection', socket => {
    //console.log(socket.id)
    //console.log(socket.handshake.query)
    const { latitude, longitude, techs } = socket.handshake.query

    connections.push({
      id: socket.id,
      coordinates: {
        latitude: Number(latitude),
        longitude: Number(longitude)
      },
      techs: parSetringAsArray(techs)
    })
  })
}

exports.findConnections = (coordinates, techs) => {
  //console.log(coordinates, techs, connections)
  return connections.filter(connection => {
    return (
      calculateDistance(coordinates, connection.coordinates) < 10 &&
      connection.techs.some(item => techs.includes(item))
    )
  })
}

exports.sendMessage = (to, message, data) => {
  to.forEach(connection => {
    io.to(connection.id).emit(message, data)
  })
}
