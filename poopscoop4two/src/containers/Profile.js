import React, { PureComponent } from 'react'
import Title from '../components/Title'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import User from '../components/User'
import NavBar from '../components/Navbar'
import {getUser} from '../actions/getUser'



export class Profile extends PureComponent {

  componentWillMount(props) {
    this.props.getUser((this.props.match.params.id))
  }

  render() {
    if (!this.props.currentUser) return (
      <Redirect to="/login" />
    )

    if (!this.props.user.breedStats) return null
    return (
      <div className="Profile">
          <NavBar/>
        <Title content="Profile page"/>
          <User user={this.props.user}/>
          <ul className='Pound'>
            <Title content="Your top 10 favourite dogs"/>
            {this.props.user.breedStats.slice(0,10).map(breeds => <li>{breeds.breed}</li>)}
          </ul>
      </div>
    )}
}

const mapStateToProps = ({ user, currentUser }) => ({ user, currentUser })
export default connect(mapStateToProps, {getUser})(Profile)
