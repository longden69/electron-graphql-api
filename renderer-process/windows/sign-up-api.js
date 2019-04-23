const axios = require('axios')
var nodeConsole = require('console')
var myConsole = new nodeConsole.Console(process.stdout, process.stderr)
var $ = window.jQuery = require('jquery')

const btnAction = document.getElementById('button-call-sign-up-api')

btnAction.addEventListener('click', (event) => {
  let email = $('input[name=\'su-email\']').val()
  let password = $('input[name=\'su-password\']').val()
  let firstName = $('input[name=\'su-first-name\']').val()
  let surname = $('input[name=\'su-surname\']').val()
  let gender = parseInt($('select[name=\'su-gender\']').val(), 10)
  let country = $('input[name=\'su-country\'] option:selected').val()
  let querry = 'mutation signUp{signUp(email: "' + email + '", password: "' + password + '",first_name:"' + firstName + '",surname:"' + surname + '",gender:' + gender + ',country:"' + country + '") { id,token email}}'
  let fullUrl = 'http://192.168.1.16/ganesh/api/web/v2/my?query=mutation signUp{signUp(email: "' + email + '", password: "' + password + '",first_name:"' + firstName + '",surname:"' + surname + '",gender:' + gender + ',country:"' + country + '") { id,token email}}'
  document.getElementById('full-sign-up-url').innerHTML = fullUrl
  document.getElementById('demo-sign-up-api-query').innerHTML = querry
  callApi(fullUrl)
})

function callApi (urlString) {
  axios.get(urlString)
    .then(res => {
      document.getElementById('demo-sign-up-api-result').innerHTML = JSON.stringify(res.data, null, 4)
    })
}

// call first time
let paramsAll = 'http://192.168.1.16/ganesh/api/web/v2/my?query=mutation signUp{signUp(email: "dao.hunter@gmail.com", password: "123456",first_name:"Bui",surname:"Dao",gender:1,country:"12343") { id,token email}}'
callApi(paramsAll)
document.getElementById('full-sign-up-url').innerHTML = paramsAll
document.getElementById('demo-sign-up-api-query').innerHTML = 'mutation signUp{signUp(email: "dao.hunter@gmail.com", password: "123456",first_name:"Bui",surname:"Dao",gender:1,country:"12343") { id,token email}}'
