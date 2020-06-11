'use strict'

/*
|--------------------------------------------------------------------------
| SemestreSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')
const Semestre = use('App/Models/Semestre')

class SemestreSeeder {
  async run () {
    await Semestre.createMany([
      {nome: '1/2018', data_inicio: '2018-02-10', data_fim: '2018-07-02'},
      {nome: '2/2018', data_inicio: '2018-08-05', data_fim: '2018-12-12'},
      {nome: '1/2019', data_inicio: '2019-02-10', data_fim: '2019-07-02'},
      {nome: '2/2019', data_inicio: '2019-08-05', data_fim: '2019-12-12'},
      {nome: '1/2020', data_inicio: '2020-02-10', data_fim: '2020-07-02'},
      {nome: '2/2020', data_inicio: '2020-08-05', data_fim: '2020-12-12'},
    ])    
  }
}

module.exports = SemestreSeeder
