'use strict'

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Semestre = use('App/Models/Semestre')

/**
 * Resourceful controller for interacting with semestres
 */
class SemestreController {
  /**
   * Show a list of all semestres.
   * GET semestres
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index ({ request, response, view }) {
    return Semestre.all();
  }

  /**
   * Create/save a new semestre.
   * POST semestres
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store ({ request, response }) {
    const dados = request.only(Semestre.getCamposCadastro())
    return Semestre.create(dados);
  }

  /**
   * Display a single semestre.
   * GET semestres/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show ({ params, request, response, view }) {
    return Semestre.query()
                   .where('id', params.id)
                   .with('turmas')
                   .first()
  }

  /**
   * Update semestre details.
   * PUT or PATCH semestres/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update ({ params, request, response }) {
    const dados = request.only(Semestre.getCamposCadastro())

    const semestre = await Semestre.findOrFail(params.id)
    semestre.merge(dados)
    semestre.save()

    return semestre;
  }

  /**
   * Delete a semestre with id.
   * DELETE semestres/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy ({ params, request, response }) {
    const semestre = await Semestre.findOrFail(params.id)
    semestre.delete()
  }
}

module.exports = SemestreController
