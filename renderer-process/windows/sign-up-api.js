const axios = require('axios')
var $ = window.jQuery = require('jquery')
var nodeConsole = require('console')
var myConsole = new nodeConsole.Console(process.stdout, process.stderr)

let rootUrl = $('#root-url-input').val()

const btnAction = document.getElementById('button-call-sign-up-api')
const btnActionCustom = document.getElementById('button-call-sign-up-custom-api')

btnAction.addEventListener('click', (event) => {
  rootUrl = $('#root-url-input').val()

  let email = $('input[name=\'su-email\']').val()
  let password = $('input[name=\'su-password\']').val()
  let firstName = $('input[name=\'su-first-name\']').val()
  let surname = $('input[name=\'su-surname\']').val()
  let gender = parseInt($('select[name=\'su-gender\']').val(), 10)
  let country = $('input[name=\'su-country\'] option:selected').val()

  let query = 'mutation signUp{signUp(email: "' + email + '", password: "' + password + '",first_name:"' + firstName + '",surname:"' + surname + '",gender:' + gender + ',country:"' + country + '") { id,token email}}'
  let fullUrl = rootUrl + '?query=mutation signUp{signUp(email: "' + email + '", password: "' + password + '",first_name:"' + firstName + '",surname:"' + surname + '",gender:' + gender + ',country:"' + country + '") { id,token email}}'
  $('#full-sign-up-url-input').val(fullUrl)
  document.getElementById('demo-sign-up-api-query').innerHTML = query
  callApi(fullUrl)
})

btnActionCustom.addEventListener('click', (event) => {
  callApi($('#full-sign-up-url-input').val())
})

function callApi (urlString) {
  axios.get(urlString)
    .then(res => {
      document.getElementById('demo-sign-up-api-result').innerHTML = JSON.stringify(res.data, null, 4)
    })
}

// call first time
let paramsAll = rootUrl + '?query=mutation signUp{signUp(email: "dao.hunter@gmail.com", password: "123456",first_name:"Bui",surname:"Dao",gender:1,country:"12343") { id,token email}}'
callApi(paramsAll)
$('#full-sign-up-url').val(paramsAll)
$('#full-sign-up-url-input').val(paramsAll)
document.getElementById('demo-sign-up-api-query').innerHTML = 'mutation signUp{signUp(email: "dao.hunter@gmail.com", password: "123456",first_name:"Bui",surname:"Dao",gender:1,country:"12343") { id,token email}}'
