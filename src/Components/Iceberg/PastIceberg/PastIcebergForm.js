import React, { Component } from 'react';
import '../QuestionBox/QuestionBox.css'
import config from '../../../config'
import questionService from '../QuestionService'
import ExplainAccordion from '../QuestionBox/ExplainAccordion/ExplainAccordion'
import TableView from '../QuestionBox/ExplainAccordion/tableView/tableView';


export default class PastIcebergForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            questionBank: questionService,
            pastAnswer: '',

        };
    }

    componentDidMount() {
        this.ReponsesData()
    }

    ReponsesData() {
        fetch(`${config.API_ENDPOINT}/responses`)
        .then(response => response.json())
        .then(data => {
            this.setState({
                pastAnswer: data
            })
        });  
        
    }

    render() {

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
                                            //Sample, have to fill with 
                                            //this.state.pastAnswer[icebergIdVariable].questionVariable
                                            this.state.pastAnswer.length > 0 &&
                                             this.state.pastAnswer[2].q1
                                        }   
                                    >
                                    </textarea>
                                </div>
                    
                               
                                <ExplainAccordion 
                                    title={"Vocab Help"} 
                                    body={<TableView data={(vocabArray)}/>}
                                />

                            </div> 
                            
                        ))
                        
                    }

                </div>
                
            </div>
        );   
    } 
}