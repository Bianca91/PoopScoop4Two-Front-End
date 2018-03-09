import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import Dog from '../components/Dog'
import Title from '../components/Title'
import User from '../components/User'
import Profile from './Profile'
import {getRandomDog, updateDog} from '../actions/dog'
import {getUser} from '../actions/getUser'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import NavBar from '../components/Navbar'
import './mainpage.css'

export class MainPage extends PureComponent {
  static propTypes = {
    dog: PropTypes.object.isRequired
  }
  constructor() {
    super();
    this.state = {
      isShowProfile: false,
      isShowMatches: false
    }
    this.showProfile = this.showProfile.bind(this);
    this.showMatches = this.showMatches.bind(this);
  }
  showProfile() {
    console.log(this.state.isShowMatches)
    if (this.state.isShowProfile === false) {
      this.setState({ isShowProfile: true })
    } else {
      this.setState({ isShowProfile: false })
    }
  }

  showMatches() {
    console.log(this.state.isShowMatches)
    if (this.state.isShowMatches === false) {
      this.setState({ isShowMatches: true })
    } else {
      this.setState({ isShowMatches: false })
    }
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
        <br/>
        <nav>
          <div class="nav-wrapper large">
            <a class="brand-logo left"><i class="large material-icons right">pets</i>PoopScoop4Two</a>
            <NavBar/>
            <ul class="right">
              <li id="profile-trigger" onClick={this.showProfile}><a><i class="material-icons">account_box</i></a></li>
              <li onClick={this.showMatches}><a><i class="material-icons">contacts</i></a></li>
              <li><a href="/edit"><i class="material-icons">border_color</i></a></li>
            </ul>
          </div>
        </nav>

        <div class="row">
        <div class="container col s4">
          {this.state.isShowProfile &&
          <div id="profile" class="card large scale-transition">
            <div class="card-image waves-effect waves-block waves-light">
              <img className="dog" class="activator" src="https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png"/>
            </div>
            <div class="card-content">
              <span class="card-title activator grey-text text-darken-4">User Profile<i class="material-icons right">more_vert</i></span>
            </div>
            <div class="card-reveal">
            <span class="card-title grey-text text-darken-4">User Profile<i class="material-icons right">close</i></span>
            <div class="row">
              <object data="http://localhost:3000/users/2" >
              </object>
            </div>
          </div>
          </div>}
        </div>
          <div class="col s4">
            <div class="card">
            <div class="card-image">
                <Dog image={this.props.dog.image} />
                <span class="card-title">Hate or Love</span>
                <button class="btn-floating btn-large left hoverable halfway-fab" onClick={this.handleDislikeButton}><i class="material-icons left">sentiment_very_dissatisfied</i></button>
                <button className='btn-floating btn-large right hoverable halfway-fab' onClick={this.handleLikeButton}><i class="material-icons left">pets</i></button>
              </div>
              <div class="card-content">
              </div>
            </div>
          </div>
          <div class="container col s4">
            {this.state.isShowMatches &&
            <div class="card large">
              <div class="card-image waves-effect waves-block waves-light">
                <img className="dog" class="activator" src="http://www.chittering.wa.gov.au/sites/chitteringwagovau/assets/public/Image/Community/MULTIPLE-DOGS.jpg"/>
              </div>
              <div class="card-content">
                <span class="card-title activator grey-text text-darken-4">Matches<i class="material-icons right">more_vert</i></span>
              </div>
              <div class="card-reveal">
              <span class="card-title grey-text text-darken-4">Matches<i class="material-icons right">close</i></span>
              <div class="white">
                <object data="http://localhost:3000/matches" >
                </object>
              </div>
            </div>
            </div>}
          </div>
        </div>
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
