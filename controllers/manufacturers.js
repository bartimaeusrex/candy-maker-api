
const models = require('../models')

const getAllManufacturers = (request, response) => {
  
}

const getManufacturerByIdWithProducts = async (request, response) => {
  const { id } = request.params

  const manufacturer = await models.Manufacturers.findOne({
    where: { id },
    include: [{ model: models.Products }]
  })

  return manufacturer
    ? response.send(manufacturer)
    : response.sendStatus(404)
}

module.exports = {
  getManufacturerByIdWithProducts,
  getAllManufacturers
}
