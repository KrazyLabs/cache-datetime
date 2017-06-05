'use strict'

const expect = require('chai').expect
const cacheDatetime = require('../index.js')
const fixedDateMs = 1496679595983 // epoch (MS) Monday, June 5, 2017 4:19:55 PM

describe('index.js export', () => {
  it('should validate "round"', () => {
    expect(() => cacheDatetime({ round: 0 })).to.throw(/function/)
  })

  it('should validate "minutes" as a number', () => {
    expect(() => cacheDatetime({ minutes: 'a' })).to.throw(/integer/)
  })

  it('should validate "minutes" as a positive number', () => {
    expect(() => cacheDatetime({ minutes: -1 })).to.throw(/integer/)
  })

  it('should validate "date" as Date object', () => {
    expect(() => cacheDatetime({ date: new Date() })).not.to.throw()
  })

  it('should validate "date" as datetime', () => {
    expect(() => cacheDatetime({ date: Date.now() })).not.to.throw()
  })

  it('should validate "date"', () => {
    expect(() => cacheDatetime({ date: 'date' })).to.throw(/date/)
  })

  it('should round down current time to 5 minutes by default', () => {
    const roundedDownDate = cacheDatetime()
    expect(roundedDownDate < Date.now() / 1000).to.be.true
    expect(roundedDownDate % 100).to.equal(0)
  })

  it('should round a date down 5 minutes by default', () => {
    const roundedDownDate = cacheDatetime({ date: fixedDateMs })
    const roundedTo4_15_00 = 1496679300 // epoch (seconds) Monday, June 5, 2017 4:15:00 PM
    expect(roundedDownDate).to.equal(roundedTo4_15_00)
  })

  it('should round a date down 10 minutes', () => {
    const roundedDownDate = cacheDatetime({ date: fixedDateMs, minutes: 10 })
    const roundedTo4_10_00 = 1496679000 // epoch (seconds) Monday, June 5, 2017 4:10:00 PM
    expect(roundedDownDate).to.equal(roundedTo4_10_00)
  })

  it('should round a date down 8 minutes (divisible by 8)', () => {
    const roundedDownDate = cacheDatetime({ date: fixedDateMs, minutes: 8 })
    const roundedTo4_16_00 = 1496679360 // epoch (seconds) Monday, June 5, 2017 4:16:00 PM
    expect(roundedDownDate).to.equal(roundedTo4_16_00)
  })

  it('should round a date up 5 minutes', () => {
    const roundedUpDate = cacheDatetime({
      date: fixedDateMs,
      round: Math.ceil
    })
    const roundedTo4_20_00 = 1496679600 // epoch (seconds) Monday, June 5, 2017 4:20:00 PM
    expect(roundedUpDate).to.equal(roundedTo4_20_00)
  })
})
