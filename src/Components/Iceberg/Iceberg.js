import React, { Component } from 'react';
import "./Iceberg.css";
import QuestionPod from "../QuestionPod/QuestionPod.js"

class Iceberg extends Component {
  render() {


    return (
      <main className='Iceberg'>

        <header>
            <h1>The Personal Iceberg</h1>
           <h3>Emotions are just the surface...</h3>
           <button>Deep dive</button>
        </header>

        <QuestionPod/>

        {/* <ul>
          {props.notes.map(note =>
            <li key={note.id}>
              <Note
                id={note.id}
                name={note.name}
                modified={note.modified}
              />
            </li>
          )}
        </ul> */}


      <section className="End">
          <h2>You made it. Well done.</h2>
          <p>
            When you can know your self, you can better communicate who you are to others and become more congruent. Being congruent allows you to choose behaviors that reflect more of your authentic internal experiencing.
          </p>
        <button>
            New Iceberg
        </button>
      </section>
        

      </main>
      
  );

  }
 
}

export default Iceberg;