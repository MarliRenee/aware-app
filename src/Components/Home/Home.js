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
          <h3>With eight simple prompts, the Iceberg Model will guide you to greater self-awareness</h3>
              <button className="exploreButton" >
                <NavLink className="linkButton" to="/iceberg">explore</NavLink>
              </button>
            <img 
              className="icebergImage"
              src="https://github.com/MarliRenee/aware-app/blob/styling/src/Assets/IcebergVectorWhite.png?raw=true"
              alt="A clean black and white vector of an iceberg"
            >
            </img>
        </header>

        <section className="About">
          <h2>A cognitive behavioral approach</h2>
          <h3>
            The Iceberg Model is a eight-step processing tool designed by Virgina Satir. It is used by therapists around the world
            to help their clients clarify feelings, find instigating triggers and zero in on core beliefs.
          </h3>
        </section>

        <section className="Register">
            <ValidatedRegistrationForm />
        </section>

        <section className="HowItWorks">
          <h1>About Virginia Satir</h1>
          <div className="SatirInfo">
                  <img 
                    className="SatirImage"
                    src="https://github.com/MarliRenee/aware-app/blob/checkpoint6/src/Assets/VirginiaSatir.jpg?raw=true"
                    alt="An elderly Virginia Satir in black and white. The crop is close around her face, and she is smiling warmly, gazing at the camera"
                  ></img>
              <div className="VirginiaSatir">
                  <h2>The Mother of Family Therapy:</h2>
                  <p>Virginia Satir pioneered the field of family reconstruction therapy. Her key idea was that the "surface problem" itself 
                  was seldom the real problem; rather, how people coped with the issue created the problem. She was voted the most influential 
                  therapist in two national surveys of Psychiatrists, Psychologists, Social Workers, and Marriage and Family Therapists.</p>
              </div>
          </div>
        </section>

        {/* TO-DO: Change to button & props.history.push */}
        <button className="End">
            <NavLink className="linkButton" to="/iceberg">start demo</NavLink>
        </button>
      
      </main>
    )
  }
  
}
