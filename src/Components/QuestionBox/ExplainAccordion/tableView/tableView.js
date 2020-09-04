import React, {Component} from 'react'

import './tableView.css'

export default class TableView extends Component {


    render() {
        
        console.log(this.props)

    
        return (
            <div classname="tableView">

            <div className="row">

                    <div className="column">
                        <ul>
                            <li><p>{this.props.data}</p></li>
                        </ul>
                    </div>
                    <div className="column">
                        <ul>
                            <li><p>{this.props.data}</p></li>
                        </ul>
                    </div>
                    <div className="column">
                        <ul>
                            <li><p>{this.props.data}</p></li>
                        </ul>
                    </div>
                </div>

            </div>
        
        )
    }


} 

  