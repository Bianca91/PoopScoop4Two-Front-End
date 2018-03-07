
import * as request from 'superagent'

const apiBaseUrl = 'http://localhost:4001'
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


export const updateDog = (breed, likeOrDislike) => (dispatch, getState) => {
  const currentUser = getState().currentUser
  const breedStats = Object.assign({}, currentUser.breedStats)
  let updates

  switch (likeOrDislike) {
    case 'LIKE':
      updates = { ...breedStats, [breed]: breedStats[breed] ? breedStats[breed] + 1 : 1 }
      break
    case 'DISLIKE':
      updates = { ...breedStats, [breed]: breedStats[breed] ? breedStats[breed] - 1 : -1 }
      break
  }

  request
    .patch(`${apiBaseUrl}/users/${currentUser.id}`)
    .send({ breedStats: updates })
    .then(response => dispatch({
      type: 'UPDATE_BREED_STATS',
      payload: { ...currentUser, breedStats: updates }
    }))
  
  console.log(updates)
}