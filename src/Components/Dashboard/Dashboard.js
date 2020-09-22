import React, { Component } from 'react';
import ArchiveIceberg from '../ArchiveIceberg/ArchiveIceberg.js'
import IcebergApiService from '../../Services/iceberg-api-service'
import IcebergListContext from '../../Contexts/IcebergListContext'
import PastIcebergList from '../Iceberg/PastIcebergList'
import { NavLink } from 'react-router-dom';


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
      <ArchiveIceberg
      />
    )
  }


  render() {

    return (
      <main className='Dashboard'>
        <header>
          <h1>Welcome</h1>
          <div className="Explore">
            <NavLink className="linkButton" to="/iceberg">New Iceberg</NavLink>
          </div>
        </header>

        <PastIcebergList />

    </main>
  );
  }
  
}
