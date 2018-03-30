import React, { Component } from 'react'
import './Container.css'
import TeamList from '../TeamList/TeamList'

class Container extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    let teams = this.props.teams.map(team => {
      return <TeamList team={team} />
    })
    return <div className="teams"> {teams} </div>
  }
}

export default Container
