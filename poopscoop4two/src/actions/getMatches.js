import * as request from 'superagent'


const userurl = 'http://localhost:4001'

export const FETCHED_USERS = 'FETCHED_USERS'

  export const getMatches = () => (dispatch, getState) => {
    const userId = getState().currentUser.id
    request
      .get(`${userurl}/matches/${userId}`)
      .then(response => dispatch({
        type: 'FETCHED_USERS',
        payload: response.body
      }))
      .catch(err => alert(err))
  }
