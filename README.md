## FinApi - Financeira

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

## Instruções

    URL para acessar as routes: http://localhost:3333

    route para criar uma conta: POST - http://localhost:3333/account
        Ex.: Os dados devem ser passando via JSON no body
        body
        {
            "name": "João",
            "cpf": "333.333.333.33"
        }

---

    route para consultar o statement do cliente: GET - http://localhost:3333/statement
        deve passar o cpf pelo header
        Ex.:
        header{
            cpf: "333.333.333.33"
        }

---

    route para realizar um deposito na conta: POST - http://localhost:3333/deposit
        deve passar o cpf pelo header
        Ex.:
        header
        {
            cpf: "333.333.333.33"
        }

        Ex.: Os dados devem ser passando via JSON no body
        body
        {
            "description": "deposito joao",
            "amount": 1203.00
        }

---

    route para realizar um saque na conta: POST - http://localhost:3333/withdraw
        deve passar o cpf pelo header
        Ex.:
        header
        {
            cpf: "333.333.333.33"
        }

        Ex.: Os dados devem ser passando via JSON no body
        body
        {
            "amount": 120.00
        }

---

    route para visualizar o extrato bancário do cliente por data: GET - http://localhost:3333/statement/date
        deve passar o cpf pelo header
        Ex.:
        header
        {
            cpf: "333.333.333.33"
        }

---

    route para visualizar um cliente: GET - http://localhost:3333/account
        deve passar o cpf pelo header
        Ex.:
        header
        {
            cpf: "333.333.333.33"
        }

---

    route para atualizar o nome do cliente: PUT - http://localhost:3333/account
        deve passar o cpf pelo header
        Ex.:
        header
        {
            cpf: "333.333.333.33"
        }

        Ex.: Os dados devem ser passando via JSON no body
        body
        {
            "name": "victor"
        }

---

    route para remove um cliente: DELETE - http://localhost:3333/account
        deve passar o cpf pelo header
        Ex.:
        header
        {
            cpf: "333.333.333.33"
        }

---

    route para consultar o balance do cliente: GET - http://localhost:3333/balance
        deve passar o cpf pelo header
        Ex.:
        header
        {
            cpf: "333.333.333.33"
        }

### Requisitos

- [ ] Deve ser possivel criar uma conta
- [ ] Deve ser possivel buscar o extrato bancário do cliente
- [ ] Deve ser possivel realizar um depósito
- [ ] Deve ser possivel realizar um saque
- [ ] Deve ser possivel busca o extrato bancário do cliente por data
- [ ] Deve ser possivel atualizar dados da conta do cliente
- [ ] Deve ser possivel obter dados da conta do cliente
- [ ] Deve ser possivel deletar uma conta
- [ ] Deve ser possivel retornar o balance

## Regras de negócio

- [ ] Não deve ser possivel cadastrar uma conta com CPF já existente
- [ ] Não deve ser possivel fazer depósito em uma conta não existente
- [ ] Não deve ser possivel buscar extrato em uma conta não existente
- [ ] Não deve ser possivel fazer saque em ua conta não existente
- [ ] Não deve ser possivel excluir uma conta não existente
- [ ] Não deve ser possivel fazer saque quando o saldo for insuficiente
- [ ] Não deve ser possivel buscar o balance em uma conta não existente
