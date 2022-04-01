var axios = require('axios')

const nasaClient = axios.create({
	baseURL: 'https://api.nasa.gov/neo/rest/v1/feed',
	timeout: 40000
})

module.exports = nasaClient
