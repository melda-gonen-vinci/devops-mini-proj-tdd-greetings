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
  expect(greeting('JERRY')).toBe('HELLO, JERRY!')
})

test('greeting should return a greeting with two names', () => {
  expect(greeting(['Jill', 'Jane'])).toBe('Hello, Jill and Jane.')
})

test('greeting should return a greeting with multiple names', () => {
  expect(greeting(['Amy', 'Brian', 'Charlotte'])).toBe(
    'Hello, Amy, Brian and Charlotte.'
  )
})

test('greeting should return a greeting with multiple names in the requested language', () => {
  expect(greeting(['Amy', 'Brian', 'Charlotte'], 'fr')).toBe(
    'Bonjour, Amy, Brian et Charlotte.'
  )
})

test('greeting should return a greeting with multiple names with some upper case name', () => {
  expect(greeting(['Amy', 'BRIAN', 'Charlotte'])).toBe(
    'Hello, Amy and Charlotte. AND HELLO, BRIAN!'
  )
})

test('greeting should return a greeting with multiple names with some upper case name in the requested language', () => {
  expect(greeting(['Amy', 'BRIAN', 'Charlotte'], 'fr')).toBe(
    'Bonjour, Amy et Charlotte. ET BONJOUR, BRIAN!'
  )
})

test('greeting should return a greeting in the requested language', () => {
  expect(greeting('Marie', 'fr')).toBe('Bonjour, Marie.')
})
