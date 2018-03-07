import * as request from 'superagent'


const userurl = 'http://localhost:4001'

export const FETCHED_USER = 'FETCHED_USER'

  export const getUser = (userId) => (dispatch) => {
    request
      .get(`${userurl}/users/${userId}`)
      .then(response => dispatch({
        type: 'FETCHED_USER',
        payload: response.body
      }))
      .catch(err => alert(err))
  }
