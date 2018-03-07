import {FETCHED_USER} from '../actions/getUser'


export default function (state = {}, action) {
  switch (action.type) {
    case FETCHED_USER:
    return action.payload
    default:
      return state;
  }
}
