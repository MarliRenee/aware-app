import React, { Component } from 'react'
import { format } from 'date-fns'
import { NavLink } from 'react-router-dom'
//import TokenService from '../../Services/token-service'
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
        // fetch(`${config.API_ENDPOINT}/icebergs`, {
        //     headers: {
        //         'authorization': `basic ${TokenService.getAuthToken()}`,
        //     },
        // })
        IcebergApiService.getIcebergs()
        .then(response => response.json())
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
                <ul>
                    {this.state.listItems.length > 0 &&
                    this.state.listItems.map(item =>
                        <li key={item.id} className="IcebergArchive">
                            <NavLink
                                to={`/iceberg/${item.id}`}
                            >
                                {item.id + '.   ' + format(new Date(item.modified), "MMM dd, yyyy")}
                                
                            </NavLink>
                        </li>
                    )}
                </ul>
            </div>
            
        )
    }
}