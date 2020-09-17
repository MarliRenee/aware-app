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
            level: '',

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

        // {this.state.pastAnswer.length > 0 &&
        //     this.state.pastAnswer
        //         .slice(icebergId-1, icebergId)
        //         .map( date =>
        //         <h3 key={date.id}>Completed on: {date.modified}</h3>
        //     )}

        console.log(this.state.pastAnswer)
        console.log(this.state.questionBank)

        return (

            <div className="QuestionBox">

                <div className="Questions">
                    
                    {this.state.questionBank.length > 0 && 
                        this.state.questionBank
                        .map(({level, question, TellMeMoreText, vocabArray, order}) => (
                            <div className="IndividualQuestion" key={level}>
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
                                        {this.state.pastAnswer.length > 0 &&
                                            this.state.pastAnswer[0].q1
                                                
                                                
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