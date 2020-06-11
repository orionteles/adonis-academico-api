'use strict'

const AbstractValidator = use('App/Validators/AbstractValidator')

class Semestre extends AbstractValidator{
  get rules () {
    return {
      nome: 'required|unique:semestres|max:50',
      data_inicio: 'required|date',
      data_fim: 'required|date',
    }
  }
}

module.exports = Semestre
