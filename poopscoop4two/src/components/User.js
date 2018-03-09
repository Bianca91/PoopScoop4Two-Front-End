import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'


class User extends PureComponent {

  static propTypes = {
  user: PropTypes.object.isRequired
  }

render() {

    return (
      <div class="container">
        <div class="row col s2">
          <p>{ this.props.name}</p>
          <p>{ this.props.email}</p>
          <p>{ this.props.breedStats}</p>
        </div>
      </div>
    )}
}

export default User
