'use strict'

const AbstractValidator = use('App/Validators/AbstractValidator')

class Curso extends AbstractValidator{
  get rules () {
    return {
      nome: 'required|unique:cursos|max:50|min:2',
      duracao: 'integer',
      modalidade: 'required|max:1',
    }
  }

}

module.exports = Curso
