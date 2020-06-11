'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

/** 
*  @swagger
*  definitions:
*    Aluno:
*      type: object
*      properties:
*        nome:
*          type: string
*          maxLength: 50
*        cpf:
*          type: integer
*        matricula:
*          type: string
*        email:
*          type: string
*        telefone:
*          type: string
*        cep:
*          type: integer
*        logradouro:
*          type: string
*        complemento:
*          type: string
*        numero:
*          type: string
*        bairro:
*          type: string
*      required:
*        - nome
*        - matricula
*    AlunoObject:
*      type: object
*      properties:
*        id:
*          type: integer
*        nome:
*          type: string
*          maxLength: 50
*        cpf:
*          type: integer
*        matricula:
*          type: string
*        email:
*          type: string
*        telefone:
*          type: string
*        cep:
*          type: integer
*        logradouro:
*          type: string
*        complemento:
*          type: string
*        numero:
*          type: string
*        bairro:
*          type: string
*        created_at:
*          type: string
*          format: date
*        updated_at:
*          type: string
*          format: date
*/
class Aluno extends Model {

    static getCamposCadastro(){
        return [
            'nome',
            'cpf',
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
        return this.belongsToMany('App/Models/Turma').pivotTable('turma_aluno')
    }

}

module.exports = Aluno
