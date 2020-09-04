import React, {Component} from 'react'

export default class TableView extends Component {

    // rendertableView() {
    //     return this.props.data.map(
    //         ({vocabArray}) => {
    //         return (
    //             <ul>
    //                 <li>{vocabArray}</li>
    //             </ul>
            
    //         )
    //     }) 
    // }
  
    render() {
        console.log(this.props)

        return (
            <div classname="tableView">
               
                <div>
                   <p>{this.props.data}</p> 
                </div>
            </div>
           
        )


    }
} 

// {this.state.questionBank.length > 0 && 
//                     this.state.questionBank.map(
//                     ({vocabArray}) => (
//                         <div className="EmotionsList">
//                             <h2>{vocabArray}</h2> 
//                         </div> 
                        
//                     )
//                 )}
               
//                <div>
//                     {emotions.map(function(d, idx){
//                         return (<li key={idx}>{d.vocabArray}</li>)
//                     })}
//                 </div>

// {this.rendertableView()}

// <div className="row">

//     <div className="column">
//         <ul>
//         <li>TEST</li>
//         </ul>
//     </div>

// </div> 