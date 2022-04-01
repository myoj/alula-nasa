const filterAsteroidLists = (
	asteroidList,
	maxDistance,
	units = 'kilometers'
) => {
	let validAsteroids = []

	asteroidList.forEach(asteroid => {
		const { name, close_approach_data } = asteroid
		if (close_approach_data.length === 1) {
			const { miss_distance } = close_approach_data[0]

			const distance = parseFloat(miss_distance[units])
			if (distance >= maxDistance && !validAsteroids.includes(name)) {
				validAsteroids.push(name)
			}
		}
	})

	return validAsteroids
}

module.exports = {
	filterAsteroidLists
}
