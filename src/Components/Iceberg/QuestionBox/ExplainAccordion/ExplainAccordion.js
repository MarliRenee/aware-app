import React from 'react'
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
} from "@reach/accordion";
//import "@reach/accordion/styles.css";
import './Accordion.css'
import TableView from './tableView/tableView'


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
                                    {this.props.TellMeMore}
                                    {this.props.vocabTitle}
                                </div>
                                
                            </AccordionButton>
                        <AccordionPanel>
                            <p>{this.props.TellMeMoreText}</p>
                            {/* <p>{this.props.vocabArray}</p> */}

                            {/* <TableView  data={(this.props.vocabArray)}/> 
                            TO IMPLEMENT in TABLE IF GRABBING FROM SERVICE ARRAY */}
                            
                        </AccordionPanel>
                    </AccordionItem>
                </Accordion>
        );
    }
    
}