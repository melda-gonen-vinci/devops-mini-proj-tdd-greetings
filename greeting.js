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
  return `HELLO, ${name}!`
}

function greetingWithMultipleNames (names) {
  const normalNames = []
  const upperCaseNames = []

  names.forEach((name) => {
    if (name === name.toUpperCase()) {
      upperCaseNames.push(name)
    } else {
      normalNames.push(name)
    }
  })

  const index = normalNames.length - 1
  const index2 = upperCaseNames.length - 1

  let greeting = ''

  if (normalNames.length > 0 && upperCaseNames.length === 0) {
    greeting +=
            'Hello, ' +
            normalNames.slice(0, index).join(', ') +
            ' and ' +
            normalNames[index] +
            '.'
  } else if (upperCaseNames.length > 0 && normalNames.length > 0) {
    greeting +=
            'Hello, ' +
            normalNames.slice(0, index).join(', ') +
            ' and ' +
            normalNames[index] +
            '. AND ' +
            'HELLO, ' +
            upperCaseNames.slice(0, index2).join(', ') +
            upperCaseNames[index2] +
            '!'
  }
  return greeting
}

module.exports = greeting
