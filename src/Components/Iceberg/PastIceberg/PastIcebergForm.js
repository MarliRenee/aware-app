import React, { Component } from 'react';
import '../QuestionBox/QuestionBox.css'
import questionService from '../QuestionService'
import ExplainAccordion from '../QuestionBox/ExplainAccordion/ExplainAccordion'
import TableView from '../QuestionBox/ExplainAccordion/tableView/tableView';
import IcebergApiService from '../../../Services/iceberg-api-service'


export default class PastIcebergForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            questionBank: questionService,
            pastAnswer: [],
            qNumber: '',

        };
    }

    componentDidMount() {
        this.ReponsesData() 
    }

    ReponsesData() {
        IcebergApiService.getResponses()
        .then(data => {
            this.setState({
                pastAnswer: data
            })
        })
        
    }

    render() {

        const icebergId = this.props.icebergId
        console.log(icebergId)
        console.log( 
            this.state.pastAnswer
            .slice(icebergId-1,icebergId)
            
        )

        return (

            <div className="QuestionBox">

                <div className="Questions">
                    
                    {this.state.questionBank.length > 0 && 
                        this.state.questionBank
                        .map(({level, question, TellMeMoreText, vocabArray, order}) => (

                            <div className="IndividualQuestion" key={order}>
                                <h2>{level}</h2> 
                                <h3>{question}</h3>
                                
                                <ExplainAccordion 
                                    title={"Tell Me More"} 
                                    body={TellMeMoreText}
                                />
                                
                                <div className="textArea">
                                    <textarea 
                                        readOnly={true} 
                                        value=
                                        {   
                                            this.state.pastAnswer.length > 0 &&
                                            this.state.pastAnswer[icebergId-1]['q' + order]
                                        }   
                                    >
                                    </textarea>
                                </div>
                    
                               
                                <ExplainAccordion 
                                    title={"Vocab Help"} 
                                    body={<TableView data={(vocabArray)}/>}
                                />

                            </div> 
                            
                        ), this)
                        
                    }

                </div>
                
            </div>
        );   
    } 
}