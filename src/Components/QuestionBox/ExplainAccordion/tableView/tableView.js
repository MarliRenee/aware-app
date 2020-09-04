import React, {Component} from 'react'

export default class TableView extends Component {
  
    rendertableView() {
        return this.props.data.map(
            ({vocabArray}) => {
            return (
                <ul>
                    <li>{vocabArray}</li>
                </ul>
            
            )
        }) 
    }

    render() {
        return (
            <div>
                <div>
                    {this.rendertableView}
                </div>
                <div>
                    {this.props.data}
                </div>
            </div>
           
        )


    }
} 

// this.state.questionBank.map(
//     ({question, answers, questionId, extraDescription, extraDescriptionText, vocabTitle, vocabArray}) => (

// use 


{/* <div className="row">

<div className="column">
    <ul>
    <li>TEST</li>
    </ul>
</div>

</div>   */}