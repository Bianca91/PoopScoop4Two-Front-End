
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

/*
export const likeDog = (userId, breed) => (dispatch) => {
  const updates = request
    .get(`${apiBaseUrl}/users/${userId}`)
    .then(response => {
      const breedStats = Object.assign({}, response.body.breedStats)
      console.log(breedStats)
      return { ...breedStats, [breed]: breedStats[breed] ? breedStats[breed] + 1 : 1 }
    })
  
  console.log(updates)
}
*/