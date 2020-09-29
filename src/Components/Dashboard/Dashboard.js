import React, { Component } from 'react'
import ArchiveIceberg from '../ArchiveIceberg/ArchiveIceberg.js'
import IcebergApiService from '../../Services/iceberg-api-service'
import IcebergListContext from '../../Contexts/IcebergListContext'
import PastIcebergList from '../Iceberg/PastIcebergList'

import './Dashboard.css'


export default class Dashboard extends Component {

  static contextType = IcebergListContext

  componentDidMount() {
    this.context.clearError()
    IcebergApiService.getIcebergs()
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
          {/* TO-DO *** ADD PERSONALIZED USER NAME GREETING {this.props.username} */}
          <h1>Welcome</h1>
          <button className="Explore" onClick={this.linkIceberg}>
            New Iceberg
            {/* <NavLink className="linkButton" to="/iceberg">New Iceberg</NavLink> */}
          </button>
        </header>

        <PastIcebergList />

    </main>
  )
  }
  
}
