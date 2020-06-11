'use strict'

const AbstractValidator = use('App/Validators/AbstractValidator')

class Turma extends AbstractValidator{
  get rules () {
    return {
      nome: 'required|max:50',
      turno: 'required|in:M,V,N',
      professor_id: 'integer',
      semestre_id: 'required|integer',
      disciplina_id: 'required|integer',
      sala_id: 'integer',
    }
  }
}

module.exports = Turma
