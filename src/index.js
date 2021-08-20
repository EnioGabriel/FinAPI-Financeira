const express = require("express");
const { v4: uuidV4 } = require("uuid");

const app = express();

app.use(express.json());

const costumers = [];

app.post("/account", (req, resp) => {
  const id = uuidV4();
  const { cpf, name } = req.body;

  costumers.push({
    id,
    cpf,
    name,
    statement: [],
  });

  return resp.status(201).send();
});

app.listen(3000, () => {
  console.log("🚀️ Server startered");
});
