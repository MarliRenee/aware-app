import React, { Component } from 'react';
import "./Iceberg.css";
import QuestionBox from "./QuestionBox/QuestionBox.js"

export default class Iceberg extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showQuestionBox: false 
    }
  }

  showQuestionBox = (bool) => {
    this.setState({
      showQuestionBox: bool
    });
  }

  render() {

    return (

      <div className="Iceberg">

        <header>
          <h1>The Personal Iceberg</h1>
          <h3>Emotions are just the surface...</h3>
          <button onClick={this.showQuestionBox.bind(null, true)}>
            Deep dive
          </button>
        </header>

        { this.state.showQuestionBox && (
          <div>
            <QuestionBox  />
          </div>) 
        }

      </div>
    );   
  } 
}