const SPECIES = {
  'https://swapi.co/api/species/1/': 'human',
  'https://swapi.co/api/species/2/': 'droid',
}

const simplifyPerson = (person) => {
    const {
      name,
      height,
      mass,
      gender,
      species,
    } = person
    return {
      name,
      height,
      mass,
      gender,
      species: SPECIES[species[0]],
    }
}

const simplifyPersonResponse = (resp) => {
  return {
    count: resp.count,
    people: resp.results.map(simplifyPerson),
  }
}

export default {
  load: (search) => {
    const query = search ? `?search=${search}` : ''
    const url = `https://swapi.co/api/people/${query}`
    return fetch(url)
      .then(resp => resp.json())
      .then(simplifyPersonResponse)
  },
}
