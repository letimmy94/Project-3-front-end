import React, { Component } from 'react'
import './Container.css'
import TeamList from '../TeamList/TeamList'

class Container extends Component {
  render() {
    let teams = this.props.teams.map(team => {
      return <TeamList key={team._id} team={team} />
    })
    return <div> {teams} </div>
  }
}

export default Container
