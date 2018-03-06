import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
//import Dog from '../components/dog'
import Title from '../components/Title'
import { connect } from 'react-redux'
import NavBar from '../components/navbar'
import './mainpage.css'

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
        <NavBar/>
        <Title content='PoopScoop4Two'/>
        <button className='MainPageButton Dislike' onClick={handleDislikeButton}>"dislike"</button>
        <button className='MainPageButton Like' onClick={handleLikeButton}>"like"</button>
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
