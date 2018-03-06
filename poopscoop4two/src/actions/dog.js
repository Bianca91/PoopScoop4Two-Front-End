import * as request from 'superagent'

const randomDogUrl = 'https://dog.ceo/api/breeds/image/random'

export const getRandomDog = () => (dispatch) => {
  request
    .get(randomDogUrl)
    .then(response => dispatch({
      type: 'FETCHED_RANDOM_DOG',
      payload: response.body.message
    }))
    .catch(err => alert(err))
}