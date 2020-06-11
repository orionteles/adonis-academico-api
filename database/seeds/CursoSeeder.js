'use strict'

/*
|--------------------------------------------------------------------------
| CursoSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')
const Curso = use('App/Models/Curso')

class CursoSeeder {
  async run () {
    await Curso.createMany([
      {id: 1, nome: 'Análise e Desenvolvimento de Sistemas', duracao: 5, modalidade: 'P'},
      {id: 2, nome: 'Redes de Computadores', duracao: 5, modalidade: 'P'},
      {id: 3, nome: 'Direito', duracao: 8, modalidade: 'P'},
      {id: 4, nome: 'Medicina', duracao: 10, modalidade: 'P'},
      {id: 5, nome: 'Análise e Desenvolvimento de Sistemas', duracao: 5, modalidade: 'D'},
      {id: 6, nome: 'Pedagogia', duracao: 5, modalidade: 'D'},
      {id: 7, nome: 'Matemática', duracao: 8, modalidade: 'D'},
    ])      
  }
}

module.exports = CursoSeeder
