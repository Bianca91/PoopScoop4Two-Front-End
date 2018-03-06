export default function(state = {}, action) {
  switch (action.type) {
    case 'FETCHED_RANDOM_DOG':
      return { image: action.payload }
    default:
      return state;
  }
}
