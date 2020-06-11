'use strict'

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

const Aula = use('App/Models/Aula')

/**
 * Resourceful controller for interacting with aulas
 */
class AulaController {
  /**
   * Show a list of all aulas.
   * GET aulas
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index ({ request, response, view }) {
    return Aula.all()
  }

  /**
   * Create/save a new aula.
   * POST aulas
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store ({ request, response }) {
    const camposCadastro = Aula.getCamposCadastro();
    const dados = request.only(camposCadastro)
    return await Aula.create(dados)
  }

  /**
   * Display a single aula.
   * GET aulas/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show ({ params, request, response, view }) {
    return await Aula.findOrFail(params.id)
  }

  /**
   * Update aula details.
   * PUT or PATCH aulas/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update ({ params, request, response }) {
    const camposCadastro = Aula.getCamposCadastro()
    const dados = request.only(camposCadastro)

    const aula = await Aula.findOrFail(params.id)
    aula.merge(dados)
    aula.save();

    return aula;
  }

  /**
   * Delete a aula with id.
   * DELETE aulas/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy ({ params, request, response }) {
    const aula = await Aula.findOrFail(params.id)
    aula.delete()
  }
}

module.exports = AulaController
