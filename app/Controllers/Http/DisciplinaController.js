'use strict'

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Disciplina = use('App/Models/Disciplina')

/**
 * Resourceful controller for interacting with disciplinas
 */
class DisciplinaController {
  /**
   * Show a list of all disciplinas.
   * GET disciplinas
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index ({ request, response, view }) {

    const {page, qtd, nome} = request.all();

    const query = Disciplina.query().with('curso')

    if(nome){
      query.where('nome', 'like', '%' + nome + '%')
    }

    return await query.paginate(page, qtd);


                           
  }

  /**
   * Create/save a new disciplina.
   * POST disciplinas
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store ({ request, response }) {
    const dados = request.only(Disciplina.getCamposCadastro())
    return Disciplina.create(dados);
  }

  /**
   * Display a single disciplina.
   * GET disciplinas/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show ({ params }) {
    return Disciplina.query()
                     .where('id', params.id)
                     .with('curso')
                     .with('turmas')
                     .first();
  }

  async update({params, request}){
    const dados = request.only(Disciplina.getCamposCadastro())

    const disciplina = await Disciplina.findOrFail(params.id)
    disciplina.merge(dados)
    await disciplina.save();

    return disciplina
  }    

  async destroy({params}){
      const disciplina = await Disciplina.findOrFail(params.id)
      disciplina.delete()
  } 
}

module.exports = DisciplinaController
