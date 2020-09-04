import React, { Component, useState } from 'react';
import './QuestionBox.css'
import quizService from '../Iceberg/QuizService'
import ExplainAccordion from './ExplainAccordion/ExplainAccordion'

export default class QuestionBox extends Component {
  
    state = {
      questionBank: quizService,
    };


  render() {

    return (

        <div className="QuestionBox">

            <div className="Questions">
                
                {this.state.questionBank.length > 0 && 
                    this.state.questionBank.map(
                    ({question, answers, questionId, extraDescription, extraDescriptionText, vocabTitle, vocabArray}) => (
                        <div className="IndividualQuestion">
                            <h2>{question}</h2> 
                            <h3>{answers}</h3>

                            <div className="Accordion"> 
                                <ExplainAccordion 
                                    extraDescription={extraDescription} 
                                    extraDescriptionText={extraDescriptionText} 

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


                            <button className="QandA_Button">
                                Submit
                            </button>
                        </div> 
                        
                    )
                )}
        
            </div>


            
        </div>
    );   
  } 
}


//SECOND ITERATION
// const QuestionBox = ({ question, options }) => {
//     return (
//         <div className="questionBox">
//             <div className="question">{question}</div>
//         </div>
//     )
// }

// export default QuestionBox;


//FIRST ITERATION
// export default class QuestionBox extends Component {

// }




{/* {Questions.map(findQuestion => 
            //             <div>
            //                 <div className="title"><h2>{findQuestion.title}</h2></div>
            //                 <div class="question"><h3>{findQuestion.question}</h3></div>
            //             </div>
            //         )} */}
        
            {/* //         <div className="TellMeMore">
            //             <button className="helpButton">
            //                 ?
            //             </button>
            //             <p>Tell me more</p>
            //         </div>
        
            //         <textarea></textarea>
        
            //         <div className="VocabHelp">
            //             <button className="helpButton">
            //                 ?
            //             </button>
            //             <p>Vocab Inspiration</p>
            //         </div>
        
            //         <button className="QandA_Button">
            //             Submit
            //         </button> */}
