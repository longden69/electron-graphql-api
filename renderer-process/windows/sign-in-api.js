const axios = require('axios')
var nodeConsole = require('console')
var myConsole = new nodeConsole.Console(process.stdout, process.stderr)
var $ = window.jQuery = require('jquery')

const btnAction = document.getElementById('button-call-sign-in-api')

btnAction.addEventListener('click', (event) => {
  let email = $('input[name=\'si-email\']').val()
  let password = $('input[name=\'si-password\']').val()
  let querry = 'mutation login{login(email: "' + email + '", password: "' + password + '") { id,token email}}'
  let fullUrl = 'http://192.168.1.16/ganesh/api/web/v2/my?query=mutation login{login(email: "' + email + '", password: "' + password + '") { id,token email}}'
  document.getElementById('full-sign-in-url').innerHTML = fullUrl
  document.getElementById('demo-sign-in-api-query').innerHTML = querry
  callApi(fullUrl)
})

function callApi (urlString) {
  axios.get(urlString)
    .then(res => {
      document.getElementById('demo-sign-in-api-result').innerHTML = JSON.stringify(res.data, null, 4)
    })
}

// call first time
let paramsAll = 'http://192.168.1.16/ganesh/api/web/v2/my?query=mutation login{login(email: "dao.hunter@gmail.com", password: "123456") { id,token email}}'
callApi(paramsAll)
document.getElementById('full-sign-in-url').innerHTML = paramsAll
document.getElementById('demo-sign-in-api-query').innerHTML = 'mutation login{login(email: "dao.hunter@gmail.com", password: "123456") { id,token email}}'
