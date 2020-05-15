const express = require('express')
const { getAllManufacturers, getManufacturerByName } = require('./controllers/manufacturers')
const { getAllProducts, getProductsByName } = require('./controllers/products')

const app = express()

app.get('/manufacturers', getAllManufacturers)
app.get('/manufacturers/:name', getManufacturerByName)
app.get('/products', getAllProducts)
app.get('/products/:name', getProductsByName)

app.listen(8080, () => {
  console.log('Listening on port 8080...') // eslint-disable-line no-console
})
