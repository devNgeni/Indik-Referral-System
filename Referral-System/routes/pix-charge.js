const express = require("express");
const axios = require("axios");

const createPixCharge = require("../src/pix/charge/pixCreateImmediateCharge");

const router = express.Router();

router.get("/createCharge", async (req, res) => {
  const pixCharge = await createPixCharge(req.body);
  return res.status(200).json({ success: true, pixCharge });
});

// sms verifications

router.post("/request-verification-code", async (req, res) => {
  try {
    const { phone } = req.body;

    const { data } = await axios.post(process.env.SEND_SMS_URI, {
      key: process.env.SMS_AUTH_TOKEN,
      number: phone,
      template: " InDik verification code: {999-99}",
      expire: 120,
    });

    console.log(data)
    return res.status(200).json({ success: true, message: data });
  } catch (error) {
    res.status(400).json({ success: false })
  }
});

/**
 * axios
  .post('https://api.smstoken.com.br/token/v1/verify', {
    
    key : "7ZWW8B0481L9HV9C0EBE9ZXRBC61VCHKCE0BCLIIZ6LAAYHQA127CC2JB3Y4NHOLGLLUHSVZKXOJXEILD898PJ3OIYF0374FS64RQCQVYQQARK5OC7CD1S9YK1VLZZFD",
    number :"254707145959",
    template : " InDik verification code: {999-99}",
    expire : 120
  
  })
  .then(res => {
    console.log(`statusCode: ${res.statusCode}`)
    console.log(res.data)
  })
  .catch(error => {
    console.error(error)
  })
 */
module.exports = router;
