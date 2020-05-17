const express = require('express')
const router = express.Router()
const RestaurantModel = require('../../models/restaurant')

router.get('/:name/:type', (req, res) => {
  const { name, type } = req.params
  console.log(req.params)
  return RestaurantModel.find()
    .sort({ [req.params.name]: req.params.type })
    .lean()
    .then(restaurants => res.render('index', { restaurants }))
    .catch(error => console.log(error))
})
module.exports = router