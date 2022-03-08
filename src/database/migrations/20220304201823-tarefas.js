'use strict'

module.exports = {
  up: (queryInterface, Sequelize) =>
    queryInterface.createTable('tarefa', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },
      nome: {
        type: Sequelize.STRING(100),
        allowNull: false
      },
      concluido: {
        type: Sequelize.BOOLEAN
      },
      createdAt: Sequelize.DATE,
      updatedAt: Sequelize.DATE
    }),

  down: queryInterface => queryInterface.dropTable('tarefa')
}
