import React, { Component } from 'react'
import config from '../../config'

import './testIcebergList.css'

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
        fetch(`${config.API_ENDPOINT}/icebergs`)
        .then(response => response.json())
        .then(data => {
            console.log(data)
            this.setState({
                listItems: data
            })
        });  
        
    }

    render() {

        console.log(this.state.listItems)

        return (
           
            <div className="IcebergList">
                <h2>Past Icebergs</h2>
                {this.state.listItems.length > 0 &&
                this.state.listItems.map(item =>
                    <div className="IcebergArchive">
                        <u>
                            <li>{item.id + ' ' + item.modified}</li>
                        </u>
                    </div>    
                )}
            
            </div>
            
        )
    }
}