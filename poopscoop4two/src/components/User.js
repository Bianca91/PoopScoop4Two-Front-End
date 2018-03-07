import React, { PureComponent } from 'react'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'

class User extends PureComponent {

  static propTypes = {
    user: PropTypes.shape({
      id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
     })
  }

render() {
    return (
      <div>
        <h1>{ this.props.name }</h1>
      </div>
    )}
}

export default User
