'use strict'

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

const TurmaAluno = use('App/Models/TurmaAluno')

/**
 * Resourceful controller for interacting with turmaAlunos
 */
class TurmaAlunoController {
  /**
   * Show a list of all turmaAlunos.
   * GET turmaAlunos
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index ({ request, response, view }) {
    return TurmaAluno.all()
  }

  /**
   * Create/save a new turmaAluno.
   * POST turmaAlunos
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store ({ request, response }) {
    const camposCadastro = TurmaAluno.getCamposCadastro();
    const dados = request.only(camposCadastro)
    return await TurmaAluno.create(dados)
  }

  /**
   * Display a single turmaAluno.
   * GET turmaAlunos/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show ({ params, request, response, view }) {
    return await TurmaAluno.findOrFail(params.id)
  }

  /**
   * Update turmaAluno details.
   * PUT or PATCH turmaAlunos/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update ({ params, request, response }) {
    const camposCadastro = TurmaAluno.getCamposCadastro()
    const dados = request.only(camposCadastro)

    const turmaAluno = await TurmaAluno.findOrFail(params.id)
    turmaAluno.merge(dados)
    turmaAluno.save();

    return turmaAluno;
  }

  /**
   * Delete a turmaAluno with id.
   * DELETE turmaAlunos/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy ({ params, request, response }) {
    const turmaAluno = await TurmaAluno.findOrFail(params.id)
    turmaAluno.delete()
  }
}

module.exports = TurmaAlunoController
