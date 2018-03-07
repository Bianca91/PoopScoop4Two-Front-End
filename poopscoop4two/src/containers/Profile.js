import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import Title from '../components/Title'
import { connect } from 'react-redux'
import User from '../components/User'
import NavBar from '../components/Navbar'
import {getUser} from '../actions/getUser'



export class Profile extends PureComponent {

  componentWillMount(props) {
    this.props.getUser((this.props.match.params.id))
  }

  render() {

    return (
      <div className="Profile">
          <NavBar/>
        <Title content="Profile page"/>
          <User name={`name:${this.props.user.name}`}/>
          <User email={`email:${this.props.user.email}`}/>
      </div>
    )}
}

const mapStateToProps = ({ user }) => ({ user })
export default connect(mapStateToProps, {getUser})(Profile)
