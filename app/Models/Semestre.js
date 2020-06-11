'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Semestre extends Model {
    static getCamposCadastro(){
        return ['nome', 'data_inicio', 'data_fim']
    }

    turmas(){
        return this.hasMany('App/Models/Turma')
    }    
}

module.exports = Semestre
