'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class AlunoSchema extends Schema {
  up () {
    this.create('alunos', (table) => {
      table.increments()
      table.string('nome', 50).notNullable()
      table.bigInteger('cpf').unique().unsigned()
      table.string('matricula', 20).notNullable()
      table.string('email', 100).unique()
      table.string('telefone', 15)
      table.integer('cep')
      table.string('logradouro', 100)
      table.string('complemento', 100)
      table.string('numero', 20)
      table.string('bairro', 100)
      table.timestamps()
    })
  }

  down () {
    this.drop('alunos')
  }
}

module.exports = AlunoSchema
