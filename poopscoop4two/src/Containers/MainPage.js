import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import Dog from '../components/Dog'
import Title from '../components/Title'
import {getRandomDog} from '../actions/dog'
import { connect } from 'react-redux'
import NavBar from '../components/Navbar'
import './mainpage.css'
import {like as likeAction} from '../actions/dogActions'
import {dislike as dislikeAction} from '../actions/dogActions'


export class MainPage extends PureComponent {
  static propTypes = {
    dog: PropTypes.string.isRequired
  }

  componentWillMount() {
    this.props.getRandomDog()
  }

  handleDislikeButton = (event) => {
    console.log(event)
    //this.props.dislikeAction(event)
  }
  handleLikeButton = (event) => {
    console.log(event)
    //this.props.dislikeAction(event)
  }

  render() {
    return (
      <div className="MainPage">
        <NavBar/>
        <Title content='PoopScoop4Two'/>
        <Dog image={this.props.dog.image} />
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
export default connect(mapStateToProps, {getRandomDog})(MainPage)
