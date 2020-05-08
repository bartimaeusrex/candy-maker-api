const models = require('../models')

const getManufacurerByIdWithProducts = async (request, response) => {
  const { id } = request.params

  const manufacurer = await models.Manufacurers.findOne({
    where: { id },
    include: [{ model: models.Products }]
  })

  return manufacurer
    ? response.send(manufacurer)
    : response.sendStatus(404)
}

module.exports = { getManufacurerByIdWithProducts }
