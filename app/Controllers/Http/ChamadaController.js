'use strict'

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

const Chamada = use('App/Models/Chamada')

/**
 * Resourceful controller for interacting with chamadas
 */
class ChamadaController {
  /**
   * Show a list of all chamadas.
   * GET chamadas
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index ({ request, response, view }) {
    return Chamada.all()
  }

  /**
   * Create/save a new chamada.
   * POST chamadas
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store ({ request, response }) {
    const camposCadastro = Chamada.getCamposCadastro();
    const dados = request.only(camposCadastro)
    return await Chamada.create(dados)
  }

  /**
   * Display a single chamada.
   * GET chamadas/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show ({ params, request, response, view }) {
    return await Chamada.findOrFail(params.id)
  }

  /**
   * Update chamada details.
   * PUT or PATCH chamadas/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update ({ params, request, response }) {
    const camposCadastro = Chamada.getCamposCadastro()
    const dados = request.only(camposCadastro)

    const chamada = await Chamada.findOrFail(params.id)
    chamada.merge(dados)
    chamada.save();

    return chamada;
  }

  /**
   * Delete a chamada with id.
   * DELETE chamadas/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy ({ params, request, response }) {
    const chamada = await Chamada.findOrFail(params.id)
    chamada.delete()
  }
}

module.exports = ChamadaController
