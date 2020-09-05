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
                                { this.props.data.length > 0 &&
                                    this.props.data.map(
                                        <li><p>{vocabArray[0]}</p></li>
                                    )
                                }  
                            </div>
                        )) 
                    )}

            
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


// {this.props.data.length > 0 && 
//     this.props.data.map(
//         ({vocabArray}) => (
//             <div className="column">
//                         <ul>
//                             <li><p>{this.props.data}</p></li>
//                         </ul>
//             </div>
//         )
//     )
// }
  