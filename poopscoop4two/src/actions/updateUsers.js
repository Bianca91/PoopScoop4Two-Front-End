import * as request from "superagent";


const baseUrl = "http://localhost:4001";

export const UPDATE_USERS = 'UPDATE_USERS'

export const updateUsers = (userId, updates) => (dispatch) => {
  request
    .put(`${baseUrl}/users/${userId}`)
    .send(updates)
    .then(response => dispatch({
      type: UPDATE_USERS,
      payload: response.body
    }))
}
