import React, {Component} from 'react'

import './tableView.css'

export default class TableView extends Component {
    

    render() {
        
        console.log(this.props.data);
        

        return (
            <div className="tableView">
                {/* PLACEHOLDER */}
                <div className="row">
                    <div className="column">
                        <ul>
                            <li>Ecstatic</li>
                            <li>Elated</li>
                            <li>Energetic</li>
                            <li>Euphoric</li>
                            <li>Excited</li>
                            <li>Exhilarated</li>
                            <li>Overjoyed</li>
                            <li>Thrilled</li>
                            <li>Vibrant</li>
                        </ul>
                        
                    </div>
                    <div className="column">
                        <ul>
                            <li>Awful</li>
                            <li>Blue</li>
                            <li>Crestfallen</li>
                            <li>Demoralized</li>
                            <li>Devalued</li>
                            <li>Discouraged</li>
                            <li>Distressed</li>
                            <li>Downcast</li>
                            <li>Fed up</li>
                        </ul>
                    </div>
                    <div className="column">
                        <ul>
                            <li>Adrift</li>
                            <li>Ambivalent</li>
                            <li>Bewildered</li>
                            <li>Puzzled</li>
                            <li>Blurred</li>
                            <li>Disorganized</li>
                            <li>Disquieted</li>
                            <li>Disturbed</li>
                            <li>Dizzy</li> 
                        </ul>
                    </div>
                    <div className="column">
                        <ul>
                            <li>Annoyed</li>
                            <li>Antagonistic</li>
                            <li>Crabby</li>
                            <li>Cranky</li>
                            <li>Exasperated</li>
                            <li>Fuming</li>
                            <li>Grouchy</li>
                            <li>Hostile</li>
                            <li>Indignant</li> 
                        </ul>
                    </div>
                </div> 


                {/* IN PROGRESS */}
                <div className="row">

                    {/* {
                        qBank.map((item, index) => { let data = item.vocabArray data.forEach(item => item.forEach( console.log(item) )) })
                    } 
                    Better way to do this might be array of objects??
                    */}
                    
                    
                    {/* {this.props.data.length > 0 &&
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
                    )} */}

            
                    <div className="column">
                        <ul>
                            {/* <li><p>{this.props.data}</p></li> */}
                        </ul>
                    </div>
                    <div className="column">
                        <ul>
                            {/* <li><p>{this.props.data}</p></li> */}
                        </ul>
                    </div>
                    <div className="column">
                        <ul>
                            {/* <li><p>{this.props.data}</p></li> */}
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
  