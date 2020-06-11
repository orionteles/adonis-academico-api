'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Sala extends Model {
    static getCamposCadastro(){
        return ['nome', 'capacidade', 'tipo']
    }

    turmas(){
        return this.hasMany('App/Models/Turma')
    }
}

module.exports = Sala
