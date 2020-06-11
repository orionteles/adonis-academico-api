'use strict'

const AbstractValidator = use('App/Validators/AbstractValidator')

class Disciplina extends AbstractValidator{
  get rules () {
    return {
      nome: 'required|max:50',
      curso_id: 'required|integer'
    }
  }
}

module.exports = Disciplina
