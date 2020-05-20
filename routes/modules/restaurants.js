const express = require('express')
const router = express.Router()
const RestaurantModel = require('../../models/restaurant')


//Create

router.post('/', (req, res) => {
  const newItem = new RestaurantModel(
    {
      name: req.body.name,
      name_en: req.body.name_en,
      category: req.body.category,
      image: req.body.image,
      location: req.body.location,
      phone: req.body.phone,
      google_map: req.body.google_map,
      rating: req.body.rating,
      description: req.body.description
    }
  )
  return newItem.save()
    .then(() => res.redirect('/'))
    .catch(error => console.log(error))
})

// Read
router.get('/:id', (req, res) => {
  const id = req.params.id
  return RestaurantModel.findById(id)
    .lean()
    .then(restaurant => res.render('show', { restaurant, root: 1 }))
    .catch(error => console.log(error))
})

// Update
router.get('/:id/edit', (req, res) => {
  const id = req.params.id
  return RestaurantModel.findById(id)
    .lean()
    .then(restaurant => res.render('edit', { restaurant, root: 1 }))
    .catch(error => console.log(error))
})
router.put('/:id', (req, res) => {
  const id = req.params.id
  return RestaurantModel.findById(id)
    .then(restaurant => {
      restaurant.name = req.body.name,
        restaurant.name_en = req.body.name_en,
        restaurant.category = req.body.category,
        restaurant.image = req.body.image,
        restaurant.location = req.body.location,
        restaurant.phone = req.body.phone,
        restaurant.google_map = req.body.google_map,
        restaurant.rating = req.body.rating,
        restaurant.description = req.body.description

      return restaurant.save()
    })
    .then(() => res.redirect(`/restaurants/${id}`))
    .catch(error => console.log(error))
})

router.put('/:id/favorite', (req, res) => {
  const id = req.params.id
  // console.log('favorite been add')
  return RestaurantModel.findById(id)
    .then(restaurant => {
      restaurant.isFavorite = restaurant.isFavorite === true ? false : true
      return restaurant.save()
    })
    .then(() => res.redirect('/'))
    .catch(error => console.log(error))
})

// Delete
router.delete('/:id', (req, res) => {
  const id = req.params.id

  return RestaurantModel.findById(id)
    .then(restaurant => restaurant.remove())
    .then(() => res.redirect('/'))
    .catch(error => console.log(error))
})


module.exports = router
