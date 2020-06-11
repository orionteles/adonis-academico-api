'use strict'

class AbstractValidator{
    
  get validateAll() {
    return true;
  }

  get messages() {
    return {
      'required': 'O campo [{{ field }}] é Obrigatório',
      'max': 'O valor informado é maior que o máximo permitido',
      'min': 'O valor informado é menor que o mínimo permitido',
      'integer': 'O campo [{{ field }}] deve ser inteiro',
      'unique': 'Já existe registro com o mesmo valor',
      'email': 'O e-mail informado não é válido',
      'date': 'A data informada não é válida',
      'in': 'O valor informado não está entre as opções válidas',
    }
  }

  async fails (errorMessages) {
    return this.ctx.response.status(400).send(errorMessages)
  } 
}

module.exports = AbstractValidator