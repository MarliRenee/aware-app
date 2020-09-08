import React, { Component } from 'react';
import './QuestionBox.css'
import questionService from '../QuestionService'
import ExplainAccordion from './ExplainAccordion/ExplainAccordion'
import TableView from './ExplainAccordion/tableView/tableView';
import End from './End/End'


export default class QuestionBox extends Component {
    constructor(props) {
        super(props);
        this.state = {
            questionBank: questionService,
            count: 1,
            showEnd: false
        };
    }

    showEnd = (bool) => {
        this.setState({
          showEnd: bool
        });
      }


    scrollToBottom = () => {
        this.messagesEnd.scrollIntoView({ behavior: "smooth" });
    }
      
    componentDidMount() {
        this.scrollToBottom();
    }
      
    componentDidUpdate() {
        this.scrollToBottom();
    }


    showEnd = (bool) => {
        this.setState({
          showQuestionBox: bool
        });
    }


    render() {

       
        return (

            <div className="QuestionBox">

                <div className="Questions">
                    
                    {this.state.questionBank.length > 0 && 
                        this.state.questionBank.slice(0, this.state.count).map(
                        ({level, question, order, TellMeMoreText, vocabArray}) => (
                            <div className="IndividualQuestion">
                                <h2>{level}</h2> 
                                <h3>{question}</h3>
                                <ExplainAccordion 
                                    title={"Tell Me More"} 
                                    body={TellMeMoreText}
                                />

                                <div className="textArea">
                                    <textarea></textarea>
                                </div>


                                <ExplainAccordion 
                                    title={"Vocab Help"} 
                                    body={<TableView data={(vocabArray)}/>}
                                />


                                <button 
                                    className="QandA_Button" 
                                    onClick={() => {
                                        console.log(this.state.count)
                                        this.setState({ count: this.state.count + 1 });
                                        
                                        if (this.state.count > this.state.questionBank.length) {
                                            this.setState({ showEnd: true})
                                        }
                                        else {
                                            this.setState({ showEnd: false})
                                        }
                                    }}
                                >
                                    Submit
                                </button>
                                                

                                {/* //INVISIBLE DIV TO PUSH SCROLL DOWN */}
                                <div style={{ float:"left", clear: "both" }}
                                    ref={(el) => { this.messagesEnd = el; }}>
                                </div>

                            </div> 
                            
                        )
                    )}
            
                </div>

                { this.state.showEnd && (
                    <div>
                        <End  />
                    </div>) 
               }

                
                
            </div>
        );   
    } 
}