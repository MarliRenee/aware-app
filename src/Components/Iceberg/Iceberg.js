import React, { Component } from 'react';
import "./Iceberg.css";
import QuestionBox from "../QuestionBox/QuestionBox.js"
import quizService from '../Iceberg/QuizService'

export default class Iceberg extends Component {


  render() {
    return (

      <div className="Iceberg">

        <header>
          <h1>The Personal Iceberg</h1>
          <h3>Emotions are just the surface...</h3>
          <button>Deep dive</button>
        </header>

        <QuestionBox  />
    
        <section className="End">
            <h2>You made it. Well done.</h2>
            <p>
              When you can know your self, you can better communicate who you are to others and become more congruent. Being congruent allows you to choose behaviors that reflect more of your authentic internal experiencing.
            </p>
          <button>
              New Iceberg
          </button>
        </section>
      </div>
    );   
  } 
}