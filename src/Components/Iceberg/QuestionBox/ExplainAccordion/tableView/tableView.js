import React, {Component} from 'react'

import './tableView.css'

export default class TableView extends Component {
    

    render() {

        return (
            <div className="tableView">
                 
                 {this.props.data.length > 0 &&
                        this.props.data.map(
                        (vocabArray => (
                            <div className="column" key={vocabArray}>
                                <ul>
                                { this.props.data.length > 0 &&
                                    vocabArray.map(
                                        (emotion => (
                                            <li key={emotion}>{emotion}</li>
                                        ))  
                                    )
                                }
                                </ul>
                            </div>
                        )) 
                    )}

            </div>
        
        )
    }
}
