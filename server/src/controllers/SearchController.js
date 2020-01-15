const Dev = require('../models/Dev')
const parseStringAsAarray = require('../utils/parseStringAsArray')

module.exports = {
  async index (req, res) {
    try {
      // Buscar todos devs num raio 10km
      // Filtrar por tecnologias
      const { latitude, longitude, techs } = req.query
      const techsArray = parseStringAsAarray(techs)

      const devs = await Dev.find({
        techs: {
          $in: techsArray
        },
        location: {
          $near: {
            $geometry: {
              type: 'Point',
              coordinates: [longitude, latitude]
            },
            $maxDistance: 10000
          }
        }
      })

      res.json(devs)
    } catch (err) {
      res.status(400).json({
        message: err
      })
    }
  }
}
