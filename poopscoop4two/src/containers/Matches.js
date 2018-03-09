import React, { PureComponent } from 'react'
import Title from '../components/Title'
import NavBar from '../components/Navbar'
import {connect} from 'react-redux'
import {Redirect} from 'react-router-dom'
import MatchesList from '../components/MatchesList'


export class Matches extends PureComponent {

  render() {
    if (!this.props.currentUser) return (
      <Redirect to="/login" />
    )

    return (
      <div className="DogPound">
        <NavBar/>
        <Title content="Dog Pound"/>
        <MatchesList />
      </div>
    )
  }
}

const mapStateToProps = ({ currentUser }) => ({ currentUser })

export default connect(mapStateToProps)(Matches)
