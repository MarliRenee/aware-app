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
                    <div className="EndGreeting">
                        <div className="IcebergImage">
                            <img 
                            className="EndImage"
                            src="https://github.com/MarliRenee/aware-app/blob/styling/src/Assets/IcebergTopHalf-03.png?raw=true"
                            alt="A clean black and white vector of an iceberg"
                            >
                            </img>
                        </div>
                        <div className="EndText">
                            <h1>You made it.</h1>
                            <h1>Well done.</h1>
                            <h3>You faced your fears, now finish with truth. You have immense worth. You deserve joy, connection and purpose.</h3>
                        </div>
                        <p>
                        When you know your self, you can better communicate who you are to others. You can choose behaviors that reflect more of your authentic internal experience. You can compare your internal experience with your understanding of reality, and work to align the two.
                        </p>
                    </div>
                    
                    
                    
                    
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