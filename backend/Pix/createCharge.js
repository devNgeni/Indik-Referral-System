const express = require("express");
const cors = require("cors");
const path = require("path");



const createPixCharge = require("./charge/pixCreateImmediateCharge");
const { QrCode } = require("./location/pixGenerateQRCode");

const app = express();

app.use(cors());
app.use(express.json());

// api that creates the charge
app.get("/api/v1/createCharge", async (request, response) => {
  console.log(`body:`, request.body);
  const pixCharge = await createPixCharge(request.body)
  
  return response.status(200).json({ success: true,  pixCharge });
});


app.listen(3001, (error) => {
  if (error) {
    console.log("Servidor não iniciado");
    console.log(error);
  } else {
    console.log("Servidor rodando na porta 3001");
  }
});
