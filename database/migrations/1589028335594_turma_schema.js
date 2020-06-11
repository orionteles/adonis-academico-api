'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class TurmaSchema extends Schema {
  up () {
    this.create('turmas', (table) => {
      table.increments()
      table.string('nome', 50).notNullable()
      table.string('turno', 1).notNullable()
      table.integer('professor_id').unsigned().references('id').inTable('professores')
      table.integer('semestre_id').unsigned().references('id').inTable('semestres').notNullable()
      table.integer('disciplina_id').unsigned().references('id').inTable('disciplinas').notNullable()
      table.integer('sala_id').unsigned().references('id').inTable('salas')
      table.timestamps()
    })
  }

  down () {
    this.drop('turmas')
  }
}

module.exports = TurmaSchema
