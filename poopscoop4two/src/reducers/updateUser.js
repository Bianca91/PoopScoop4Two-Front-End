import { UPDATE_USER } from "../actions/getUser";

export default function(state = {}, action) {
  switch (action.type) {
    case UPDATE_USER:
      return { success: true };
    default:
      return state;
  }
}
