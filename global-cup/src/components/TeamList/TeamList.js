import React, { Component } from 'react'
import { Route, Link } from 'react-router-dom'
import './TeamList.css'

class TeamList extends Component {
  constructor(team) {
    super(team)

    this.state = {}
  }
  render() {
    return (
      <div>
        <Link to="/info"> {this.props.team.name} </Link>
        <p> {this.props.team.color} </p>
      </div>
    )
  }
}

export default TeamList
