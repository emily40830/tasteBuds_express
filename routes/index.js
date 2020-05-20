const express = require('express')
const router = express.Router()
const home = require('./modules/home')
const restaurants = require('./modules/restaurants')
const sort = require('./modules/sort')
const favorite = require('./modules/favorite')

router.use('/', home)
router.use('/restaurants', restaurants)
router.use('/sort', sort)
router.use('/favorite', favorite)

module.exports = router