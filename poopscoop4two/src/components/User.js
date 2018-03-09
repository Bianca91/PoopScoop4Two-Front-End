import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'


class User extends PureComponent {

  static propTypes = {
    user: PropTypes.shape({
      id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    breedStats: PropTypes.array.isRequired
     })
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
