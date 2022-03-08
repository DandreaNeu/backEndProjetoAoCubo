import { Router } from 'express'
import TarefaController from './app/controllers/TarefaController'
const routes = Router()

routes.get('/tarefas', TarefaController.listarTodas)
routes.get('/tarefas/:id', TarefaController.detalharTarefa)
routes.get('/tarefasConcluidas', TarefaController.filtroConcluido)
routes.get('/tarefasNome/:nome', TarefaController.filtroNome)
routes.post('/tarefas', TarefaController.criar)
routes.put('/tarefas/:id', TarefaController.alterar)
routes.delete('/tarefas/:id', TarefaController.deletar)

export default routes
