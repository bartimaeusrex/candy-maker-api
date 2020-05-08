const products = (connection, Sequelize) => {
  return connection.define('products', {
    id: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true },
    name: { type: Sequelize.STRING },
    yearIntroduced: { type: Sequelize.DATE },
    manufacturerId: { type: Sequelize.INT },
    createdAt: { type: Sequelize.DATETIME },
    updatedAt: { type: Sequelize.DATETIME },
    deletedAt: { type: Sequelize.DATETIME }
  }, { paranoid: true })
}

module.exports = products
