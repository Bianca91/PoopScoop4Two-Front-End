import * as request from "superagent";


export const USER_LOGIN_SUCCESS = "USER_LOGIN_SUCCESS";
export const USER_LOGIN_FAILED = "USER_LOGIN_FAILED";
<<<<<<< HEAD
export const USER_SIGNUP_SUCCESS = "USER_SIGNUP_SUCCESS";
export const USER_SIGNUP_FAILED = "USER_SIGNUP_FAILED";

=======
export const USER_LOGOUT_SUCCESS = "USER_LOGOUT_SUCCESS";
>>>>>>> c0f3860120340c0d147032f251b405db6745bc80


const baseUrl = "http://localhost:4001";

export const login = (email, password) => dispatch => {
  request
    .post(`${baseUrl}/logins`)
    .send({ email, password })

    .then(result => {
      dispatch({
        type: USER_LOGIN_SUCCESS,
        payload: result.body
      });
    })
    .catch(err => {
      if (err.status === 400) {
        dispatch({
          type: USER_LOGIN_FAILED,
          payload: err.response.body.message || "Unknown error"
        });
      } else {
        console.error(err);
      }
    });
};

<<<<<<< HEAD
export const signup = (email, password, name) => (dispatch) =>

  request
		.post(`${baseUrl}/users`)
		.send({ email, password, name })
		.then(result => {
			dispatch({
				type: USER_SIGNUP_SUCCESS
			})
		})
		.catch(err => {
			if (err.status === 400) {
				dispatch({
					type: USER_SIGNUP_FAILED,
					payload: err.response.body.message || 'Unknown error'
				})
			}
			else {
				console.error(err)
			}
		})
=======
export const logout = () => {
  console.log("logoutplz")
  return {
    type: USER_LOGOUT_SUCCESS,
    payload: null
  }
}
>>>>>>> c0f3860120340c0d147032f251b405db6745bc80
