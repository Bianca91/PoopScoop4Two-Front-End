
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
  const state = getState()
  const breedStats = state.currentUser.breedStats.concat()
  const breedIndex = breedStats.findIndex(b => b.breed === breed)
  const jwt = state.currentUser.jwt
  let updates

  switch (likeOrDislike) {
    case 'LIKE':
      if (breedIndex === -1) {
        breedStats.push({ breed: breed, votes: 1 })
        updates = breedStats.sort((a, b) => b.votes - a.votes)
      } else {
        breedStats[breedIndex] = { breed: breed, votes: breedStats[breedIndex].votes + 1 }
        updates = breedStats.sort((a, b) => b.votes - a.votes)
      }
      break
    case 'DISLIKE':
      if (breedIndex === -1) {
        breedStats.push({ breed: breed, votes: -1 })
        updates = breedStats.sort((a, b) => b.votes - a.votes)
      } else {
        breedStats[breedIndex] = { breed: breed, votes: breedStats[breedIndex].votes - 1 }
        updates = breedStats.sort((a, b) => b.votes - a.votes)
      }
      break
    default:
      break
  }

  request
    .patch(`${apiBaseUrl}/users/${state.currentUser.id}`)
    .set('Authorization', `Bearer ${jwt}`)
    .send({ breedStats: updates })
    .then(response => dispatch({
      type: 'UPDATE_BREED_STATS',
      payload: { ...state.currentUser, breedStats: updates }
    }))

  console.log(updates)
}