'use strict'

module.exports = options => {
  let params = Object.assign(
    { round: Math.floor, minutes: 5, epoch: true, date: Date.now() },
    options || {}
  )

  const roundType = typeof params.round
  if (roundType !== 'function') {
    throw new Error(
      'Specified option "round" must be a function; found ' + roundType
    )
  }

  if (!Number.isInteger(params.minutes) || params.minutes < 0) {
    throw new Error('Specified option "minutes" must be a valid integer')
  }

  if (params.date instanceof Date) {
    params.date = params.date.getTime()
  } else if (!Number.isInteger(params.date) || params.date < 0) {
    throw new Error('Specified option "date" must be a valid epoch or Date')
  }

  const ms = 1000 * 60 * params.minutes
  const date = new Date(params.round(params.date / ms) * ms)
  return !!params.epoch ? Math.round(date.getTime() / 1000) : date
}
