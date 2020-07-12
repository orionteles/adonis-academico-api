'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class AlunoSchema extends Schema {
  up () {
    this.create('alunos', (table) => {
      table.increments()
      table.string('nome')
      table.string('cpf')
      table.string('matricula')
      table.string('email')
      table.string('telefone')
      table.string('cep')
      table.string('logradouro')
      table.string('complemento')
      table.string('numero')
      table.string('bairro')
      table.timestamps()
    })
  }

  down () {
    this.drop('alunos')
  }
}

module.exports = AlunoSchema
