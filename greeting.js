function greeting (name) {
  if (name === null || name === undefined || name === '') {
    return greetingWithNoName()
  }

  if (Array.isArray(name)) {
    return greetingWithMultipleNames(name)
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

function greetingWithMultipleNames (name) {
  const index = name.length - 1

  return (
    'Hello, ' +
        name.slice(0, index).join(', ') +
        ' and ' +
        name[index] +
        '.'
  )
}

module.exports = greeting
