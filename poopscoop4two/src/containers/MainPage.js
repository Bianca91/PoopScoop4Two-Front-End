import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import Dog from '../components/Dog'
import Title from '../components/Title'
import {getRandomDog, likeDog} from '../actions/dog'
import { connect } from 'react-redux'
import NavBar from '../components/Navbar'
import './mainpage.css'
import {like as likeAction} from '../actions/dogActions'
import {dislike as dislikeAction} from '../actions/dogActions'


export class MainPage extends PureComponent {
  static propTypes = {
    dog: PropTypes.object.isRequired
  }

  componentWillMount() {
    this.props.getRandomDog()
  }

  handleDislikeButton = () => {
    this.props.getRandomDog()
  }
  handleLikeButton = () => {
    this.props.likeDog(1, this.getDogBreed(this.props.dog.image))
  }

  getDogBreed = (imageUrl) => {
    return imageUrl.split('/')[5]
  }

  render() {
    if (!this.props.dog.image) return null

    return (
      <div className="MainPage">
        <NavBar/>
        <Title content='PoopScoop4Two'/>
        {console.log(this.getDogBreed(this.props.dog.image))}
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
export default connect(mapStateToProps, {getRandomDog, likeDog})(MainPage)