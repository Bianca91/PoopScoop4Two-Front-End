import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import Dog from '../components/Dog'
import Title from '../components/Title'
import {getRandomDog, updateDog} from '../actions/dog'
import { connect } from 'react-redux'
import NavBar from '../components/Navbar'
import './mainpage.css'


export class MainPage extends PureComponent {
  static propTypes = {
    dog: PropTypes.object.isRequired
  }

  componentWillMount() {
    this.props.getRandomDog()
  }

  handleDislikeButton = () => {
    this.props.updateDog(this.getDogBreed(this.props.dog.image), 'DISLIKE')
    this.props.getRandomDog()
  }
  handleLikeButton = () => {
    this.props.updateDog(this.getDogBreed(this.props.dog.image), 'LIKE')
    this.props.getRandomDog()
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
        <button className='MainPageButton Dislike' onClick={this.handleDislikeButton}>"dislike"</button>
        <Dog image={this.props.dog.image} />
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

export default connect(mapStateToProps, {getRandomDog, updateDog})(MainPage)