'use strict'

const AbstractValidator = use('App/Validators/AbstractValidator')

class Aula extends AbstractValidator{
  get rules () {
    return {
      data: 'required|date',
      conteudo: 'required',
      turma_id: 'required|integer',
    }
  }
}

module.exports = Aula
