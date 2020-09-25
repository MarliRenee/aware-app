import React, {Component} from 'react'
import TokenService from '../../../../Services/token-service'
import './End.css'


class End extends Component {

    state = {
        saveVisible: false
    }

    componentDidMount() {
        this.checkLoggedIn()
    }
   
    //TO-DO *** CHANGE TO PROPS HISTORY
    link() {
        window.location.href="/iceberg"
    }

    checkLoggedIn() {
        if (TokenService.hasAuthToken() === true){
            this.setState({ saveVisible: true})
        } else (this.setState({ saveVisible: false}))
    }
    
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
                    
                    {this.state.saveVisible && 
    
                        <button onClick={this.props.handleSave}
                        >
                        Save
                        </button>
                    }

                    <button onClick={this.link}>
                        New Iceberg
                    </button>
                </div>
            </section>
        )
    }
}

export default End