const express = require('express')
const router = express.Router()
const RestaurantModel = require('../../models/restaurant')

router.get('/', (req, res) => {
  return RestaurantModel.find({ isFavorite: true })
    .lean()
    .then(restaurants => res.render('favorite', { restaurants, root: 1 }))
    .catch(err => console.log(err))
})

router.put('/:id', (req, res) => {
  const id = req.params.id
  return RestaurantModel.findById(id)
    .then(restaurant => {
      restaurant.isFavorite = false
      return restaurant.save()
    })
    .then(() => res.redirect('./'))
    .catch(err => console.log(err))
})

module.exports = router