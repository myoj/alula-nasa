var { retrieveAsteroids } = require('../services/nasa')
var { filterAsteroidLists } = require('../util/filters')
var { validateParams } = require('../util/validators')
var express = require('express')

var router = express.Router()

/* GET asteroids. */
router.get('/asteroids', async (req, res, next) => {
	const { startDate, endDate, distance, units } = req.query

	const paramErrors = validateParams(startDate, endDate, distance, units)

	if (paramErrors.length !== 0) {
		res.status(400)
		res.send(JSON.stringify({ errors: paramErrors }))
	} else {
		try {
			const resp = await retrieveAsteroids(startDate, endDate)
			const { near_earth_objects } = resp
			const asteroidList = Object.values(near_earth_objects).flat()
			const filteredList = filterAsteroidLists(asteroidList, distance, units)
			res.send(JSON.stringify({ asteroids: filteredList }))
		} catch (e) {
			res.status(500)
			res.send(JSON.stringify({ errors: ['Unable to retrieve data'] }))
		}
	}
})

module.exports = router
