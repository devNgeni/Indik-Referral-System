const axios = require('axios')

axios
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