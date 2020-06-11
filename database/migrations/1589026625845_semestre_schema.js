'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class SemestreSchema extends Schema {
  up () {
    this.create('semestres', (table) => {
      table.increments()
      table.string('nome', 50).notNullable().unique()
      table.date('data_inicio').notNullable()
      table.date('data_fim').notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('semestres')
  }
}

module.exports = SemestreSchema
