const { test, expect } = require('@jest/globals')
const greeting = require('../greeting')

test('greeting should return a greeting ', () => {
  expect(greeting('Bob')).toBe('Hello, Bob.')
})

test('greeting should return a greeting (fr)', () => {
  expect(greeting('Bob', 'fr')).toBe('Bonjour, Bob.')
})

test('greeting should return a greeting (nl)', () => {
  expect(greeting('Bob', 'nl')).toBe('Hallo, Bob.')
})

test('greeting null, undefined or empty should return a greeting with my friend', () => {
  expect(greeting(null)).toBe('Hello, my friend.')
  expect(greeting(undefined)).toBe('Hello, my friend.')
  expect(greeting('')).toBe('Hello, my friend.')
})

test('greeting null, undefined or empty should return a greeting with my friend (fr)', () => {
  expect(greeting(null, 'fr')).toBe('Bonjour, mon ami.')
  expect(greeting(undefined, 'fr')).toBe('Bonjour, mon ami.')
  expect(greeting('', 'fr')).toBe('Bonjour, mon ami.')
})

test('greeting null, undefined or empty should return a greeting with my friend (nl)', () => {
  expect(greeting(null, 'nl')).toBe('Hallo, mijn vriend.')
  expect(greeting(undefined, 'nl')).toBe('Hallo, mijn vriend.')
  expect(greeting('', 'nl')).toBe('Hallo, mijn vriend.')
})

test('greeting should return a greeting in upper case', () => {
  expect(greeting('JERRY')).toBe('HELLO, JERRY!')
})

test('greeting should return a greeting in upper case (fr)', () => {
  expect(greeting('JERRY', 'fr')).toBe('BONJOUR, JERRY!')
})

test('greeting should return a greeting in upper case (nl)', () => {
  expect(greeting('JERRY', 'nl')).toBe('HALLO, JERRY!')
})

test('greeting should return a greeting with two names', () => {
  expect(greeting(['Jill', 'Jane'])).toBe('Hello, Jill and Jane.')
})

test('greeting should return a greeting with multiple names', () => {
  expect(greeting(['Amy', 'Brian', 'Charlotte'])).toBe(
    'Hello, Amy, Brian and Charlotte.'
  )
})

test('greeting should return a greeting with multiple names in the requested language (fr)', () => {
  expect(greeting(['Amy', 'Brian', 'Charlotte'], 'fr')).toBe(
    'Bonjour, Amy, Brian et Charlotte.'
  )
})

test('greeting should return a greeting with multiple names in the requested language (nl)', () => {
  expect(greeting(['Amy', 'Brian', 'Charlotte'], 'nl')).toBe(
    'Hallo, Amy, Brian en Charlotte.'
  )
})

test('greeting should return a greeting with multiple names with some upper case name', () => {
  expect(greeting(['Amy', 'BRIAN', 'Charlotte'])).toBe(
    'Hello, Amy and Charlotte. AND HELLO, BRIAN!'
  )
})

test('greeting should return a greeting with multiple names with some upper case name in the requested language (fr)', () => {
  expect(greeting(['Amy', 'BRIAN', 'Charlotte'], 'fr')).toBe(
    'Bonjour, Amy et Charlotte. ET BONJOUR, BRIAN!'
  )
})

test('greeting should return a greeting with multiple names with some upper case name in the requested language (nl)', () => {
  expect(greeting(['Amy', 'BRIAN', 'Charlotte'], 'nl')).toBe(
    'Hallo, Amy en Charlotte. EN HALLO, BRIAN!'
  )
})

test('greeting should return a greeting in the requested language (fr)', () => {
  expect(greeting('Marie', 'fr')).toBe('Bonjour, Marie.')
})

test('greeting should return a greeting in the requested language (nl)', () => {
  expect(greeting('Marie', 'nl')).toBe('Hallo, Marie.')
})
