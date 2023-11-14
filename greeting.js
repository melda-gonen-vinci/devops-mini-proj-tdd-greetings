function greeting (name) {
  if (name === null || name === undefined || name === '') {
    return greetingWithNoName()
  }

  if (name === name.toUpperCase()) {
    return greetingWithUpperCase(name)
  }
  return `Hello, ${name}.`
}

function greetingWithNoName () {
  return 'Hello, my friend.'
}

function greetingWithUpperCase (name) {
  return `HELLO, ${name}.`
}

module.exports = greeting
