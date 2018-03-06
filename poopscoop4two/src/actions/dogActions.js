
export const like = (like) => {
  return {
    type: 'like',
    payload: [dogBreed, userId]
  }
}

export const dislike = (dislike) => {
  return {
    type: 'dislike',
    payload: [dogBreed, userId]
  }
}
