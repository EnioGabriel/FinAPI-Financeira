// Importando libs
const express = require("express");
const { v4: uuidV4 } = require("uuid");

// Inicializando o express
const app = express();

// Habilita o uso de objetos .json
app.use(express.json());

// Array para armazenar dados do cliente
const costumers = [];

// Cadastro do cliente
app.post("/account", (req, resp) => {
  // Desestruturando e pegando as info (JSON) do corpo da req
  const { cpf, name } = req.body;

  // Varrendo array e verificando se contem cpf repetido
  // some => retorna verdadeiro ou falso dependendo da condiçao passada para ele
  const costumerAlreadyExist = costumers.some((costumer) => {
    return costumer.cpf === cpf;
  });

  // Retornando erro caso o CPF já esteja cadastrado
  if (costumerAlreadyExist) {
    return resp.status(400).json({ error: "esse CPF já está em uso!" });
  }

  // Inserindo dados no array
  costumers.push({
    id: uuidV4(),
    cpf,
    name,
    statement: [],
  });

  // Enviando a respoosta para o client-server
  return resp.status(201).send("Cadastro criado!");
});

// Atribuindo porta para conexao e escutando
app.listen(3333, () => {
  console.log("🚀️ Server started");
});
