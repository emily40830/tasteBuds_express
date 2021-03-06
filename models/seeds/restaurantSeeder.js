const mongoose = require('mongoose')
const Restaurant = require('../restaurant')
const data = require('./restaurant.json')

mongoose.connect('mongodb://localhost/restaurant-list', { useNewUrlParser: true, useUnifiedTopology: true })

const db = mongoose.connection
db.on('error', () => {
  console.log('mongodb error!')
})
db.once('open', () => {
  console.log('mongodb connected!')
  data.results.forEach(elem => {
    const eachRow = new Restaurant({
      restaurant_id: elem.id,
      name: elem.name,
      name_en: elem.name_en,
      category: elem.category,
      image: elem.image,
      location: elem.location,
      phone: elem.phone,
      google_map: elem.google_map,
      rating: elem.rating,
      description: elem.description
    })
    eachRow.save()
  })
  console.log('Sucessfully')
})


