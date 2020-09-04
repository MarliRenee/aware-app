import React from "react";
import { Questions } from './IcebergQContent.js'

import './QuestionPod.css'


export default function QuestionPod(props) {


    return (
        <div className="QuestionBox">
            <div className="Title">
                <h2>{Questions.map(question => <div>{question.title}</div>)}</h2>
            </div>

            <div className="Question">
                <h3>{Questions.map(question => <div>{question.question}</div>)}</h3>
            </div>

            <div className="TellMeMore">
                <button className="helpButton">
                    ?
                </button>
                <p>Tell me more</p>
            </div>

            <textarea></textarea>

            <div className="VocabHelp">
                <button className="helpButton">
                    ?
                </button>
                <p>Vocab Inspiration</p>
            </div>

            <button className="QandA_Button">
                Submit
            </button>
 
        </div>
      
    );
}
