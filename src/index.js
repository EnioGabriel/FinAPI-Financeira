// Importando libs
const express = require("express");
const { v4: uuidV4 } = require("uuid");

// Inicializando o express
const app = express();

// Habilita o uso de objetos .json
app.use(express.json());

// Array para armazenar dados do cliente
const customers = [];

// Middleware
const verifyIfExistsAccountCPF = (req, res, next) => {
  // capturando CPF contido no header da request
  const { cpf } = req.headers;

  // Percorrendo Array de clientes e armazenando cada cliente em uma const
  const customer = customers.find((customer) => {
    return customer.cpf === Number(cpf);
  });

  // Se o cliente nao for encontrado
  if (!customer) {
    return res.status(400).json({ error: "Cliente não encontrado" });
  }

  // Repassando um valor que pode ser usado em todas as rotas com o middleware
  req.customer = customer;

  // next => definindo que o middleware pressiga, pois nao tem nenhum erro
  return next();
};

// retorna o valor total disponivel na conta
const getBalance = (statement) => {
  return statement.reduce((acc, operation) => {
    console.log(operation);
    // Verifica se foi depósito e retorna o valor que tem na conta
    if (operation.type === "credit") {
      return acc + operation.amount;
    }

    // Caso contrário, foi feito um saque e o valor é retirado da conta
    return acc - operation.amount;
  }, 0); // Setando o acumulador como padra0 inicial de zero
};

// Cadastro do cliente
app.post("/account", (req, resp) => {
  // Desestruturando e pegando as info (JSON) do corpo da req
  const { cpf, name } = req.body;

  // Varrendo array e verificando se contem cpf repetido
  // some => retorna verdadeiro ou falso dependendo da condiçao passada para ele
  const customerAlreadyExist = customers.some((costumer) => {
    return costumer.cpf === cpf;
  });

  // Retornando erro caso o CPF já esteja cadastrado
  if (customerAlreadyExist) {
    return resp.status(400).json({ error: "esse CPF já está em uso!" });
  }

  // Inserindo dados no array
  customers.push({
    id: uuidV4(),
    cpf,
    name,
    statement: [],
  });

  // Enviando a respoosta para o client-server
  return resp.status(201).send("Cadastro criado!");
});

// aplica middleware em todas as rotas abaixo de onde foi declarado
// app.use(verifyIfExistsAccountCPF);

// Listando extrato
app.get("/statement", verifyIfExistsAccountCPF, (req, res) => {
  // Capturando o costumer do middleware
  const { customer } = req;

  // retornando cada cliente
  return res.json(customer.statement);
});

// Inserindo depósito
app.post("/deposit", verifyIfExistsAccountCPF, (req, res) => {
  const { description, amount } = req.body;

  // Capturando cliente do middleware
  const { customer } = req;

  // Criando objeto com os dados da operação de depósito
  const statementOperation = {
    description,
    amount,
    created_at: new Date(),
    type: "credit",
  };

  // Setando dados da operação no statement do cliente
  customer.statement.push(statementOperation);

  return res.status(201).send();
});

// Realizando saque
app.get("/withdraw", verifyIfExistsAccountCPF, (req, res) => {
  const { amount } = req.body;
  // Pegando cliente de dentro do middleware
  const { customer } = req;

  // Pega o valor que vc possui disponivel na conta
  const balance = getBalance(customer.statement);

  // Rejeita caso o pedido de saque seja maior que o valor disponivel na conta
  if (balance < amount) {
    return res.status(400).json({ error: "Saldo insuficiente" });
  }

  const statementOperation = {
    amount,
    created_at: new Date(),
    type: "debit",
  };

  customer.statement.push(statementOperation);

  return res.status(201).send();
});

// Atribuindo porta para conexao e escutando
app.listen(3333, () => {
  console.log("🚀️ Server started");
});
