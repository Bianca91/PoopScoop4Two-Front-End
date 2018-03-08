import { FETCHED_USER } from "../actions/getUser";
import { UPDATE_USERS } from "../actions/updateUsers";

export default function(state = {}, action) {
  switch (action.type) {
    case FETCHED_USER:
      return action.payload;
    default:
      return state;
    case UPDATE_USERS:
      if (action.payload.id === state.id) {
        return action.payload;
      } else return state;
  }
}
