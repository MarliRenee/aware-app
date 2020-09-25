import React, { Component } from 'react'
import './QuestionBox.css'
import config from '../../../config'
import questionService from '../QuestionService'
import ExplainAccordion from './ExplainAccordion/ExplainAccordion'
//import TableView from './ExplainAccordion/tableView/tableView'
import IcebergApiService from '../../../Services/iceberg-api-service'
import TokenService from '../../../Services/token-service'
import End from './End/End'

//Everything currently commented out is the WIP for question-specific Vocab Prompts

//TO-DO *** SUBMIT DISABLED AFFECTS ALL BUTTONS, NOT ONLY CURRENT QUESTION BUTTON 

export default class QuestionBox extends Component {
    constructor(props) {
        super(props)
        this.state = {
            questionBank: questionService,
            count: 1,
            showEnd: false,
            questionNumber: 0,
            responseBody: '',
            responseArray: [],
            icebergId: '',
            //vocabArrayData: [],
            //vocabHelpVisible: false,

        }
    }

    static defaultProps = {
        history: {
        push: () => { }
        },
    }

    //TO-DO *** Vocab Options for pertinent questions
    // setVocabArrayData() {
    //     {this.state.questionBank.length > 0 && 
    //         this.state.questionBank
    //         .slice(0, this.state.count)
    //         .map(({vocabArray}) => 
    //             this.setState(
    //                 {vocabArrayData: {vocabArray}}
    //             )
    //         )
    //     }
    //     console.log(this.state.vocabArrayData)
    //     if(this.state.vocabArrayData < 1) {
    //         this.setState({vocabHelpVisible: false })
    //     } else{this.setState({vocabHelpVisible: true })}
    // }
    
    showEnd = (bool) => {
        this.setState({
          showEnd: bool
        })
    }

    scrollToBottom = () => {
        this.messagesEnd.scrollIntoView({ behavior: "smooth" })
    }
      
    componentDidMount() {
        //this.setVocabArrayData()
        this.scrollToBottom()
    }
      
    componentDidUpdate() {
        this.scrollToBottom()
    }


    showEnd = (bool) => {
        this.setState({
          showQuestionBox: bool
        })
    }


    handleResponse = (e) => {
        this.setState({
            responseBody: e.target.value
        })
    }

    addToResponseArray () {
        this.setState({
            responseArray: this.state.responseArray.concat(this.state.responseBody)
        })
    }

    handleSave = (e) => {
        e.preventDefault()

        IcebergApiService.postIceberg()
        .then(idData => {
            this.setState({
                icebergId: Object.values(idData)[0]
            })
            this.postResponses(this.state.icebergId)
        })
        .then(response =>
            // this.props.history.push('/')
            //TO-DO *** Change to history.props
            {window.location.href="/dashboard"}
        ) 
        
    }

    postResponses(icebergId) {
        let response = {  
            icebergid: icebergId,
            q1: this.state.responseArray[0],
            q2: this.state.responseArray[1],
            q3: this.state.responseArray[2],
            q4: this.state.responseArray[3],
            q5: this.state.responseArray[4],
            q6: this.state.responseArray[5],
            q7: this.state.responseArray[6],
            q8: this.state.responseArray[7],
        } 

        fetch(`${config.API_ENDPOINT}/responses`, {
            method: 'POST',
            body: JSON.stringify(response),
            headers: {
                'content-type': 'application/json',
                'authorization': `basic ${TokenService.getAuthToken()}`
            }
        })

    }

    incrementNumber() {
        this.setState({
            questionNumber: this.state.questionNumber + 1   
        })
    }

    render() {

        const isEnabled = this.state.responseBody.length > 0

        return (

            <div className="QuestionBox">

                <div className="Questions">
                    
                    {this.state.questionBank.length > 0 && 
                        this.state.questionBank.slice(0, this.state.count).map(
                        ({level, question, example, TellMeMoreText, vocabArray}) => (
                            <div className="IndividualQuestion" key={level}>
                                <h2>{level}</h2> 
                                <h3>{question}</h3>
                                <ExplainAccordion 
                                    title={"Tell Me More"} 
                                    body={TellMeMoreText}
                                />

                                <div className="textArea">
                                    <textarea 
                                        placeholder = {example}
                                        onChange = {this.handleResponse}
                                        className="textarea"
                                    >
                                    </textarea>
                                </div>
                                
                                {/* {this.state.vocabHelpVisible &&
                                    <ExplainAccordion 
                                    title={"Vocab Help"} 
                                    body={<TableView data={(vocabArray)}/>}
                                    />
                                } */}
                                

                                <button 
                                    type="submit"
                                    disabled={!isEnabled}
                                    className="QandA_Button" 
                                    onClick={() => {
                                        this.setState({ count: this.state.count + 1 })
                                        
                                        if (this.state.count > this.state.questionBank.length - 1) {
                                            this.setState({ showEnd: true})
                                        }
                                        else {
                                            this.setState({ showEnd: false})
                                        }
                                        this.incrementNumber()
                                        this.addToResponseArray()
                                        this.setState({ responseBody: '' })
                                        this.setVocabArrayData()
                                    }}
                                >
                                    Submit
                                </button>
                                                

                                {/* //INVISIBLE DIV TO PUSH SCROLL DOWN */}
                                <div style={{ float:"left", clear: "both" }}
                                    ref={(el) => { this.messagesEnd = el }}>
                                </div>

                            </div> 
                        )
                    )}
            
                </div>

                { this.state.showEnd && (
                    <div>
                        <End  handleSave={this.handleSave}/>
                    </div>) 
               }

                
                
            </div>
        )  
    } 
}
  