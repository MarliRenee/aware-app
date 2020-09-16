import React, {Component} from 'react'

import './tableView.css'

export default class TableView extends Component {
    

    render() {
        
        console.log(this.props.data);

        return (
            <div className="tableView">
                <div className="row">
                    
                    {this.props.data.length > 0 &&
                        this.props.data.map(
                        (vocabArray => (
                            <div className="column">
                                <ul>
                                { this.props.data.length > 0 &&
                                    vocabArray.map(
                                        (emotion => (
                                            <li><p>{emotion}</p></li>
                                        ))  
                                    )
                                }
                                </ul>
                            </div>
                        )) 
                    )}

                </div>

            </div>
        
        )
    }
}
