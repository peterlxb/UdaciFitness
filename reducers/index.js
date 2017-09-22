import { RECEIVES_ENTRIES,ADD_ENTRY } from '../actions'

function entries(state={}, action) {
  switch(action.type) {
    case RECEIVES_ENTRIES:
      return{
        ...state,
        ...action.entries,
      }
    case ADD_ENTRY:
      return {
        ...state,
        ...action.entry,
      }
    default:
      return state
  }
}

export default entries
