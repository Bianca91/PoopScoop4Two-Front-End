import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
//import Dog from '../components/dog'
import Title from '../components/Title'
import { connect } from 'react-redux'
const handleDislikeButton = (type) => {
  console.log("Dislike")
  }
const handleLikeButton = (type) => {
  console.log("Like")
  }

export class MainPage extends PureComponent {
  static propTypes = {
    dog: PropTypes.string.isRequired
  }

  render() {
    return (
      <div className="MainPage">
        <Title content="PoopScoop4Two"/>
        <button className='dislikeButton' onClick={handleDislikeButton}>"dislike"</button>
        <button className='likeButton' onClick={handleLikeButton}>"like"</button>
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
