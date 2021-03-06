"use strict";

let Gerencianet = require("gn-api-sdk-node");
let options = require("../credentials");

let QrCode = require("../location/pixGenerateQRCode");
var QRcode = require('qrcode');

const createPixCharge = async() => {
  let gerencianet = new Gerencianet(options);

  let chargeData = {
    calendario: {
      expiracao: 3600,
    },
    devedor: {
      cnpj: "42056686000182",
      nome: "Vinicius Kfuri",
    },
    valor: {
      original: "50.00",
    },
    chave: "57a06fcf-34fe-4aa1-be15-f4ac72778485", // Informe sua chave Pix cadastrada na Gerencianet
    infoAdicionais: [
      {
        nome: "Pagamento em",
        valor: "INDIk",
      },
      {
        nome: "Pedido",
        valor: "NUMERO DO PEDIDO DO CLIENTE",
      },
    ],
  };

  return await gerencianet
    .pixCreateImmediateCharge([], chargeData)

    .then(async(resposta) => {
      console.log(resposta);
      let params = {
        id: resposta.loc.id,
      };

      return await gerencianet
        .pixGenerateQRCode(params)
        .then((qrData) => {
          console.log("QR Data: ", qrData);
          return qrData
        })
        .catch((error) => {
          console.log("Error", error);
        });
    })
    .catch((error) => {
      console.log(error);
    });
};

module.exports = createPixCharge;
