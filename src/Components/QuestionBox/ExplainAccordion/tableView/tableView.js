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
                    {this.rendertableView()}
                </div>
                <div>
                    {this.props.data}
                </div>
            </div>
           
        )


    }
} 

{/* <div className="row">

<div className="column">
    <ul>
    <li>TEST</li>
    </ul>
</div>

</div>   */}