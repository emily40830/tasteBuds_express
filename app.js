const express = require('express')
const app = express()
const port = 3000

const exphbs = require('express-handlebars')
const restaurantList = require('./restaurant.json')

app.engine('handlebars', exphbs({ defaultLayout: 'main' }))

app.use(express.static('public'))

app.set('view engine', 'handlebars')

app.get('/', (req, res) => {
  // res.render('index', { restaurants: restaurantList.results })
  // res.render('home')
  res.render('index', { restaurants: restaurantList.results })
})
app.get('/search', (req, res) => {
  const keyword = req.query.keyword.toLowerCase()
  const results = restaurantList.results.filter(r => {
    return r.name_en.toLowerCase().includes(keyword) ||
      r.name.toLowerCase().includes(keyword) ||
      r.category.toLowerCase().includes(keyword)
  })
  if (keyword === 'all') {
    res.render('index', { restaurants: restaurantList.results, query: keyword })
  } else if (results.length < 1) {
    res.render('nothing')
  } else {
    res.render('index', { restaurants: results, query: keyword })
  }
  // console.log(restaurantList.results)
})

app.get('/restaurants/:id', (req, res) => {
  const eachRestaurant = restaurantList.results.find(r => r.id.toString() === req.params.id
  )
  res.render('show', { restaurant: eachRestaurant })
})

app.listen(port, () => {
  console.log(`Running on the localhost:${port}`)
})