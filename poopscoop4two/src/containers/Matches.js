import React, { PureComponent } from 'react'
import Title from '../components/Title'
import NavBar from '../components/Navbar'
import MatchesList from '../components/MatchesList'


export class Matches extends PureComponent {

  render() {
    return (
      <div className="DogPound">
        <NavBar/>
        <Title content="Dog Pound"/>
        <MatchesList />
      </div>
    )
  }
}

export default Matches
