const axios = require('axios')
var nodeConsole = require('console')
var myConsole = new nodeConsole.Console(process.stdout, process.stderr)
var $ = window.jQuery = require('jquery')

const btnAction = document.getElementById('button-call-gender-api')

btnAction.addEventListener('click', (event) => {
})

function callApi () {
  axios.get('http://192.168.1.16/ganesh/api/web/v2/user/genders')
    .then(res => {
      myConsole.log(res)
      if (res.data.errors) {
        res.data.errors.forEach(item => {
          document.getElementById('error-gender-api-demo').innerHTML = item.message
        })
      } else {
        document.getElementById('demo-gender-api-result').innerHTML = JSON.stringify(res.data, null, 4)
      }
    })
}
callApi()
