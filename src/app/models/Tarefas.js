import Sequelize, { Model } from 'sequelize'

class Tarefas extends Model {
  static init(sequelize) {
    super.init(
      {
        nome: Sequelize.STRING(100),
        concluido: Sequelize.BOOLEAN
      },
      {
        sequelize,
        tableName: 'tarefa'
      }
    )

    return this
  }
}

export default Tarefas
