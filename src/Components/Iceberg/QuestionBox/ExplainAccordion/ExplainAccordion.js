import React from 'react'
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
} from "@reach/accordion"
import "@reach/accordion/styles.css"
import './Accordion.css'


export default class ExplainAccordion extends React.Component {
    render() {

        return (
            <div className="Accordion">
                <Accordion collapsible>
                <AccordionItem>
                    <AccordionButton className="AccordionButton">
                    <div className="first-speech-bubble">
                        <div className="first-speech-bubble-ds__arrow"></div>
                        <div className="TellMeMore">
                            {this.props.title + '...'}
                        </div>
                    </div>   
                    </AccordionButton>
                    <AccordionPanel className="AccordionText">
                        <div className="second-speech-bubble">
                            <div className="second-speech-bubble-ds__arrow"></div>
                            {this.props.body}
                        </div>
                    </AccordionPanel>
                </AccordionItem>
            </Accordion>
            </div>
            
        )
    }
    
}