function greeting (name) {
  if (name === null || name === undefined || name === '') {
    return greetingWithNoName()
  }
  return `Hello, ${name}.`
}

function greetingWithNoName () {
  return 'Hello, my friend.'
}

module.exports = greeting
