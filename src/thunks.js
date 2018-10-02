import { action } from './reducer'

const SPECIES = {
  'https://swapi.co/api/species/1/': 'human',
  'https://swapi.co/api/species/2/': 'droid',
}

const simplifyPersonResponse = (resp) => {
  const people = resp.results.map(person => {
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
  })
  return {
    count: resp.count,
    people,
  }
}

const api = {
  load: (search) => {
    const query = search ? `?search=${search}` : ''
    const url = `https://swapi.co/api/people/${query}`
    return fetch(url)
      .then(resp => resp.json())
      .then(simplifyPersonResponse)
  },
}



export const load = (search) => {
  return (dispatch) => {
    dispatch(action.load())
    return api.load(search)
      .then(response => {
        const { count, people } = response
        dispatch(action.loadSuccess(people, count))
      })
  }
}
