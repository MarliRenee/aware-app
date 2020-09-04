import React, {Component} from 'react'

import './tableView.css'

export default class TableView extends Component {
    
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //       data: this.props.vocabArray,
    //     };
    // }

    render() {
        
        console.log(this.props.data);
        const data = this.props.data;

    
        return (
            <div classname="tableView">

            <div className="row">
                    
                    <div className="column">
                        <ul>
                            {this.props.data.map(d => <li>{d.vocabArray}</li>)}
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
  