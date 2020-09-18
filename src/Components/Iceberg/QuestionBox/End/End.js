import React, {Component} from 'react'
import { Link } from 'react-router-dom'
import './End.css'


class End extends Component {

    render() {
        return (

            <section className="End">
                    <h2>You made it. Well done.</h2>
                    <p>
                    When you know your self, you can better communicate who you are to others. You can choose behaviors that reflect more of your authentic internal experience. You can compare your internal experience with your understanding of reality, and work to align the two.
                    </p>
                    <p>
                    You are valuable, loved and deserve to be whole.  
                    </p>
                
                <div className="EndButtons">
                    {/* //IF SIGNED IN, POSTS TO ARCHIVE */}

                    {/* //IF NOT SIGNED IN, DIRECTS TO SIGN IN/SIGN UP, THEN POSTS TO ARCHIVE */}
                    {/* Consider sign in as pop up so it doesn't direct away from the main page */}
                    <button 
                        className="linkButton" 
                        onClick={this.props.handleSave}
                    >
                       <Link to='/dashboard'>Save</Link> 
                    </button>
                    

                    <button className="linkButton" >
                        <Link to='/iceberg'>New Iceberg</Link>
                    </button>
                </div>
            </section>
        )
    }
}

export default End;