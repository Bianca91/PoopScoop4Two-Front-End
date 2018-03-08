import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'


class User extends PureComponent {

  static propTypes = {
<<<<<<< HEAD
  user: PropTypes.object.isRequired
=======
    user: PropTypes.shape({
      id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    breedStats: PropTypes.array.isRequired
     })
>>>>>>> 992e7c9c66e9135b9d4b6d9605260a716255cee3
  }

render() {

    return (
      <div>
<<<<<<< HEAD
        <h1>Name: {this.props.user.name}</h1>
        <h1>Email: {this.props.user.email}</h1>
  </div>
=======
        <h1>{ this.props.name}</h1>
        <h1>{ this.props.email}</h1>
        <h1>{ this.props.breedStats}</h1>
      </div>
>>>>>>> 992e7c9c66e9135b9d4b6d9605260a716255cee3
    )}
}

export default User
