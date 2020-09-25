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
            
            <Accordion collapsible>
                <AccordionItem>
                        <AccordionButton className="AccordionText">
                            
                            <div className="helpButton">
                                ?
                            </div>

                            <div className="TellMeMore">
                                {this.props.title}
                            </div>
                            
                        </AccordionButton>
                    <AccordionPanel className="AccordionText">
                        {this.props.body}
                    </AccordionPanel>
                </AccordionItem>
            </Accordion>
        )
    }
    
}