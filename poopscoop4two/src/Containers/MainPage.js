import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import Dog from '../components/dog'
import Title from '../components/Title'
import { connect } from 'react-redux'
import NavBar from '../components/navbar'
import './mainpage.css'
import {like as likeAction} from '../actions/dogActions'

export class MainPage extends PureComponent {
  static propTypes = {
    dog: PropTypes.string.isRequired
  }

  handleDislikeButton = (event) => {
    this.props.likeAction(event)
    }
  handleLikeButton = (event) => {
    console.log(event)
    }

  render() {
    return (
      <div className="MainPage">
        <NavBar/>
        <Title content='PoopScoop4Two'/>
        <dog/>
        <button className='MainPageButton Dislike' onClick={this.handleDislikeButton}>"dislike"</button>
        <button className='MainPageButton Like' onClick={this.handleLikeButton}>"like"</button>
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
