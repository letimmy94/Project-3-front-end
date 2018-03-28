import React, { Component } from 'react'
import './Container.css'
import axios from 'axios'

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
    return <div> Teams will go here </div>
  }
}

export default Container
