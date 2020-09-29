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
                        <div className="TellMeMore">
                            {this.props.title + '...'}
                        </div>
                        
                    </AccordionButton>
                    <AccordionPanel className="AccordionText">
                        <div className="speech-bubble">
                            <div className="speech-bubble-ds__arrow"></div>
                            {this.props.body}
                        </div>
                    </AccordionPanel>
                </AccordionItem>
            </Accordion>
            </div>
            
        )
    }
    
}