'use strict'

const AbstractValidator = use('App/Validators/AbstractValidator')

class TurmaAluno extends AbstractValidator{
  get rules () {
    return {
      turma_id: 'required|integer',
      aluno_id: 'required|integer',
    }
  }
}

module.exports = TurmaAluno
