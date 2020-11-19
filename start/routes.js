'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URLs and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.get('/', () => {
  return { greeting: 'Hello world ADONIS JS' }
})

Route.post('/users', 'UserController.store').prefix('api/v1')
Route.post('/users/token', 'UserController.token').prefix('api/v1')

Route.group(()=>{

  Route.resource('/aulas', 'AulaController')
    .apiOnly()
    .validator(new Map([
    [['store', 'update'], 'Aula']
  ]))

  Route.resource('/chamadas', 'ChamadaController')
    .apiOnly()
    .validator(new Map([
    [['store', 'update'], 'Chamada']
  ]))

  Route.resource('/turma-alunos', 'TurmaAlunoController')
    .apiOnly()
    .validator(new Map([
    [['store', 'update'], 'TurmaAluno']
  ]))

  Route.resource('/turmas', 'TurmaController')
    .apiOnly()
    .validator(new Map([
    [['store', 'update'], 'Turma']
  ]))

  Route.get('/turmas/:id/aulas', 'TurmaController.aulas')
  Route.get('/turmas/:id/alunos', 'TurmaController.alunos')

  Route.get('/alunos/:id/turmas', 'AlunoController.turmas')



  Route.resource('/professores', 'ProfessorController')
    .apiOnly()
    .validator(new Map([
      [['store', 'update'], 'Professor']
    ]))

  Route.resource('/salas', 'SalaController')
    .apiOnly()
    .validator(new Map([
      [['store', 'update'], 'Sala']
    ])) 

  Route.resource('/cursos', 'CursoController')
    .apiOnly()
    .validator(new Map([
    [['store', 'update'], 'Curso']
  ])) 

  Route.resource('/disciplinas', 'DisciplinaController')
    .apiOnly()
    .validator(new Map([
    [['store', 'update'], 'Disciplina']
  ])) 

  Route.resource('/semestres', 'SemestreController')
    .apiOnly()      
    .validator(new Map([
    [['store', 'update'], 'Semestre']
  ])) 
  
  Route.resource('/alunos', 'AlunoController')
  .apiOnly()
  .validator(new Map([
    [['store', 'update'], 'Aluno']
  ]))

// }).middleware('auth').prefix('api/v1')
})
