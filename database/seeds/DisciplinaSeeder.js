'use strict'

/*
|--------------------------------------------------------------------------
| DisciplinaSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')
const Disciplina = use('App/Models/Disciplina')

class DisciplinaSeeder {
  async run () {
    await Disciplina.createMany([
      {nome: 'Backend', curso_id: 1},
      {nome: 'Frontend', curso_id: 1},
      {nome: 'Mobile', curso_id: 1},
      {nome: 'Backend', curso_id: 5},
      {nome: 'Frontend', curso_id: 5},
      {nome: 'Mobile', curso_id: 5},
      {nome: 'TCPIP', curso_id: 2},
      {nome: 'Redes Móveis', curso_id: 2},
    ])
  }
}

module.exports = DisciplinaSeeder
