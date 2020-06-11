'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

/** 
*  @swagger
*  definitions:
*    Turma:
*      type: object
*      properties:
*        nome:
*          type: string
*          maxLength: 50
*        turno:
*          type: string
*        professor_id:
*          type: integer
*        sala_id:
*          type: integer
*        semestre_id:
*          type: integer
*        disciplina_id:
*          type: integer
*    TurmaObject:
*      type: object
*      properties:
*        id:
*          type: integer
*        nome:
*          type: string
*          maxLength: 50
*        turno:
*          type: string
*        professor_id:
*          type: integer
*        sala_id:
*          type: integer
*        semestre_id:
*          type: integer
*        disciplina_id:
*          type: integer
*        created_at:
*          type: string
*          format: date
*        updated_at:
*          type: string
*          format: date
*/
class Turma extends Model {

    static getCamposCadastro(){
        return [
            "nome",
            "turno",
            "professor_id",
            "sala_id",
            "semestre_id",
            "disciplina_id"
        ]
    }

    professor(){
        return this.belongsTo('App/Models/Professor')
    }

    semestre(){
        return this.belongsTo('App/Models/Semestre')
    }

    sala(){
        return this.belongsTo('App/Models/Sala')
    }

    disciplina(){
        return this.belongsTo('App/Models/Disciplina')
    }

    aulas(){
        return this.hasMany('App/Models/Aula')
    }

    alunos(){
        return this.belongsToMany('App/Models/Aluno').pivotTable('turma_aluno')
    }

}

module.exports = Turma
