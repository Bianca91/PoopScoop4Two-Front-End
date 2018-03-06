import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'


class User extends PureComponent {
  static propTypes = {
    image: PropTypes.string.isRequired
  };

  render() {
    const {user} = this.props
    return (
      <div>
        <h1>{ user.name }</h1>
      </div>
    )
  }
}


export default User
