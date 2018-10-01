import { action } from './reducer'

const api = {
  load: () => {
    return fetch('https://swapi.co/api/people/')
      .then(resp => resp.json())
  },
}

/*
 * Name
 * Height
 * Mass
 * Gender
 * Species
*/

export const load = () => {
  return (dispatch) => {
    dispatch(action.load())
    return api.load()
      .then(response => dispatch(action.loadSuccess(response)))
  }
}
