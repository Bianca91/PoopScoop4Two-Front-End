import { FETCHED_USERS } from "../actions/getMatches";
import { USER_LOGOUT_SUCCESS } from "../actions/users"

export default function(state = null, action) {
  switch (action.type) {
    case FETCHED_USERS:
      return action.payload;
    case USER_LOGOUT_SUCCESS:
      return null;
    default:
      return state;
  }
}
