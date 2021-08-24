## FinAPI - Financeira

<p align="center"> 
API financeira utilizando o padrão de arquitetura REST.
</p>

---

## Pré-requisitos

    Ter instalado o node e yarn em sua máquina.

---

## Executando o Projeto:

#### Clonando o projeto

```sh
$ git clone https://github.com/EnioGabriel/FinAPI-Financeira.git
$ cd FinAPI-Financeira
```

#### Rodando o back-end

```sh
  # Instalar as dependências:
  $ yarn

  # Rodar a aplicação
  yarn dev
```

---

## Instruções:

    Requisições feitas via insomnia

    URL para acessar as rotas: http://localhost:3333

    Rota para criar uma conta: POST - http://localhost:3333/account
        Os dados devem ser passado via JSON no body.
        Ex.:
        body
        {
            "name": "Fulano de tal",
            "cpf": "111.111.111.11"
        }

---

## Importante:

    A partir desse ponto, todas as rotas devem conter o middleware de CPF na requisição via header.

    Ex.:
        header{
            cpf: "111.111.111.11"
        }

---

    Rota para consultar o statement do cliente: GET - http://localhost:3333/statement

---

    Rota para realizar um depósito na conta: POST - http://localhost:3333/deposit

        Os dados devem ser passados via JSON no body.
        Ex.:
        body
        {
            "description": "depósito joão",
            "amount": 3000.00
        }

---

    Rota para realizar um saque na conta: POST - http://localhost:3333/withdraw

        Os dados devem ser passados via JSON no body.
        Ex.:
        body
        {
            "amount": 300.00
        }

---

    Rota para visualizar o extrato bancário do cliente por data: GET - http://localhost:3333/statement/date

---

    Rota para visualizar um cliente: GET - http://localhost:3333/account

---

    Rota para atualizar o nome do cliente: PUT - http://localhost:3333/account

        Ex.: Os dados devem ser passados via JSON no body
        body
        {
            "name": "victor"
        }

---

    Rota para remove um cliente: DELETE - http://localhost:3333/account

---

    Rota para consultar o balance do cliente: GET - http://localhost:3333/balance

### Requisitos:

- [x] Deve ser possivel criar uma conta
- [x] Deve ser possivel buscar o extrato bancário do cliente
- [x] Deve ser possivel realizar um depósito
- [x] Deve ser possivel realizar um saque
- [ ] Deve ser possivel buscar o extrato bancário do cliente por data
- [ ] Deve ser possivel atualizar dados da conta do cliente
- [ ] Deve ser possivel obter dados da conta do cliente
- [ ] Deve ser possivel deletar uma conta
- [ ] Deve ser possivel retornar o balance

## Regras de negócio

- [x] Não deve ser possivel cadastrar uma conta com CPF já existente
- [x] Não deve ser possivel fazer depósito em uma conta não existente
- [x] Não deve ser possivel buscar extrato em uma conta não existente
- [x] Não deve ser possivel fazer saque em uma conta não existente
- [x] Não deve ser possivel fazer saque quando o saldo for insuficiente
- [ ] Não deve ser possivel excluir uma conta não existente
- [ ] Não deve ser possivel buscar o balance em uma conta não existente
