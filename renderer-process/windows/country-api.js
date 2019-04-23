const axios = require('axios')
var nodeConsole = require('console')
var myConsole = new nodeConsole.Console(process.stdout, process.stderr)
var $ = window.jQuery = require('jquery')

const btnAction = document.getElementById('button-call-country-api')

btnAction.addEventListener('click', (event) => {
  let str = ''
  document.getElementById('demo-country-api-result').innerHTML = ''
  str += ($('input[name=\'name\']').is(':checked')) ? 'name,' : ''
  str += ($('input[name=\'id\']').is(':checked')) ? 'id,' : ''
  str += ($('input[name=\'code\']').is(':checked')) ? 'code,' : ''
  let query = {
    query: 'query multiObject{countries{' + str + '}}'
  }
  let fullUrl = 'http://192.168.1.16/ganesh/api/web/v2/my' + '?query=' + query.query
  document.getElementById('demo-country-api-query').innerHTML = JSON.stringify(query, null, 4)
  document.getElementById('full-country-url').innerHTML = fullUrl
  callApi(query)
})

function callApi (queryParamString) {
  axios.get('http://192.168.1.16/ganesh/api/web/v2/my', {
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
