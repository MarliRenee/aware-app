import React, { Component } from 'react'
import { format } from 'date-fns'
import PastIcebergForm from './PastIcebergForm'
import IcebergApiService from '../../../Services/iceberg-api-service'

//TO-DO Make function for finding IcebergId neater -- slice by key value instead?? 

export default class PastIceberg extends Component {

    constructor(props) {
        super(props);
        this.state = {
          listItems: [],
        };
    }
    
    static defaultProps = {

        match: {
            params: {}
        }
    }

    componentDidMount() {
        this.IcebergData();

    }

    link() {
        window.location.href="/dashboard"
    }

    IcebergData () {
        IcebergApiService.getIcebergs()
        .then(data => {
            this.setState({
                listItems: data
            })
        });    
    }

    
    render() {

        const { icebergId } = this.props.match.params

        return (
            <div className="IcebergList">

                <h2>Past Iceberg</h2>
                <div className="CompletedDate">
                {/* TO-DO **** DATE OCCASIONALLY REPEATING UNECESSARILY? */}
                    {this.state.listItems.length > 0 &&
                    this.state.listItems
                        .slice(icebergId-1)
                        .map( date =>
                        <h3 key={date.id}>Completed on {format(new Date(date.modified), "MMM dd, yyyy")}</h3>
                    )}
                </div>

                <PastIcebergForm icebergId={icebergId}/>
                
                {/* TO-DO *** this.props.historypush*/}
                <button className="linkButton" onClick={this.link}>
                    Return to Dashboard
                </button>

                
                        
            </div>
        )
     }
}
