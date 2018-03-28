import React, { Component } from 'react'
import './Container.css'
import axios from 'axios'
import TeamInfo from '../TeamInfo/TeamInfo'
import TeamList from '../TeamList/TeamList'

class Container extends Component {
  constructor() {
    super()

    this.state = {
      teams: []
    }
  }

  componentDidMount() {
    let teams = []
    axios
      .get('http://localhost:4000/teams')
      .then(res => {
        res.data.map(team => {
          teams.push(team)
        })
      })
      .then(() => {
        this.setState({
          teams: teams
        })
        console.log(this.state)
      })
  }

  render() {
    let teams = this.state.teams.map(team => {
      return <TeamList team={team} />
    })
    return <div> {teams} </div>
  }
}

export default Container
