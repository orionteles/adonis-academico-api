'use strict'

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

const Aluno = use('App/Models/Aluno')

/**
 * Resourceful controller for interacting with alunos
 */
class AlunoController {

  /**
  * @swagger
  * /alunos:
  *   get:
  *     tags:
  *       - Aluno
  *     summary: Listagem completa de alunos
  *     parameters:
  *       - name: nome
  *         description: Filtra por nome parcial
  *         in: query
  *         required: false
  *         type: string
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
  async index({ request, response, view }) {

    const {page, qtd, nome, email} = request.all();

    const query = Aluno.query()

    if(nome){
      query.where('nome', 'like', '%' + nome + '%')
    }

    if(email){
      query.where('email', 'like', '%' + email + '%')
    }

    return await query.paginate(page, qtd)
  }

  /**
  * @swagger
  * /alunos:
  *   post:
  *     tags:
  *       - Aluno
  *     summary: Insere um registro de Aluno
  *     parameters:
  *       - name: aluno
  *         description: Objeto de Aluno
  *         in: body
  *         required: true
  *         type: object
  *         schema:
  *           $ref: '#/definitions/Aluno'
  *     responses:
  *       200:
  *         description: Sucesso
  *         schema:
  *           $ref: '#/definitions/AlunoObject'
  *       400:
  *         description: Bad Request
  */  
  async store({ request, response }) {

    const camposCadastro = Aluno.getCamposCadastro();
    const dados = request.only(camposCadastro)

    return await Aluno.create(dados);
  }

  /**
  * @swagger
  * /alunos/{id}:
  *   get:
  *     tags:
  *       - Aluno
  *     summary: Exibe detalhes de um Aluno
  *     parameters:
  *       - name: id
  *         description: Identificador do Aluno
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
  async show({ params, request, response, view }) {
    return await Aluno.query()
                      .where('id', params.id)
                      .with('turmas')
                      .first()
  }

  /**
  * @swagger
  * /alunos/{id}/turmas:
  *   get:
  *     tags:
  *       - Aluno
  *     summary: Exibe as turmas de um Aluno
  *     parameters:
  *       - name: id
  *         description: Identificador do Aluno
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
  async turmas({ params }) {
    const aluno = await Aluno.findOrFail(params.id)
    return aluno.turmas().fetch()
  }

  /**
  * @swagger
  * /alunos/{id}:
  *   put:
  *     tags:
  *       - Aluno
  *     summary: Altera um registro de Aluno
  *     parameters:
  *       - name: id
  *         description: Identificador do Aluno
  *         in: path
  *         required: true
  *         type: integer
  *       - name: aluno
  *         description: Objeto de Aluno
  *         in: body
  *         required: true
  *         type: object
  *         schema:
  *           $ref: '#/definitions/Aluno'
  *     responses:
  *       200:
  *         description: Sucesso
  *         schema:
  *           $ref: '#/definitions/AlunoObject'
  *       400:
  *         description: Bad Request
  */  
  async update({ params, request, response }) {
    const dados = request.only(Aluno.getCamposCadastro())
    const aluno = await Aluno.findOrFail(params.id)

    aluno.merge(dados)
    aluno.save()

    return aluno
  }

  /**
  * @swagger
  * /alunos/{id}:
  *   delete:
  *     tags:
  *       - Aluno
  *     summary: Exclui um aluno
  *     parameters:
  *       - name: id
  *         description: Identificador do Aluno
  *         in: path
  *         required: true
  *         type: integer
  *     responses:
  *       200:
  *         description: Sucesso
  */  
  async destroy({ params, request, response }) {
    const aluno = await Aluno.findOrFail(params.id)

    aluno.delete()
  }
}

module.exports = AlunoController
