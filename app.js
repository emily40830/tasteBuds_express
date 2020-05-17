const express = require('express')
const app = express()
const port = 3000
const exphbs = require('express-handlebars')
const bodyParser = require('body-parser')
const restaurantList = require('./models/seeds/restaurant.json')
const RestaurantModel = require('./models/restaurant')
const methodOverride = require('method-override')
const routes = require('./routes')

// import mongoose and set up db connection
const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/restaurant-list', { useNewUrlParser: true, useUnifiedTopology: true })

//set up db connection
const db = mongoose.connection
db.on('error', () => {
  console.log('mongodb error!')
})
db.once('open', () => {
  console.log('mongodb connected!')
})
////
app.use(bodyParser.urlencoded({ extended: true }))
app.engine('handlebars', exphbs({
  defaultLayout: 'main',
  helpers: {
    math: function (lvalue, operator, rvalue) {
      lvalue = parseFloat(lvalue);
      rvalue = parseFloat(rvalue);
      return {
        "+": lvalue + rvalue,
        "-": lvalue - rvalue,
        "*": lvalue * rvalue,
        "/": lvalue / rvalue,
        "%": lvalue % rvalue
      }[operator];
    }
  }
}));
app.use(express.static('public'))
app.set('view engine', 'handlebars')
app.use(methodOverride('_method'))
app.use(routes)

// //favorite(unfinish)
// app.get('/favorite', (req, res) => {
//   res.render('favorite')
// })

// //Create
// app.get('/new', (req, res) => {
//   res.render('create')
// })

// app.post('/restaurants', (req, res) => {
//   const newItem = new RestaurantModel(
//     {
//       name: req.body.name,
//       name_en: req.body.name_en,
//       category: req.body.category,
//       image: req.body.image,
//       location: req.body.location,
//       phone: req.body.phone,
//       google_map: req.body.google_map,
//       rating: req.body.rating,
//       description: req.body.description
//     }
//   )
//   return newItem.save()
//     .then(() => res.redirect('/'))
//     .catch(error => console.log(error))
// })

// Read (modify the last version)
// app.get('/', (req, res) => {
//   // res.render('index', { restaurants: restaurantList.results })
//   // res.render('home')
//   RestaurantModel.find()
//     .lean()
//     .then(restaurants => res.render('index', { restaurants }))
//     .catch(err => console.log(err))
//   // res.render('index', { restaurants: restaurantList.results })
// })
// app.get('/search', (req, res) => {
//   const keyword = req.query.keyword
//   const reg = new RegExp(keyword, 'i') // i 代表忽略大小寫

//   return RestaurantModel.find(
//     {
//       $or: [
//         { name: { $regex: reg } },
//         { name_en: { $regex: reg } },
//         { category: { $regex: reg } }
//       ]
//     }
//   ).lean()
//     .then(restaurants => res.render('index', { restaurants, query: keyword }))
//     .catch(err => console.log(err))


//   // RestaurantModel.find({ $or: [name: new RegExp('^' + keyword + '$', "i")] }, function (err, results) {
//   //   if (err) {
//   //     console.log(err);
//   //   }
//   //   res.render('index', { restaurants: results })
//   // })


//   // const results = restaurantList.results.filter(r => {
//   //   return r.name_en.toLowerCase().includes(keyword) ||
//   //     r.name.toLowerCase().includes(keyword) ||
//   //     r.category.toLowerCase().includes(keyword)
//   // })
//   // if (keyword === 'all') {
//   //   res.render('index', { restaurants: restaurantList.results, query: keyword })
//   // } else if (results.length < 1) {
//   //   res.render('nothing')
//   // } else {
//   //   res.render('index', { restaurants: results, query: keyword })
//   // }
//   // console.log(restaurantList.results)
// })

// Read (modify the last version)
// app.get('/restaurants/:id', (req, res) => {
//   const id = req.params.id
//   return RestaurantModel.findById(id)
//     .lean()
//     .then(restaurant => res.render('show', { restaurant }))
//   // const eachRestaurant = restaurantList.results.find(r => r.id.toString() === req.params.id
//   // )
//   // res.render('show', { restaurant: eachRestaurant })

// })

// app.get('/popular', (req, res) => {

//   return RestaurantModel.find()
//     .sort({ rating: -1 })
//     .lean()
//     .then(restaurants => res.render('popular', { restaurants }))
//     .catch(error => console.log(error))

//   let sortByrating = restaurantList.results.sort((a, b) => {
//     return a.rating < b.rating ? 1 : -1
//   })
//   for (let i = 0; i < sortByrating.length; i++) {
//     sortByrating[i].index = i + 1
//   }
//   // console.log(sortByrating)
//   res.render('popular', { restaurants: sortByrating })
// })


// // Update
// app.get('/restaurants/:id/edit', (req, res) => {
//   const id = req.params.id
//   return RestaurantModel.findById(id)
//     .lean()
//     .then(restaurant => res.render('edit', { restaurant }))
//     .catch(error => console.log(error))
// })
// app.put('/restaurants/:id', (req, res) => {
//   const id = req.params.id
//   return RestaurantModel.findById(id)
//     .then(restaurant => {
//       restaurant.name = req.body.name,
//         restaurant.name_en = req.body.name_en,
//         restaurant.category = req.body.category,
//         restaurant.image = req.body.image,
//         restaurant.location = req.body.location,
//         restaurant.phone = req.body.phone,
//         restaurant.google_map = req.body.google_map,
//         restaurant.rating = req.body.rating,
//         restaurant.description = req.body.description

//       return restaurant.save()
//     })
//     .then(() => res.redirect(`/restaurants/${id}`))
//     .catch(error => console.log(error))
// })


// // Delete
// app.delete('/restaurants/:id', (req, res) => {
//   const id = req.params.id
//   return RestaurantModel.findById(id)
//     .then(restaurant => restaurant.remove())
//     .then(() => res.redirect('/'))
//     .catch(error => console.log(error))
// })



app.listen(port, () => {
  console.log(`Running on the localhost:${port}`)
})