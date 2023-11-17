function greeting (name, language) {
  if (name === null || name === undefined || name === '') {
    return greetingWithNoName(language)
  }

  if (Array.isArray(name)) {
    return greetingWithMultipleNames(name, language)
  }
  if (name === name.toUpperCase()) {
    return greetingWithUpperCase(name, language)
  }

  return greetingWithSpecifiedLanguage(name, language)
}

function greetingWithSpecifiedLanguage (name, language) {
  let greeting = ''
  switch (language) {
    case 'fr':
      greeting = `Bonjour, ${name}.`
      break
    case 'nl':
      greeting = `Hallo, ${name}.`
      break

    default:
      greeting = `Hello, ${name}.`
  }
  return greeting
}

function greetingWithNoName (language) {
  let greeting = ''
  switch (language) {
    case 'fr':
      greeting = 'Bonjour, mon ami.'
      break
    case 'nl':
      greeting = 'Hallo, mijn vriend.'
      break

    default:
      greeting = 'Hello, my friend.'
  }
  return greeting
}

function greetingWithUpperCase (name, language) {
  let greeting = ''
  switch (language) {
    case 'fr':
      greeting = `BONJOUR, ${name}!`
      break
    case 'nl':
      greeting = `HALLO, ${name}!`
      break

    default:
      greeting = `HELLO, ${name}!`
  }
  return greeting
}

function greetingWithMultipleNames (names, language) {
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
    switch (language) {
      case 'fr':
        greeting +=
                    'Bonjour, ' +
                    normalNames.slice(0, index).join(', ') +
                    ' et ' +
                    normalNames[index] +
                    '.'
        break
      case 'nl':
        greeting +=
                    'Hallo, ' +
                    normalNames.slice(0, index).join(', ') +
                    ' en ' +
                    normalNames[index] +
                    '.'
        break

      default:
        greeting +=
                    'Hello, ' +
                    normalNames.slice(0, index).join(', ') +
                    ' and ' +
                    normalNames[index] +
                    '.'
    }
  } else if (upperCaseNames.length > 0 && normalNames.length > 0) {
    switch (language) {
      case 'fr':
        greeting +=
                    'Bonjour, ' +
                    normalNames.slice(0, index).join(', ') +
                    ' et ' +
                    normalNames[index] +
                    '. ET ' +
                    'BONJOUR, ' +
                    upperCaseNames.slice(0, index2).join(', ') +
                    upperCaseNames[index2] +
                    '!'
        break
      case 'nl':
        greeting +=
                    'Hallo, ' +
                    normalNames.slice(0, index).join(', ') +
                    ' en ' +
                    normalNames[index] +
                    '. EN ' +
                    'HALLO, ' +
                    upperCaseNames.slice(0, index2).join(', ') +
                    upperCaseNames[index2] +
                    '!'
        break

      default:
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
  }
  return greeting
}

module.exports = greeting
