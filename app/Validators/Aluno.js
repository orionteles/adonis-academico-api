'use strict'

const AbstractValidator = use('App/Validators/AbstractValidator')

class Aluno extends AbstractValidator{
  get rules () {
    return {
      nome: 'required|max:50|min:2',
      cpf: 'integer|unique:alunos',
      matricula: 'required|unique:alunos|max:20|min:5',
      email: 'email|unique:alunos|max:100',
      telefone: 'min:14|max:15',
      cep: 'integer|min:8|max:8',
      logradouro: 'max:100',
      complemento: 'max:100',
      numero: 'max:20',
      bairro: 'max:100',
    }
  }
}

module.exports = Aluno
