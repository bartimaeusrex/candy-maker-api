const express = require('express')
const { getManufacturerByIdWithProducts } = require('./controllers/manufacturers')
const { getProductById } = require('./controllers/products')

const app = express()

app.get('/manufacturers/:id', getManufacturerByIdWithProducts)
app.get('/products/:id', getProductById)

app.listen(8080, () => {
  console.log('Listening on port 8080...') // eslint-disable-line no-console
})
