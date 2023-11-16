const { test, expect } = require('@jest/globals')
const greeting = require('../greeting')

test('greeting should return a greeting (hello and the name', () => {
  expect(greeting('Bob')).toBe('Hello, Bob.')
})
