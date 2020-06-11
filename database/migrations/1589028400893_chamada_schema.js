'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ChamadaSchema extends Schema {
  up () {
    this.create('chamadas', (table) => {
      table.increments()
      table.integer('aula_id').unsigned().references('id').inTable('aulas').notNullable()
      table.integer('aluno_id').unsigned().references('id').inTable('alunos').notNullable()
      table.string('presenca', 1).notNullable().defaultTo('P')
      table.timestamps()
    })
  }

  down () {
    this.drop('chamadas')
  }
}

module.exports = ChamadaSchema
