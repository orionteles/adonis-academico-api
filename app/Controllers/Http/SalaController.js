'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Sala = use('App/Models/Sala')

class SalaController {

    async index(){
        return await Sala.all()
    }

    async store({request}){
        const dados = request.only(Sala.getCamposCadastro())
        return await Sala.create(dados)
    }
    
    async show({params}){
        return await Sala.query()
                         .where('id', params.id)
                         .with('turmas')
                         .first()
    }    
    
    async update({params, request}){
        const dados = request.only(Sala.getCamposCadastro())

        const sala = await Sala.findOrFail(params.id)
        sala.merge(dados)
        await sala.save();

        return sala
    }    
    
    async destroy({params}){
        const sala = await Sala.findOrFail(params.id)
        sala.delete()
    }    
}

module.exports = SalaController
