const express = require("express");
const cors = require("cors");
const path = require("path");


const {
  createPixCharge,
} = require("./charge/pixCreateImmediateCharge");

const app = express();

app.use(cors());
app.use(express.json());
//api that creates the charge
app.post("/api/v1/createCharge", async (request, response) => {
  const pixCharge = await createPixCharge(request.body);
  console.log(response.data)
  response.send({ ok:1 , pixCharge });
  
});


app.listen(3001, (error) => {
  if (error) {
    console.log("Servidor não iniciado");
    console.log(error);
  } else {
    console.log("Servidor rodando na porta 3001");
  }
});
