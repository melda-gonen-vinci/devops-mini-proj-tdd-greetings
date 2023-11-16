const { test, expect } = require('@jest/globals')
const greeting = require('../greeting')

test('greeting should return a greeting (hello and the name', () => {
  expect(greeting('Bob')).toBe('Hello, Bob.')
})

test('greeting null, undefined or empty should return a greeting with my friend', () => {
  expect(greeting(null)).toBe('Hello, my friend.')
  expect(greeting(undefined)).toBe('Hello, my friend.')
  expect(greeting('')).toBe('Hello, my friend.')
})

test('greeting should return a greeting in upper case', () => {
  expect(greeting('JERRY')).toBe('HELLO, JERRY.')
})

test('greeting should return a greeting in with two names', () => {
  expect(greeting('Jill', 'Jane')).toBe('Hello, Jill and Jane.')
})
