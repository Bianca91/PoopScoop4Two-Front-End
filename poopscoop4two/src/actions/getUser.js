import * as request from "superagent";

const userurl = "http://localhost:4001";

export const FETCHED_USER = "FETCHED_USER";
export const UPDATE_USER = "UPDATE_USER";

export const getUser = userId => dispatch => {
  request
    .get(`${userurl}/users/${userId}`)
    .then(response =>
      dispatch({
        type: "FETCHED_USER",
        payload: response.body
      })
    )
    .catch(err => alert(err));
};

export const updateUser = (userId, updates) => dispatch => {
  request
    .patch(`${userurl}/users/${userId}`)
    .send({ updates })
    .then(response =>
      dispatch({
        type: UPDATE_USER,
        payload: response.body
      })
    );
};
