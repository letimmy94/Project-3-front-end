import React, { Component } from 'react'
import './Container.css'
import axios from 'axios'
import TeamInfo from '../TeamInfo/TeamInfo'
import TeamList from '../TeamList/TeamList'

class Container extends Component {
  constructor(props) {
    super(props)
  }

  render() {
<<<<<<< HEAD
    let teams = this.state.teams.map(team => {
      return <TeamList team={team} />
=======
    let teams = this.props.teams.map(team => {
      return <TeamInfo team={team} />
>>>>>>> edit-feature
    })
    return <div> {teams} </div>
  }
}

export default Container
