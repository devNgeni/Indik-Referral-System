'use strict';

let Gerencianet = require('gn-api-sdk-node');
let options = require('../credentials');

const QrCode = async (locId) => {
let gerencianet = new Gerencianet(options);

let params = {
    id: locId 
}


gerencianet.pixGenerateQRCode(params)
.then((resposta) => {
        console.log(resposta);
    })
    .catch((error) => {
        console.log(error);
    })
}
module.exports = {QrCode};
