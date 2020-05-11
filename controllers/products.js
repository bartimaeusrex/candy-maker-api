const models = require('../models')

const getAllProducts = (request, response) => {
  
}

const getProductById = async (request, response) => {
  const { id } = request.params

  const product = await models.Products.findOne({
    where: { id },
    include: [
      { model: models.Manufacturers },
      { model: models.Products }
    ]
  })

  return product
    ? response.send(product)
    : response.sendStatus(404)
}

module.exports = { getProductById }
