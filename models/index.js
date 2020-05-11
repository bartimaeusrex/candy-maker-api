const Sequelize = require('sequelize')
const ProductsModel = require('./products')
const ManufacturersModel = require('./manufacturers')

const connection = new Sequelize('candies', 'candies', 'C4nd13$!', {
  host: 'localhost', dialect: 'mysql'
})

const Products = ProductsModel(connection, Sequelize)
const Manufacturers = ManufacturersModel(connection, Sequelize)

Manufacturers.hasMany(Products)
Products.belongsTo(Manufacturers)

module.exports = {
  Products,
  Manufacturers
}
