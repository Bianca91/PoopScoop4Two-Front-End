import { FETCHED_USERS } from "../actions/getMatches";

export default function(state = null, action) {
  switch (action.type) {
    case FETCHED_USERS:
      return action.payload;
    default:
      return state;
  }
}
