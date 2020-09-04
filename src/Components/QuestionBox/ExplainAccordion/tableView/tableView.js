import React, {Component} from 'react'

import './tableView.css'

export default class TableView extends Component {
    
    render() {
        
        console.log(this.props.data);


        data.map(function(subarray) {
            return subarray.map(function(emotion) {
                return 
                    <li>{emotion}</li>;
            })
        })
    
        return (
            <div classname="tableView">

            <div className="row">
                    
                    <div className="column">
                        

                    { (this.props.data) ? this.props.data.map(d => <li><p>{this.props.data[0]}</p></li>) : null }

                        <ul>
                             
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
  