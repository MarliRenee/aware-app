import React from 'react'
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
} from "@reach/accordion";
//import "@reach/accordion/styles.css";
import './Accordion.css'


export default class ExplainAccordion extends React.Component {
    render() {

        // const vocabPrompts = this.props.vocabArray;
        // const vocabList = vocabPrompts.map((vocabPrompts) =>
        //     <li>{vocabPrompts}</li>
        // );

        return (
            
                <Accordion collapsible>
                    <AccordionItem>
                            <AccordionButton className="AccordionText">
                                
                                <div className="helpButton">
                                    ?
                                </div>

                                <div className="TellMeMore">
                                    {this.props.extraDescription}
                                    {this.props.vocabTitle}
                                </div>
                                
                            </AccordionButton>
                        <AccordionPanel>
                            <p>{this.props.extraDescriptionText}</p>
                            <p>
                            
                                <div className="row">

                                    <div className="column">
                                        <ul>
                                           {this.props.vocabArray}
                                        </ul>
                                    </div>
                                    
                                </div>    
                            </p>
                        </AccordionPanel>
                    </AccordionItem>
                </Accordion>
        );
    }
    
}

// ({question, answers, questionId}) => (
//     <div className="IndividualQuestion">
//         <h2>{question}</h2> 
//         <h3>{answers}</h3>

//         <div className="Accordion"> 
//             <ExplainAccordion title="Tell Me More"/>
//         </div>

//         {/* <textarea></textarea> */}

//         <div className="VocabHelp">
//             <button className="helpButton">
//                 ?
//             </button>
//             <p>Vocab Inspiration</p>
//         </div>

//         <button className="QandA_Button">
//             Submit
//         </button>
//     </div> 
    
// )
// )}
