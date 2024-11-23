const ServiceCliente = require('../services/cliente')
const ServiceFilme = require('../services/filme')

class ControllerCliente {
    async GetSession(req, res) {
        try {
            const id = req.session.id
            const cliente = await ServiceCliente.GetClienteById(id)
            res.send({ msg: cliente })
        } catch (error) {
            res.status(500).send({ msg: error.message })
        }
    }
    async GetClientes(req, res) {
        try {
            const clientes = await ServiceCliente.GetClientes()
            res.send({ msg: clientes })
        } catch (error) {
            res.status(500).send({ msg: error.message })
        }
    }
    async CreateCliente(req,res){
        try {
            const { nome, email, senha } = req.body

            const cliente = await ServiceCliente
                .CreateCliente(nome, email, senha)
            res.send({ msg: cliente })
        } catch (error) {
            res.status(500).send({ msg: error.message })
        }
    }
    async UpdateCliente(req,res){
        try {
            const id = req.params.id
            const nome = req.body.nome
            const email = req.body.email
            const senha = req.body.senha

            const cliente = await ServiceCliente
                .UpdateCliente(id, nome, email, senha)

            res.send({ msg: cliente })
        } catch (error) {
            res.status(500).send({ msg: error.message })
        }
    }
    async DeleteCliente(req,res){
        try {
            const id = req.params.id
            await ServiceCliente.DeleteCliente(id)
            res.status(204).send()
        } catch (error) {
            res.status(500).send({ msg: error.message })
        }
    }

    async Login(req, res) {
        try {
            const { email, senha } = req.body
            const token = await ServiceCliente.Login(email, senha)
            res.status(200).send({ token })
        } catch (error) {
            res.status(500).send({ msg: error.message })
        }
    }
}

    class ControllerFilme {

        async GetFilmes(req, res) {
            try {
                const filmes = await ServiceFilme.GetFilmes()
                res.send({ msg: filmes })
            } catch (error) {
                res.status(500).send({ msg: error.message })
            }
        }
        async CreateFilme(req,res){
            try {
                const { titulo, classificacaoIndicativa, diretor } = req.body
    
                const filme = await ServiceFilme
                    .CreateFilme(titulo, classificacaoIndicativa, diretor)
                res.send({ msg: filme })
            } catch (error) {
                res.status(500).send({ msg: error.message })
            }
        }
        async UpdateFilme(req,res){
            try {
                const id = req.params.id
                const titulo = req.body.titulo
                const classificacaoIndicativa = req.body.classificacaoIndicativa
                const diretor = req.body.diretor
    
                const filme = await ServiceFilme
                    .UpdateFilme(id, titulo, classificacaoIndicativa, diretor)
    
                res.send({ msg: filme })
            } catch (error) {
                res.status(500).send({ msg: error.message })
            }
        }
        async DeleteFilme(req,res){
            try {
                const id = req.params.id
                await ServiceFilme.DeleteFilme(id)
                res.status(204).send()
            } catch (error) {
                res.status(500).send({ msg: error.message })
            }
        }
}

module.exports = new ControllerCliente()
module.exports = new ControllerFilme()