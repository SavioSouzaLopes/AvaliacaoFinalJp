const ModelCliente = require('../models/cliente')
const ModelFilme = require('../models/filme')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const SALT = 12

class ServiceCliente {
    async GetClienteById(id) {
        return ModelCliente.findByPk(id)
    }
    async GetClientes() {
        return ModelCliente.findAll()
    }
    async CreateCliente(nome, email, senha) {
        if(!nome || !email || !senha){
            throw new Error("Favor preencher todos os dados!")
        }
        const hashSenha = await bcrypt.hash(senha, SALT)
        return ModelCliente.create({ nome, senha: hashSenha, email })
    }
    async UpdateCliente(id, nome, email, senha) {
        if(!id) {
            throw new Error("Favor informar o Id")
        }
        const cliente = await ModelCliente.findByPk(id)
        if(!cliente) {
            throw new Error("Cliente não encontrado")
        }
        cliente.nome = nome || cliente.nome
        cliente.senha = senha
            ? await bcrypt.hash(senha, SALT)
            : cliente.senha
        cliente.email = email || cliente.email

        cliente.save()
        return cliente

    }
    async DeleteCliente(id) {
        if(!id) {
            throw new Error("Favor informar o Id")
        }
        const cliente = await ModelCliente.findByPk(id)
        if(!cliente) {
            throw new Error("Cliente não encontrado")
        }
        return cliente.destroy()

    }

    async Login(email, senha) {
        if(!email || !senha) {
            throw new Error("Email ou senha inválido!")
        }

        const cliente = await ModelCliente.findOne({ where: { email } })

        if(!cliente) {
            throw new Error("Email ou senha inválido!")
        }

        const senhaValida = bcrypt.compare(senha, cliente.senha)

        if(!senhaValida) {
            throw new Error("Email ou senha inválido!")
        }

        return jwt.sign({ id: cliente.id }, 'segredo', { expiresIn: 60 * 60 })
    }
}
    class ServiceFilme {

    async GetFilmeById(id) {
        return ModelFilme.findByPk(id)
    }
    async GetFilmes() {
        return ModelFilme.findAll()
    }
    async CreateFilme(titulo, classificacaoIndicativa, diretor) {
        if(!titulo || !classificacaoIndicativa || !diretor){
            throw new Error("Favor preencher todos os dados!")
        }
        return ModelFilme.create({ titulo, classificacaoIndicativa, diretor })
    }
    async UpdateFilme(id, titulo, diretor, classificacaoIndicativa) {
        if(!id) {
            throw new Error("Favor informar o Id")
        }
        const filme = await ModelFilme.findByPk(id)
        if(!filme) {
            throw new Error("Filme não encontrado")
        }
        filme.titulo = titulo || filme.titulo
        filme.diretor = diretor || filme.diretor
        filme.classificacaoIndicativa = classificacaoIndicativa || filme.classificacaoIndicativa

        filme.save()
        return filme

    }
    async DeleteFilme(id) {
        if(!id) {
            throw new Error("Favor informar o Id")
        }
        const filme = await ModelFilme.findByPk(id)
        if(!filme) {
            throw new Error("Filmes não encontrado")
        }
        return filme.destroy()

    }
}
module.exports = new ServiceCliente()
module.exports = new ServiceFilme()