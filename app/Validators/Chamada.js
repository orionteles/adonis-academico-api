'use strict'

const AbstractValidator = use('App/Validators/AbstractValidator')

class Chamada extends AbstractValidator{
  get rules () {
    return {
      presenca: 'required|in:P,F,J',
      aula_id: 'required|integer',
      aluno_id: 'required|integer',
    }
  }
}

module.exports = Chamada
