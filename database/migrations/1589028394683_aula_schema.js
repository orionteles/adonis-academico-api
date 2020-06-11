'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class AulaSchema extends Schema {
  up () {
    this.create('aulas', (table) => {
      table.increments()
      table.date('data').notNullable()
      table.text('conteudo').notNullable()
      table.integer('turma_id').unsigned().references('id').inTable('turmas').notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('aulas')
  }
}

module.exports = AulaSchema
