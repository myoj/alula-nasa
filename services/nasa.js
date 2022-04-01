var client = require('../http/nasaClient')
var { NASA_API_KEY } = require('../consts/consts')

// Retrieves all asteroids within req
const retrieveAsteroids = async (startDate, endDate) => {
	const { data } = await client.get('/', {
		params: {
			start_date: startDate,
			end_date: endDate,
			api_key: NASA_API_KEY
		}
	})

	return data
}

module.exports = {
	retrieveAsteroids
}
