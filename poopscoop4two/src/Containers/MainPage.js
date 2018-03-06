import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
//import Dog from '../components/dog'
//import Title from '../components/Title'
import { connect } from 'react-redux'
const handleButtonClick = (type) => {
  switch(type) {
  case "dislike":
      console.log("dislike")
      break;
  case "like":
      console.log("like")
      break;
  }
}

export class MainPage extends PureComponent {
  static propTypes = {
    guesses: PropTypes.arrayOf(
      PropTypes.string).isRequired,
    awnser: PropTypes.string.isRequired
  }

  render() {
    return (
      <div className="MainPage">
        <p>"PoopScoop4Two"</p>
        <button className='dislikeButton' onClick={handleButtonClick}>"dislike"</button>
        <button className='likeButton' onClick={handleButtonClick}>"like"</button>
      </div>
    )
  }
}
const mapStateToProps = (reduxState) => {
  return {
     dog: reduxState.dog
  }
}
export default connect(mapStateToProps)(MainPage)
