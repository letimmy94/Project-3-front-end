import React, { Component } from 'react'
import './TeamInfo.css'

class TeamInfo extends Component {
  constructor() {
    super()

    this.state = {}
  }

  render() {
    return (
      <div>
        <h1 className="info">Team Info</h1>
        <h2>Team Name Will Go Here</h2>
        <h4>coach:</h4>
        <h4>color here</h4>
        <table>
          <tr>
            <th className="firstc" />
            <th>First Name</th>
            <th>Last Name</th>
            <th>Position</th>
          </tr>
          <tr>
            <th>Player 1</th>
            <th />
            <th />
            <th />
          </tr>
          <tr>
            <th>Player 2</th>
            <th />
            <th />
            <th />
          </tr>
          <tr>
            <th>Player 3</th>
            <th />
            <th />
            <th />
          </tr>
          <tr>
            <th>Player 4</th>
            <th />
            <th />
            <th />
          </tr>
          <tr>
            <th>Player 5</th>
            <th />
            <th />
            <th />
          </tr>
          <tr>
            <th>Player 6</th>
            <th />
            <th />
            <th />
          </tr>
          <tr>
            <th>Player 7</th>
            <th />
            <th />
            <th />
          </tr>
          <tr>
            <th>Player 8</th>
            <th />
            <th />
            <th />
          </tr>
          <tr>
            <th>Player 9</th>
            <th />
            <th />
            <th />
          </tr>
          <tr>
            <th>Player 10</th>
            <th />
            <th />
            <th />
          </tr>
          <tr>
            <th>Player 11</th>
            <th />
            <th />
            <th />
          </tr>
        </table>
      </div>
    )
  }
}

export default TeamInfo
