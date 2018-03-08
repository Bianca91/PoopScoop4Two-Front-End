import React, { PureComponent } from 'react'
import './MatchesList.css'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'

class MatchesList extends PureComponent {
render() {

  const allUsers = ['user1', 'user2', 'user3']

    return (
      <div>
        <ul className='Pound'>
          {allUsers.map( user => <li><h1>{user}</h1></li>)}
        </ul>
      </div>
    )}
}

export default MatchesList
