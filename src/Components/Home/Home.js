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
              <div className="SatirImage">
                  <p>[Photo Placeholder]</p>
              </div>
              <div className="VirginiaSatir">
                  <h2>The Mother of Family Therapy:</h2>
                  <h3>Virginia Satir</h3>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vel turpis elementum, porttitor risus sit amet, tempus enim. Phasellus pulvinar ipsum velit, dignissim ornare dolor venenatis eget.</p>
              </div>
          </div>
        </section>

        <div className="End">
            <NavLink className="linkButton" to="/iceberg">start demo</NavLink>
        </div>
      
      </main>
    )
  }
  
}
