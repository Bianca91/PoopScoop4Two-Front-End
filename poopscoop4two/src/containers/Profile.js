import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import Title from '../components/Title'
import { connect } from 'react-redux'
import User from '../components/User'
import NavBar from '../components/navbar'


const user =

  {
    id: 1,
    name: 'Dog Lover',
    email: "doggg@like.com"
  }


export class Profile extends PureComponent {
  static propTypes = {
    name: PropTypes.string.isRequired
  }

  render() {
    return (
      <div className="Profile">
        <NavBar/>
        <Title content="Profile page"/>
        <User user={user} />

      </div>
    )
  }
}

export default Profile
