import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import ValidatedRegistrationForm from '../Login/Register/ValidatedRegistrationForm'
import './Home.css'

export default class Home extends Component {

  render() {

    return (
      <main className='Home'>

        <header>
          <h1>Understand Your Emotions</h1>
          <h3>With simple prompts, the Iceberg Model will guide you to a greater understanding of yourself</h3>
          <div>
            <NavLink className="linkButton" to="/iceberg">explore</NavLink>
          </div>
          

        </header>

        <section className="About">
          <h2>A cognitive behavioral approach</h2>
          <h3>Clarify your feelings, find instigating triggers and zero in on core beliefs.</h3>
          
          <h2>Register</h2>
          <ValidatedRegistrationForm />
          
          <div className="rectangleInfo">
              <div className="rectangle1">
                  <h3>Easy to Use</h3>
                  <p>One journey through seven simple levels</p>
              </div>
              <div className="rectangle2">
                  <h3>Easy to Return</h3>
                  <p>Review for insight into behavior patterns</p>
              </div>
          </div>
        </section>

        <section className="HowItWorks">
          <h1>How It Works</h1>
          <div className="SatirInfo">
                  <img 
                    className="SatirImage"
                    src="https://github.com/MarliRenee/aware-app/blob/checkpoint6/src/Assets/VirginiaSatir.jpg?raw=true"
                    alt="A black and white photo of Virginia Satir. The photo is close cropped around her face, and she is smiling"
                  ></img>
              <div className="VirginiaSatir">
                  <h2>The Mother of Family Therapy:</h2>
                  <h3>Virginia Satir</h3>
                  <p>Virginia Satir pioneered the field of family reconstruction therapy. Her kid idea was that the "surface problem" itself 
                  was seldom the real problem; rather, how people coped with the issue created the problem. She was voted the most influential 
                  therapist in two national surveys of Psychiatrists, Psychologists, Social Workers, and Marriage and Family Therapists.</p>
              </div>
          </div>
        </section>

        {/* TO-DO: Change to button & props.history.push */}
        <div className="End">
            <NavLink className="linkButton" to="/iceberg">start demo</NavLink>
        </div>
      
      </main>
    )
  }
  
}
