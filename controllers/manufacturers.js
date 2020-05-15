const models = require('../models')

const getAllManufacturers = async (request, response) => {
  try {
    const manufacturers = await models.Manufacturers.findAll({
      include: [{ model: models.Products }]
    })

    return response.send(manufacturers)
  } catch (error) {
    return response.status(500).send('Unable to retrieve manufacturers, please try again')
  }
}

const getManufacturerById = async (request, response) => {
  try {
    const { id } = request.params

    const manufacturer = await models.Manufacturers.findOne({
      where: { id },
      include: [{ model: models.Products }]
    })

    return manufacturer
      ? response.send(manufacturer)
      : response.sendStatus(404)
  } catch (error) {
    return response.status(500).send('Unable to retrieve manufacturer, please try again')
  }
}

module.exports = {
  getAllManufacturers,
  getManufacturerById
}
