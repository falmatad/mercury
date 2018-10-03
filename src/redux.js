import service from './service'

const LOAD = 'people/LOAD'
const LOAD_SUCCESS = 'people/LOAD_SUCCESS'
const SET_SORT = 'people/SET_SORT'

export const actions = {
  load: () => ({ type: LOAD }),
  loadSuccess: (people, count) => ({
    type: LOAD_SUCCESS,
    people,
    count,
  }),
  setSort: (sort) => ({
    type: SET_SORT,
    sort,
  }),
}

const initialState = {
  loaded: false,
  people: [],
  count: undefined,
  sort: undefined,
}

const getSorterByField = (field, asc) => {
  const direction = asc ? 1 : -1
  return (a, b) => {
    if (a[field] < b[field]) {
      return -direction
    } else if (a[field] > b[field]) {
      return direction
    }
    return 0
  }
}

const asc = getSorterByField('name', true)
const desc = getSorterByField('name', false)

const sortPeople = (people, direction) => {
  switch (direction) {
    case 'asc':
      return people.sort(asc)
    case 'desc':
      return people.sort(desc)
    default:
      return people
  }
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
        people: sortPeople(action.people, state.sort),
        count: action.count,
      }

    case SET_SORT:
      return {
        ...state,
        sort: action.sort,
        people: sortPeople(state.people, action.sort),
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
