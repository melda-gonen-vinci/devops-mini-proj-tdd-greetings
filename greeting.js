function greeting (name1, name2) {
  if (name1 === null || name1 === undefined || name1 === '') {
    return greetingWithNoName()
  }
  if (name2 !== undefined) {
    return greetingWithTwoNames(name1, name2)
  }
  if (name1 === name1.toUpperCase()) {
    return greetingWithUpperCase(name1)
  }

  return `Hello, ${name1}.`
}

function greetingWithNoName () {
  return 'Hello, my friend.'
}

function greetingWithUpperCase (name) {
  return `HELLO, ${name}.`
}

function greetingWithTwoNames (name1, name2) {
  return `Hello, ${name1} and ${name2}.`
}

module.exports = greeting
