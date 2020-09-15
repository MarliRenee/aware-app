import React, { Component } from 'react';
import ArchiveIceberg from '../ArchiveIceberg/ArchiveIceberg.js'
import IcebergApiService from '../../Services/iceberg-api-service'
import IcebergListContext from '../../Contexts/IcebergListContext'


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
    // const { error } = this.context

    return (
      <main className='Dashboard'>
        <header>
          <h1>Welcome</h1>
          <div className="linkButton">
            <a href="iceberg">New Iceberg</a>
          </div>
        </header>

        <ArchiveIceberg />
        {/* <section className="Archive">
          {error
            ? <p className='red'>There was an error, try again</p>
            : this.renderIcebergs()}
        </section> */}
    </main>
  );
  }
  
}
