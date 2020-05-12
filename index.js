const express = require('express')
const { getAllManufacturers, getManufacturerById } = require('./controllers/manufacturers')
const { getAllProducts, getProductsById } = require('./controllers/products')

const app = express()

app.get('/manufacturers', getAllManufacturers)
app.get('/manufacturers/:id', getManufacturerById)
app.get('/products', getAllProducts)
app.get('/products/:id', getProductsById)

app.listen(8080, () => {
  console.log('Listening on port 8080...') // eslint-disable-line no-console
})
