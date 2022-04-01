const VALID_UNITS = ['astronomical', 'lunar', 'kilometers', 'miles']
const DATE_REGEX = /^\d{4}-(0[1-9]|1[0-2])-(0[1-9]|[12][0-9]|3[01])$/

const validateParams = (startDate, endDate, distance, units) => {
	let errors = []
	if (!DATE_REGEX.test(startDate) || !DATE_REGEX.test(endDate)) {
		errors.push('Invalid date format, please use YYYY-MM-DD')
	}
	if (isNaN(distance)) {
		errors.push('Invalid distance provided')
	}
	if (units && !VALID_UNITS.includes(units)) {
		errors.push('Invalid unit provided')
	}

	return errors
}

module.exports = {
	validateParams
}
