import { action } from './reducer'

const api = {
  load: (search) => {
    const query = search ? `?search=${search}` : ''
    const url = `https://swapi.co/api/people/${query}`
    return fetch(url)
      .then(resp => resp.json())
  },
}

export const load = (search) => {
  return (dispatch) => {
    dispatch(action.load())
    return api.load(search)
      .then(response => dispatch(action.loadSuccess(response)))
  }
}
