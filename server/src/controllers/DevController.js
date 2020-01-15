const axios = require('axios')
const Dev = require('../models/Dev')
const parseStringAsAarray = require('../utils/parseStringAsArray')
//index, show, store, update, destroy

module.exports = {
  async index (req, res) {
    try {
      const devs = await Dev.find()

      res.json(devs)
    } catch (err) {
      res.status(400).json({
        message: err
      })
    }
  },

  async store (req, res) {
    try {
      const { github_username, techs, latitude, longitude } = req.body

      const isDev = await Dev.findOne({ github_username })
      if (isDev)
        res.status(400).json({ message: 'Dev já cadastrado', info_dev: isDev })

      const response = await axios.get(
        `https://api.github.com/users/${github_username}`
      )

      const { name = login, avatar_url, bio } = response.data

      const techsArray = parseStringAsAarray(techs)

      const location = {
        type: 'Point',
        coordinates: [longitude, latitude]
      }

      const dev = await Dev.create({
        github_username,
        name,
        avatar_url,
        bio,
        techs: techsArray,
        location
      })

      res.json(dev)
    } catch (err) {
      res.status(400).json({
        message: err
      })
    }
  }
}
