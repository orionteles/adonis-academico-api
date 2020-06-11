'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class TurmaAlunoSchema extends Schema {
  up () {
    this.create('turma_aluno', (table) => {
      table.increments()
      table.integer('turma_id').unsigned().references('id').inTable('turmas').notNullable()
      table.integer('aluno_id').unsigned().references('id').inTable('alunos').notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('turma_aluno')
  }
}

module.exports = TurmaAlunoSchema
