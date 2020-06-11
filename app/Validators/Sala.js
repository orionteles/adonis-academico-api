'use strict'

const AbstractValidator = use('App/Validators/AbstractValidator')

class Sala extends AbstractValidator{
  get rules () {
    return {
      nome: 'required|unique:salas|max:50',
      capacidade: 'integer',
      tipo: 'required|in:S,L,A,P',
    }
  }
}

module.exports = Sala
