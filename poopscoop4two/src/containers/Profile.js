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
      <div class="container col s12 white">
        <ul class="collection">
          <li class="collection-item avatar">
              <span class="title">{`name:${this.props.user.name}`}</span>
            <p>{`email:${this.props.user.email}`}<br/>
               {`Favorite breed:${this.props.user.breedStats[0].breed}`}
            </p>
          </li>
        </ul>
      </div>
    )}
}

const mapStateToProps = ({ user, currentUser }) => ({ user, currentUser })
export default connect(mapStateToProps, {getUser})(Profile)
