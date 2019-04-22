const axios = require('axios')
var nodeConsole = require('console')
var myConsole = new nodeConsole.Console(process.stdout, process.stderr)

const newWindowBtn = document.getElementById('button-api')

newWindowBtn.addEventListener('click', (event) => {
  callApi()
})
// const query = {
//   query: `
//       query hello {
//         hello
//         }
//       `
// }
const query = {
  query: `
      query user{user(id:"2") {email,token}}
      `
}

function callApi () {
  // axios.get('https://min-api.cryptocompare.com/data/pricemulti?fsyms=BTC&tsyms=USD')
  // axios.get('http://192.168.1.16/ganesh/api/web/v2/my?query=query hello{hello}')
  axios.get('http://192.168.1.16/ganesh/api/web/v2/my/', {
    params: query
  })
    .then(res => {
      if (res.data.errors) {
        res.data.errors.forEach(item => {
          document.getElementById('error-api-demo').innerHTML = item.message
        })
      } else {
        myConsole.log(res)
        // document.getElementById('demo-api-result').innerHTML = res.data.data.hello
        document.getElementById('demo-api-result').innerHTML = JSON.stringify(res.data.data)
      }
    })
}
