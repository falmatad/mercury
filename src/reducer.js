const LOAD = 'people/LOAD'
const LOAD_SUCCESS = 'people/LOAD_SUCCESS'

export const action = {
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

export default (state = initialState, action) => {
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
