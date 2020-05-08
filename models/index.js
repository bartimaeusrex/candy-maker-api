const Sequelize = require('sequelize')
const ProductsModel = require('./products')
const ManufacturersModel = require('./employers')

const connection = new Sequelize('candyman', 'canthecandyman', 'yEs#h3~K4n!', {
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
