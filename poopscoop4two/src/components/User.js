import React, { PureComponent } from 'react'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'


class User extends PureComponent {

  static propTypes = {
  user: PropTypes.object.isRequired
  }

render() {

    return (
      <div>
        <h1>Name: {this.props.user.name}</h1>
        <h1>Email: {this.props.user.email}</h1>
  </div>
    )}
}

export default User
