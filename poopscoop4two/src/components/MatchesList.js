import React, { PureComponent } from 'react'
import './MatchesList.css'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import {getMatches} from '../actions/getMatches'


class MatchesList extends PureComponent {
render() {

  const allUsers = [
    {name:'user1', email:'example1@email.com'},
    {name:'user2', email:'example2@email.com'},
    {name:'user3', email:'example3@email.com'}
  ]

    return (
      <div>
        <ul className='Pound'>
          {allUsers.map( user =>
            <li><h1>{user.name} = {user.email}</h1></li>)}
        </ul>
      </div>
    )}
}

export default MatchesList
