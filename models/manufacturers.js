const manufacturers = (connection, Sequelize) => {
  return connection.define('products', {
    id: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true },
    name: { type: Sequelize.STRING },
    country: { type: Sequelize.STRING },
    createdAt: { type: Sequelize.DATETIME },
    updatedAt: { type: Sequelize.DATETIME },
    deletedAt: { type: Sequelize.DATETIME }
  }, { paranoid: true })
}

module.exports = manufacturers
