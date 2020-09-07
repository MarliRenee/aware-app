import React, { Component } from 'react';
import './QuestionBox.css'
import quizService from '../Iceberg/QuizService'
import ExplainAccordion from './ExplainAccordion/ExplainAccordion'
import TableView from './ExplainAccordion/tableView/tableView';
import End from './End/End'


export default class QuestionBox extends Component {
    constructor(props) {
        super(props);
        this.state = {
            questionBank: quizService,
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

    // checkCount() {
    //     alert('Hello!');
    //     if (this.state.count > 3) {
    //         this.setState({ showEnd: true})
    //     }
    //     else {
    //         this.setState({ showEnd: false})
    //     }
    // }

    render() {

       
        return (

            <div className="QuestionBox">

                <div className="Questions">
                    
                    {this.state.questionBank.length > 0 && 
                        this.state.questionBank.slice(0, this.state.count).map(
                        ({question, answers, questionId, TellMeMore, TellMeMoreText, vocabTitle, vocabArray}) => (
                            <div className="IndividualQuestion">
                                <h2>{question}</h2> 
                                <h3>{answers}</h3>

                                <div className="Accordion"> 
                                    <ExplainAccordion 
                                        TellMeMore={TellMeMore} 
                                        TellMeMoreText={TellMeMoreText} 

                                    />
                                </div>

                                <div className="textArea">
                                    <textarea></textarea>
                                </div>

                                <div className="Accordion"> 
                                    <ExplainAccordion 
                                        vocabTitle={vocabTitle} 
                                        vocabArray={vocabArray} 
                                    />
                                </div>


                                <button 
                                    className="QandA_Button" 
                                    onClick={() => {
                                        console.log(this.state.count)
                                        this.setState({ count: this.state.count + 1 });
                                        // this.setState({showEnd: true})

                                        if (this.state.count > 6) {
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
