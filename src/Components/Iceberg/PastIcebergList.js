import React, { Component } from 'react'
import { format } from 'date-fns'
import { NavLink } from 'react-router-dom'
import IcebergApiService from '../../Services/iceberg-api-service'


import './PastIcebergList.css'

export default class IcebergListTest extends Component {
   
    constructor(props) {
        super(props);
        this.state = {
          listItems: [],
        };
        
    }

    componentDidMount() {
        this.IcebergData()
    }

    IcebergData () {
        IcebergApiService.getIcebergs()
        .then(data => {
            this.setState({
                listItems: data
            })
        });  
        
    }

    render() {

        return (
           
            <div className="IcebergList">
                <h2>Past Icebergs</h2>

                {this.state.listItems.length === 0 ? (
                    <span className="no-icebergs">There are no icebergs to display. Get started by clicking 'New Iceberg' above.</span>
                ) : (
                    <span className="yes-icebergs">{
                        <ul>
                            {
                            this.state.listItems.map(item =>
                                <li key={item.id} className="IcebergArchive">
                                <NavLink
                                        to={`/iceberg/${item.id}`}
                                    >
                                        {'Iceberg from ' + format(new Date(item.modified), "MMM dd, yyyy")}
                                    </NavLink>
                                </li>
                            )}
                        </ul> 
                    }</span>
                )}
            </div>
            
        )
    }
}