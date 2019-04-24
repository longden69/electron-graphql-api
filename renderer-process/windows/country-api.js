const axios = require('axios')
var nodeConsole = require('console')
var myConsole = new nodeConsole.Console(process.stdout, process.stderr)
var $ = window.jQuery = require('jquery')

const btnAction = document.getElementById('button-call-country-api')
const btnActionCustom = document.getElementById('button-call-custom-country-api')
let rootUrl = $('#root-url-input').val()

btnAction.addEventListener('click', (event) => {
  let str = ''
  document.getElementById('demo-country-api-result').innerHTML = ''
  str += ($('input[name=\'name\']').is(':checked')) ? 'name,' : ''
  str += ($('input[name=\'id\']').is(':checked')) ? 'id,' : ''
  str += ($('input[name=\'code\']').is(':checked')) ? 'code,' : ''
  let query = {
    query: 'query multiObject{countries{' + str + '}}'
  }
  let fullUrl = rootUrl + '?query=' + query.query
  document.getElementById('demo-country-api-query').innerHTML = JSON.stringify(query, null, 4)
  $('#full-country-url').val(fullUrl)
  callApi(fullUrl)
})

btnActionCustom.addEventListener('click', (event) => {
  callApi($('#full-country-url').val())
})

function callApi (queryParamString) {
  axios.get(queryParamString, {
    params: queryParamString
  })
    .then(res => {
      document.getElementById('demo-country-api-result').innerHTML = JSON.stringify(res.data, null, 4)
    })
}

// call first time
let paramsAll = {
  query: 'query multiObject{countries{id,name,code}}'
}
callApi(paramsAll)
document.getElementById('demo-country-api-query').innerHTML = paramsAll.query
