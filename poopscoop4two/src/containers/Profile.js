import React, { PureComponent } from 'react'
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
      <div class="container col s12">
          <User name={`name:${this.props.user.name}`}/>
          <User email={`email:${this.props.user.email}`}/>
          <User breedStats={`Favorite breed:${this.props.user.breedStats[0].breed}`}/>
      </div>
    )}
}

const mapStateToProps = ({ user }) => ({ user })
export default connect(mapStateToProps, {getUser})(Profile)
