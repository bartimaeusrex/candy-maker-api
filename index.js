const express = require('express')
const { getManufacturerByIdWithProducts, getAllManufacturers } = require('./controllers/manufacturers')
const { getProductById, getAllProducts } = require('./controllers/products')

const app = express()

app.get('/manufacturers/:id', getManufacturerByIdWithProducts)
app.get('/manufacturers', getAllManufacturers)
app.get('/products/:id', getProductById)
app.get('/products/', getAllProducts)

app.listen(8080, () => {
  console.log('Listening on port 8080...') // eslint-disable-line no-console
})
