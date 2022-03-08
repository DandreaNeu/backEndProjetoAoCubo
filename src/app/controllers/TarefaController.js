import Tarefa from '../models/Tarefas'

class TarefaController {
  async criar(req, res) {
    const tarefa = await Tarefa.create(req.body)
    return res.json(tarefa)
  }
  async alterar(req, res) {
    console.log(req.params.body)
    let tarefa = await Tarefa.findByPk(req.params.id)
    tarefa = await tarefa.update(req.body)
    return res.json(tarefa)
  }
  async deletar(req, res) {
    let tarefa = await Tarefa.findByPk(req.params.id)
    tarefa = await tarefa.destroy(req.body)
    return res.json(tarefa)
  }
  async detalharTarefa(req, res) {
    let tarefa = await Tarefa.findByPk(req.params.id)
    return res.json(tarefa)
  }
  async listarTodas(req, res) {
    const tarefa = await Tarefa.findAll()
    return res.json(tarefa)
  }
  async filtroConcluido(req, res) {
    let tarefa = await Tarefa.findAll({
      where: {
        concluido: true
      }
    })
    return res.json(tarefa)
  }
  async filtroNome(req, res) {
    let tarefa = await Tarefa.findAll({
      where: {
        nome: req.params.nome
      }
    })
    return res.json(tarefa)
  }
}

export default new TarefaController()
