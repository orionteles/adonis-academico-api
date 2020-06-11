'use strict'

const User = use('App/Models/User')

class UserController {

    async store({request}){
        const camposCadastro = ['username', 'email', 'password']
        const dados = request.only(camposCadastro)

        return await User.create(dados);
    }

    async token({request, auth}){

        const { email, password } = request.all()
        
        return await auth.attempt(email, password)
    }

}

module.exports = UserController
