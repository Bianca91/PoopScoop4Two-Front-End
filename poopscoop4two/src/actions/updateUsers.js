import * as request from "superagent";

const baseUrl = "http://localhost:4001";

export const UPDATE_USERS = "UPDATE_USERS";
export const USER_UPDATE_FAILED = "USER_UPDATE_FAILED";

export const updateUsers = (email, password, name, userId) => dispatch => {
  request
    .patch(`${baseUrl}/users/${userId}`)
    .send({ email, password, name })
    .then(response =>
      dispatch({
        type: UPDATE_USERS,
        payload: response.body
      })
    )
    .catch(err => {
      if (err.status === 400) {
        dispatch({
          type: USER_UPDATE_FAILED,
          payload: err.response.body.message || "Unknown error"
        });
      } else {
        console.error(err);
      }
    });
};
