import React, {Component} from 'react'
import './End.css'


export default class End extends Component {
    render() {
        return (
            <section className="End">
                    <h2>You made it. Well done.</h2>
                    <p>
                    When you can know your self, you can better communicate who you are to others and become more congruent. Being congruent allows you to choose behaviors that reflect more of your authentic internal experiencing.
                    </p>
                
                <div className="EndButtons">
                    {/* //IF SIGNED IN, POSTS TO ARCHIVE */}
                    {/* //IF NOT SIGNED IN, DIRECTS TO SIGN IN/SIGN UP, THEN POSTS TO ARCHIVE */}
                    {/* Consider sign in as pop up so it doesn't direct away from the main page */}
                   <div>
                        <button>
                            Save Iceberg
                        </button>
                   </div>
                    

                    <div class="linkButton">
                        <a href="iceberg">New Iceberg</a>
                    </div>
                </div>
            </section>
        )
    }
}
