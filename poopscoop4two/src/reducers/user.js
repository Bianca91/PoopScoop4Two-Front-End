import { FETCHED_USER } from "../actions/getUser";
import { UPDATE_USER } from "../actions/getUser";
import { USER_LOGOUT_SUCCESS } from "../actions/users"

export default function(state = {}, action) {
  switch (action.type) {
    case FETCHED_USER:
      return action.payload;
    case UPDATE_USER:
      return state.map(user => {
        if (user.id === action.payload.id) {
          return action.payload;
        } else return state;
      });
    case USER_LOGOUT_SUCCESS:
      return {}
    default:
      return state;
  }
}
