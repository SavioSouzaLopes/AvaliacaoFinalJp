const { describe, expect, it } = require('@jest/globals');
const ServiceCliente = require("../src/services/pessoa");
const ServiceFilme = require("../src/services/pessoa");

describe('Testes Clientes', () => {

    beforeAll(async () => {
       this.transaction = await conexao.transaction()
    })
    afterAll(async () => {
       this.transaction.rollback()
    })
 
    const service = new ServiceCliente()
    
    it('Should add a Client', async () => {
        const cliente = await ServiceCliente.CreateCliente(nome, email, senha) ({
          nome: 'Enéas',
          email: 'eneas@teste.com',
          senha: 'Paris'
       }, this.transaction)
 
       expect(cliente.nome).toBe('Enéas');
       expect(cliente.email).toBe('eneas@teste.com');
       expect(cliente.senha).toBe('Paris');
    })

    it('Should get a Client', async () => {
        const clientes = await ServiceCliente.GetClientes(1, this.transaction)
  
        expect(cliente.id).toBe(1);
        expect(cliente.nome).toBe('Enéas');
        expect(cliente.email).toBe('eneas@teste.com');
        expect(cliente.senha).toBe('Paris');
     })
    
      it("Should update an Client", async () => {
        const cliente = await ServiceCliente.UpdateCliente(id, nome, email, senha)(
          this.USER_ID,
          "Enéas",
          "eneas@teste.com",
          "Paris"
        );

      });
    
      it("Should delete an Client", async () => {
        const id = req.params.id await ServiceCliente.DeleteCliente(id)

      });
});

describe('Testes Filmes', () => {

    beforeAll(async () => {
       this.transaction = await conexao.transaction()
    })
    afterAll(async () => {
       this.transaction.rollback()
    })
 
    const service = new ServiceFilme()
    
    it('Should add a Film', async () => {
        const filme = await ServiceFilme.CreateFilme(titulo, classificacaoIndicativa, diretor) ({
            titulo: 'O Avião',
            classificacaoIndicativa: 'Livre',
            diretor: 'Paris Paris'
       }, this.transaction)
 
       expect(filme.titulo).toBe('O Avião');
       expect(filme.classificacaoIndicativa).toBe('Livre');
       expect(filme.diretor).toBe('Paris Paris');
    })

    it('Should get a Film', async () => {
        const filmes = await ServiceFilme.GetFilmes(1, this.transaction)
  
        expect(filme.id).toBe(1);
        expect(filme.titulo).toBe('O Avião');
        expect(filme.classificacaoIndicativa).toBe('Livre');
        expect(filme.diretor).toBe('Paris Paris');
     })
    
      it("Should update an Film", async () => {
        const filme = await ServiceFilme.UpdateFilme(id, titulo, classificacaoIndicativa, diretor)(
          this.USER_ID,
          "O Avião",
          "Livre",
          "Paris Paris"
        );

      });
    
      it("Should delete an Film", async () => {
        const id = req.params.id await ServiceFilme.DeleteFilme(id)

      });
});