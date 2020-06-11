'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Professor extends Model {

    static get table(){
        return 'professores';
    }

    static getCamposCadastro(){
        return [
            'nome',
            'cpf',
            'salario',
            'matricula',
            'email',
            'telefone',
            'cep',
            'logradouro',
            'complemento',
            'numero',
            'bairro',
        ];
    }   

    turmas(){
        return this.hasMany('App/Models/Turma')
    }        

}

module.exports = Professor
