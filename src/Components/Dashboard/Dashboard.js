import React, { Component } from 'react'
import ArchiveIceberg from '../ArchiveIceberg/ArchiveIceberg.js'
import IcebergApiService from '../../Services/iceberg-api-service'
import IcebergListContext from '../../Contexts/IcebergListContext'
import PastIcebergList from '../Iceberg/PastIcebergList'

import './Dashboard.css'


export default class Dashboard extends Component {

  static contextType = IcebergListContext

  state = {
    userid: '',
    username: '',
  }

  componentDidMount() {
    this.context.clearError()
    IcebergApiService.getIcebergs()
      .then(data => {
        data.map(results => {
          this.setState({
            userid: results.userid - 1
          })
          IcebergApiService.getUsers()
          .then(data => {
            this.setState({
              username:(Object.values(data[this.state.userid])[1])
            })
            
          }) 
          console.log(this.state.userid)
          console.log(this.state.username)
        })
        
      }) 
      .then(this.context.setIcebergList)
      .catch(this.context.setError)

  }

  renderIcebergs() {
    const { icebergList = [] } = this.context
    return icebergList.map(iceberg =>
      <ArchiveIceberg/>
    )
  }

  linkIceberg = () => {
    this.props.history.push('/iceberg')
  }

  render() {


    return (
      <main className='Dashboard'>
        <header>
          <h1>Welcome {this.state.username}</h1>
          <button className="Explore" onClick={this.linkIceberg}>
            New Iceberg
          </button>
        </header>

        <PastIcebergList />

    </main>
  )
  }
  
}
