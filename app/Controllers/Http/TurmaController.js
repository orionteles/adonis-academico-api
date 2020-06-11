'use strict'

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Turma = use('App/Models/Turma')

/**
 * Resourceful controller for interacting with turmas
 */
class TurmaController {

    /**
  * @swagger
  * /turmas:
  *   get:
  *     tags:
  *       - Turma
  *     summary: Listagem completa de turmas
  *     parameters:
  *       - name: page
  *         description: Número da Página a exibir
  *         in: query
  *         required: false
  *         type: integer
  *       - name: qtd
  *         description: Quantidade de Registros por Página
  *         in: query
  *         required: false
  *         type: integer
  *     responses:
  *       200:
  *         description: Sucesso
  */ 
  async index ({ request, response, view }) {
    return Turma.query().with('disciplina').fetch();
  }

  /**
  * @swagger
  * /turmas:
  *   post:
  *     tags:
  *       - Turma
  *     summary: Insere um registro de Turma
  *     parameters:
  *       - name: turma
  *         description: Objeto de Turma
  *         in: body
  *         required: true
  *         type: object
  *         schema:
  *           $ref: '#/definitions/Turma'
  *     responses:
  *       200:
  *         description: Sucesso
  *         schema:
  *           $ref: '#/definitions/TurmaObject'
  *       400:
  *         description: Bad Request
  */  
  async store ({ request, response }) {
    const camposCadastro = Turma.getCamposCadastro()
    const dados = request.only(camposCadastro)
    return Turma.create(dados)
  }

  /**
  * @swagger
  * /turmas/{id}:
  *   get:
  *     tags:
  *       - Turma
  *     summary: Exibe detalhes de um Turma
  *     parameters:
  *       - name: id
  *         description: Identificador da Turma
  *         in: path
  *         required: true
  *         type: integer
  *     responses:
  *       200:
  *         description: Sucesso
  *         schema:
  *           $ref: '#/definitions/TurmaObject'
  *       400:
  *         description: Bad Request
  */ 
  async show ({ params, request, response, view }) {
    return Turma.query()
                .where('id', params.id)
                .with('professor')
                .with('semestre')
                .with('disciplina')
                .with('alunos')
                .with('aulas')
                .with('sala')
                .first()
  }

  /**
  * @swagger
  * /turmas/{id}/aulas:
  *   get:
  *     tags:
  *       - Turma
  *     summary: Exibe as aulas de uma Turma
  *     parameters:
  *       - name: id
  *         description: Identificador da Turma
  *         in: path
  *         required: true
  *         type: integer
  *     responses:
  *       200:
  *         description: Sucesso
  *         schema:
  *           $ref: '#/definitions/AlunoObject'
  *       400:
  *         description: Bad Request
  */    
  async aulas ({ params }) {
    const turma = await Turma.findOrFail(params.id)
    return turma.aulas().fetch();
  }

  /**
  * @swagger
  * /turmas/{id}/alunos:
  *   get:
  *     tags:
  *       - Turma
  *     summary: Exibe os alunos de uma Turma
  *     parameters:
  *       - name: id
  *         description: Identificador da Turma
  *         in: path
  *         required: true
  *         type: integer
  *     responses:
  *       200:
  *         description: Sucesso
  *       400:
  *         description: Bad Request
  */    
  async alunos ({ params }) {
    const turma = await Turma.findOrFail(params.id)
    return turma.alunos().fetch();
  }

  /**
  * @swagger
  * /turmas/{id}:
  *   put:
  *     tags:
  *       - Turma
  *     summary: Altera um registro de Turma
  *     parameters:
  *       - name: id
  *         description: Identificador da Turma
  *         in: path
  *         required: true
  *         type: integer
  *       - name: turma
  *         description: Objeto de Turma
  *         in: body
  *         required: true
  *         type: object
  *         schema:
  *           $ref: '#/definitions/Turma'
  *     responses:
  *       200:
  *         description: Sucesso
  *         schema:
  *           $ref: '#/definitions/TurmaObject'
  *       400:
  *         description: Bad Request
  */  
  async update ({ params, request, response }) {
    const dados = request.only(Turma.getCamposCadastro())
    const turma = await Turma.findOrFail(params.id)

    turma.merge(dados)
    turma.save()

    return turma
  }

  /**
  * @swagger
  * /turmas/{id}:
  *   delete:
  *     tags:
  *       - Turma
  *     summary: Exclui uma Turma
  *     parameters:
  *       - name: id
  *         description: Identificador da Turma
  *         in: path
  *         required: true
  *         type: integer
  *     responses:
  *       200:
  *         description: Sucesso
  */  
  async destroy ({ params, request, response }) {
    const turma = await Turma.findOrFail(params.id)
    turma.delete(); 
  }
}

module.exports = TurmaController
