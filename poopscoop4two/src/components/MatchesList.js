import React, { PureComponent } from 'react'
import './MatchesList.css'
import {connect} from 'react-redux'
import {getMatches} from '../actions/getMatches'


class MatchesList extends PureComponent {

  componentWillMount() {
    this.props.getMatches()
  }

render() {

  if(!this.props.matches) return null

    return (
      <div class="container col s12 white ">
        <ul class="collection white col s1 left">
          <li class="collection-item avatar left">
            <span class="title left">{this.props.matches[0].name}</span>
            <p class="left">{this.props.matches[0].email}<br/>
               {this.props.matches[0].breedStats[0].breed}
            </p>
          </li>
          <li class="collection-item avatar left">
            <span class="title left">{this.props.matches[1].name}</span>
            <p class="left">{this.props.matches[1].email}<br/>
               {this.props.matches[1].breedStats[0].breed}
            </p>
          </li>
          <li class="collection-item avatar left">
            <span class="title left">{this.props.matches[2].name}</span>
            <p class="left">{this.props.matches[2].email}<br/>
               {this.props.matches[2].breedStats[0].breed}
            </p>
          </li>
          <li class="collection-item avatar left">
            <span class="title left">{this.props.matches[3].name}</span>
            <p class="left">{this.props.matches[3].email}<br/>
               {this.props.matches[3].breedStats[0].breed}
            </p>
          </li>
          <li class="collection-item avatar left">
            <span class="title left">{this.props.matches[4].name}</span>
            <p class="left">{this.props.matches[4].email}<br/>
               {this.props.matches[4].breedStats[0].breed}
            </p>
          </li>
          <li class="collection-item avatar left">
            <span class="title left">{this.props.matches[5].name}</span>
            <p class="left">{this.props.matches[5].email}<br/>
               {this.props.matches[5].breedStats[0].breed}
            </p>
          </li>
          <li class="collection-item avatar left">
            <span class="title left">{this.props.matches[6].name}</span>
            <p class="left">{this.props.matches[6].email}<br/>
               {this.props.matches[6].breedStats[0].breed}
            </p>
          </li>
          <li class="collection-item avatar left">
            <span class="title left">{this.props.matches[7].name}</span>
            <p class="left">{this.props.matches[7].email}<br/>
               {this.props.matches[7].breedStats[0].breed}
            </p>
          </li>
          <li class="collection-item avatar left">
            <span class="title left">{this.props.matches[8].name}</span>
            <p class="left">{this.props.matches[8].email}<br/>
               {this.props.matches[8].breedStats[0].breed}
            </p>
          </li>
          <li class="collection-item avatar left">
            <span class="title left">{this.props.matches[9].name}</span>
            <p class="left">{this.props.matches[9].email}<br/>
               {this.props.matches[9].breedStats[0].breed}
            </p>
          </li>
        </ul>
      </div>
    )}
}

const mapStateToProps = ({ matches }) => ({ matches })
export default connect(mapStateToProps, {getMatches})(MatchesList)
