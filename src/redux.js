import service from './service'

const LOAD = 'people/LOAD'
const LOAD_SUCCESS = 'people/LOAD_SUCCESS'

export const actions = {
  load: () => ({ type: LOAD }),
  loadSuccess: (people, count) => ({
    type: LOAD_SUCCESS,
    people,
    count,
  }),
}

const initialState = {
  loaded: false,
  people: [],
  count: undefined,
}

// reducer
export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD:
      return {
        ...state,
        loaded: false,
      }

    case LOAD_SUCCESS:
      return {
        ...state,
        loaded: true,
        people: action.people,
        count: action.count,
      }

    default:
      return state
  }
}

// thunks
const load = (search) => {
  return (dispatch) => {
    dispatch(actions.load())
    return service.load(search)
      .then(response => {
        const { count, people } = response
        dispatch(actions.loadSuccess(people, count))
      })
  }
}

export const thunks = {
  load,
}
