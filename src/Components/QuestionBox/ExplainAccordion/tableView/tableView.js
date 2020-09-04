import React, {Component} from 'react'

import './tableView.css'

export default class TableView extends Component {
    
    render() {
        
        console.log(this.props.data);
        // qBank[0].vocabArray[0]];

        return (
            <div classname="tableView">

            <div className="row">
                    
                    {(this.props.data) ?
                        this.props.data.map(
                        (({vocabArray}) => (
                            <div className="column">
                                { (this.props.data) ? this.props.data.map(<li><p>{vocabArray[0]}</p></li>) : null }  
                            </div>
                        )) : null 
                    };

                

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
  