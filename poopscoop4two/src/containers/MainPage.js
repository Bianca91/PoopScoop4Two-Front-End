import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import Dog from '../components/Dog'
import Title from '../components/Title'
import {getRandomDog, updateDog} from '../actions/dog'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
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
    if (!this.props.currentUser) return (
      <Redirect to="/login" />
    )

    if (!this.props.dog.image && !this.props.currentUser) return null
    const breedStats = Object.assign({}, this.props.currentUser.breedStats)

    const statsArray = []

    for(let key in breedStats) {
      statsArray.push({[key]: breedStats[key]})
    }

    statsArray.sort((a, b) => {
      return Object.values(b)[0] - Object.values(a)[0]
    })
    //console.log(Object.keys(statsArray[0]))

    return (
      <div className="MainPage">
        <NavBar/>
        <Title content='PoopScoop4Two'/>
        <button className='MainPageButton Dislike' onClick={this.handleDislikeButton}>Dislike</button>
        <Dog image={this.props.dog.image} />
        <button className='MainPageButton Like' onClick={this.handleLikeButton}>Like</button>
      </div>
    )
  }
}

const mapStateToProps = (reduxState) => {
  return {
     dog: reduxState.dog,
     currentUser: reduxState.currentUser
  }
}

export default connect(mapStateToProps, {getRandomDog, updateDog})(MainPage)
