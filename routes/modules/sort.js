const express = require('express')
const router = express.Router()
const RestaurantModel = require('../../models/restaurant')

router.get('/', (req, res) => {
  // const type = req.query.sort
  console.log(req.query.type)
  // console.log(req.params)
  return RestaurantModel.find()
    .sort(SortingTypeTransfer(req.query.type))
    .lean()
    .then(restaurants => res.render('index', { restaurants, type: req.query.type }))
    .catch(error => console.log(error))
})
module.exports = router

function SortingTypeTransfer(type) {
  switch (type) {
    case "name":
      return { name: 1 };
    case "name_des":
      return { name: -1 };
    case "category":
      return { category: 1 };
    case "location":
      return { location: 1 };
    default:
      return {}

  }
}