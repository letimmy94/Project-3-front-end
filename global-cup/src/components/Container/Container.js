import React, { Component } from 'react'
import './Container.css'
import axios from 'axios'
import TeamInfo from '../TeamInfo/TeamInfo'

class Container extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    let teams = this.props.teams.map(team => {
      return <TeamInfo team={team} />
    })
    return <div> {teams} </div>
  }
}

export default Container
