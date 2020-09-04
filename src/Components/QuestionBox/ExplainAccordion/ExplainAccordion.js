import React from 'react'
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
} from "@reach/accordion";
//import "@reach/accordion/styles.css";
import './Accordion.css'
import TableView from './ExplainAccordion/tableView/tableView'


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

                            <TableView data={(this.props.vocabArray)} /> 

                        </AccordionPanel>
                    </AccordionItem>
                </Accordion>
        );
    }
    
}